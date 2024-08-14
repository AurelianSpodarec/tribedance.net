import React from "react";
import useAudio from "../../useAudio"
import AudioVolume from "./_components/AudioVolume";
import { Button } from "@/components/atoms/button";

function ToggleOnOff() {

}



function AudioBar({ audio, image, thumbnail, name }) {
  const {
    audioRef,
    isPlaying,
    progress,
    volume,
    startAudio,
    pauseAudio,
    resetAudio,
    setVolume,
    handleProgressChange
  } = useAudio();

  const gradientPosition = progress * 100;

  return (
    <div className="flex p-2 bg-black/80 backdrop-blur-lg items-center align-center">
      <audio ref={audioRef} src={audio} />

      <div className="flex items-center align-center min-w-[250px] space-x-2">
        <img src={thumbnail} className="w-12 h-12" />
        <span>{name}</span>
      </div>

      {/* <div className="border h-5 w-5 rounded-full"> */}
      <div>

        <div className=" border rounded-full h-6 w-6 flex items-center justify-center">
          <button onClick={isPlaying ? pauseAudio : startAudio} className="h-4 p-1 flex  items-center align-center w-4">
            <input type="checkbox" className="icon-playing h-5 w-5" />
          </button>
        </div>
      </div>
      {/* </div> */}
      <div className="flex ml-2 text-xs aligng-center">
        <span>1:37</span>
        <span>/</span>
        <span>5:52</span>
      </div>
      <div className="w-full">
        <input
          type="range"
          min="0"
          max="1"
          className="audio-progress-bar w-full cursor-pointer"
          step="0.0000001"
          value={progress}
          onChange={(e) => handleProgressChange(parseFloat(e.target.value))}
          style={{
            transition: "transform 0.05s ease-out",
            willChange: "transform",
            background: `linear-gradient(to right, rgb(166 23 82) 0%, rgb(166 23 82) ${gradientPosition}%, rgb(173 173 173) ${gradientPosition}%, rgb(173 173 173) 100%)`
          }}
        />
      </div>
      <div className="px-8">
        <AudioVolume volume={volume} setVolume={setVolume} />
      </div>
      {/* <Button size="sm">Buy Now</Button> */}

    </div>
  );
}

export default AudioBar;
