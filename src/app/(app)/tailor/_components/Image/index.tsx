import { Media } from "@/app/(app)/tailor/payload-types";

export default function Image({
  className,
  src,
  alt,
}: {
  className: string | undefined;
  src: string | undefined | null | Media;
  alt?: string | undefined | null;
}) {
  let url: string = "";
  if (!src || src === "") {
    //   TODO: use placeholder image from backend
    url =
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
  } else if (typeof src === "string") {
    url = src;
  } else if (typeof src.url === "string") {
    url = src.url;
  }

  if (url.startsWith("/")) {
    url = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}${url}`;
  } else if (!url.startsWith("http")) {
    url = `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/${url}`;
  }

  // TODO: use nextjs' Image
  return <img className={className} src={url} alt={alt ? alt : ""} />;
}
