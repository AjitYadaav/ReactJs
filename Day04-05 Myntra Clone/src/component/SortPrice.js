
const SortPrice = ({ A, setA }) => {
  function sortArray() {
    const sorted = [...A].sort((a, b) => a.price - b.price); // 🔁 Don't mutate
    setA(sorted);
  }

  return (
    <div>
      <button onClick={sortArray}>Sort by Price</button>
    </div>
  );
};

export default SortPrice;