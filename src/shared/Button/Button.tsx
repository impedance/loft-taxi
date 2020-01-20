import React from 'react';

export interface ButtonProps {
  text: string;
  onClick?: (path: string) => void;
}
 
const Button: React.SFC<ButtonProps> = ({text, onClick}) => {
  return ( 
    <button onClick={() => onClick && onClick(text)}>{text}</button>
   );
}
 
export default Button;