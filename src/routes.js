import { createBrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Register from "./components/Register"; // 1. Импортируем компонент регистрации
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
      { path: "register", Component: Register }, // 2. Добавляем путь для регистрации
      { path: "*", Component: NotFound },
    ],
  },
]);