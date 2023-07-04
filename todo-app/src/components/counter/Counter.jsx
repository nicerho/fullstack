import { useState } from "react";
import { PropTypes } from "prop-types";
import "./Counter.css";
import { CounterButton } from "./CounterButton";
import ResetButton from "./resetButton";

export default function Counter() {
  const [count, setCount] = useState(0);
  function incrementCounterParentFunction(a) {
    setCount(count + a);
  }
  function decrementCounterParentFunction(a) {
    setCount(count - a);
  }
  function resetCounterParentFunction() {
    setCount(0);
  }
  return (
    <div>
      <span className="totalCount">{count}</span>
      <CounterButton
        a={1}
        incrementCounterParentFunction={incrementCounterParentFunction}
        decrementCounterParentFunction={decrementCounterParentFunction}
      />
      <CounterButton
        a={2}
        incrementCounterParentFunction={incrementCounterParentFunction}
        decrementCounterParentFunction={decrementCounterParentFunction}
      />
      <CounterButton
        a={5}
        incrementCounterParentFunction={incrementCounterParentFunction}
        decrementCounterParentFunction={decrementCounterParentFunction}
      />
      <ResetButton resetCounterParentFunction={resetCounterParentFunction} />
    </div>
  );
}

CounterButton.propTypes = {
  a: PropTypes.number,
};
