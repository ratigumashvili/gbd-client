"use client";

import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") return initialValue;
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error reading localStorage:", error);
            return initialValue;
        }
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        try {
            const existingItem = localStorage.getItem(key);
            if (!existingItem) {
                localStorage.setItem(key, JSON.stringify(initialValue));
            }
        } catch (error) {
            console.error("Error setting localStorage:", error);
        }
    }, [key, initialValue]);

    const setValue = (value) => {
        try {
            setStoredValue(value);
            if (typeof window !== "undefined") {
                localStorage.setItem(key, JSON.stringify(value));
            }
        } catch (error) {
            console.error("Error setting localStorage:", error);
        }
    };

    return [storedValue, setValue];
}
