import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Compare from './components/headers/header3'
import Company from './components/headers/header2'
import Header from './components/headers/header'
// import { ThemeProvider } from '@mui/material/styles';
// import { dashboardTheme } from './pages/dashbordTheme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="index" element={<Header />} />
                <Route path="companies" element={<Company />} />
                <Route path="compare" element={<Compare />} />
                {/*<Route path="profile" element={<Hosting />} />*/}
                {/*<Route path="logout" element={<MachineLearning />} />*/}

            </Route>

        </Routes>
    </BrowserRouter>
    // </ThemeProvider>,

);

