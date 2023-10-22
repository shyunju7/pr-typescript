import * as React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { Chapter } from "@src/types/chapter";
import ChapterDetails from "../ChapterDetails";
import { homeApi } from "../../apis";
import "./style.scss";
import About from "../About";

const Home = () => {
  const [isOpenSidebar, setOpenSidebar] = React.useState<boolean>(true);
  const [chapters, setChapters] = React.useState<Chapter[]>([]);
  const location = useLocation();
  const pathname = location.pathname;
  const handleGetChapters = async () => {
    try {
      const { data } = await homeApi.getAllChapters();
      setChapters(data);
    } catch (error) {
      console.log("handleGetChapters()...", error);
    }
  };
  React.useEffect(() => {
    handleGetChapters();
  }, []);

  const handleMainComponent = (): React.ReactNode => {
    console.log(pathname);
    if (pathname === "/") return <div>Intro Page</div>;
    else if (pathname.includes("/chapters")) return <ChapterDetails />;
    else return <About />;
  };

  return (
    <div id="home-container">
      {isOpenSidebar ? (
        <Sidebar chapters={chapters} />
      ) : (
        <button onClick={() => setOpenSidebar((prev) => !prev)}>버튼</button>
      )}
      <main>{handleMainComponent()}</main>
    </div>
  );
};

export default Home;
