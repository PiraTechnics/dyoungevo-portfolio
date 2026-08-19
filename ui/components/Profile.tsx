import Image from "next/image";

export const Profile = ({ src = "", alt = "", size = 0, classes = "" }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={classes}
      width={size}
      height={size}
      priority
    />
  );
};
