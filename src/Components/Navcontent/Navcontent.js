import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navcontent.css';
class Navcontent extends React.Component{
    render(){
        return (
            <div className="nav-link navEntry">{this.props.id}</div>
        );
    }
}

export default Navcontent;

