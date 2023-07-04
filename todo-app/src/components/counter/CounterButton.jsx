export function CounterButton({
  a,
  incrementCounterParentFunction,
  decrementCounterParentFunction,
}) {
  return (
    <>
      <div className="Counter">
        <div>
          <button
            className="counterButton"
            onClick={() => incrementCounterParentFunction(a)}
          >
            +{a}
          </button>
          <button
            className="counterButton"
            onClick={() => decrementCounterParentFunction(a)}
          >
            -{a}
          </button>
        </div>
      </div>
    </>
  );
}
