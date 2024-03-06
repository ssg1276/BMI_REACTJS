import React, { useState } from 'react'

function Card() {
  const [state, setState] = useState({
    InputValue: '',
    InputValue2: '',
    result: '0',
    category: '',
  })
  function changeHandler(event) {
    setState({
      ...state,
      InputValue: event.target.value,
      result: '0',
      category: '',
    })
  }
  function changeHandler2(event) {
    setState({
      ...state,
      InputValue2: event.target.value,
      result: '0',
      category: '',
    })
  }

  const calculateHandler = () => {
    let weight = parseFloat(state.InputValue)
    let height = parseFloat(state.InputValue2)

    if (isNaN(weight) || isNaN(height) || height === 0 || weight === 0) {
      setState({
        ...state,
        result: 'Invalid input. Please enter valid values.',
      })
      return
    }

    let bmi = weight / Math.pow(height / 100, 2)
    bmi = Math.round(bmi * 100) / 100

    let category
    if (bmi < 18.5) {
      category = 'Underweight'
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight'
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight'
    } else {
      category = 'Obese'
    }

    setState({ ...state, result: bmi, category: category })
  }

  return (
    <div className="w-auto p-4 h-auto flex flex-col bg-white rounded-md shadow-md shadow-slate-900">
      <div className=" flex flex-col font-black m-4">
        <label htmlFor="weight">Weight:-</label>
        <input
          type="number"
          id="weight"
          className=" outline  rounded-md p-2"
          placeholder="Enter Weight in kgs"
          value={state.InputValue}
          onChange={changeHandler}
        />
      </div>
      <div className=" flex flex-col font-black m-4">
        <label htmlFor="height">Height:-</label>
        <input
          type="number"
          id="height"
          className=" outline  rounded-md p-2"
          placeholder="Enter Height in cms"
          value={state.InputValue2}
          onChange={changeHandler2}
        />
      </div>
      <div className="flex flex-col justify-center m-2">
        <button
          className="font-black bg-indigo-500 p-4 rounded-md "
          onClick={calculateHandler}
        >
          CALCULATE
        </button>
        <p className="m-2">BMI:- {state.result}</p>
        <p>{state.category}</p>
      </div>
    </div>
  )
}

export default Card
