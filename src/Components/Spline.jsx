import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';


const Spline = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/yCIqPd23oGxn-Wtx/scene.splinecode');
  }, []);

  return (
    <div className=' h-3/4 items-center md:w-full md:h-screen transition-all'>
      <canvas id="canvas3d" />
    </div>
  );
};

export default Spline;