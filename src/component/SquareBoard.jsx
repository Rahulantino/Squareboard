import { useState } from "react";

const SquareBoard = () => {
  const [number, setNumber] = useState({
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
    num5: 5,
    num6: 6,
    num7: 7,
    num8: 8,
    num9: 9,
  });

  const { num1, num2, num3, num4, num5, num6, num7, num8, num9 } = number;

  const [clicked, setClicked] = useState(false);
  const handleShuffle = () => {
    setClicked(!clicked);
  };
  return (
    <section className="container">
      {/* <h2>Shuffle And Sort</h2> */}
      <main className="squareContainer">
        <div className="squareOrange">
          <p>{clicked ? num3 : num1}</p>
        </div>
        <div className="square">
          <p>{clicked ? num1 : num2}</p>
        </div>
        <div className="square">
          <p>{clicked ? num6 : num3}</p>
        </div>

        <div className="square">
          <p>{clicked ? num7 : num4}</p>
        </div>
        <div className="square">
          <p>{clicked ? num3 : num5}</p>
        </div>
        <div className="square">
          <p>{clicked ? num9 : num6}</p>
        </div>

        <div className="square">
          <p>{clicked ? num2 : num7}</p>
        </div>
        <div className="square">
          <p>{clicked ? num1 : num8}</p>
        </div>
        <div className="square">
          <p>{clicked ? num4 : num9}</p>
        </div>
      </main>
      <aside>
        <button className="actionBtn" onClick={handleShuffle}>
          Shuffle
        </button>
        <button
          className="actionBtn"
          onClick={() => {
            setClicked(false);
          }}
        >
          Sort
        </button>
      </aside>
    </section>
  );
};

export default SquareBoard;
