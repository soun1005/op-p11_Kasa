import { useState } from 'react';
import style from './Dropdown.module.css';

export default function Dropdown({ title, paragraphe, wrapClassName }) {
  // the initial value (isOpen) is false
  const [isOpen, setIsOpen] = useState(false);

  // click event handler -> turns initial value to be 'true'
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  // managing the display of dropdown
  // if 'isOpen' is true -> dropdown box is shown and arrow direction is down
  // if 'isOpen' is false -> dropdown is hidden and arrow direction is up
  // contrôle de l'affichage de la liste déroulante
  // Si 'isOpen' est vrai -> la liste déroulante est affichée et la flèche est dirigée vers le bas.
  // si 'isOpen' est faux -> la liste déroulante est cachée et la flèche est dirigée vers le haut.
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
