import TaskCard from "../components/TaskCard";

const task = {
  id: "123",
  title: "My Title Works",
  description: "My description",
  dueDate: new Date(),
};

function App() {
  return (
    <main>
      <TaskCard task={task} />
    </main>
  );
}

export default App;
