import React, { useState, useRef } from "react";

const Sticker = () => {
    const [position, setPos] = useState({ x: 0, y: 0 });
    const [moving, setMov] = useState(false);
    const newPos = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setMov(true);
        newPos.current = {
            x:clientX - position.x,
            y:clientY - position.y
        };
    };

    const handleMouseMove = (e) => {
        if (moving) {
            setPos({
                x: e.clientX - newPos.current.x,
                y: e.clientY - newPos.current.y
            });
        }
    };

    const handleMouseUp = (e) => {
        setMov(false);
    }

return (
    <div
      style={{
        position: 'absolute', 
        left: position.x,
        top: position.y,
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} 
    >
      Drag me!
    </div>
  );

};

export default Sticker;