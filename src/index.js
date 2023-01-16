import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Compare from './components/headers/header3'
import Company from './components/headers/header2'
import Header from './components/headers/header'
import Profile from './components/headers/header4'
import Home from './components/home'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="index" element={<Header />} />
                <Route path="companies" element={<Company />} />
                <Route path="compare" element={<Compare />} />
                <Route path="profile" element={<Profile />} />
                {/*<Route path="logout" element={<MachineLearning />} />*/}

            </Route>

        </Routes>
    </BrowserRouter>
    // </ThemeProvider>,

);

