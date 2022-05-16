import React, {useEffect, useState} from 'react';
import Hamburger from 'hamburger-react'
import { useMediaQuery } from 'react-responsive'


const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const [toggle, setToggle] = useState(false)

    return(
        <div id='header'>
            <h1>Header</h1>
           <div>
                <Hamburger onToggle={toggled => {
                if (toggled){
                    {setToggle(true)}         
                }else{
                    {setToggle(false)}
                    }
                }}/>
                {toggle && isDesktopOrLaptop &&
                    <div id='toggledDesk'>
                        <h1>Menu</h1>
                    </div>}
                    {toggle && isTabletOrMobile &&
                    <div id='toggledMobile'>
                        <h1>Menu</h1>
                    </div>}
           </div>
                
        </div>
    )

}

export default Header