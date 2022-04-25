import { createContext } from "react";

export const MovieContext = createContext({
    theme: 'movie',
    setTheme: () => { }
});

export const ClassicContext = createContext({
    theme: 'classic',
    setTheme: () => { }
});

