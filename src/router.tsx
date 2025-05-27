import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProcessoEditor from "./pages/ProcessoEditor";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/processo", element: <ProcessoEditor /> },
    { path: "/processo/:id", element: <ProcessoEditor /> },
]);
