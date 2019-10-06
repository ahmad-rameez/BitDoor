import React from 'react';
import Aux from '../../HOC/Aux';
import Menu from '../../Components/Menu/Menu';
import logo from '../../logo.png';
import classes from './ExperienceBuilder.css';

const ExperienceBuilder =() => {
    let links = [
        { label: 'Home', link: 'Home' },
        { label: 'Experiences', link: 'experiences',active: true },
        { label: 'Placements', link: 'Home' },
        { label: 'Contact Us', link: 'Contact' },
      ];
        
    return (
        <Aux>
            <Menu links={links} logo={logo} />
            <div>
            <div className={classes.row}>
                <div className={classes.column}>dskndksndkasndkndksandkandkndkandknsakdnkasndkandka</div>
                <div className={classes.column}>11111111111111111111111111111111111111111</div>
                <div className={classes.column}></div>
            </div>
            </div>
        </Aux>
    );

}

export default ExperienceBuilder;