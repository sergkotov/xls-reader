import { NavLink } from "react-router-dom";

import "./AppHeader.css";

const AppHeader = () => {
    return (
        <nav className="app__menu">
            <ul>
                <li><NavLink 
                    style={({isActive}) => 
                    ({
                        'color': (isActive ? '#0703f4' : 'inherit')
                    })} 
                    to="/">Главная Страница</NavLink></li>
                <li><NavLink 
                    style={({isActive}) => 
                    ({
                        'color': (isActive ? '#0703f4' : 'inherit')
                    })} 
                    to="/inn">Данные по МНН</NavLink></li>
            </ul>
        </nav>
    )
}

export default AppHeader;