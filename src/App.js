import React from "react";
import Header from "./Header/Header.js";
import Section from "./Section/Section.js";
import Footer from "./Footer/Footer.js";
import Models from "./Models/Models";

const App = () => {
    let users = [
        {
            name: "Dzhalil",
            lastName: "Eshimbekov",
            age: 21,
            id: 1,
        },
        {
            name: "Ilim",
            lastName: "Kushbekov",
            age: 20,
            id: 2,
        },
    ];

    return (
        <div>
            <Header />
            <Section users={users} />
            <Models />
            <Footer />
        </div>
    );
};

export default App;
