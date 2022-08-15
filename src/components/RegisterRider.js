import { Button, Container, Grid, Typography } from "@mui/material";
import { QrScanner } from "./QrScanner";

const Row = (props) => (
  <Grid container item xs={12} justifyContent="center">
    {props.children}
  </Grid>
);

export const RegisterRider = ({ setRider }) => {
  const handleClick = () => {
    setRider({
      id: 123,
      name: "Kiel",
    });
  };

  return (
    <Container>
      <Grid container>
        <Row>
          <Typography variant="h5">Zeskanuj dane kierowcy</Typography>
        </Row>
        <Row>
          <Button onClick={handleClick}>Fake scan</Button>
        </Row>
        <Row>
          <Grid item xs={12}>
            <QrScanner setResult={setRider} />
          </Grid>
        </Row>
      </Grid>
    </Container>
  );
};
