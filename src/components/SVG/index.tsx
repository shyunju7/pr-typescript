import { useEffect } from "react";

const SVG = () => {
  const setEventListener = () => {
    const buttons = document.querySelectorAll(".num-btn");

    for (let index = 1; index <= 9; index++) {
      buttons[index - 1].addEventListener("click", () =>
        handleOnClickNumBtn(index)
      );
    }
  };

  const handleOnClickNumBtn = (num: number) => {
    const textNum = document.querySelector("#text-num");
    if (!textNum) return;
    textNum.textContent = `${num}`;
  };

  useEffect(() => {
    setEventListener();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1180 712"
      width="1180"
      height="712"
    >
      <path d="M0 0 H 1180 V 712 H 0 L 0 0" fill="white" />
      <g id="text-group">
        <rect
          x="150"
          y="250"
          width="200"
          height="200"
          fill="#fafafa"
          stroke="#ddd"
          stroke-width="6"
          rx="20"
          ry="20"
        />
        <text id="text-num" x="230" y="375" font-size="72"></text>
      </g>

      <g id="num-group">
        <g className="num-btn">
          <rect
            x="600"
            y="200"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="640" y="270" font-size="48" fill="#444">
            1
          </text>
        </g>

        <g className="num-btn">
          <rect
            x="700"
            y="200"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="740" y="270" font-size="48" fill="#444">
            2
          </text>
        </g>
        <g className="num-btn">
          <rect
            x="800"
            y="200"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="840" y="270" font-size="48" fill="#444">
            3
          </text>
        </g>
        <g className="num-btn">
          <rect
            x="600"
            y="300"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="640" y="370" font-size="48" fill="#444">
            4
          </text>
        </g>
        <g className="num-btn">
          <rect
            x="700"
            y="300"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="740" y="370" font-size="48" fill="#444">
            5
          </text>
        </g>
        <g className="num-btn">
          <rect
            x="800"
            y="300"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="840" y="370" font-size="48" fill="#444">
            6
          </text>
        </g>
        <g className="num-btn">
          <rect
            x="600"
            y="400"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="640" y="470" font-size="48" fill="#444">
            7
          </text>
        </g>
        <g className="num-btn">
          <rect
            x="700"
            y="400"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="740" y="470" font-size="48" fill="#444">
            8
          </text>
        </g>
        <g className="num-btn">
          <rect
            x="800"
            y="400"
            width="100"
            height="100"
            fill="#fafafa"
            rx="10"
            ry="10"
            stroke="#ddd"
            stroke-width="5"
          ></rect>
          <text x="840" y="470" font-size="48" fill="#444">
            9
          </text>
        </g>
      </g>
    </svg>
  );
};
export default SVG;
