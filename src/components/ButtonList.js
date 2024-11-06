import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Kabddi",
  "Cricket",
  "Chess",
  "Devara",
  "Tarak",
  "Sai pallavi",
  "Dubki King",
  "Pkl",
  "Magnus Carlsen",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};
export default ButtonList;
