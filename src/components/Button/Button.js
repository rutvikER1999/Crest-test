import { Button } from "antd";
import React from "react";
import "./index.css";

const CustomButton = (props) => {
  const { title, onClick, selected } = props;
  return (
    <Button
      type="primary"
      onClick={() => onClick(title)}
      className={selected ? "selected-btn" : "btn"}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
