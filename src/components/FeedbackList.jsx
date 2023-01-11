import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback, handleDelete }) {
   if (!feedback || !feedback.length) return <p>No feedback yet</p>
   console.log(feedback)

   return (
      <div className="feedback-list">
         {feedback.map((item) => {
            return <FeedbackItem
               key={item.id}
               item={item}
               handleDelete={handleDelete} />
         })}
      </div>
   )
}

FeedbackList.propTypes = {
   feedback: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         rating: PropTypes.number.isRequired,
         text: PropTypes.string.isRequired,
      })
   ),
}

export default FeedbackList