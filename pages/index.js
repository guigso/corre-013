import Router from "next/router";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Header from "../src/Components/Header";
import BannerFrete from "../src/Components/BannerFrete";
import client from "../src/services/api";

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <Container>
        <Grid container justify='center' spacing={3}>
          <Grid item xs={12}>
            <BannerFrete />
          </Grid>
          {posts.map((post) => (
            <Grid item xs={12} key={post.sys.id}>
              <Typography variant='body1'>{post.fields.name}</Typography>
              <Typography variant='body1'>{post.fields.price}</Typography>
              <Typography variant='body1'>{post.fields.discount}</Typography>
              <Typography variant='body1'>{post.fields.categories}</Typography>
              {post.fields.photos.map((photo) => (
                <img
                  style={{ width: 100, height: 180 }}
                  key={photo.sys.id}
                  src={photo.fields.file.url}
                  alt={photo.fields.file.title}
                />
              ))}
            </Grid>
          ))}
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
  const res = await client.getEntries({ content_type: "product" });
  const posts = res.items;
  return {
    props: {
      posts,
    },
  };
}
