import Cards from './Cards';
import './Wrapper.css';
function Wrapper({tours,removeTour}){

    return(
        <div className='wrapper'>
            <h1 className='heading'>Plan With Me</h1>
            <Cards tours={tours} removeTour = {removeTour}></Cards>
        </div>
    );
}
export default Wrapper;