import React from "react";

function Title({ size: As, className = "", children }) {
  return (
    <As ref={ref} className={`heading-${As} ${className}`.trim()}>
      {children}
    </As>
  );
}

export default React.forwardRef(Title);
