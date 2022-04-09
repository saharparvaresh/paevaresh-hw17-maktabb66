import React, { createContext, useState } from "react";
import Lists from "./Components/SelectList/AllList";
import AllItems from "./Components/SelectList/AllItems";
import SelectItems from "./Components/SelectList/SelectItems";



export const selectedList = createContext([]);

function App() {

  const [selectList, setSelectList] = useState([])

  const changeCheck = (Index) => {
    Lists.map(lists => {
      if (lists.id === Index + 1) {
        if (lists.check) {
          lists.check = false;
          setSelectList(selectList.filter(v => v.id !== Index + 1))
        } else {
          lists.check = true
          setSelectList([...selectList, lists])
        }
      }
    })
  }

  return (
    // <Todo/>
    // <Form />
    // <HOC names="moa" age="20" />
    // <QOne />
    // <OtherHook />
    // <Calculator />
    // <>
    //   <SongList />
    //   <SongDetail />
    // </>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <AllItems changeCheck={changeCheck} />
      <selectedList.Provider value={selectList}>
        <SelectItems />
      </selectedList.Provider>
    </div>
  )
}

export default App;