"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from "lucide-react"

const songs = [
  { id: 1, title: "Bulldog Flex Anthem", file: "Bulldog%20Flex%20Anthem.mp3" },
  { id: 2, title: "Bulldog Love", file: "Bulldog%20Love.mp3" },
  { id: 3, title: "Empire State Bulldogs", file: "Empire%20State%20Bulldogs.mp3" },
  { id: 4, title: "Empire State Reign", file: "Empire%20State%20Reign.mp3" },
  { id: 5, title: "King Simba's Reign", file: "King%20Simba%27s%20Reign.mp3" },
  { id: 6, title: "Puppy Dreams", file: "Puppy%20Dreams.mp3" },
]

export function MiniRadioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showVolume, setShowVolume] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadStart = () => {
      console.log("[v0] Loading audio:", audio.src)
    }
    const handleError = (e: Event) => {
      const audioElement = e.target as HTMLAudioElement
      console.log("[v0] Audio error:", audioElement.error?.message)
    }
    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener("loadstart", handleLoadStart)
    audio.addEventListener("error", handleError)
    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart)
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % songs.length)
    setIsPlaying(true)
  }

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + songs.length) % songs.length)
    setIsPlaying(true)
  }

  const currentTrack = songs[currentTrackIndex]
  const formatTime = (time: number) => {
    if (!time) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <>
      {/* Audio element with crossOrigin for deployment */}
      <audio
        ref={audioRef}
        src={`/music/${currentTrack.file}`}
        onEnded={nextTrack}
        crossOrigin="anonymous"
        suppressHydrationWarning
      />

      {/* Player content only - will be rendered in header dropdown */}
      <div className="w-full flex flex-col gap-4">
        {/* Track Info */}
        <div className="text-center">
          <h3 className="text-sm font-bold text-foreground line-clamp-1">{currentTrack.title}</h3>
          <p className="text-xs text-muted-foreground">
            {currentTrackIndex + 1} of {songs.length}
          </p>
        </div>

        {/* Main Controls */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={prevTrack}
            className="p-1.5 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous track"
          >
            <SkipBack size={16} className="text-primary" />
          </button>

          <button
            onClick={togglePlay}
            className="p-2 bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-full transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/40"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause size={18} className="text-white fill-white" />
            ) : (
              <Play size={18} className="text-white fill-white" />
            )}
          </button>

          <button
            onClick={nextTrack}
            className="p-1.5 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next track"
          >
            <SkipForward size={16} className="text-primary" />
          </button>
        </div>

        {/* Volume Control */}
        <div className="relative">
          <button
            onClick={() => setShowVolume(!showVolume)}
            className="w-full flex items-center justify-between gap-2 bg-primary/10 hover:bg-primary/20 rounded p-2 transition-all duration-300"
          >
            {volume === 0 ? (
              <VolumeX size={14} className="text-primary" />
            ) : (
              <Volume2 size={14} className="text-primary" />
            )}
            <span className="text-xs text-muted-foreground">{Math.round(volume * 100)}%</span>
          </button>
          {showVolume && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-primary/20 rounded p-2 shadow-lg">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
                className="w-full h-1.5 bg-primary/20 rounded appearance-none cursor-pointer accent-primary"
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
