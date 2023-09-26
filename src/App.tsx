import { useEffect, useState } from "react";
import Select from "./components/Select";
import Sidebar from "./components/Sidebar";
import { homeApi } from "./apis";
export interface Option {
  text: string;
  value: string;
}
export interface Chapter {
  id: number;
  name: string;
  parentId: number;
  subChapter: Chapter[];
}
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
const App = () => {
  const [isOpenSidebar, setOpenSidebar] = useState<boolean>(false);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const handleGetChapters = async () => {
    try {
      const { data } = await homeApi.getAllChapters();
      setChapters(data);
    } catch (error) {
      console.log("handleGetChapters()...", error);
    }
  };
  useEffect(() => {
    handleGetChapters();
  }, []);
  return (
    <div id="app-container">
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
export default App;
