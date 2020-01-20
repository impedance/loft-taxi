import React from 'react';
import Button from '../../shared/Button';

export interface HeaderProps {
  paths: string[];
  onPathChange: (path: string) => void;
}

const Header: React.SFC<HeaderProps> = ({paths, onPathChange}) => {
  return (
    <header>
      <ul>
        {paths.map((el, index) => 
          <li key={index}>
            <Button text={el} onClick={onPathChange} />
          </li>)}
      </ul>
    </header>
  )
}

export default Header;