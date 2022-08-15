import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useMemo, useCallback } from "react";
import { v1 as uuid } from "uuid";

export const QrScanner = ({ setResult }) => {
  const element_id = useMemo(() => `qr_scanner_${uuid()}`, []);

  const validateScan = useCallback(
    (result) => {
      try {
        const resultObj = JSON.parse(result);
        setResult(resultObj);
      } catch (error) {}
    },
    [setResult]
  );

  const closeScanner = async (scanner) => {
    await scanner.stop();
    await scanner.clear();
  };

  useEffect(() => {
    let isCanceled = false;
    let isMounted = false;
    const scanConfig = {
      fps: 5,
      qrbox: { width: 250, height: 250 },
    };
    const cameraConfig = {
      facingMode: "environment",
    };
    const scanner = new Html5Qrcode(element_id);

    scanner
      .start(cameraConfig, scanConfig, validateScan)
      .then(() => {
        if (isCanceled) closeScanner(scanner);
        else isMounted = true;
      })
      .catch(console.error);

    return () => {
      isCanceled = true;
      if (isMounted) closeScanner(scanner);
    };
  }, [element_id, validateScan]);
  return <div id={element_id} width="100%"></div>;
};
