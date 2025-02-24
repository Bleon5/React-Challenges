import { useState } from "react";
import Counter from "./components/Counter";
import ShowP from "./components/ShowP";
import ShowT from "./components/ShowT";
import LikeB from "./components/LikeB";
import Form from "./components/Form";
function App() {
  const [count, setCounter] = useState(0);
  const [isVisible, setVisibility] = useState(false);
  const [text, setText] = useState("Initial Text");
  const [countLike, setLikeCounter] = useState(() => {
    return Number(localStorage.getItem("likes") || 0);
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  return (
    <>
      <Counter count={count} setCounter={setCounter} />
      <ShowP isVisible={isVisible} setVisibility={setVisibility} />
      <ShowT text={text} setText={setText} />
      <LikeB countLike={countLike} setLikeCounter={setLikeCounter} />
      <Form form={form} setForm={setForm} />
    </>
  );
}
export default App;
