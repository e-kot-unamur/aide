import React from 'react'
import 'static/sass/component/about/Feedback.scss'

function Feedback({ feedback }) {
  return (
    <div className='feedback'>
      <span className={`feedback-reaction ${feedback.reaction}`} />
      <div className='feedback-text'>
        <div className='feedback-comment'>{feedback.comment}</div>
        <div className='feedback-related'>{Date(feedback.date)}</div>
      </div>
    </div>
  )
}

export default Feedback