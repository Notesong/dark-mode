import {useLocalStorage} from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
    // set the state for the value bases on the props values 
    const [value, setValue] = useLocalStorage(key, initialValue);
    // create a body variable for use in toggling the classes 
    // for the body HTML tag
    const body = document.querySelector('body');

    useEffect(() => {
        console.log(value);
        // add or remove 'dark-mode' class based on whether
        // value is true or false.  Made true or false
        // in Navbar.jsx using toggleMode()
        if(value) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value])

    return [value, setValue]
};