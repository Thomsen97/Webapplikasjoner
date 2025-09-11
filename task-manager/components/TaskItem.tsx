import CSS from "csstype";
import type { Task } from "../src/types";

export default function TaskItem({
  task,
  onAction,
}: {
  task: Task;
  onAction: (task: Task, time: number) => void;
}) {
  const onTaskClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked", e);
    onAction(task, new Date().getMilliseconds());
  };
  return (
    <section>
      <h2 style={h2Styles}>{task.description}</h2>
      <button onClick={onTaskClick}>Task logger button</button>
    </section>
  );
}

const h2Styles: CSS.Properties = {
  color: "#000",
};
