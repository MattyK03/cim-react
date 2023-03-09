import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./scrollToTop.jsx"
import "./main.css";
import Header from "./components/header/Header.jsx";
import MainPage from "./components/mainPage/MainPage.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import Footer from "./components/footer/Footer.jsx";
import NewsArchive from "./components/newsArchive/NewsArchive.jsx";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import Projects from "./components/projects/Projects.jsx";
import Sciences from "./components/science/Sciences.jsx";
import Partners from "./components/partners/Partners.jsx";
import SingleNewPage from "./components/newsArchive/SingleNewPage/SingleNewPage.jsx";

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
