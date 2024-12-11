import { useEffect, useState } from 'react'
import { PhoneApp } from './components/PhoneApp/PhoneApp'
import { MainApp } from './components/MainApp/Main'

function App() {
  const DevOkokPhone = import.meta.env.DEV && true // Todo: set to false when building for production
  const [isOkokPhone, setIsOkokPhone] = useState(false)


  // Run on mount
  useEffect(()=>{
    // Check if we the app is loaded by okokPhone
    setIsOkokPhone(DevOkokPhone ? true : window.self?.parent?.name === "okokPhone")
  },[])

  return (
    <>
     {isOkokPhone ? <PhoneApp /> : <MainApp />}
    </>
  )
}

export default App
