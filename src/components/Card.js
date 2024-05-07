import { useState } from 'react';
import './Card.css';
function Card(props){
      
      const imgSrc =props.img;
      const price = props.price;
      const [readmore,setReadmore] = useState(false);
      const cityName = props.name;
      const description = readmore ? props.description : `${props.description.substring(0,150)}....`;
      
      function readmoreHandler(){
        
        setReadmore(!readmore);
      }
    return(
        <div className="main-card">
            
            <img src={imgSrc} alt="hh" className="image"></img>
            <span className="price">{price}</span>
            <h2 className="city-name">{cityName}
            
            </h2>
            <p className="des">{description}
            <span className='read-more' onClick={readmoreHandler}>
                {readmore ? "show less" : "Read more"}
            </span>
            </p>
            
            <button onClick={()=>props.removeTour(props.id)} className="btn">Not Intrested</button>

        </div>
    );
}
export default Card;