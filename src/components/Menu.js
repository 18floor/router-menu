import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <NavLink to="/" className={({isActive}) => {
                return `menu__item${isActive ? ' menu__item-active' : ''}`;
            }}>
                Главная
            </NavLink>
            <NavLink to="/drift" className={({isActive}) => {
                return `menu__item${isActive ? ' menu__item-active' : ''}`;
            }}>
                Дрифт - такси
            < /NavLink>
            <NavLink to="/timeattack" className={({isActive}) => {
                return `menu__item${isActive ? ' menu__item-active' : ''}`;
            }}>
                Time Attack
            </NavLink>
            <NavLink to="/forza" className={({isActive}) => {
                return `menu__item${isActive ? ' menu__item-active' : ''}`;
            }}>
                Forza Karting
            </NavLink>
        </nav>
    );
};

export default Menu;