import { Outlet } from "react-router-dom"
import { Header } from "../shared/components/header"
import { Footer } from "../shared/components/footer"

export const DefaultLayout = () => {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}