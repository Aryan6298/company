import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.1s ease, box-shadow 0.3s ease',
          transform: isClicking ? 'scale(0.5)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `scale(${isPointer ? 1.5 : 1}) translate(-50%, -50%)`,
          borderColor: isPointer ? 'rgb(8, 255, 58)' : '#ffffff',
        }}
      />
      <style>
        {`
          .cursor-dot {
            width: 10px;
            height: 10px;
            background-color: #2563eb;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            box-shadow:
              0 0 40px 20px rgba(37, 99, 235, 0.3),
              0 0 80px 40px rgba(37, 99, 235, 0.2),
              0 0 120px 60px rgba(37, 99, 235, 0.15);
          }

          .cursor-outline {
            width: 40px;
            height: 40px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.2s ease;
            opacity: 0.4;
            box-shadow: 0 0 15px rgba(37, 99, 235, 0.4);
          }

          @media (max-width: 768px) {
            .cursor-dot,
            .cursor-outline {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;
