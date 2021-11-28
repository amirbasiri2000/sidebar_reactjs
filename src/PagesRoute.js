import { Routes , Route } from "react-router-dom"
import { About, Contact, Home } from "./Pages"



export default function PagesRoute () {

    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/contact" element={<Contact/>} />
            </Routes>
        </>
    )
}