const loader = props => {
  var times = [];
  var fps;
  var fpsArr = [];
  if (props.isClient && !props.misc.lowGPUMode) {
    refreshLoop(times, fps, fpsArr, props);
  }
  return (
    <div className="loader h-150 mx-auto text-center">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
      <img
        alt="cks-logo"
        src={props.misc.CFURL + "/logos/cks-logo-header.png"}
        onClick={() => console.log(props)}
        className="cks-logo-loader z-999 p-0 w-130 scale-item cursor-pointer"
      />
    </div>
  );
};

function refreshLoop(times, fps, fpsArr, props) {
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

export default loader;
