import { useEffect, useRef } from 'react';

const Canvas = ({ photo }) => {
  const canvasRef = useRef(null);
  // const imgRef = useRef(null);
  // const source = image.map((i) => i.preview);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    // const image = new Image();
    // image.src = source;
    // image.onload = () =>
    const image = new Image();
    image.src = photo[0].preview;
    console.log(photo[0].preview);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 500, 500 + 50);
    image.onload = () => {
      ctx.drawImage(image, 10, 10);
    };
  }, [canvasRef, photo]);

  return (
    <div>
      <canvas width={500} height={500} ref={canvasRef} />
    </div>
  );
};

export default Canvas;
