import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "What is React?",
      content:
        "React is a front end JavaScript framework.React is a front end JavaScript framework.React is a front end JavaScript framework.React is a front end JavaScript framework.",
    },
    {
      id: 2,
      label: "Why use React?",
      content:
        "React is a favorite among engineers because of its fast performance. React is a favorite among engineers because of its fast performance.",
    },
    {
      id: 3,
      label: "How do you use React?",
      content:
        "You use React by creating components. Components are the building blocks of a React application.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
