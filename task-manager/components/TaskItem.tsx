import CSS from "csstype";

interface TaskItemProps {
  item: string;
}

export default function TaskItem({ item }: TaskItemProps) {
  return <h2 style={h2Styles}>{item}</h2>;
}

const h2Styles: CSS.Properties = {
  color: "#000",
};
