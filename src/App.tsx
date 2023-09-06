import Home from "./pages/Home/home";
import Users from './pages/Users/users';
import Products from './pages/Products/products';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import './styles/global.scss'
import Product from "./pages/Product/Product";
import User from "./pages/User/User";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet/>
            </QueryClientProvider>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/users',
          element: <Users/>,
        },
        {
          path: '/products',
          element: <Products/>,
        },
        {
          path: '/users/:id',
          element: <User/>,
        },
        {
          path: '/products/:id',
          element: <Product/>,
        }
      ]
    },
    
  ]);

  return <RouterProvider router={router} />
}

export default App
