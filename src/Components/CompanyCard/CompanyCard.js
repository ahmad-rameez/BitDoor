import React, { Component } from 'react';
import styles from './CompanyCard.css';

class CompanyCard extends Component {
    render() {
        return (
                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardFront}>
                                <div className={styles.cardHeader}>
                                    <img className={styles.logo}  src={require('./cimpress.png')} alt="company"/>
                                    <div className={styles.desc}>
                                        <p>Cimpress</p>
                                        <p>Rating!!!</p>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <p>11 CTC</p>
                                    <p>54 Students placed so far!</p>
                                    <p>See Interview Experiences</p>
                                </div>
                        </div>

                        <div className={styles.cardBack}>
                                <div className={styles.backDesc}>
                                    <p>
                                        Cimpress N.V. is a Dutch company which invests in and operates a wide variety
                                        of businesses which use mass customization to configure and produce small 
                                        quantities of individually customized goods. Those products are sold to small 
                                        businesses, graphic designers and consumers through a 
                                        number of customer-facing brands that Cimpress operates.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CompanyCard;