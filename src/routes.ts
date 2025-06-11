import { createBrowserRouter } from "react-router";
import App from "./App";
import RequestAccessRoute from "./pages/auth/request-access";

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/request-access", Component: RequestAccessRoute },
]);

export default router;
