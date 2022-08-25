import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useMemo, useCallback, useRef } from "react";
import { v1 as uuid } from "uuid";

export const QrScanner = ({ setResult }) => {
  const element_id = useMemo(() => `qr_scanner_${uuid()}`, []);

  const scanner = useRef()

  const validateScan = useCallback(
    (result) => {
      try {
        const resultObj = JSON.parse(result);
        setResult(resultObj);
      } catch (error) { }
    },
    [setResult]
  );

  useEffect(() => {
    const scanConfig = {
      fps: 5,
      aspect: 1 + window.innerWidth / window.innerHeight,
      qrbox: (w, h) => { return { width: w * .6, height: w * .6 } },
    };
    const cameraConfig = {
      facingMode: "environment",
    };

    if (!scanner.current) {
      scanner.current = new Html5Qrcode(element_id);

      scanner.current
        .start(cameraConfig, scanConfig, validateScan)

    }
  }, [element_id, validateScan]);
  return <div id={element_id} ></div>;
};
