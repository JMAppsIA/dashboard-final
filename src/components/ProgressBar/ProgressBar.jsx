import React, { useEffect, useRef } from "react";
import './progress-bar.scss';

const AnimatedProgressBar = ({ value, hasInnerText }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      backgroundColor: value?.color,
      opacity: 1,
      width: `${value?.percent}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className='animated-progress-bar'>
      {hasInnerText ? (
        <div className='animated-progress-bar__done'>
          <span style={{fontWeight: '400'}}>{value?.percent}%</span>
        </div>
      ) : (
        <div className='animated-progress-bar__done' style={style}/>
      )}
    </div>
  );
};

export default AnimatedProgressBar;

export const ProgressBar = ({value}) => {

  const barInnerRef = useRef()
  useEffect(() => {
    barInnerRef.current.style.width = `${value?.percent}%`
    barInnerRef.current.style.backgroundColor = `${value?.color}`
  }, [value])
  

  return (
    <div className="progress-bar">
      {console.log('barInnerRef -> ', barInnerRef)}
        <div ref={barInnerRef} className="progress-bar__inner"></div>
    </div>
  )
}
