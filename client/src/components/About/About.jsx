import React from "react";
import Cards from "../Cards/Cards";


class About extends React.Component {

    render() {
        const imageUrl = 'https://i.pinimg.com/564x/05/c8/38/' +
            '05c838a98bfd219042d475d3c6021639.jpg';
        const onClose = () => alert("¿Qué haces? 🤨🤨🤨");
        const characters = [
            {
                name: "Jamer José",
                status: "Alive",
                species: "Human",
                gender: "App Creator",
                origin: { name: "Earth" },
                image: imageUrl,
                id: 0,
            }
        ];
        return (
            <>
                <Cards
                    characters={characters}
                    onClose={onClose}
                >
                </Cards>
            </>
        );
    }
}


export default About;
