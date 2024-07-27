import {Route, createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import HomePage from "../pages";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import RootLayout from "../pages/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout/>}>
          <Route index element={<HomePage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="contact" element={<ContactPage/>} />
      </Route>
    </>
));
  
  export default router;