import PropTypes from 'prop-types'
import { MdOutlineWatchLater } from "react-icons/md";
import { SlFire } from "react-icons/sl";

const Card = ({ card, HandleForWantToCook }) => {
    const { recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = card;
    
    return (
        <div className="my-5 p-4 shadow-lg rounded-xl bg-slate-100 w-4/5 flex flex-col">
            {/* Container for the image */}
            <div className="flex justify-center mb-4">
                <img
                    src={recipe_image}
                    alt={`Recipe image of ${recipe_name}`}
                    className="w-96 h-52 bg-cover rounded-2xl shadow-md"
                />
            </div>
            
            {/* Container for the text */}
            <div className="text-center">
                <h1 className="text-xl font-semibold mb-2">{recipe_name}</h1>
                <p className="text-gray-700 mb-4">{short_description}</p>
            </div>
            <hr />
            {/* Container for the ingredients */}
            <div className="mb-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2">Ingredients ({ingredients.length})</h2>
                <ul className="list-disc pl-5">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            
            {/* Container for preparing time and calories */}
            <div className="mb-4 flex justify-between">
                <h3 className='flex text-base'><MdOutlineWatchLater className='mt-1 mr-1'/>Preparing time: {preparing_time}</h3>
                <h3 className='flex text-base'><SlFire className='mt-1 mr-1'/>Calories: {calories}</h3>
            </div>
            
            {/* Button */}
            <button onClick={()=>HandleForWantToCook(card)} className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                Want to Cook
            </button>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object.isRequired,
    HandleForWantToCook: PropTypes.func.isRequired
}
export default Card;
