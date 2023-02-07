/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import style from './Dropdown.module.css';

export default function Dropdown({ title, paragraphe, wrapClassName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const display = isOpen ? 'block' : 'none';
  const arrowDirection = isOpen ? 'down' : 'up';

  return (
    <div
      className={`${style.dropdownWrap} ${wrapClassName}`}
      onClick={handleOnClick}
    >
      <div className={style.dropdownHeader}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-${arrowDirection}`} />
      </div>
      <div className={style.dropdownBox} style={{ display }}>
        <span className={style.paragraphe}>{paragraphe}</span>
      </div>
    </div>
  );
}
