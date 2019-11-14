import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from  './Menu.css';
import searchIcon from './search-icon.png';
import Logo from '../../bitlogo.png';

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        let searchForm = this.state.showForm ? (
            <form className={styles.menu__search_form} method="POST">
                <input className={styles.menu__search_input} placeholder="Type and hit enter" />
            </form>
        ) : '';

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <Link className={[styles.menu__link + ' ' + styles.menu__link__active]} to={link.link}>{link.label}</Link>
            ) : (
                <Link className={styles.menu__link} to={link.link}>{link.label}</Link>
            );

            return (
                <li key={index} className={styles.menu__list_item}>
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className={styles.menu}>
                <h1 style={{
                backgroundImage: 'url(' + Logo + ')'
                }} className={styles.menu__logo}>Logo</h1>

                

                <div className={styles.menu__right}>
                    <ul className={styles.menu__list}>
                        {linksMarkup}
                    </ul>

                    <button onClick={this.showForm.bind(this)} style={{
                    backgroundImage: 'url(' + searchIcon + ')'
                    }} className={styles.menu__search_button}></button>

                    {searchForm}
                </div>
            </nav>
        );
    }
}

export default Menu;