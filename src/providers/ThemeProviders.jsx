"use client"
import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/app/context/ThemeContext';

const ThemeProviders = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);


    // Example of componentDidMount
    useEffect(() => {
        setMounted(true);
    }, []);

    console.log("🚀 ~ file: ThemeProviders.jsx:8 ~ ThemeProviders ~ theme:", theme);

    if (mounted) {
        return (
            <div className={theme}>{children}</div>
        )
    }
}

export default ThemeProviders;