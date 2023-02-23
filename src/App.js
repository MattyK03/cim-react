import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./scrollToTop"
import "./main.css";
import Header from "./components/header/Header";
import MainPage from "./components/mainPage/MainPage";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import NewsArchive from "./components/newsArchive/NewsArchive";
import AboutUs from "./components/aboutUs/AboutUs";
import Projects from "./components/projects/Projects";
import Sciences from "./components/science/Sciences";
import Partners from "./components/partners/Partners";
import SingleNewPage from "./components/newsArchive/SingleNewPage/SingleNewPage";

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
