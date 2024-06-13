import { ItemCategory } from "@/app/(app)/tailor/payload-types";
import classes from "../index.module.scss";

export default function ProductCategory({
  category,
}: {
  category: string | null | ItemCategory | undefined;
}) {
  if (!category) return <></>;

  let show = "";
  if (typeof category === "string") show = category;
  else show = category.name;

  return <div className={classes.productCategory}>{show}</div>;
}
