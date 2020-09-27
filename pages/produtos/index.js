import {
  Box,
  CircularProgress,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import { useState } from "react";
import Header from "../../src/Components/Header";
import ProductCard from "../../src/Components/ProductCard";
import { searchProducts } from "../../src/services/api";

export default function Produtos({ products }) {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState(products);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await searchProducts(searchValue);
    setResults(res);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box mt={4}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end' onClick={handleSubmit}>
                        <SearchOutlined />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  label='O que está procurando?'
                  variant='outlined'
                />
              </form>
            </Box>
          </Grid>
          <Grid item xs={8}>
            tag component
          </Grid>
          <Grid item xs={4}>
            order component
          </Grid>
        </Grid>
        {loading && (
          <Grid container justify='center'>
            <CircularProgress />
          </Grid>
        )}
        {!loading && (
          <Box mt={3}>
            <Grid container spacing={3}>
              {results.map((result) => (
                <Grid item xs={6} key={result.slug}>
                  <ProductCard product={result} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        {!loading && (results.length === 0 || !results) && (
          <Grid container justify='center'>
            <p>nenhum resultado encontrado</p>
          </Grid>
        )}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const products = await searchProducts("");
  return {
    props: {
      products,
    },
  };
}

Produtos.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};
