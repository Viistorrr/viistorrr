import Image from "next/image";
import { VImageProps } from "./types";

const vCustomLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const VImage = ({ src, alt, width, height, className }: VImageProps) => {
  return (
    <Image
      loader={vCustomLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
