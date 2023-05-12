import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
// import { connect } from "react-redux";

import './SearchBar.css'


function SearchBar(props) {

    const [id, setId] = useState("");
    const handleChange = (e) => {
        const newValue = e.target.value;
        setId(newValue);
    };

    const myOwnSearch = function () {
        props.onSearch(id);
    };

    const randomSearch = function () {
        const max = 826;
        let char = undefined;
        while (true) {
            char = Math.floor(Math.random() * max) + 1;
            // console.log(props);
            if (!props.allCharacters || !props?.allCharacters?.includes(char) || props?.allCharacters?.length === max) {
                break;
            };
        };
        props.onSearch(char);
    };

    const location = useLocation();

    return (
        <div className="container">

            <div className="leftSide">
                <input
                    type='search'
                    className="searchBar"
                    value={id}
                    onChange={handleChange}
                    placeholder="min: 1, max: 826"
                />
                <button
                    onClick={myOwnSearch}
                    className="button-33"
                    title="Add character"
                >
                    <span className="material-symbols-outlined">
                        add
                    </span>
                </button>
                <span>&emsp;&emsp;</span>
                <button
                    title="Add random character"
                    onClick={randomSearch}
                    className="button-33"
                >
                    <span className="material-symbols-outlined">
                        shuffle
                    </span>
                </button>
                <button
                    title="Remove all characters"
                    className="button-33"
                    onClick={props.clearAllFunction}
                >
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </button>

                <button
                    className="button-33"
                    onClick={props.loadDefaultFn}
                    title="Load default view"
                >
                    🌈
                </button>
            </div>

            <div className="middleSide">
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
                <img className="rmLogo" src="logorm.png" alt="logoRM" />
                <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>
            </div>

            <div className="rightSide">
                {!(location.pathname === "/favorites") &&
                    <NavLink to="/favorites">
                        <button
                            className="button-33"
                            title="View favorites"
                        >
                            <span className="material-symbols-outlined">
                                bookmarks
                            </span>
                        </button>
                    </NavLink>
                }
                {!(location.pathname === "/home") &&
                    <NavLink to="/home">
                        <button
                            className="button-33"
                            title="Home page"
                        >
                            <span className="material-symbols-outlined">
                                house
                            </span>
                        </button>
                    </NavLink>
                }
                <NavLink to="/about">
                    <button className="button-33">ABOUT ME</button>
                </NavLink>
                <button
                    className="button-33"
                    onClick={props.logOutFunction}
                    title="Log out"
                >
                    <span className="material-symbols-outlined">
                        logout
                    </span>
                </button>
            </div>

        </div>
    );

};


// Map state to props
// const mapStateToProps = (state) => {
//     return {
//         allCharacters: state.allCharacters,
//     };
// };

// export default connect(mapStateToProps, null)(SearchBar);

export default SearchBar;
