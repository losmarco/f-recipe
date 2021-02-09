import React, { useEffect, useRef } from 'react';
import classes from '../Canvas/Canvas.module.scss';

const Canvas = ({ photo, size }) => {
  const canvasRef = useRef(null);
  // let { width, height } = size;
  // console.log(`Recipe Display width:${width}, height:${height}`);
  //set a max width and height for canvas based on the div size

  //1080 x 1080 is the final dimesion of the image when exporting
  let canvasWidth = 1080;
  let canvasHeight = 1080;

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;

    console.log(`Canvas Width: ${canvasWidth}, HeighRedt:${canvasHeight}`);
    const image = new Image();
    image.src = photo[0].preview;
    //determin vertical or horizontal(width> height), then place image
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    image.onload = () => {
      let scale = Math.min(
        (canvasWidth / image.width) * 0.85,
        (canvasHeight / image.height) * 0.85
      );

      let x = canvasWidth / 2 - (image.width / 2) * scale;
      let y = canvasHeight / 2 - (image.height / 2) * scale;
      if (image.width > image.height) {
        y = y * 0.2;
      } else {
        x = x * 0.2;
      }
      let dWidth = image.width * scale;
      let dHeight = image.height * scale;
      let xStart = x;
      let yStart = y;
      let yHeight = canvasHeight * 0.9 - (y + dHeight) * 1.1;
      //Need to handle image ratio, cuz if 3:2 -> too large on the screen

      ctx.drawImage(image, x, y, dWidth, dHeight);

      ctx.font = '25px IBM Plex Sans';
      ctx.fillStyle = '#6B7280';
      // ctx.fillText('Camera:', x, (dHeight + y) * 1.1);

      //XY Grid for placing text
      for (let x = xStart; x < dWidth + xStart; x += dWidth / 4) {
        ctx.moveTo(x, (y + dHeight) * 1.1);
        ctx.lineTo(x, canvasHeight * 0.9);
      }

      for (let y = yStart; y < yHeight; y += yHeight / 3) {
        ctx.moveTo(x, (y + dHeight) * 1.1);
        ctx.lineTo(canvasWidth - x, (y + dHeight) * 1.1);
      }

      ctx.strokeStyle = 'aqua';
      ctx.stroke();
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
