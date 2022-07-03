import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import ProductSingle from "./Pages/ProductSingle";
import ProductsMain from "./Pages/ProductsMain";

const Routing = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="products" element={<ProductsMain />} />
            <Route path="product/:id" element={<ProductSingle />} />
        </Routes>
     );
}
 
export default Routing;

