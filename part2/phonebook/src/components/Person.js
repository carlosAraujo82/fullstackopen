import React from 'react'

const Person = ({ person }) => {
  return (
    <li><b>Name:</b> {person.name} <b>Number:</b> {person.number}</li>
  )
}

export default Person