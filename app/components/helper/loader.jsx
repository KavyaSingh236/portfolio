import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#0d1224',
      margin: 0,
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 2s ease-in-out',
    }}>
      <div style={{
        position: 'relative',
        width: '100px',
        height: '100px',
      }}>
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 100 100">
          <g className="hexagon">
            <path
              d="M50 5 L12 27 L12 73 L50 95 L88 73 L88 27 Z"
              style={{
                stroke: '#16F2B3',
                strokeWidth: '5',
                fill: 'none',
                strokeLinejoin: 'round',
                strokeLinecap: 'round',
                strokeDasharray: '400',
                strokeDashoffset: '400',
                animation: 'draw 2s ease-in-out forwards',
              }}
            ></path>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              alignmentBaseline="middle"
              style={{
                fontFamily: 'Consolas, serif',
                fontSize: '45px',
                fill: '#16F2B3',
              }}
            >
              KS
            </text>
          </g>
        </svg>
      </div>
      <style>
        {`
          @keyframes draw {
            0% {
              stroke-dashoffset: 400;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
