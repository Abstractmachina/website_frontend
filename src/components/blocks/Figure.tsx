import { Media, Project } from "@/types/payload-types";
import React, { FC } from "react";
import Image from "next/image";

type figureProps = Extract<Project["layout"], { blockType: "hero" }>;

const Figure: FC<figureProps> = ({ description, image }) => {
  const img = image as Media;

  function isGif(img : Media) {
    return img.mimeType?.includes('gif');
  }

  return (
    <div className="relative mb-8 w-full flex flex-col items-center">
      <div className="">
        <Image
          className=""
          src={img.url!}
          alt={img.alt}
          width={img.width ? img.width : 0}
          height={img.height ? img.height : 0}
          // fill
          // layout='responsive'
          // style={{ objectFit: "cover" }}
          // unoptimized={isGif(img)}
        />
        <div className="text-sm mt-1 mb-4">
          Figure:{" "}
          <span className="italic">{description ? description : img.alt}</span>
        </div>
      </div>
    </div>
  );
};

export default Figure;
