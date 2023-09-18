import Select from "./components/Select";
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
  return <Select data={data} />;
};
export default App;
