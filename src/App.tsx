import Select from "./components/Select";
import Sidebar from "./components/Sidebar";
export interface Option {
  text: string;
  value: string;
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
  return (
    <div id="app-container">
      <Sidebar />
      <main>
        <Select data={data} />
      </main>
    </div>
  );
};
export default App;
