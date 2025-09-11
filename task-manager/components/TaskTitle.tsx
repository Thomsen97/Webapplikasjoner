import type { Task } from "../src/types";
import React from "react";

export default function TaskTitle({ title }: Pick<Task, "title">) {
  return <h1 style={h1Styles}>{title}</h1>;
}

const h1Styles: React.CSSProperties = {
  color: "#000",
};
