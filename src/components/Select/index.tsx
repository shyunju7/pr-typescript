import React, { useState } from "react";
import classNames from "classnames";
import "./select.scss";
import { Option } from "@src/pages/Home";

interface SelectProps {
  data: Option[];
}

const Select: React.FC<SelectProps> = ({ data }) => {
  const [isOpen, setOpen] = useState(false);
  const [option, setOption] = useState({
    text: "선택",
    value: "",
  });
  const onClickLabel = () => setOpen((prev) => !prev);
  const onClickOption = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const value = target.getAttribute("value");
    const text = target.innerText;
    if (!value || !text) return;
    setOption({
      text,
      value,
    });
  };
  return (
    <div className="select-wrapper" onClick={onClickLabel}>
      <p className="select-label">
        {option.text}
        <svg
          className={classNames("select-arrow", isOpen ? "open" : "close")}
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.340457 0.340457C0.7944 -0.113486 1.53039 -0.113486 1.98433 0.340457L7.85495 6.21108C7.93506 6.29119 8.06494 6.29119 8.14505 6.21108L14.0157 0.340457C14.4696 -0.113486 15.2056 -0.113486 15.6595 0.340457C16.1135 0.7944 16.1135 1.53039 15.6595 1.98433L9.78892 7.85495C8.80092 8.84295 7.19907 8.84294 6.21108 7.85495L0.340457 1.98433C-0.113486 1.53039 -0.113486 0.7944 0.340457 0.340457Z"
          />
        </svg>
        <svg
          className={classNames("select-closed", isOpen ? "open" : "close")}
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.25038 7.07899C7.73497 6.59439 8.52065 6.59439 9.00524 7.07899L21.3925 19.4663C21.8771 19.9508 21.8771 20.7365 21.3925 21.2211C20.9079 21.7057 20.1222 21.7057 19.6376 21.2211L7.25038 8.83385C6.76578 8.34926 6.76578 7.56358 7.25038 7.07899Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.25048 21.2211C6.76589 20.7365 6.76589 19.9508 7.25048 19.4662L19.6377 7.07893C20.1223 6.59433 20.908 6.59433 21.3926 7.07892C21.8772 7.56352 21.8772 8.3492 21.3926 8.83379L9.00534 21.2211C8.52075 21.7057 7.73507 21.7057 7.25048 21.2211Z"
          />
        </svg>
      </p>
      <ul
        className={classNames("select-menu", isOpen && "open")}
        onClick={onClickOption}
      >
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <li
              key={index}
              className={classNames(
                "select-menu-item",
                option.value === item.value && "selected"
              )}
              value={item.value}
            >
              {item.text}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
