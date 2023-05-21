import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


import { addFav, removeFav } from "../redux/actions";

import './Card.css'


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.closeCard = this.closeCard.bind(this);
        let isFav = false;
        this.handleFavorite = this.handleFavorite.bind(this);
        this.props.myFavorites.forEach((fav) => {
            if (fav.id === props.id) {
                isFav = true;
            };
        });
        this.state = {
            isFav: isFav,
        }
    }

    handleFavorite() {

        // Si no es favorito, devuelvo la función para añadirlo
        // Caso contrario, devuelvo la función para removerlo
        let function_to_return = (this.state.isFav)
            ? this.props.addFav
            : this.props.removeFav;

        let newState = {
            ...this.state,
            isFav: !this.state.isFav,
        }

        if (newState.isFav) {
            this.props.addFav({
                id: this.props.id,
                name: this.props.name,
                status: this.props.status,
                species: this.props.species,
                gender: this.props.gender,
                origin: this.props.origin,
                image: this.props.image,
            });
        } else {
            this.props.removeFav(this.props.id);
        }

        this.setState(newState);
        return function_to_return;

    }

    closeCard() {
        this.props.onClose(this.props.id);
        // removeFav(this.props.id);
    }

    render() {

        return (
            <div className="flipCardContainer">
                <div className="flipCardInner">
                    <div className="flipCardFront">

                        <div className={`card ${this.props.gender.toLowerCase()}`}>

                            {this.props.id
                                ? <button
                                    className={"idButton " + String(this.state.isFav)}
                                >
                                    {this.props.id}
                                </button>
                                : undefined
                            }

                            <img
                                src={this.props.image}
                                alt={this.props.name}
                                className="charImg"
                            >
                            </img>

                            <p className={"starButton " + this.state.isFav}>
                                <i className='fas fa-star'></i>
                            </p>

                            <h2 className="characterName">
                                <span>
                                {this.props.name.toUpperCase()}
                                </span>
                            </h2>

                        </div>

                    </div>

                    <div className="flipCardBack">

                        <div className={`card back ${this.props.gender.toLowerCase()}`}>

                            <h2>Status: {this.props.status}</h2>
                            <h2>Species: {this.props.species}</h2>
                            <h2>Gender: {this.props.gender}</h2>
                            <h2>Origin: {this.props.origin}</h2>

                            <div className="buttons">
                                {
                                    (this.props.onClose &&
                                        <button
                                            onClick={this.closeCard}
                                            className="cardButtons"
                                            title="Remove card"
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    )
                                }

                                {
                                    this.state.isFav ? (
                                        <button
                                            onClick={this.handleFavorite}
                                            className="cardButtons"
                                            title="Remove card to favorites"
                                            style={{ color: "yellow", opacity: 1, border: "1px solid yellow" }}
                                        >
                                            <i className='fas fa-star'></i>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={this.handleFavorite}
                                            className="cardButtons"
                                            title="Add card to favorites"
                                        >
                                            <i className='fas fa-star'></i>
                                        </button>
                                    )
                                }

                                <Link
                                    to={`/detail/${this.props.id}`}
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    <button
                                        className="cardButtons"
                                        title="Card detail"
                                    ><i className='fas fa-info-circle'></i>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div >
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => {
            dispatch(addFav(character));
        },
        removeFav: (id) => {
            dispatch(removeFav(id));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
