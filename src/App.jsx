import { useState } from 'react'
import './App.css'
import Spreadsheet from 'react-spreadsheet';

function App() {

  const [data, setData] = useState([
    [{value: "Nirvana"}, {value: "Queen"}],
    [{value: "Sabbath"}, {value: "Beatles"}],
  ]);

  return (
    <div>
      <h4>Bandas</h4>
      <Spreadsheet data={data} onChange={setData} />
    </div>
  )
}

export default App
