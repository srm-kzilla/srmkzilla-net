import React, { useState, useEffect } from 'react'
import { Volume, Volume2 } from 'react-feather'

const useAudio = (url: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    setAudio(new Audio(url))
  }, [])

  const startAudio = () => {
    audio?.play()
    setPlaying(true)
    if (audio)
      audio.onended = function () {
        setPlaying(false)
      }
  }
  const stopAudio = () => {
    audio?.pause()
    setPlaying(false)
  }
  return [playing, startAudio, stopAudio]
}

const Player = ({ url }) => {
  const [playing, startAudio, stopAudio]: any = useAudio(url)
  return (
    <div className="absolute right-1 mb-5">
      {playing ? (
        <button onClick={stopAudio} className="focus:outline-none ml-3">
          <Volume2 color="white" size={25} />
        </button>
      ) : (
        <button onClick={startAudio} className="focus:outline-none ml-3">
          <Volume color="white" size={25} />
        </button>
      )}
    </div>
  )
}

export default Player
