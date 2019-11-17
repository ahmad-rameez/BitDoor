import React from 'react';
import styles from './Companies.css'
import CompanyCard from '../../Components/CompanyCard/CompanyCard';


const Companies = () => {
    const data = {
        cmp1: {
            id: "ansbd",
            Name: "Cimpress",
            Rating: "4.4",
            CTC: "11 LPA",
            Placed: "4",
            About: " Cimpress N.V. is a Dutch company which invests in and operates a wide variety of businesses which use mass customization to configure and produce small quantities of individually customized goods. Those products are sold to small businesses, graphic designers and consumers through a number of customer-facing brands that Cimpress operates."
        },
        cmp2: {
            id: "adjksd",
            Name: "Cimpress",
            Rating: "4.4",
            CTC: "11 LPA",
            Placed: "4",
            About: " Cimpress N.V. is a Dutch company which invests in and operates a wide variety of businesses which use mass customization to configure and produce small quantities of individually customized goods. Those products are sold to small businesses, graphic designers and consumers through a number of customer-facing brands that Cimpress operates."
        },
        cmp3: {
            id: "adjdaksd",
            Name: "Cimpress",
            Rating: "4.4",
            CTC: "11 LPA",
            Placed: "4",
            About: " Cimpress N.V. is a Dutch company which invests in and operates a wide variety of businesses which use mass customization to configure and produce small quantities of individually customized goods. Those products are sold to small businesses, graphic designers and consumers through a number of customer-facing brands that Cimpress operates."
        },
        cmp4: {
            id: "adjkssadd",
            Name: "Cimpress",
            Rating: "4.4",
            CTC: "11 LPA",
            Placed: "4",
            About: " Cimpress N.V. is a Dutch company which invests in and operates a wide variety of businesses which use mass customization to configure and produce small quantities of individually customized goods. Those products are sold to small businesses, graphic designers and consumers through a number of customer-facing brands that Cimpress operates."
        },
        cmp5: {
            id: "addjkssadd",
            Name: "Cimpress",
            Rating: "4.4",
            CTC: "11 LPA",
            Placed: "4",
            About: " Cimpress N.V. is a Dutch company which invests in and operates a wide variety of businesses which use mass customization to configure and produce small quantities of individually customized goods. Those products are sold to small businesses, graphic designers and consumers through a number of customer-facing brands that Cimpress operates."
        },
        cmp6: {
            id: "add",
            Name: "Cimpress",
            Rating: "4.4",
            CTC: "11 LPA",
            Placed: "4",
            About: " Cimpress N.V. is a Dutch company which invests in and operates a wide variety of businesses which use mass customization to configure and produce small quantities of individually customized goods. Those products are sold to small businesses, graphic designers and consumers through a number of customer-facing brands that Cimpress operates."
        },
        cmp7: {
            id: "asadd",
            Name: "Cimpress",
            Rating: "4.4",
            CTC: "11 LPA",
            Placed: "4",
            About: " Cimpress N.V. is a Dutch company which invests in and operates a wide variety of businesses which use mass customization to configure and produce small quantities of individually customized goods. Those products are sold to small businesses, graphic designers and consumers through a number of customer-facing brands that Cimpress operates."
        },
        cmp8: {
            id: "adjdd",
            Name: "Cimpress",
            Rating: "4.4",
            CTC: "11 LPA",
            Placed: "4",
            About: " Cimpress N.V. is a Dutch company which invests in and operates a wide variety of businesses which use mass customization to configure and produce small quantities of individually customized goods. Those products are sold to small businesses, graphic designers and consumers through a number of customer-facing brands that Cimpress operates."
        }

    }
    return (
        <section className={styles.cards}>
            {Object.keys(data).map((cmp) =>
                <CompanyCard 
                    key = {data[cmp].id}
                    companyName={data[cmp].Name}
                    companyRating = {data[cmp].Rating}
                    companyCTC = {data[cmp].CTC}
                    companyPlaced = {data[cmp].Placed}
                    companyAbout = {data[cmp].About}
                />
            )}
        </section> 
        );
}

export default Companies;