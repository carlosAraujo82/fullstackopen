import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import axios from 'axios'

const Filter = (props) => {
  return(<div>Filter shown with <input onChange={props.handleChange}/></div>)
}

const PersonForm = (props) => {
  return(<form onSubmit={props.submit}>
      <div>Name: <input value={props.newName} onChange={props.nameChange}/></div>
      <div>Number: <input value={props.newNumber} onChange={props.numberChange} /></div>
      <div>
        <button type="submit">add</button>
      </div>
  </form>)
}

const Persons = (props) => {
  return(<ul>{props.personsToShow.map(person => <Person key={person.id} person={person}/>)}</ul>)
}

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '040-1234567', id: 1 }]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
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

  const personsToShow = filterText === ''
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterText(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleFilterChange}/>
      <h2>Add a New</h2>
      <PersonForm submit={addPerson} newName={newName} nameChange={handleNameChange} newNumber={newNumber} numberChange={handleNumberChange}/>
      <h2>Numbers:</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App
