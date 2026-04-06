'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, typography, spacing, borderRadius, transitions, breakpoints } from '../styles/theme';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }

        const saved = window.localStorage.getItem('ummah-travel-theme');
        if (saved) {
            return saved === 'dark';
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleTheme = useCallback(() => {
        setIsDark(prev => {
            const newValue = !prev;
            localStorage.setItem('ummah-travel-theme', newValue ? 'dark' : 'light');
            return newValue;
        });
    }, []);

    const theme = {
        colors: isDark ? darkTheme : lightTheme,
        typography,
        spacing,
        borderRadius,
        transitions,
        breakpoints,
        isDark,
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
}
