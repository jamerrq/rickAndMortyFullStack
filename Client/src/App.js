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

// Hooks and other React Stuff
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


function App() {

    const [characters, setCharacters] = useState([]);
    const location = useLocation();
    const [access, setAccess] = useState(false);
    const email = "jamerrq@henry.com", _password = "henry123";
    const navigate = useNavigate();

    // const [defaultCharacters, setDefaultCharacters] = useState([]);

    function login(userData) {
        if (userData.email === email && userData.password === _password) {
            setAccess(true);
            navigate("/home");
        } else {
            alert("Usuario o contraseña incorrectos!");
        }
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access, navigate]);

    function onSearch(id) {
        const url = `https://rickandmortyapi.com/api/character/${id}`;
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
        const defaultCharactersIds = [311, 49, 129, 826, 694];
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
        setCharacters([]);
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
        </div>
    );

}

export default App;
