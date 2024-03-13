import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const myObj = {
    name: 'Pandurang',
    age: 26,
    address: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India'
    }
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Pandurang" post='Software Engineer' imgURL="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" />
      <Card myArr={newArr} />
      <Card />
    </>
  )
}

export default App
