import React from "react";
import useAudio from "../useAudio"

function IconAudioVolume() {
  return (
    // <svg
    //   className="w-5 h-5 text-white fill-white"
    //   viewBox="0 0 24 24"
    // >
    // <path xmlns="http://www.w3.org/2000/svg" fill="#010101" opacity="1.000000" stroke="none" d=" C16.020590,1.000000 31.041637,1.000000 46.891235,1.329926   C46.272339,6.847663 47.372215,10.087864 52.889133,12.792940   C62.899384,17.701199 67.847084,26.631126 67.992271,37.794441   C68.140846,49.217430 63.013432,58.293304 52.896599,63.199577   C47.433163,65.849136 46.606987,68.938324 47.482605,73.874916   C47.542191,74.210838 47.170902,74.623192 47.000000,75.000000   C31.761789,75.000000 16.523581,75.000000 1.000000,75.000000   C1.000000,66.981369 1.000000,58.959366 1.435132,50.524742   C5.338618,50.244438 8.834127,50.706944 12.268371,50.424503   C16.449194,50.080658 19.425739,51.443771 22.253321,54.527630   C27.364964,60.102554 32.884777,65.303230 38.632282,71.058876   C38.632282,48.815372 38.632282,27.256405 38.632282,4.686511   C34.502213,8.962383 30.656626,12.237966 27.683462,16.172758   C21.971081,23.732727 14.866854,27.138023 5.415754,25.552158   C4.008507,25.316027 2.475062,25.831982 1.000000,26.000000  M47.243111,40.486412   C47.243111,44.894627 47.243111,49.302837 47.243111,53.890903   C53.813133,51.283592 57.997631,44.623650 57.783699,37.711029   C57.562809,30.573677 53.573265,24.453653 47.243118,22.102938   C47.243118,28.010313 47.243118,33.751564 47.243111,40.486412  z"/>
    // {/* //   <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.84-5 6.7v2.07c4-.91 7-4.49 7-8.77 0-4.28-3-7.86-7-8.77M16.5 12c0-1.77-1-3.29-2.5-4.03V16c1.5-.71 2.5-2.24 2.5-4M3 9v6h4l5 5V4L7 9H3z"></path> */}
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" viewBox="0 0 85 86" enable-background="new 0 0 85 86">
      <path fill="#DFE1E5" opacity="1.000000" stroke="none" d=" M44.010715,68.773743   C44.010715,71.229706 44.010715,73.219643 44.010715,76.422920   C39.128632,71.544724 34.492355,67.634422 30.754972,62.999325   C25.815411,56.873283 19.928364,54.276104 12.205931,55.490765   C10.595942,55.743999 8.912075,55.527546 6.869364,55.527546   C6.869364,47.241245 6.869364,39.207668 6.869364,30.472435   C10.741448,30.472435 14.717307,30.863253 18.568514,30.338764   C21.257423,29.972565 24.330772,28.957670 26.266150,27.180346   C32.092381,21.829916 37.445827,15.964659 44.010715,9.249672   C44.010715,29.935024 44.010715,49.121372 44.010715,68.773743  z" />
      <path fill="#D3D5D9" opacity="1.000000" stroke="none" d=" M52.243752,51.828602   C52.243755,43.390629 52.243755,35.429398 52.243755,27.437355   C57.766666,28.541899 61.612392,33.761703 62.638157,41.363731   C63.557533,48.177357 59.595734,55.408226 52.243752,59.285561   C52.243752,56.704067 52.243752,54.504704 52.243752,51.828602  z" />
      <path fill="#DBDDE1" opacity="1.000000" stroke="none" d=" M53.021393,7.099908   C70.842354,11.702477 82.291939,27.092979 81.338234,44.499920   C80.398506,61.651539 68.032486,76.640358 52.634445,78.934006   C51.858311,74.400421 51.626350,71.185135 57.257103,68.570190   C67.477768,63.823662 72.878433,54.926929 72.985924,43.476650   C73.095032,31.854164 67.971130,22.661482 57.568130,17.608164   C52.302246,15.050233 51.471405,12.031507 53.021393,7.099908  z" />
    </svg>
  );
}


function AudioVolume({ volume, setVolume }) {
  return (
    <div className="flex items-center align-center">
      <IconAudioVolume />
      <input
        className="h-1 max-w-[70px] custom-range"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />
    </div>
  )
}


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

  return (
    <div className="flex p-2 bg-black items-center align-center justify-center">
      <audio ref={audioRef} src={audio} />

      <div className="flex items-center align-center min-w-[250px] space-x-2">
        <img src={thumbnail} className="w-12 h-12" />
        <span>{name}</span>
      </div>

      <button onClick={isPlaying ? pauseAudio : startAudio}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <div className="w-full">
        {/* Progress: {(progress * 100).toFixed(2)}% */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.0000001"
          value={progress}
          onChange={(e) => handleProgressChange(parseFloat(e.target.value))}
          style={{
            width: "100%",
            cursor: "pointer",
            transition: "transform 0.05s ease-out",
            willChange: "transform",
          }}
        />
      </div>

      <AudioVolume volume={volume} setVolume={setVolume} />

    </div>
  );
}

export default AudioBar;
