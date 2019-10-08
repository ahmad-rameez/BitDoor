import React from 'react';
import Aux from '../../HOC/Aux';
import Menu from '../../Components/Menu/Menu';
import classes from './ExperienceBuilder.css';
import ExperienceCard from '../../Components/ExperienceCard/ExperienceCard';

const ExperienceBuilder =() => {
    let links = [
        { label: 'Home', link: 'Home' },
        { label: 'Experiences', link: 'experiences',active: true },
        { label: 'Placements', link: 'Home' },
        { label: 'Contact Us', link: 'Contact' },
      ];
        
    return (
        <Aux>
            <Menu links={links} />
            <div className={classes.flexboxContainer}>
                <div><h2>Left Section</h2></div>
                <ExperienceCard />
                <div><h2>Right Section</h2></div>
            </div>
        </Aux>
    );

}

export default ExperienceBuilder;