"use client";

import { useState, useRef } from "react";

export const AudioPlayer = ({ src = "", title = "" }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
    setHasEnded(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioEnded = () => {
    setHasEnded(true);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimelineClick = (e: any) => {
    const timelineWidth = e.target.clientWidth;
    const clickPositionX = e.nativeEvent.offsetX;
    const newTime = (clickPositionX / timelineWidth) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }

    setCurrentTime(newTime);
  };

  const PlayIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const PauseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="p-4 mt-4 bg-white dark:bg-gray-800 rounded-xl dark:shadow-lg md:w-1/3 sm:w-1/2 xs:w-2/3 w-3/4">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
        src={src}
      />
      <div className="flex items-center justify-between">
        <h3 className="text-md text-gray-500 dark:text-gray-300 flex">
          {title}
        </h3>
        <button
          onClick={togglePlayPause}
          className="transition-all duration-300 shadow-sm text-indigo-500 font-bold rounded-full flex items-center justify-center"
        >
          {hasEnded ? <PlayIcon /> : isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      <div
        className="relative h-2 bg-gray-600 rounded mb-4 mt-4 cursor-pointer"
        onClick={handleTimelineClick}
      >
        <div
          className="absolute top-0 left-0 h-full bg-indigo-500 rounded"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration - currentTime)}</span>
      </div>
    </div>
  );
};
