import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import OrderList from "./pages/orders";
import MainLayout from "./layout/MainLayout";
import { BOOK_DETAIL_PATH, BOOK_PATH, HOME_PATH, ORDER_DETAIL_PATH, ORDER_PATH, USER_DETAIL_PATH, USER_PATH } from "./constants/path";
import User from "./pages/users";
import Books from "./pages/products";
import NewBook from "./pages/products/new";
import BookDetail from "./pages/products/[id]";
import UserDetail from "./pages/users/[id]";
import NewUser from "./pages/users/new";
import OrderDetail from "./pages/orders/[id]";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={
            
              <MainLayout/> 
            
            } >
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={USER_PATH}>
              <Route index element={<User />} />
              <Route path={USER_DETAIL_PATH} element={<UserDetail />} />
              <Route
                path="new"
                element={<NewUser />}
              />
            </Route>

            <Route path={BOOK_PATH}>
              <Route index element={<Books />} />
              <Route path={BOOK_DETAIL_PATH} element={<BookDetail />} />
              <Route
                path="new"
                element={<NewBook/>}
              />
            </Route>

            <Route path={ORDER_PATH}>
              <Route index element={<OrderList />} />
              <Route path={ORDER_DETAIL_PATH} element={<OrderDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
