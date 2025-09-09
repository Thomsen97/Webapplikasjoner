export default function TaskButton() {
  const onTaskClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked", e);
  };

  return <button onClick={onTaskClick}>Task logger button</button>;
}
