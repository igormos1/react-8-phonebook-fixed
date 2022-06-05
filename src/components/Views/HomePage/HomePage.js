import React from "react";
// import phoneBook from './phoneBook.png';
import s from './HomePage.module.css'


const HomePage = () => (
    <div className={s.homePageTitle}>
        <h1>            
            {/* <img src={phoneBook} alt="phoneBook" /> */}
            Телефонный справочник
        </h1>
    </div>
);

export default HomePage;