import { Typography } from "@material-ui/core";
import styles from "./BannerFrete.module.css";

const BannerFrete = () => {
  return (
    <div className={styles.marquee}>
      <Typography variant='body1' className={styles.body}>
        Frete grátis
      </Typography>
      <Typography variant='body1' className={styles.body}>
        Frete grátis
      </Typography>
      <Typography variant='body1' className={styles.body}>
        Frete grátis
      </Typography>
    </div>
  );
};

export default BannerFrete;
