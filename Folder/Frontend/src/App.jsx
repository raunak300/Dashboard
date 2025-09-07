import Nav from './Components/Nav'
import Footer from './Components/Footer'
import MComponent from './Body/MComponent'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col h-screen '>
        <div
          className='h-[10%]'
        ><Nav /></div>
        <div
          className='h-[80%] flex flex-col'
        >
          <div
            className='h-[95%] overflow-auto'
          >
            <MComponent />
          </div>
          <div
            className='h-[5%]'
          ><Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
