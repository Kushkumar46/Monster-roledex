import { Component } from "react";
import './card-css.css';
class Card extends Component{
    render(){
        const {owncard}=this.props
        const {name,email,id}=owncard
        return(
            <div className="card-css">
             <img alt={`${owncard.name}`}
            src={`https://robohash.org/${id}?set=set2`}
            />
            <h1>{name}</h1>
            <p>{email}</p>
            </div>
        )
    }
}
export default Card;