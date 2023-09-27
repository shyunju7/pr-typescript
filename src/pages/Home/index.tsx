import { Option } from "@src/types/select";
import { homeApi } from "../../apis";
import Select from "../../components/Select";
import Sidebar from "../../components/Sidebar";
import * as React from "react";
import { Chapter } from "@src/types/chapter";
import "./style.scss";

const data: Option[] = [
  {
    text: "아메리카노",
    value: "americano",
  },
  {
    text: "카페라떼",
    value: "latte",
  },
  {
    text: "에스프레소",
    value: "espresso",
  },
];

const Home = () => {
  const [isOpenSidebar, setOpenSidebar] = React.useState<boolean>(true);
  const [chapters, setChapters] = React.useState<Chapter[]>([]);
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
  return (
    <div id="home-container">
      {isOpenSidebar ? (
        <Sidebar chapters={chapters} />
      ) : (
        <button onClick={() => setOpenSidebar((prev) => !prev)}>버튼</button>
      )}

      <main>
        <Select data={data} />
      </main>
    </div>
  );
};

export default Home;
