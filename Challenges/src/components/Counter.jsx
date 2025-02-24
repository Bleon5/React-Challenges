function Counter({ count, setCounter }) {
  return (
    <>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        className="m-10 border p-3 bg-green-400"
      >
        +
      </button>
      {count}
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        className="m-10 border p-3 bg-red-400"
      >
        -
      </button>
    </>
  );
}

export default Counter;
