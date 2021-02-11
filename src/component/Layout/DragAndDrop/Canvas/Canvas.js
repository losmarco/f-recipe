import React, { useEffect, useRef } from 'react';

import classes from '../Canvas/Canvas.module.scss';
// import { RecipeContext } from '../../../../context/RecipeContext';

const Canvas = ({ photo }) => {
  const canvasRef = useRef(null);
  //Final dimesion of the image when exporting
  let canvasWidth = 1080;
  let canvasHeight = 1080;

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;

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

      //Display Image
      ctx.drawImage(image, x, y, dWidth, dHeight);

      const data = [
        { label: 'Camera' },
        { label: 'Film Simulation' },
        { label: 'Grain' },
        { label: 'DR' },
        { label: 'Color Chrome' },
        { label: 'Color Chrome Blue' },
        { label: 'NR' },
        { label: 'H' },
        { label: 'S' },
        { label: 'C' },
        { label: 'S' },
        { label: 'Clarity' },
        { label: 'WB' },
        { label: 'ISO' },
        { label: 'Expo Comp' },
        { label: 'Filter' },
      ];

      //Get coordinate for label position
      let coordinate = [];
      for (let xCell = xStart; xCell < dWidth + xStart; xCell += dWidth / 4) {
        for (let yCell = yStart; yCell < yHeight; yCell += yHeight / 4) {
          const x = xCell;
          const y = (yCell + dHeight) * 1.1 + 20;
          const temp = { x, y };
          coordinate.push(temp);
        }
      }

      const newD = data.map((d, i) => {
        const label = d.label;
        const combo = { label, ...coordinate[i] };
        return combo;
      });

      //Display Text
      ctx.fillStyle = '#6B7280';
      ctx.font = '24px IBM Plex Sans';
      newD.forEach((e) => {
        ctx.fillText(e.label, e.x, e.y);
      });
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
