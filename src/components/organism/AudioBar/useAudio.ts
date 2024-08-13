import { useRef, useState, useEffect } from "react";

interface IAudio {
  audio: string;
}

function useAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

    // Update volume when it changes
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
      }
    }, [volume]);
  
    // Function to update the progress smoothly
    useEffect(() => {
      const updateProgress = () => {
        if (audioRef.current) {
          setProgress(audioRef.current.currentTime / audioRef.current.duration);
        }
        if (isPlaying) {
          requestAnimationFrame(updateProgress);
        }
      };
  
      if (isPlaying) {
        requestAnimationFrame(updateProgress);
      }
      
    }, [isPlaying]);
  
    function startAudio() {
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  
    function pauseAudio() {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  
    function resetAudio() {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        setProgress(0);
        setIsPlaying(false);
      }
    }
  
    // Handle user changing the progress
    function handleProgressChange(value: number) {
      if (audioRef.current) {
        audioRef.current.currentTime = value * audioRef.current.duration;
        setProgress(value);
      }
    }

  return {
    // State
    isPlaying,
    progress,
    volume,
    // Ref
    audioRef,
    // Functions
    startAudio,
    pauseAudio,
    resetAudio,
    setVolume, // Allow external control of volume
    handleProgressChange
  };
}

export default useAudio;
