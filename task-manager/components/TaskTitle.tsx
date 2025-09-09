import CSS from "csstype";

export default function TaskTitle({ title }: { title: string }) {
  return <h1 style={h1Styles}>{title}</h1>;
}

const h1Styles: CSS.Properties = {
  color: "#000",
};
