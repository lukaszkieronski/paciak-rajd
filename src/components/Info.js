import React from "react";
import packageJson from "../../package.json";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Card } from "@mui/material";

export const Info = ({ rider, setRider }) => {
  const navigate = useNavigate();

  const clearRiderData = () => {
    setRider(undefined);
    navigate("/", { replace: true });
  };

  const clearAllData = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={16}>
        <Card>
          <CardContent>
            <Typography variant="h5">Kierowca</Typography>
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
          <CardContent>
            <Typography>Wersja: {packageJson.version}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Info;
