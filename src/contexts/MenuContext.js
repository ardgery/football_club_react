import React, { createContext, useEffect, useState } from 'react';

export const MenuContext = createContext();

export default function MenuContextProvider(props) {
    const [activeMenu, setActiveMenu] = useState('top');

    useEffect(() => {
        console.log("ActiveMEnu = ", activeMenu)
    }, [activeMenu])
    return (
        <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
            {props.children}
        </MenuContext.Provider>
    );
}