import React from "react";
import { Link } from "react-router-dom";

export default class Moviecard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Link to={{pathname: `/details/${this.props.id}`}} className=" bg-gray-200 flex flex-row p-4 m-5 w-full rounded-md">
                <div className=" bg-red-500">
                    {this.props.image != 'N/A'
                    ?<img className="h-40" src={this.props.image} alt="" />
                    :<div className="w-32 h-40 bg-black flex flex-col justify-center items-center text-white">
                        <p>N/A</p>
                    </div>}
                    
                </div>
                <div className="m-2 flex flex-col justify-center">
                    <h1 className="text-2xl">{this.props.title}</h1>
                    <h3>{this.props.type}</h3>
                    <h3>{this.props.year}</h3>
                    
                </div>
                <hr/>
            </Link>
        )
    }
}