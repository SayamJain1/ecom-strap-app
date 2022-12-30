import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./app.scss"

// const Layout = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path:'/',
//         element: <Home/>
//       },
//       {
//         path:'/products/:id',
//         element: <Products/>
//       },
//       {
//         path:'/product/:id',
//         element: <Product/>
//       }
//     ]
//   }
// ]);

function App() {
  return (
    <div className='app'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      <Footer />
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
