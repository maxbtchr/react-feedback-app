import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
   // calcultate ratings average
   let average = feedback.reduce((total, item) => {
      return total + item.rating;
   }, 0) / feedback.length;

   average.toFixed(1).replace(/\.0$/, '');

   return (
      <div className="feedback-stats">
         <h3>{feedback.length} Reviews</h3>
         <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      </div>
   )
}

FeedbackStats.propTypes = {
   feedback: PropTypes.array.isRequired
}

export default FeedbackStats