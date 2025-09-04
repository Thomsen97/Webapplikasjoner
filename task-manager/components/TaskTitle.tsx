import CSS from "csstype";

interface TaskTitleProps {
  title: string;
}

export default function TaskTitle({ title }: TaskTitleProps) {
  return <h1 style={h1Styles}>{title}</h1>;
}

const h1Styles: CSS.Properties = {
  color: "#000",
};
