function ShowT({ text, setText }) {
  const toggleT = () => {
    setText((prevText) =>
      prevText === "Initial Text" ? "Text has been changed" : "Initial Text"
    );
  };
  return (
    <>
      <p>{text}</p>
      <button onClick={toggleT}>
        {text === "Initial Text" ? "Change Text" : "Reset Text"}
      </button>
    </>
  );
}

export default ShowT;
