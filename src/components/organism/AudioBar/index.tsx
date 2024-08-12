

import React, { useEffect, useRef, useState } from 'react';

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Ensure two digits for seconds
  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  return `${minutes}:${Math.floor(formattedSeconds)}`;
}



function AudioBar({ item, image, name, audio }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const playAudio = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();  // Changed from `stop()` to `pause()`
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleSeek = (e) => {
    const newProgress = e.target.value;
    audioRef.current.currentTime =
      (newProgress / 100) * audioRef.current.duration;
    setProgress(newProgress);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // Update progress bar as audio plays
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((currentTime / duration) * 100);
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);

      // Cleanup event listener on component unmount
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const totalTime = item.sample_end_ms - item.sample_start_ms;
  return (
    <div className="bg-black px-2 py-4">
      <div className="flex items-center align-center">

        <div className="flex items-center align-center min-w-[250px] space-x-2">
          <img src={image} className="w-12 h-12" />
          <span>{name}</span>
        </div>


        <div className="flex items-center justify-between fill-gray-200">
          {/* <button onClick={pauseAudio} disabled={!isPlaying}>Pause</button> */}
          {/* <button onClick={stopAudio}>Stop</button> */}

          <div className="flex items-center align-center space-x-6">
            <div className="h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 512 512"
              >
                <path d="M112 64a16 16 0 0116 16v136.43L360.77 77.11a35.13 35.13 0 0135.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 01-35.77-.45L128 295.57V432a16 16 0 01-32 0V80a16 16 0 0116-16z"></path>
              </svg>
            </div>

            <button onClick={playAudio}>
              <div className="h-4 w-4">
                {!isPlaying ?
                  <svg className="h-full w-full" viewBox="0 0 384 512">
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                  </svg>
                  :
                  <svg className="h-full w-full" viewBox="0 0 320 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-32z"></path>
                  </svg>
                }
              </div>
            </button>

            <div className="w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-full h-full"
                viewBox="0 0 512 512"
              >
                <path d="M400 64a16 16 0 00-16 16v136.43L151.23 77.11a35.13 35.13 0 00-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0035.77-.45L384 295.57V432a16 16 0 0032 0V80a16 16 0 00-16-16z"></path>
              </svg>
            </div>
          </div>


        </div>
        <input
          className="w-full h-1"
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <div>
          <span>{formatTime(progress)}</span>
          <span>/</span>
          <span>{millisToMinutesAndSeconds(totalTime)}</span>
        </div>


        <div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
        <div>



          {/* Audio */}
          {/* <div>

          </div> */}
        </div>


        <audio ref={audioRef} src={audio} />

      </div>
    </div>
  );
}

export default AudioBar
