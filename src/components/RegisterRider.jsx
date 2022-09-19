import { Button, Container, Grid, Typography } from "@mui/material";
import { QrScanner } from "./QrScanner";

const Row = (props) => (
  <Grid container item xs={12} justifyContent="center" alignContent="space-evenly">
    {props.children}
  </Grid>
);

export const RegisterRider = ({ setRider }) => {
  const handleFake = () => {
    setRider({
      id: 100,
      name: "Kiel",
      code: 'paciak2022'
    });
  };

  const handleReload = () => {
    window.location.reload(false)
  }

  return (
    <Container>
      <Grid container>
        <Row>
          <Typography variant="h5">Zeskanuj dane kierowcy</Typography>
        </Row>
        {/*
        <Row>
          <Button onClick={handleFake}>Fake scan</Button>
          <Button onClick={handleReload}>Odśwież</Button>
        </Row>
        */}
        <Row>
          <Grid item xs={12}>
            <QrScanner setResult={setRider} />
          </Grid>
        </Row>
      </Grid>
    </Container>
  );
};
