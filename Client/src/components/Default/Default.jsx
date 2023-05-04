import Cards from "../Cards/Cards";
import Card from "../Card/Card";


class Default extends Cards {

    render() {
        return (
            <div className='cards'>
                {this.props.characters.map(element =>
                    <Card
                        id={element.id}
                        key={element.id}
                        name={element.name}
                        status={element.status}
                        species={element.species}
                        gender={element.gender}
                        origin={element.origin.name}
                        image={element.image}
                        onClose={this.props.onClose}
                    />
                )}
            </div>
        )
    }

}


export default Default;
