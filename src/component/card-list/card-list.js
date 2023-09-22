import { Component } from "react";
import Card from "../card own/card";
class CardList extends Component {
    render() {
        const { monster } = this.props
        return (
            <div >
                {(() => {
                    if (monster.length != 0) {
                        return (
                            <div className="card-container">
                                {monster.map(obj => {
                                    return (
                                        <Card owncard={obj}/>
                                    )
                                })}
                            </div>
                        )
                    } else {
                        return (
                            <div><img src={require('./kush toungh.jpg')}/></div>
                        )
                    }
                })()}
            </div>
        )
    }
}
export default CardList;

  