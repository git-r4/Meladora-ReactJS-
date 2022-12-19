//import Components
import NavbarDesktop from "../header/navbarDesktop/NavbarDesktop";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//import css
import '../../style/style.scss';
import '../../style/responsive.scss';
import '../../bootstrapStyle/bootstrap.min.css';
import '../../bootstrapStyle/bootstrap-grid.min.css';

//components
import {NavbarData} from "../header/navbarData/NavbarData";
import Footer from "../footer/footer";
import Product from "../main/products/product/Product";

const App = () => {

    const navData = NavbarData.map(({path, Component}) => {
        return(
            <Route key={path} path={path} element={<Component />} />
        )
    })

    return(
        <BrowserRouter>
            <div className="app">
                <div className="app_header">
                    <NavbarDesktop />
                </div>
                <Routes>
                    {navData}
                    <Route path='/product/:id' element={<Product />} />
                </Routes>
                <div className="app_footer">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;