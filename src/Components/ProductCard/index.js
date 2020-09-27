import { Typography } from "@material-ui/core";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { name, slug, photos, price, discount } = product;
  return (
    <div className={styles.cardWrapper}>
      <a href={`/produtos/${slug}`}>
        <img
          className={styles.cardImage}
          src={photos[0].fields.file.url}
          alt={photos[0].fields.file.name}
        />
        {discount && <span className={styles.discountTag}>{`-${discount}%`}</span>}
      </a>
      <a href={`/produtos/${slug}`}>
        <h6 className={styles.title}>
          {name}
        </h6>
      </a>
      <Typography>
        <span className={discount ? styles.dashed : ""}>
          R$
          {price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
        {discount && (
          <span>
            R$
            {Math.ceil(price - (price * discount) / 100).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        )}
      </Typography>
    </div>
  );
};

export default ProductCard;
