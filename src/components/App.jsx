import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import { TodoList } from "./TodoList/TodoList";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useDispatch } from "react-redux";
import { refreshThunk } from "../redux/auth/operations";
import { useEffect } from "react";
import PrivatPoute from "../routes/PrivatPoute";
import PublicRoute from "../routes/PublicRoute";
// import { TodoList } from "./TodoList/TodoList";

//  nadia@iood.ua
// 123456789
export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  return (
    // <TodoList />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="contacts" element={
          <PrivatPoute>
            <TodoList />
          </PrivatPoute>
        } />

      </Route>

      <Route path="/register" element={
        <PublicRoute>
          <Register />
        </PublicRoute>} />
      
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>} />

      <Route path="*" element={<NotFound />} />
      
    </Routes>
  )
}