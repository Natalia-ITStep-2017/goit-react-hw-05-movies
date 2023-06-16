import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './header.module.css';


const SharedLayout = () => {
  return (
    <main>
      <ul className={css.headerMenu}>
        <li className={css.headerMenuItem}>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li className={css.headerMenuItem}>
          <NavLink to="/movies" >Movies</NavLink>
        </li>
      </ul>
      <Suspense fallback={< div > Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default SharedLayout