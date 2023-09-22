import { Component } from "react";
class SeachBox extends Component{
    render(){
        const {className,type,placeholder,trigger} =this.props
        return(
            <div>
                <input className={` search ${className}`}
                 type={type}
                 placeholder={placeholder}
                 onChange={trigger}
                  />
            </div>
        )
    }
}
export default SeachBox;