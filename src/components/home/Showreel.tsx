"use client"
import { useRef, useState } from "react"

export default function Showreel () {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
                setIsPlaying(false)
            } else {
                videoRef.current.play()
                setIsPlaying(true)
            }
        }
    }

    return (
        <section className="relative w-full bg-black py-16 flex justify-center items-center">
            {/* Video */}
            <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-lg">
                <video
                    ref={videoRef}
                    src="https://player.vimeo.com/progressive_redirect/playback/1065815193/rendition/1080p/file.mp4?loc=external&log_user=0&signature=89bb8fec92eecacdcdba2d28127b89c7b4b33e8fc869f2f60a1464b6d4e8f8b6&user_id=308755"
                    playsInline
                    loop
                    muted
                    preload="auto"
                    className="w-full h-full object-cover"
                />

                {/* Overlay CTA */}
                {!isPlaying && (
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 hover:bg-black/70 transition"
                    >
                        <svg
                            width="60"
                            height="60"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                        <span className="mt-2 text-white font-semibold text-lg">
                            Play Showreel
                        </span>
                    </button>
                )}

                {/* Pause Overlay (optional) */}
                {isPlaying && (
                    <button
                        title="button"
                        onClick={handlePlay}
                        className="absolute top-4 right-4 bg-black/50 rounded-full p-3 hover:bg-black/70 transition"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    </button>
                )}
            </div>
        </section>
    )
}
