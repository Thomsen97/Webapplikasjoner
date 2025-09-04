import TaskTitle from "./TaskTitle";
import TaskItem from "./TaskItem";
import CSS from "csstype";

export default function TaskCard() {
  return (
    <div style={cardStyles}>
      <section>
        <TaskTitle title="Task 1" />
        <TaskItem item="This is the description for task 1." />
        <button>Finish task</button>
      </section>
      <section>
        <TaskTitle title="Task 2" />
        <TaskItem item="This is the description for task 2." />
        <button>Finish task</button>
      </section>
      <section>
        <TaskTitle title="Task 3" />
        <TaskItem item="This is the description for task 3." />
        <button>Finish task</button>
      </section>
      <section>
        <TaskTitle title="Task 4" />
        <TaskItem item="This is the description for task 4." />
        <button>Finish task</button>
      </section>
    </div>
  );
}

const cardStyles: CSS.Properties = {};
