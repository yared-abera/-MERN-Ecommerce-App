import { useState } from "react";

export default function ZoomImage({ src }) {
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setBackgroundPosition("center")}
      className="w-96 h-96 border overflow-hidden"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "200%",   // zoom level
        backgroundRepeat: "no-repeat",
        backgroundPosition,
      }}
    >
      {/* Hidden <img> just for layout (optional) */}
      {/* <img src={src} alt="product" className="opacity-0 w-full h-full" /> */}
      <img className='h-40 w-40 transition-transform duration-300 hover:scale-105' src={src} alt="laptop image" />
    </div>
  );
}
