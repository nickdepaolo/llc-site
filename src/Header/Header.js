import React, {useEffect, useState} from 'react';
import Hamburger from 'hamburger-react'


const Header = () => {
    const [toggle, setToggle] = useState(false)

    return(
        <div id='header'>
            <h1>Header</h1>
            <Hamburger onToggle={toggled => {
                if (toggled){
                    {setToggle(true)}         
                }else{
                    {setToggle(false)}
                }
            }}/>
            {toggle && 
                <div id='toggled'>
                    <h1>Menu</h1>
                </div>}
        </div>
    )

}

export default Header