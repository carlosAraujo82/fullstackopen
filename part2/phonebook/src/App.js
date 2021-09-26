import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
  
    if (persons.some(p => p.name === personObject.name) === true)
    {
      alert(personObject.name + ' is already added to phonebook!');
    }
    else
    {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      {/* <div>debug newName: {newName}</div>
      <div>debug newNumber: {newNumber}</div> */}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>Name: <input value={newName} onChange={handleNameChange}/></div>
        <div>Number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers:</h2>
      <ul>{persons.map(person => <Person key={person.name} person={person}/>)}</ul>
    </div>
  )
}

export default App
