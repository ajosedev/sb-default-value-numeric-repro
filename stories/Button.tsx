import React from "react";
import "./button.css";

interface ButtonProps {
  sizeAsNumber: 1 | 2 | 3;
  sizeAsNumberUsedAsString: 1 | 2 | 3;
}

export const Button = (props: ButtonProps) => {
  console.log(props);

  return (
    <div>
      <p>
        Refresh this page, and compare the props rendered here against the props
        rendered when switching to the other story.
      </p>
      <p>Both stories are the same, it does not matter which you start on</p>
      <p>{JSON.stringify(props, null, 2)}</p>
    </div>
  );
};
