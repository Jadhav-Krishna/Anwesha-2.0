import React from 'react'

const loading = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
          <div
    id="wifi-loader"
    className="w-16 h-16 rounded-full relative flex justify-center items-center"
    // style={{
    //   '--background': '#62abff',
    //   '--front-color': '#4f29f0',
    //   '--back-color': '#c3c8de',
    //   '--text-color': '#414856',
    // }}
  >
    <svg className="circle-outer absolute w-20 h-20">
      <circle className="back" cx="43" cy="43" r="40"></circle>
      <circle className="front" cx="43" cy="43" r="40"></circle>
      <circle className="new" cx="43" cy="43" r="40"></circle>
    </svg>
    <svg className="circle-middle absolute w-15 h-15">
      <circle className="back" cx="30" cy="30" r="27"></circle>
      <circle className="front" cx="30" cy="30" r="27"></circle>
    </svg>
    <svg className="circle-inner absolute w-8.5 h-8.5">
      <circle className="back" cx="17" cy="17" r="14"></circle>
      <circle className="front" cx="17" cy="17" r="14"></circle>
    </svg>
    <div className="text absolute bottom-[-40px] flex justify-center items-center lowercase font-medium text-sm tracking-wider">
      <span className="text-before text-[#414856]">Searching</span>
      <span className="text-after text-[#4f29f0] absolute left-0 animate-text-animation">Searching</span>
    </div>

    {/* Custom styles for animations */}
    <style>
      {`
        .circle-outer circle,
        .circle-middle circle,
        .circle-inner circle {
          fill: none;
          stroke-width: 6px;
          stroke-linecap: round;
          stroke-linejoin: round;
          transform: rotate(-100deg);
          transform-origin: center;
        }
        .circle-outer circle.back { stroke: var(--back-color); animation: circle-outer135 1.8s ease infinite 0.3s; }
        .circle-outer circle.front { stroke: var(--front-color); animation: circle-outer135 1.8s ease infinite 0.15s; }
        .circle-middle circle.back { stroke: var(--back-color); animation: circle-middle6123 1.8s ease infinite 0.25s; }
        .circle-middle circle.front { stroke: var(--front-color); animation: circle-middle6123 1.8s ease infinite 0.1s; }
        .circle-inner circle.back { stroke: var(--back-color); animation: circle-inner162 1.8s ease infinite 0.2s; }
        .circle-inner circle.front { stroke: var(--front-color); animation: circle-inner162 1.8s ease infinite 0.05s; }

        @keyframes circle-outer135 {
          0% { stroke-dashoffset: 25; }
          25% { stroke-dashoffset: 0; }
          65% { stroke-dashoffset: 301; }
          80% { stroke-dashoffset: 276; }
          100% { stroke-dashoffset: 276; }
        }
        @keyframes circle-middle6123 {
          0% { stroke-dashoffset: 17; }
          25% { stroke-dashoffset: 0; }
          65% { stroke-dashoffset: 204; }
          80% { stroke-dashoffset: 187; }
          100% { stroke-dashoffset: 187; }
        }
        @keyframes circle-inner162 {
          0% { stroke-dashoffset: 9; }
          25% { stroke-dashoffset: 0; }
          65% { stroke-dashoffset: 106; }
          80% { stroke-dashoffset: 97; }
          100% { stroke-dashoffset: 97; }
        }
        @keyframes text-animation {
          0% { clip-path: inset(0 100% 0 0); }
          50% { clip-path: inset(0); }
          100% { clip-path: inset(0 0 0 100%); }
        }
      `}
    </style>
  </div>

    </div>
  )
}

export default loading