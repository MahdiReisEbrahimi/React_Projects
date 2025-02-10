import { useState } from 'react'
import InputForm from './Form/InputForm'
import ThingsContainer from './Cards/ThingsContainer'

const x = [{
  name: 'pillow',
  age: 23,
  id: 101212,
},]

function App() {

  const [things, setThings] = useState(x);

  const formSaveHandler = (input) => {
    const newThing = {
      name: input.nameInput,
      age: input.age,
      id: Math.random().toString(),
    }
    setThings([newThing, ...things]);
  }
  return (
    <div className='flex flex-col bg-amber-800 p-2 w-100 ml-auto mr-auto'>
      <InputForm onFormSave={formSaveHandler} />
      <ThingsContainer thingK={things} />
    </div>
  )
}

export default App
