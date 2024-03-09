import { useState } from "react";
import "./App.css";

const NUM_DISC = 4;

function App() {
  const [towers, setTowers] = useState([[4,3,2,1], [], []]);
  const [selectedTowerIndex, setSelectedTowerIndex] = useState<
    number | undefined
  >();




  function handleClickedTower(clickedTowerIndex: number) {
    if (selectedTowerIndex !== undefined) {
      const selectedTower = towers[selectedTowerIndex];
      const clickedTower = towers[clickedTowerIndex];

      if(selectedTower[0] > (clickedTower[0] ?? 9999)){
        setSelectedTowerIndex(undefined);
        return;
      }


      const newTowers = [...towers];
      const poppedDisc = newTowers[selectedTowerIndex].shift()!;
      newTowers[clickedTowerIndex].push(poppedDisc);
      setTowers(newTowers);
      setSelectedTowerIndex(undefined);

      if (clickedTower.length >= NUM_DISC){
        alert('you Win');
      }
    } else {
      setSelectedTowerIndex(clickedTowerIndex);
    }
  }

  return (
    <div className="App">
      <div className="towers">
        {towers.map((discs, towerIndex) => (
          <div
            onClick={() => handleClickedTower(towerIndex)}
            className={"tower" + (selectedTowerIndex === towerIndex ? " selected" : "")}
            key={towerIndex}
          >
            <div className="line"></div>
            <div className="discs">
              {discs.reverse().map((discsNumber) => (
                <div
                  key={discsNumber}
                  className="disc"
                  style={{
                    width: `${discsNumber * 20 + 20}px`,
                  }}
                >{discsNumber}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
