import React from 'react';
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

export default function FeedbackOptions ({options, onLeaveFeedback}) {
  return (
    <ul className={css.feedbackButtonList}>
      {options.map(option => {
        return <li key={option} className={css.feedbackButtonListItem}>
          <button className={css.feedbackButton} name={option} onClick={onLeaveFeedback} type="button">{option}</button>
        </li>
      })}
    </ul>
  )
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func
}