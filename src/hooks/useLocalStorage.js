import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // on initial setup, get key from local storage by 'key' props 
        // variable if the key already exsists in local storage and
        // sets it to 'item'
        const item = window.localStorage.getItem(key);
        // parse and return item stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        // save the state
        setStoredValue(value);
        // save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};