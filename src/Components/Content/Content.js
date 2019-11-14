import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css'
class Content extends React.Component{
    render(){
        return (
            <div className="container-fluid" id="content">
                <header className="container-fluid" id="header">header here</header>
                <br/><br/>
                <footer className="container-fluid" id="footer">footer here</footer>
            </div>
        );
    }
}

export default Content;