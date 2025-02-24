function ShowP({ isVisible, setVisibility }) {
  const toggleVisibility = () => {
    setVisibility((prevState) => !prevState); // Toggle the visibility
  };
  return (
    <>
      <button onClick={toggleVisibility}>
        {isVisible ? "Close P" : "Open P"}
      </button>
      <p>{isVisible ? "The paragraph is visible!" : ""}</p>
    </>
  );
}

export default ShowP;
