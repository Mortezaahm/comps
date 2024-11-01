import Button from "../components/Button";
import useCounter from "../Hooks/use-counter";

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <Button secondary rounded onClick={increment}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
