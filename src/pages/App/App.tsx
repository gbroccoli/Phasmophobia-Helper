import { useState } from "react"
import clues_1 from "../../assets/icon_0.png"
import clues_2 from "../../assets/icon_1.png"
import clues_3 from "../../assets/icon_2.png"
import clues_4 from "../../assets/icon_3.png"
import clues_5 from "../../assets/icon_4.png"
import clues_6 from "../../assets/icon_5.png"
import clues_7 from "../../assets/icon_6.png"
import clues_8 from "../../assets/icon_7.png"
import clues_9 from "../../assets/icon_8.png"
import "./App.css"


const App = () => {

  const [EMF, setEMF] = useState<boolean>()
  const [] = useState<boolean>()
  const [] = useState<boolean>()
  const [] = useState<boolean>()
  const [] = useState<boolean>()
  const [] = useState<boolean>()
  const [] = useState<boolean>()
  const [] = useState<boolean>()

  return (
    <div className="clues_and_ghosts my-[20px]">
      <div className="clues">
        <div className="grid grid-cols-[245px_245px_245px] grid-rows-[245px_245px_245px] gap-[10px]">
          <div className="clues clues_1">
            <label htmlFor="EMF">
              <img src={clues_1} alt="clues" />
              <input type="checkbox" name="EMF" id="EMF" className="1 hidden" />
            </label>
          </div>
          <div className="clues clues_2">
            <img src={clues_2} alt="clues" />
          </div>
          <div className="clues clues_3">
            <img src={clues_3} alt="clues" />
          </div>
          <div className="clues clues_4">
            <img src={clues_4} alt="clues" />
          </div>
          <div className="clues clues_5">
            <img src={clues_5} alt="clues" />
          </div>
          <div className="clues clues_6">
            <img src={clues_6} alt="clues" />
          </div>
          <div className="clues clues_7">
            <img src={clues_7} alt="clues" />
          </div>
          <div className="clues clues_8">
            <img src={clues_8} alt="clues" />
          </div>
          <div className="clues clues_9">
            <img src={clues_9} alt="clues" />
          </div>
        </div>
      </div>

    </div>    
  )
}

export default App;