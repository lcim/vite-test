// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const redd = <div className='box redd'>"red"</div>
  const oranged = <div className='box oranged'>"orange"</div>
  const yellowd = <div className='box yellowd'>"yellow"</div>
  const greend = <div className='box greend'>"green"</div>
  const blued = <div className='box blue'>"blued"</div>
  const indigod = <div className='box indigo'>"indigod"</div>
  const violetd = <div className='box violet'>"violetd"</div>


  return (
    <>
      <div className='container'>
        {redd}
        {oranged}
        {yellowd}
        {greend}
        {blued}
        {indigod}
        {violetd}
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
