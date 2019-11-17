import React from 'react';
import styles from './CompanyCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

const CompanyCard = props => {
    const classes = useStyles();
        return (
                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                                <div className={styles.cardHeader}>
                                    <img className={styles.logo}  src={require('./cimpress.png')} alt="company"/>
                                    <div className={styles.desc}>
                                        <p>{props.companyName}</p>
                                        <p>{props.companyRating}</p>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <p>{props.companyCTC}</p>
                                    <p>{props.companyPlaced} Students placed so far!</p>
                                    <p>See Interview Experiences</p>
                                </div>
                        </div>

                        <div className={styles.cardBack}>
                                <div className={styles.backDesc}>
                                    <p style={{textAlign:'center'}}>{props.companyAbout}</p>
                                </div>
                                <div className={styles.buttons}>
                                    <Button variant="contained" className={classes.button}>
                                        Alumni Info
                                    </Button>
                                    <Button variant="contained"  className={classes.button}>
                                        <Link to="/experiences">Interview Experiences</Link>
                                    </Button>
                                </div>
                        </div>
                    </div>
                </div>
        );
}

export default CompanyCard;