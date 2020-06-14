import React, { useEffect } from 'react'
import 'static/sass/component/about/Feedback.scss'
import { useState } from 'react'

function Feedback({ feedback }) {
  const [date, setDate] = useState('')
  useEffect(() => {
    setDate(new Date(feedback.date).toString())
  }, [])

  return (
    <div className='feedback'>
      <span className={`feedback-reaction ${feedback.reaction}`} />
      <div className='feedback-text'>
        <div className='feedback-comment'>{feedback.comment}</div>
        <div className='feedback-related'>{date}</div>
      </div>
    </div>
  )
}

export default Feedback