"use client";

import { useState, useRef } from "react";
import {
  PlayCircleIcon,
  PauseCircleIcon,
  ArrowPathIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

export const Player = ({ src = "", title = "" }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const iconClasses = "size-10 stroke-1 stroke-gray-200";

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
    setHasEnded(false);
  };

  //Doens't yet work
  //   const replayAudio = () => {
  //     audioRef.current?.pause();
  //     setHasEnded(true);
  //     setIsPlaying(false);
  //     audioRef.current?.play();
  //   };

  const handleAudioEnded = () => {
    setHasEnded(true);
    setIsPlaying(false);
  };

  return (
    <div className="flex justify-center">
      <div className=" py-1 max-w-1/2 shadow-xl rounded-2xl border border-gray-400 flex justify-between divide-x divide-gray-200 sm:gap-12">
        <audio ref={audioRef} onEnded={handleAudioEnded} src={src} />
        <button className="px-2 py-1" onClick={togglePlayPause}>
          {hasEnded ? (
            <PlayCircleIcon className={iconClasses} />
          ) : isPlaying ? (
            <PauseCircleIcon className={iconClasses} />
          ) : (
            <PlayCircleIcon className={iconClasses} />
          )}
        </button>
        <div className="flex flex-col px-4 items-end">
          <span className=" text-gray-100 italic">{title}</span>
          <div className="flex gap-2">
            {/* <button onClick={replayAudio}>
              <ArrowPathIcon className="stroke-gray-400 size-5" />
            </button> */}
            <a href={src}>
              <ArrowDownTrayIcon className="stroke-gray-400 size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
