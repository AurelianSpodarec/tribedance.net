import useAudio from "../useAudio"


function AudioBar({ audio }) {
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
    <div>
      <audio ref={audioRef} src={audio} />


      <button onClick={isPlaying ? pauseAudio : startAudio}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <button onClick={resetAudio}>Stop</button>

      <div className="w-full">
        Progress: {(progress * 100).toFixed(2)}%
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

      <div>
        Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}

export default AudioBar;
