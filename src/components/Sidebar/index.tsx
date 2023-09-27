import * as React from "react";
import "./sidebar.scss";
import { Chapter } from "@src/types/chapter";

interface SidebarProps {
  chapters: Chapter[];
}
const Sidebar = ({ chapters }: SidebarProps) => {
  const handleOnClickNavTitle = (navTitle: string) => {
    const subNavName = document.querySelector<HTMLElement>(`#${navTitle}`);
    const subNavInner = document.querySelector<HTMLElement>(
      `#${navTitle} .subnav-inner`
    );
    const button = subNavName?.previousElementSibling;

    // 이전에 열려있는 nav가 있다면 닫기
    if (subNavName && subNavName.clientHeight > 0) {
      button?.classList.remove("active");
      subNavName!!.style.height = "0px";
    } else {
      // 닫혀있다면 현재 nav 열기
      button?.classList.add("active");
      subNavName!!.style.height = `${subNavInner?.clientHeight}px`;
    }
  };

  return (
    <aside className="sidebar">
      <header>Component</header>
      <button>
        <span aria-label="icon" role="img">
          🔥
        </span>
        <span>Intro</span>
      </button>
      <button onClick={() => handleOnClickNavTitle("components")}>
        <span aria-label="icon" role="img"></span>
        <span>Components</span>
        <span>
          <svg
            width="12"
            height="9"
            viewBox="0 0 16 9"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.340457 0.340457C0.7944 -0.113486 1.53039 -0.113486 1.98433 0.340457L7.85495 6.21108C7.93506 6.29119 8.06494 6.29119 8.14505 6.21108L14.0157 0.340457C14.4696 -0.113486 15.2056 -0.113486 15.6595 0.340457C16.1135 0.7944 16.1135 1.53039 15.6595 1.98433L9.78892 7.85495C8.80092 8.84295 7.19907 8.84294 6.21108 7.85495L0.340457 1.98433C-0.113486 1.53039 -0.113486 0.7944 0.340457 0.340457Z"
            />
          </svg>
        </span>
      </button>
      <div id="components" className="subnav">
        <div className="subnav-inner">
          <button>select</button>
          <button>input</button>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
