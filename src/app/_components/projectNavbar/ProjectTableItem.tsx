"use client";

import React, { FC, useRef } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { delay } from "@/lib/utils";
import useArchStore from "@/app/_stores/archStore";


type Props = {
  baseUrl: string;
  item: { slug: string; name: string };
}


const ProjectTableItem: FC<Props> = ({ baseUrl, item }) => {
  const router = useRouter();
  const ref = useRef<HTMLButtonElement>(null);

  const enableTrackpointA = useArchStore((state) => state.enableTrackpointA);
  const setTrackpointAY = useArchStore((state) => state.setTrackpointAY);
  const setProjectOpen = useArchStore((state) => state.setProjectOpen);



  /***************  EVENT HANDLERS   ***********************/
  function handleOnMouseEnter(event: React.MouseEvent) {
    // update trackpoint position and show.
    // updateTrackpointA();
    // console.log(e.target);

    // get html element
    const clientRect = ref.current?.getBoundingClientRect();
    enableTrackpointA(true);
    setTrackpointAY(ref.current ? clientRect!.top + clientRect!.height/2 : 0);
  }

  function handleOnMouseExit() {
    console.log('here');
    enableTrackpointA(false);
  }

  async function handleOpenProject(slug: string) {
    setProjectOpen(true);
    await delay(800);
    router.push(`/${baseUrl}/${slug}`);
  }


  return (
    <Button
      variant={"ghost"}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseExit}
      onClick={() => handleOpenProject(item["slug"])}
      className=""
      ref={ref}
    >
      {item["name"]}
    </Button>
  );
}

export default ProjectTableItem;
