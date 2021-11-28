import { useEffect, useState } from "react"
import { HamburgerMenu } from "./HamburgerMenu"
import { Logo } from "./Logo"
import { MenuHandlerAction, menuHandlerStore } from "./redux"
import { UserProfile } from "./UserProfile"



export const HeaderNav = () =>{

    const [ sideMenu , setSideMenu ] = useState({
        showMenu : false,
    })

    const sideMenuHandler = () =>{
        setSideMenu({showMenu : true})
    }
    
   
    menuHandlerStore.dispatch(MenuHandlerAction(sideMenu.showMenu))
   
    

    return(
        <div className="bg-gray-700 flex justify-between px-10 py-2">
            <div className="head-nav-right flex items-center cursor-pointer">
                <div onClick={sideMenuHandler} className="hamburger-menu">
                    <HamburgerMenu/>
                </div>
                <div className="user-profile mr-10 cursor-pointer">
                    <UserProfile/>
                </div>
            </div>
            <div className="head-nav-left bg-white">
                <Logo/>
            </div>
        </div>
    )
}