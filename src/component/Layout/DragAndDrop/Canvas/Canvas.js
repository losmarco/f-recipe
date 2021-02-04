import React, { useEffect, useRef } from 'react';
import classes from '../Canvas/Canvas.module.scss';

const Canvas = ({ photo, size }) => {
  const canvasRef = useRef(null);
  console.log(size);
  //set a max width and height for canvas based on the div size
  let canvasWidth = 700;
  let canvasHeight = 700;

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;

    let maxWidth;
    let maxHeight;
    console.log(canvasWidth, canvasHeight);
    const image = new Image();
    image.src = photo[0].preview;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    image.onload = () => {
      // if the image > canvas -> scale less, else fit
      let scale = Math.min(
        canvasWidth / image.width,
        canvasHeight / image.height
      );
      let x = canvasWidth / 2 - (image.width / 2) * scale;
      let y = canvasHeight / 2 - (image.height / 2) * scale;
      ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
      console.log(`width:${image.width} height:${image.height} x:${x} y:${y}`);
    };
  }, [canvasRef, photo]);

  return (
    <canvas
      className={classes.Canvas}
      width={canvasWidth}
      height={canvasHeight}
      ref={canvasRef}
    />
  );
};

export default Canvas;
