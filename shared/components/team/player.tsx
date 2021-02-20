import React, { useState, useEffect } from 'react'
import { Volume, Volume2 } from 'react-feather'

const useAudio = (url: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [playing, setPlaying] = useState(false)

  const Toggle = () => setPlaying(!playing)

  useEffect(() => {
    setAudio(new Audio(url))
    if (audio) {
      playing ? audio.play() : audio.pause()
    }
  }, [playing])

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false))
    }
    return () => {
      if (audio) {
        audio.removeEventListener('ended', () => setPlaying(false))
      }
    }
  }, [])

  return [playing, Toggle]
}

const Player = ({ url }) => {
  const [playing, Toggle] = useAudio(url)

  return (
    <div className="absolute right-1 mb-5">
      <button onClick={Toggle} className="focus:outline-none ml-3">
        {playing ? (
          <Volume2 color="white" size={25} />
        ) : (
          <Volume color="white" size={25} />
        )}
      </button>
    </div>
  )
}

export default Player
