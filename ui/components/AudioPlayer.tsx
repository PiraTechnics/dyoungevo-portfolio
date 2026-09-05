"use client";

import { useState, useRef } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/outline";

export const AudioPlayer = ({ src = "", title = "" }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const iconClasses = "size-8 stroke-gray-200 fill-gray-200";

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimelineClick = (e: any) => {
    const timelineWidth = e.currentTarget.clientWidth;
    const clickPositionX = e.nativeEvent.offsetX;
    console.log(clickPositionX);
    console.log(duration);
    const newTime = (clickPositionX / timelineWidth) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }

    setCurrentTime(newTime);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }

    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
    setHasEnded(false);
  };

  const handleAudioEnded = () => {
    setHasEnded(true);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  return (
    <div className="flex justify-center bg-g">
      <div className="h-16 ps-2 min-w-80 divide-x-2 divide-slate-800 bg-slate-900 flex">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleAudioEnded}
          src={src}
        />
        <button className="px-2 py-1" onClick={togglePlayPause}>
          {hasEnded ? (
            <PlayIcon className={iconClasses} />
          ) : isPlaying ? (
            <PauseIcon className={iconClasses} />
          ) : (
            <PlayIcon className={iconClasses} />
          )}
        </button>
        <div
          className="relative h-full w-full cursor-pointer"
          onClick={handleTimelineClick}
        >
          <div
            className="absolute top-0 left-0 h-full bg-slate-800 opacity-80"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
          <div className="flex p-3 justify-between w-full">
            <span className=" text-gray-100 z-0">{title}</span>
            <div className="flex flex-col w-16">
              <div
                className={`flex gap-1 text-gray-100 text-sm z-0 ${isPlaying ? "" : " invisible"}`}
              >
                <span>{formatTime(currentTime)}</span>/
                <span>{formatTime(duration)}</span>
              </div>
              <a
                className="text-gray-400 text-xs z-0"
                href={src}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
