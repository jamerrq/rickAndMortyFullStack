// CSS Properties
import './App.css';

// Components
import Cards from './components/Cards/Cards';             // Individual cards
import Nav from './components/Nav/Nav';                   // Navigation Bar
import About from './components/About/About';             // About page
import Detail from './components/Detail/Detail';          // Individual details
import Form from './components/Form/Form';                // Login form
import NotFound from './components/NotFound/NotFound';    // 404 Component
import Favorites from './components/Favorites/Favorites'; // Favorites component


// Footer icons
import { FaReact, FaHtml5, FaCss3, FaGithub, } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiExpress, } from 'react-icons/si';

// Hooks and other React Stuff
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


// App component
function App() {

    // Added characters
    const [characters, setCharacters] = useState([]);
    // Routes indicator and navigator
    const location = useLocation(), navigate = useNavigate();
    // Access state
    const [access, setAccess] = useState(false);

    // Login function versión nodemon
    // function login(userData) {
    //     if (userData.email === email && userData.password === _password) {
    //         setAccess(true);
    //         navigate("/home");
    //     } else {
    //         alert("Usuario o contraseña incorrectos!");
    //     };
    // };

    // Login function versión axios
    function login(userData) {
        const { email, password } = userData;
        const URL = 'http://localhost:3001/rickandmorty/login/';
        axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
        });
    };

    useEffect(() => {
        !access && navigate('/');
    }, [access, navigate]);

    function onSearch(id) {
        const url = `http://localhost:3001/rickandmorty/character/${id}`;
        axios(url).then(({ data }) => {
            if (data.name) {
                let isRepeated = characters.reduce((acc, c) => {
                    return acc || c.id === data.id
                }, false);
                if (isRepeated) {
                    window.alert('¡Este personaje ya está agregado!');
                    return;
                }
                setCharacters((oldChars) => [...oldChars, data]);

            } else {
                window.alert("¡No hay personajes con este id!");
            }
        }).catch(() => {
            window.alert('¡No hay personajes con este ID!');
        });
    }

    function loadDefaults() {
        const defaultCharactersIds = [427, 96, 340, 666, 11];
        setCharacters([]);
        defaultCharactersIds.forEach(id => onSearch(id));
    }

    function onClose(id) {
        setCharacters((oldChars) => oldChars.filter((c) => c.id !== id));
    }

    function logOut() {
        setAccess(false);
        navigate("/");
    }

    function clearAllCharacters() {
        characters.forEach((c) => onClose(c.id));
    }

    return (
        <div className='App'>
            {!(location.pathname === "/") &&
                <Nav onSearch={onSearch}
                    logOutFunction={logOut}
                    clearAllFunction={clearAllCharacters}
                    loadDefaultFn={loadDefaults}
                />}
            <Routes>
                <Route
                    path="/"
                    element={<Form loginFunction={login} />}
                >
                </Route>
                <Route
                    path='/home'
                    element={<Cards characters={characters}
                        onClose={onClose} />}
                >
                </Route>
                <Route
                    path='/about'
                    element={<About />}
                >
                </Route>
                <Route
                    path='/detail/:id'
                    element={<Detail />}
                >
                </Route>
                <Route
                    path='/favorites'
                    element={<Favorites />}
                >
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            {!(location.pathname === "/") &&
                <footer>
                    Web Desktop App created by&nbsp;<a href="https://github.com/jamerrq">@jamerrq</a>&nbsp;using&nbsp;
                    <FaReact />&nbsp;
                    <FaHtml5 />&nbsp;
                    <FaCss3 />&nbsp;
                    <SiRedux />&nbsp;
                    <SiJavascript />&nbsp;
                    <SiExpress />&nbsp;
                    <FaGithub />&nbsp;
                </footer>
            }
        </div>
    );

}

export default App;
