import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import './Favorites.css';
import { orderCards, filterCards } from "../redux/actions";


class Favorites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aux: false,
        }
        this.handleOrder = this.handleOrder.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    };

    handleOrder(event) {
        this.props.dispatch(orderCards(event.target.value));
        this.setState({
            aux: !this.state.aux,
        });
    };

    handleFilter(event) {
        this.props.dispatch(filterCards(event.target.value));
    };

    render() {
        return (
            <div className="favContainer">
                <nav className="favoritesButtons">
                    <div>
                        <label htmlFor="genderSelector">
                            GENDER:&emsp;
                        </label>
                        <select
                            name="gender"
                            id="genderSelector"
                            onChange={this.handleFilter}
                        >
                            <option value="all">ALL</option>
                            <option value="Male">
                                MALE
                            </option>
                            <option value="Female">
                                FEMALE
                            </option>
                            <option value="unknown">
                                UNKNOWN
                            </option>
                            <option value="Genderless">
                                GENDERLESS
                            </option>
                        </select>
                    </div>

                    <div>
                        <span className="favsTitle"><i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i>&ensp;FAVORITES&ensp;<i className='fas fa-star'></i><i className='fas fa-star'></i><i className='fas fa-star'></i></span>
                    </div>

                    <div>
                        <label htmlFor="orderSelector">
                            ORDER:&emsp;
                        </label>
                        <select
                            name="order"
                            id="orderSelector"
                            onChange={this.handleOrder}
                        >
                            <option value="asc">
                                ASCENDENT
                            </option>
                            <option value="dsc">
                                DESCENDENT
                            </option>
                        </select>
                    </div>
                </nav>
                <div className='cardsFavs'>
                    {this.props.myFavorites.map(element =>
                        <Card
                            id={element.id}
                            key={element.id}
                            name={element.name}
                            status={element.status}
                            species={element.species}
                            gender={element.gender}
                            origin={element.origin.name}
                            image={element.image}
                        />
                    )}
                </div>
            </div>
        )
    };
};


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};


export default connect(mapStateToProps, null)(Favorites);
