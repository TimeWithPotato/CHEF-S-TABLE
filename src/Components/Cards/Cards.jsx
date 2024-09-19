import { useState,useEffect } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';
const Cards = ({HandleForWantToCook}) => {
    const [cards, setCards] = useState([]);
    
   useEffect(() => {
        const fetchData = async () => {
            const url = 'foods.json';
            const res = await fetch(url);
            const data = await res.json();
            setCards(data);
        };
        fetchData();
    }, []);
    return (
        <> 
            <div className="grid grid-cols-2  my-3 w-fit">
        {
            cards.map(card => <Card key={card.recipe_id} card={card} HandleForWantToCook={HandleForWantToCook}></Card>)
                }
            </div>
    </>
    );
};

Cards.propTypes = {
    HandleForWantToCook: PropTypes.func.isRequired
}

export default Cards;