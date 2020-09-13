import Router from "next/router";
import PropTypes from "prop-types";

import { Button, Container, Grid } from "@material-ui/core";

import Header from "../src/Components/Header";
import BannerFrete from "../src/Components/BannerFrete";
import FeaturedSlider from "../src/Components/FeaturedSlider";

import { getAllProductsForFeatured } from "../src/services/api";

export default function Home({ featured }) {
  return (
    <>
      <Header />
      <Container style={{ marginTop: 16 }}>
        <Grid container justify='center' spacing={3}>
          <Grid item xs={12}>
            <BannerFrete />
          </Grid>
          <Grid item xs={12}>
            <FeaturedSlider slides={featured} />
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={() => Router.push("/produtos")}
              color='primary'
              variant='contained'
              fullWidth>
              produtos
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const featured = await getAllProductsForFeatured();
  return {
    props: {
      featured,
    },
  };
}

Home.propTypes = {
  featured: PropTypes.arrayOf(Object).isRequired,
};
