import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="question-btn"
          onClick={() => {
            setShowInfo(!showInfo)
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
