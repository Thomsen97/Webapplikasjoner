import TaskFooter from "../components/TaskFooter";
import TaskList from "../components/TaskList";
import type { Task } from "./types";

/*
const task = {
  id: "123",
  title: "My Title Works",
  description: "My description",
  dueDate: new Date(),
};
*/

const tasks: Task[] = [
  {
    id: "1",
    title: "Vaske",
    description: "Gulv",
    dueDate: new Date(),
  },
  {
    id: "2",
    title: "Danse",
    description: "Tango",
    dueDate: new Date(),
  },
  {
    id: "3",
    title: "Hoppe",
    description: "Høyt",
    dueDate: new Date(),
  },
  {
    id: "4",
    title: "Løpe",
    description: "Fort",
    dueDate: new Date(),
  },
];

function App() {
  return (
    <main>
      <TaskList tasks={tasks}>
        <TaskFooter />
      </TaskList>
    </main>
  );
}

export default App;
