import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import MainPage from "./components/mainPage/MainPage.jsx";
import NewsArchive from "./components/newsArchive/NewsArchive.jsx";
import SingleNewPage from "./components/newsArchive/SingleNewPage/SingleNewPage.jsx";
import Partners from "./components/partners/Partners.jsx";
import Projects from "./components/projects/Projects.jsx";
import Sciences from "./components/science/Sciences.jsx";
import "./main.css";
import ScrollToTop from "./scrollToTop.js";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />

                <Header />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/news" element={<NewsArchive />} />
                    <Route path="/news/:id" element={<SingleNewPage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/science" element={<Sciences />} />
                    <Route path="/partners" element={<Partners />} />
                </Routes>

                <Contacts />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
