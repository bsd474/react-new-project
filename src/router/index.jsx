import {Route, createBrowserRouter,createRoutesFromElements,} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<h3>HOME</h3>} />
      <Route path="/about" element={<h3>ABOUT</h3>} />
    </>
));
  
  export default router;