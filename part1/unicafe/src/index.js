import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => <h2>{title}</h2>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Statistics = ({text, counter}) => <div>{text} {counter}</div>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const saveFeedback = (value, adder) => adder(value + 1)

  return (
    <div>
      <Header title="give feedback" />
      <Button onClick={() => saveFeedback(good, setGood)} text="good" />
      <Button onClick={() => saveFeedback(neutral, setNeutral)} text="neutral" />
      <Button onClick={() => saveFeedback(bad, setBad)} text="bad" />
      <Header title="statistics" />
      <Statistics text="good" counter={good} />
      <Statistics text="neutral" counter={neutral} />
      <Statistics text="bad" counter={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))