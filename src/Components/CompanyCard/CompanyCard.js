import React from 'react';
import styles from './CompanyCard.css';

const CompanyCard = props => {
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
                                    <p>{props.companyAbout}</p>
                                </div>
                        </div>
                    </div>
                </div>
        );
}

export default CompanyCard;