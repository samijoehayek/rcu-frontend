import React from "react";
import Image from "next/image";

const BackgroundImage = ({ imageName }) => {
  return (
    <>
      <div className="absolute right-0 w-[100%] h-[100%]">
        <Image
          src={`/${imageName}.png`}
          alt="Background"
          fill={true}
          quality={100}
        />
      </div>
    </>
  );
};

export default BackgroundImage;
