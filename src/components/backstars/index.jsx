import React from "react";


const StarsBackground = () => {
    const generateStars = (count) => {
    return Array.from({ length: count }, (_, index) => ({
        id: index,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    };

  const stars = generateStars(50); // Generar 50 estrellas

    return (
    <div className="relative w-full h-screen bg-black overflow-hidden ">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-star-twinkle"
          style={{ top: star.top, left: star.left }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;