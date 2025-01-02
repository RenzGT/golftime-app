import React from "react";
import { Progress } from "@/components/ui/progress";

function Loading({ counter }) {
  return (
    <div className="flex flex-wrap justify-center align-center items-center w-screen h-screen">
      <div className="w-80">
        <Progress value={counter} />
      </div>
    </div>
  );
}

export default Loading;
