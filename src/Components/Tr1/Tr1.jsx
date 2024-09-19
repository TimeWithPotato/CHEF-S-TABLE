import PropTypes from 'prop-types'
const Tr1 = ({ wantToCook, idx, HandleForPreparing}) => {
    const {recipe_name, preparing_time, calories} = wantToCook
    return (
        <>
            <tr className='text-center'>
                <td>{idx+1}</td>
                <td >{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button className='bg-green-400 px-3 py-2 rounded-lg font-semibold' onClick={()=>HandleForPreparing(wantToCook)}>Preparing</button></td>
            </tr>
        </>
    );
};

Tr1.propTypes = {
    wantToCook: PropTypes.object,
    idx: PropTypes.number,
    HandleForPreparing: PropTypes.func
}
export default Tr1;