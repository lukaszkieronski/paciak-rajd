import React from "react";
import packageJson from "../../package.json";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch
} from "@mui/material";

export const Info = ({ rider, setRider, settings, setSettings }) => {
  const navigate = useNavigate();

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

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={16}>
        <Card>
          <CardHeader title="Kierowca" />
          <CardContent>
            <Typography>Numer: {rider.id}</Typography>
            <Typography>Ksywka: {rider.name}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={clearRiderData}>
              Usuń kierowcę
            </Button>
            <Button size="small" onClick={clearAllData}>
              Usuń wszystkie dane
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={16}>
        <Card>
          <CardHeader title="Ustawienia" subheader={`v${packageJson.version}`} />
          <CardContent>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={settings.useGoogleMapsOnIos} onChange={(e, c) => setSettings({ ...settings, useGoogleMapsOnIos: c })} />}
                label="Używaj GoogleMaps na IOS" />
            </FormGroup>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={reloadApp}>
              Wczytaj ponownie
            </Button>
          </CardActions>

        </Card>
      </Grid>

    </Grid >
  );
};

export default Info;
