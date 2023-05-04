import { useState } from "react"
import { NavLink } from "react-router-dom"

import './SearchBar.css'


export default function SearchBar(props) {

    const [id, setId] = useState("");
    const handleChange = (e) => {
        const newValue = e.target.value;
        setId(newValue);
    }

    const myOwnSearch = function () {
        props.onSearch(id);
    }

    const randomSearch = function () {
        const max = 826;
        const char = Math.floor(Math.random() * max);
        props.onSearch(char);
    }

    return (
        <div className="container">
            <input
                type='search'
                className="searchBar"
                value={id}
                onChange={handleChange}
                placeholder="min: 1, max: 826"
            />
            <button
                onClick={myOwnSearch}
                className="aggButton"
                title="Add character"
            >
                <i className='fas fa-plus'></i>
            </button>
            <span>&emsp;&emsp;</span>
            <button
                title="Add random character"
                onClick={randomSearch}
                className="aggButton"
            >
                <i className='fas fa-dice-five'></i>
            </button>
            <button
                title="Remove all characters"
                className="aggButton"
                onClick={props.clearAllFunction}
            >
                <i className='fas fa-trash'></i>
            </button>

            <button
                className="aggButton"
                onClick={props.loadDefaultFn}
                title="Load default view"
            >
                🌈
            </button>
            <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <img className="rmLogo" src="logorm.png" alt="logoRM" />
            <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            <NavLink to="/favorites">
                <button
                    className="aggButton navBar"
                    title="View favorites"
                >
                    <i className='fas fa-star'></i>
                </button>
            </NavLink>
            <NavLink to="/home">
                <button
                    className="aggButton navBar"
                    title="Home page"
                >
                    <i className='fas fa-home'></i>
                </button>
            </NavLink>
            <NavLink to="/about">
                <button className="aggButton navBar">ABOUT ME</button>
            </NavLink>
            <button
                className="aggButton navBar"
                onClick={props.logOutFunction}
                title="Log out"
            >
                <i className='fas fa-door-open'></i>
            </button>
        </div>
    );

}
