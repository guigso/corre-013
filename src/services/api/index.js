import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE || "",
  environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || "",
});

function parsePost({ fields }) {
  return {
    name: fields.name,
    photos: fields.photos,
    slug: fields.slug,
    categories: fields.categories,
    discount: fields.discount,
    price: fields.price,
  };
}

function parseProductsEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb);
}

export async function getAllProductsForFeatured() {
  const entries = await client.getEntries({
    content_type: "product",
    limit: 2,
  });
  return parseProductsEntries(entries);
}

export async function getProductBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "product",
    "fields.slug[in]": slug,
  });
  return parseProductsEntries(entries);
}

export async function searchProducts(searchValue) {
  const entries = await client.getEntries({
    content_type: "product",
    "fields.name[match]": searchValue,
  });
  return parseProductsEntries(entries);
}
