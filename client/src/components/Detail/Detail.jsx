import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


require("./Detail.css")


function Detail() {

    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const imageUrl = 'https://i.pinimg.com/564x/05/c8/38/05c838a98bfd219042d475d3c6021639.jpg';

    useEffect(() => {
        if (id === "0") {
            let data = {
                name: "Jamer Jose",
                status: "Unknown",
                species: "Cat",
                gender: "App Creator",
                origin: { name: "Earth" },
                image: imageUrl,
                id: 0,
                links: [
                    ["GitHub", "https://github.com/jamerrq",
                        "https://cdn1.iconfinder.com/data/icons" +
                        "/bootstrap-fill-vol-2/16/github-512.png"],
                    ["Lichess", "https://lichess.org/@/jamerrq",
                        "https://static-00.iconduck.com/assets.00/lichess-icon-512x512-q0oh5bwk.png"],
                    ["Linkedin", "https://linkedin.com/in/jamerrq",
                        "https://cdn3.iconfinder.com/data/icons" +
                        "/social-media-black-white-2/512" +
                        "/BW_Linkedin_glyph_svg-512.png"],
                    ["Twitter", "https://twitter.com/jamerrq",
                        "https://cdn3.iconfinder.com/data/" +
                        "icons/picons-social/57/43-twitter-512.png"],
                    ["Codeforces", "https://codeforces.com/profile/jamerrq",
                        "https://static-00.iconduck.com/assets.00/codeforces-icon-512x385-dylx8a2r.png"]
                ]
            };
            setCharacter(data);
        } else {
            axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
        }
        return; //setCharacter({});
    }, [id, imageUrl]);

    const programUrl = 'https://www.eafit.edu.co/programas-academicos/' +
        'pregrados/ingenieria-matematica/Paginas/inicio.aspx';
    const universityUrl = 'https://www.eafit.edu.co/';

    return (

        <div className="detail">

            <div className="data">
                <h1 className={"header " + character.gender}>
                    {character?.name ?
                        <p className={"name " + character.gender}>{character.name.toUpperCase()}</p> : "No information loaded yet!"}
                </h1>

                {character?.status && (
                    <div className="leftAndRight">
                        <h2 className={"left " + character.gender}>STATUS</h2>
                        <h2 className={"right " + character.gender}>{character.status}</h2>
                    </div>
                )}

                {character?.species && (
                    <div className="leftAndRight">
                        <h2 className={"left " + character.gender}>SPECIES</h2>
                        <h2 className={"right " + character.gender}>{character.species}</h2>
                    </div>
                )}

                {character?.gender && (
                    <div className="leftAndRight">
                        <h2 className={"left " + character.gender}>GENDER</h2>
                        <h2 className={"right " + character.gender}>{character.gender}</h2>
                    </div>
                )}

                {character?.origin && (
                    <div className="leftAndRight lastRow">
                        <h2 className={"left " + character.gender}>ORIGIN</h2>
                        <h2 className={"right " + character.gender}>{character.origin.name}</h2>
                    </div>
                )}

                {
                    character?.links ?
                        <>
                            <hr className="hrDetails" />
                            <h2 >LINKS</h2>
                            <div className="linkContainer">
                                {
                                    character.links.map((link, index) =>
                                    (
                                        <a href={link[1]} key={index}>
                                            <div key={index} className="link" >
                                                <img src={link[2]}
                                                    alt=""
                                                    className="favicon">
                                                </img>
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="aboutMeCard glass-effect">
                                <h2> About me: </h2>
                                <h3> Hola! Mi
                                    nombre es Jamer José, tengo 23 años y soy&nbsp;
                                    <a href={programUrl}> Ingeniero
                                        Matemático</a>  de la universidad <a href={universityUrl}>EAFIT</a>.
                                    Me gusta mucho la programación,
                                    el ajedrez, las matemáticas y los gatos.</h3>
                            </div>
                        </>
                        : null
                }

            </div>

            <div className={"pic " + character?.gender}>
                <img
                    className={"characterPic " + character?.gender}
                    src={character.image}
                    alt=""
                />
            </div>

        </div >

    );

};


export default Detail;
