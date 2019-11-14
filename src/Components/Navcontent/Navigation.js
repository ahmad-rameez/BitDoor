import React from 'react';
import Navcontent from './Navcontent';
import './Navigation.css'
import logo from '../../bitlogo.png';
export class Navigation extends React.Component{
    render(){
        return (
           <div className="mysidenav">
        
                <div id="imgdiv"><img id="logo" alt="logo" src={logo}/></div>
                <div id="websiteName">Infobit</div>
               
                <div className="nav flex-column nav-pills" id="menu">
                    <Navcontent id="Companies"/>
                    <Navcontent id="Reviews"/>
                    <Navcontent id="Interview Experiences"/>
                    <Navcontent id="Companies"/>
                </div>
           </div>
            
        );
    }
}
export default Navigation;
