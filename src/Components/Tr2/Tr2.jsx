import PropTypes from 'prop-types'
const Tr2 = ({ preparing,idx }) => {
    
    const { recipe_name, preparing_time, calories } = preparing;
    return (
        <>
                <tr className='text-center'>
                <td>{idx+1}</td>
                <td >{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </>
    );
};

Tr2.propTypes = {
    preparing: PropTypes.object,
    idx:PropTypes.number
}
export default Tr2;