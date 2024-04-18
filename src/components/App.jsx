import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import { TodoList } from "./TodoList/TodoList";
import NotFound from "../pages/NotFound";
// import { TodoList } from "./TodoList/TodoList";


export const App = () => {


  return (
    // <TodoList />
    <Routes>
      < Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<TodoList />} />
      </Route>

        <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}