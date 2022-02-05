import { useState } from 'react'
import './App.css'

function App() {
  const [rowLimit, setRowLimit] = useState(0)
  const [rowsList, setRowsList] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')


  const deleteRow = (index: number) => {
    setRowsList(prev => prev.filter((_, i) => i !== index))
  }

  const saveRow = (key?: string) => {
    if (key && key !== 'Enter')
      return
    setRowsList(prev => [...prev, inputValue])
    setInputValue('')
  }

  const randomizeList = () => {
    const tempList = rowsList
    tempList.sort(() => 0.5 - Math.random())
    setRowsList(prev => prev.sort(() => 0.5 - Math.random()))
    setInputValue(prev => prev === '' ? ' ' : '')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>your limit: <input value={rowLimit} onChange={(e) => setRowLimit(parseInt(e.target.value))} type='number' title='your limit' style={{ width: '2rem' }} />
        </p>
        <ol>
          {
            rowsList.map((row, index) => <li key={index + row}>
              {index === rowLimit && rowLimit !== 0 && <hr style={{ borderStyle: 'dashed' }} />}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {row}
                <p style={{ paddingLeft: '1rem' }} onClick={() => deleteRow(index)}>x</p>
              </div>
            </li>)
          }
        </ol>
        <div style={{ display: 'flex' }}>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} onKeyPress={(keyPress) => saveRow(keyPress.key)}
          />
          <button onClick={() => saveRow()}>
            add item to list
          </button>
        </div>
        <button onClick={() => randomizeList()}>randomize list</button>
      </header>
    </div>
  )
}


export default App
