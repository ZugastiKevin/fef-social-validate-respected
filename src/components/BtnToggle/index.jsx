import React, { useContext } from 'react';
import './BtnToggle.scss';
import { ThemeContext } from 'context/ThemeContext';

function BtnToggle() {

  const {toggleTheme, theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'Btn-Toggle goLight' : 'Btn-Toggle goDark'} onClick={toggleTheme}>
      {theme ? '' : ''}
    </div>
  )
}

export default BtnToggle;

