import { useEffect } from 'react';
import { useState } from 'react';
import CloseIcon from '../Images/close-icon.png';
import { menuHandlerStore } from './redux';
import UserProfileIcon from '../Images/profile.png';
import { Link } from 'react-router-dom';


export const SideNav = () =>{
    
    const [ sideMenu , setSideMenu ] = useState({
        showMenu : true,
    })

    const sideMenuHandler = () =>{

        setSideMenu({showMenu : !sideMenu.showMenu})
    }

    useEffect(()=>{
        menuHandlerStore.subscribe(()=>{
            setSideMenu({showMenu : menuHandlerStore.getState() })
        })
    },[])
    

    console.log(sideMenu.showMenu.toString())
    return(
        <div className={sideMenu.showMenu.toString() === 'true' ?"lg:w-1/4 md:w-1/2 w-full h-screen bg-gray-900 absolute right-0 top-0":"hidden"}>
            <div onClick={sideMenuHandler} className="close-icon w-10 mr-auto cursor-pointer">
                <img className="w-full" src={CloseIcon} alt="close"/>
            </div>
            {/*  */}
            <div className="px-4 py-4 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="inline w-8 h-8 text-white lg:hidden" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <div className="hidden lg:block">
                    <div className="w-20 mx-auto my-4">
                        <img className="w-full" src={UserProfileIcon} alt="profile" />
                    </div>
                    <ul className="text-right">
                        <li className="mb-6">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" className="p-1 focus:outline-none">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                            className="w-4 h-4">
                                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input type="search" name="search"
                                    className="w-full px-4 py-2 pl-12 rounded shadow outline-none" placeholder="Search..."/>
                            </div>
                        </li>
                        <li className="mb-2 rounded bg-gray-800 hover:shadow ">
                            <Link to="/" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li className="mb-2  rounded shadow">
                            <Link to="/about" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2"
                                    viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                        clip-rule="evenodd" />
                                </svg>
                                About
                            </Link>
                        </li>
                        <li className="mb-2 rounded hover:shadow hover:bg-gray-800">
                            <Link to="/contact" className="inline-block w-full h-full px-3 py-2 font-bold text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 mr-2 -mt-2"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}