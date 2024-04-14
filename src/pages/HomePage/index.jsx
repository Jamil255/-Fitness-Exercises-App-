import React, { useState } from 'react'
import HeroBanner from '../../component/HeroBanner'
import Exercises from '../../component/Exercises'
import SearchExercises from '../../component/SearchExercises'

const HomePage = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </>
  )
}

export default HomePage
