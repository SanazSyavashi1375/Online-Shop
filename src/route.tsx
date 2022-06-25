import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCartPage from './component/pages/shoppingCartPage';
import ProductsPage from './component/pages/productsPage';
import NotFound from './component/pages/notFound';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/shoppingCartPage" element={<ShoppingCartPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
