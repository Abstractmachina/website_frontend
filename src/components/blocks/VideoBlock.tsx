import { Project, Video } from "@/types/payload-types";
import React, { FC } from "react";
import ReactPlayer from "react-player";
import VideoContainer from "../VideoContainer";
import { ProviderData } from "@/types/video-types";

type VideoBlockProps = Extract<
  NonNullable<Project["layout"]>[0],
  { blockType: "videoBlock" }
>;

const VideoBlock: FC<VideoBlockProps> = ({
  sourceType,
  externalUrl,
  internalVideo,
  caption,
}) => {
  function generateBunnyPath(data: Video) {
    if (data) {
      const provider =
        data.providerData as unknown[] as unknown as ProviderData;
      return `${provider.libraryId}/${provider.id}`;
    }
    return "";
  }

  if (sourceType === "external") {
    return (
      <div>
        <VideoContainer url={externalUrl!} />
      </div>
    );
  } else {
    const filedata = internalVideo as Video;
    const videourl = generateBunnyPath(filedata);

    return (
      <div>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src={`https://iframe.mediadelivery.net/embed/${videourl}?autoplay=false`}
            loading="lazy"
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-xs mt-2">Caption: {caption ? caption : filedata.caption}</div>
      </div>
    );
  }
};

export default VideoBlock;
