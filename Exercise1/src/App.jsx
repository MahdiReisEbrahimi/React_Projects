import { useState } from 'react'
import InputForm from './Form/InputForm'
import ThingsContainer from './Cards/ThingsContainer'
import Container from './UI/Container';

const list = [{
  name: 'pillow',
  age: 23,
  id: Math.random().toString(),
},]

function App() {

  const [things, setThings] = useState(list);

  const formSaveHandler = (name, age) => {

    setThings((prevThings) => {
      return [
        ...prevThings,
        { name: name, age: age, id: Math.random().toString(), }
      ]
    });
  }

  return (
    <Container bg={"bg-yellow-700 w-100 mr-auto ml-auto mt-30"}>
      <InputForm onFormSave={formSaveHandler} />
      <ThingsContainer thingK={things} />
    </Container>
  )
}

export default App
