import LanguageToggle from "../LanguageToggle/LanguageToggle";
import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

function Navbar({ toggleTheme, isDarkMode }) {
    return (
        <nav class="navbar sticky-top navbar-light bg-light custom-container py-2">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            color="default"
                        />
                    }
                    label={isDarkMode ? 'Mode Gelap' : 'Mode Terang'}
                />
                <LanguageToggle />
            </div>
        </nav>
    );
}

export default Navbar;