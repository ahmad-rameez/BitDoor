import React from 'react';
import Aux from '../../HOC/Aux';
import classes from './ExperienceBuilder.css';
import ExperienceCard from '../../Components/ExperienceCard/ExperienceCard';

const ExperienceBuilder =() => {
    const style1 = {
        backgroundColor: '#fff',
    };
    
        
    return (
        <Aux>
            <div className={classes.flexboxContainer}>
                <div style={style1}></div>
                <ExperienceCard/>
                <div style={style1}></div>
            </div>
        </Aux>
    );

}

export default ExperienceBuilder;