export default function ResetButton({ resetCounterParentFunction }) {
  function resetCounterButton() {
    resetCounterParentFunction();
  }
  return (
    <>
      <div className="ResetButton">
        <div>
          <button className="resetButton" onClick={resetCounterButton}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
