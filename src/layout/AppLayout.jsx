import NavMenu from "./NavMenu";
import Main from "./Main";
import Footer from "./Footer";

export default function AppLayout( {children} ) {
    return(
        <>
            <NavMenu/>
            <Main/>
            {children}
            <Footer />
        </>
    )
}