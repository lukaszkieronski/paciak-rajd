import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  FormGroup,
  FormControlLabel,
  Switch,
  Stack,
  Snackbar,
  Alert
} from "@mui/material";
import { locationList } from 'data/mapLocations'
import { useState, useRef } from "react";
import { defaults } from 'data/defaults'

export const Info = ({ rider, setRider, settings, setSettings, visited, setVisited, answers }) => {
  const navigate = useNavigate();

  const [snack, setSnack] = useState(false)
  const [mailDisabled, setMailDisabled] = useState(true)

  const succesSnack = { severity: "success", message: "Wysyłanie wyników zakończone powodzeniem" }
  const failedSnack = { severity: "error", message: "Błąd w trakcie przesyłania wyników" }
  const snackData = useRef(failedSnack)

  const closeSnack = () => {
    setSnack(false)
  }

  const clearRiderData = () => {
    setRider(undefined);
    navigate("/", { replace: true });
  };

  const clearAllData = () => {
    localStorage.clear();
    window.location.reload(false)
  };

  const reloadApp = () => {
    window.location.reload(true)
  }

  const visitAll = () => {
    let fake = {}
    locationList.map(location => {
      fake = { ...fake, [location.id]: Date.now() }
    })
    setVisited(fake)
  }

  const upload = (rider, visited, answers) => {
    const data = { rider, visited, answers }
    let fd = new FormData()
    let file = new File([JSON.stringify(data)], `data${rider.id}.json`)
    fd.append("files", file)
    fd.append("token", defaults.uploadToken)
    fetch(defaults.uploadUrl, {
      method: 'POST',
      body: fd
    }).then((response) => {
      if (!response.ok) {
        setMailDisabled(false)
        snackData.current = failedSnack
      } else {
        setMailDisabled(true)
        snackData.current = succesSnack
      }
    }).catch(() => {
      setMailDisabled(false)
      snackData.current = failedSnack
    }).finally(() => {
      setSnack(true)
    })
  }

  const sendMail = () => {
    const data = { rider, visited, answers }

    var link = "mailto:" + defaults.uploadEmail
      + "?subject=" + encodeURIComponent("[Paciak2022] id:" + rider.id)
      + "&body=" + encodeURIComponent(btoa(JSON.stringify(data)))
      ;
    window.location.href = link;
  }



  return (
    <div>
      <Stack direction="column" spacing={2} sx={{ p: 2 }}>
        <Card>
          <CardHeader
            subheader={'Numer startowy: ' + rider.id}
            title={rider.name}
          />
          <CardContent>
            <Stack>
              <Button size="small" onClick={() => { upload(rider, visited, answers) }}>
                Prześlij wyniki
              </Button>
              <Button size="small" onClick={sendMail} disabled={mailDisabled}>
                Prześlij wyniki pocztą
              </Button>
            </Stack>
          </CardContent>
          <CardActions>

          </CardActions>
        </Card>
        <Card>
          <CardHeader title="Ustawienia" subheader={`v${process.env.APP_VERSION}`} />
          <CardContent>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={settings.useGoogleMapsOnIos} onChange={(e, c) => setSettings({ ...settings, useGoogleMapsOnIos: c })} />}
                label="Używaj GoogleMaps na IOS" />
            </FormGroup>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Test" />
          <CardContent>
            <Stack spacing={2}>
              <Button size="small" onClick={reloadApp}>
                Wczytaj ponownie
              </Button>
              <Button size="small" onClick={clearRiderData}>
                Usuń kierowcę
              </Button>
              <Button size="small" onClick={clearAllData}>
                Usuń wszystkie dane
              </Button>
              <Button size="small" onClick={visitAll}>
                Odwiedź wszystkie lokacje
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      <Snackbar open={snack} autoHideDuration={6000} onClose={closeSnack}>
        <Alert onClose={closeSnack} severity={snackData.current.severity} sx={{ width: '100%' }}>
          {snackData.current.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Info;
