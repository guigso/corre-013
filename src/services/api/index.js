import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE || "",
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || "",
});

export default client;
