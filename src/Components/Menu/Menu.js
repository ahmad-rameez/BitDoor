import React, { Component } from 'react';
import styles from  './Menu.css';
import searchIcon from './search-icon.png';

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
                <a className={[styles.menu__link + ' ' + styles.menu__link__active]} href={link.link}>{link.label}</a>
            ) : (
                <a className={styles.menu__link} href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className={styles.menu__list_item}>
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className={styles.menu}>
                {/* <h1 style={{
                backgroundImage: 'url(' + this.props.logo + ')'
                }} className={styles.menu__logo}>Logo</h1> */}

                <h1>Logo</h1>

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