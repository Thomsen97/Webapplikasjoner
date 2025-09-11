import type { Task } from "../src/types";
import TaskCard from "./TaskCard";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <section>
      <p>TaskList {tasks.length}</p>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
}
