import React, { useEffect, useRef } from 'react';

const FullHeroVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Ensure video autoplay works correctly
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
            {/* Background Video */}
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video
                    ref={videoRef}
                    className="min-w-full min-h-full absolute object-cover"
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                    type="video/mp4"
                    autoPlay
                    muted
                    loop
                ></video>
            </div>

            {/* Content Overlay */}
            <div className="video-content space-y-2 z-10">
                <h1 className="font-light text-6xl">Full Hero Video</h1>
                <h3 className="font-light text-3xl">with TailwindCSS</h3>
            </div>
        </section>
    );
};

export default FullHeroVideo;
