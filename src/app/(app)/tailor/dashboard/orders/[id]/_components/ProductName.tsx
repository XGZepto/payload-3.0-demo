import classes from "../index.module.scss";

export default function ProductName({ productName }: { productName: string }) {
  return <h5 className={classes.productName}>{productName}</h5>;
}
