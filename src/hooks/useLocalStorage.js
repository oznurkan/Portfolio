import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const [ storedValue, setStoredValue ] = useState( () => {
        try{
            const item = localStorage.getItem(key);
            const result = item ? JSON.parse(item) : initialValue;
            return result;
        }catch(error){
            console.log("localstorage value error :" + error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error("LocalStorage Yazma Hatası:", error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}