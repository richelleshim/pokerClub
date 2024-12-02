import React from "react";

interface CircleProps {
  id: string;
  style: React.CSSProperties;
}

const Circle: React.FC<CircleProps> = ({ id, style }) => {
  return <div className="circle" id={id} style={style}></div>;
};

export default Circle;
