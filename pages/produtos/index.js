import Router from "next/router";
import { Button, Container, Grid } from "@material-ui/core";

import Header from "../../src/Components/Header";

export default function Produtos() {
  return (
    <>
      <Header />
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Button onClick={() => Router.push("/")} color='primary' variant='contained' fullWidth>
              home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
