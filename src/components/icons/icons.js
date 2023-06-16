import { IconContext } from "react-icons";
import { BsCameraReelsFill, BsPersonSquare } from 'react-icons/bs';
import css from './icons.module.css';

export const MovieIcon = () => {
  return (
    <div>
      <IconContext.Provider value={{ size: "10em", color: "grey" }} >
        <div className={css.movieIcon}>
          <BsCameraReelsFill />
        </div>
      </IconContext.Provider >
    </div>
  )
}

export const CreditIcon = () => {
  return (
    <div>
      <IconContext.Provider value={{ size: "8em", color: "grey" }} >
        <div className={css.creditIcon}>
          <BsPersonSquare />
        </div>
      </IconContext.Provider >
    </div>
  )
}

