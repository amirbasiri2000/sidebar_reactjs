
import { HeaderNav, SideNav } from "./Components"
import PagesRoute from "./PagesRoute"


export default function App() {

    return(
        <>
            <div className="bg-gray-600">
                <HeaderNav/>
            </div>
            <div className="w-full text-center">
                <div>
                    <SideNav/>
                </div>
                <div><PagesRoute/></div>
            </div>
        </>
    )
}