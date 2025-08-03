"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = ({ loading }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {loading ? (
        <div className="h-[50%]">
          <DotLottieReact src="/loading/loadingPlane.lottie" loop autoplay />
        </div>
      ) : (
        <div className="h-[70%]">
          <DotLottieReact src="/loading/notFound.lottie" loop autoplay />
        </div>
      )}
    </div>
  );
};
export default Loading;
