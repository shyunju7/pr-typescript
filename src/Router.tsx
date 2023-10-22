import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ChapterDetails from "./pages/ChapterDetails";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/">
          <Route element={<ChapterDetails />} path="/chapters/:chapterId" />
        </Route>
        <Route element={<About />} path="/about" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
