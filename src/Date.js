import React from 'react';


class Date extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <div className="des">
                <h3>{this.props.date}</h3>
                <div className="meme">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.abc}</p>
                    <p>{this.props.abf}</p>
                </div>
            </div>
        );
    }
}



export default Date;