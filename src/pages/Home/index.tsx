import { Option } from "@src/types/select";
import { homeApi } from "../../apis";
import Sidebar from "../../components/Sidebar";
import * as React from "react";
import { Chapter } from "@src/types/chapter";
import "./style.scss";
import { useLocation, useParams } from "react-router-dom";
import Details from "../ChapterDetails";

const Home = () => {
  const [isOpenSidebar, setOpenSidebar] = React.useState<boolean>(true);
  const [chapters, setChapters] = React.useState<Chapter[]>([]);
  const params = useParams();
  const location = useLocation();
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

  console.log(location);

  return (
    <div id="home-container">
      {isOpenSidebar ? (
        <Sidebar chapters={chapters} />
      ) : (
        <button onClick={() => setOpenSidebar((prev) => !prev)}>버튼</button>
      )}

      <main>{location.pathname === "/" ? <div>HOME</div> : <Details />}</main>
    </div>
  );
};

export default Home;
