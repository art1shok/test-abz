import React, { useRef, useEffect, useState } from 'react';
import './Tooltip.scss';

const Tooltip = ({ content }) => {
  const ref = useRef();
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (ref.current) {
      const { right } = ref.current.getBoundingClientRect();
      if (right > window.innerHeight + 20) {
        setStyle({ left: 'auto', right: 0 });
      }
    }
  }, []);

  return (
    <div className="tooltip" ref={ref} style={style}>
      {content}
    </div>
  );
};

export default Tooltip;
