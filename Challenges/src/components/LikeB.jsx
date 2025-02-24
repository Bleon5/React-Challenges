function LikeB({ countLike, setLikeCounter }) {
  const countLikes = () => {
    setLikeCounter((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("likes", newCount);
      return newCount;
    });
  };
  return (
    <>
      <button className="mt-10 block" onClick={countLikes}>
        Like ♥️
      </button>
      <p>{countLike} likes</p>
    </>
  );
}

export default LikeB;
