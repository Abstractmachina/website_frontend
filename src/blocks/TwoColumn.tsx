import React, { FC, ReactElement } from "react";
import Image from "next/image";
import { Media, Page } from "@/types/payload-types";

enum Direction {
  DEFAULT = 'default',
  REVERSE = 'reverse',
}

// type TwoColumnProps = {
//     heading: string;
//     text: string;
//     image: any; // TODO: define type
//     direction: Direction;
// }

type TwoColumnProps = Extract<Page["layout"], { blockType: "twoColumn" }>;

const TwoColumn: FC<TwoColumnProps> = ({
  heading,
  text,
  image,
  direction,
}): ReactElement => {
  const imgProps = image as Media;

  
  function placeParagraph() {
    return (
      <p className="w-[50%]">{text}</p>
    )
  }
  function placeImage() {
    return (
      <div className="relative w-1/2">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imgProps.url}`}
            alt={imgProps.alt}
            // width={imgProps.width ? imgProps.width : 0}
            // height={imgProps.height ? imgProps.height : 0}
            fill
            objectFit="cover"
          />
      </div>
    )
  }
  function placeDirectionalContent() {
    if (direction === Direction.DEFAULT) {
      return (
        <div className="flex gap-4">
          {placeImage()}
          {placeParagraph()}
        </div>
      )      
    } else {
      return (
        <div className="flex gap-4">
          {placeParagraph()}
          {placeImage()}
        </div>
      )
    }
    
  }
  return (
    <div className="flex flex-col p-8">
      <h2>{heading}</h2>
      {placeDirectionalContent()}

    </div>
  );
};

export default TwoColumn;
