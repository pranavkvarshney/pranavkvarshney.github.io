// components/ThemeToggle.js
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
        if (currentTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        const theme = newMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    return (
        <div className="toggle pt-3">
            <label className="theme-toggle">
                <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
                <span className="slider">
                    <span className="slider-icon sun-icon">☀️ </span>
                    <span className="slider-icon moon-icon">🌙</span>
                </span>
            </label>

        </div>
    );
};

export default ThemeToggle;
