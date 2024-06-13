import Image from "@/app/(app)/tailor/_components/Image";
import classes from "../index.module.scss";
import { Media } from "@/app/(app)/tailor/payload-types";

export default function ProductImg({
  src,
}: {
  src: string | undefined | null | Media;
}) {
  {
    /* TODO: use nextjs image */
  }
  return (
    <div className={classes.productImgWrapper}>
      <Image className={classes.productImg} src={src} />
    </div>
  );
}
