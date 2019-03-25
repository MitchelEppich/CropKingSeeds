let refreshLoop = (times, fps, fpsArr, props) => {
  if (["sm", "md"].includes(props.misc.mdeiaSize)) {
    props.toggleLowGPUMode(false);
    sessionStorage.setItem("lowGPU", false);
    props.disableFpsCalc();
  }
  if (props.misc.poorFps == null) {
    window.requestAnimationFrame(function() {
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;
      fpsArr.push(fps);
      if (fpsArr.length > 250) {
        props.calculateFpsAvg(fpsArr.slice(150));
        return;
      } else {
        refreshLoop(times, fps, fpsArr, props);
      }
    });
  }
};

export default refreshLoop;
