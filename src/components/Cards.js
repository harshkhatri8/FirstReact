import Card from "./Card";
import './Cards.css'
function Cards({tours,removeTour}){
 
  
    return(
        <div className="wrapper-card">
           {
                tours.map( (tours) => {
                    return <Card key={tours.id} {...tours} removeTour={removeTour}></Card>
                })
           }
        </div>
    );
}
export default Cards;