import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext)

   // calcultate ratings average
   let average = feedback.reduce((total, item) => {
      return total + item.rating;
   }, 0) / feedback.length;

   // average.toFixed(1).replace(/\.0$/, '');
    average.toFixed(2);

   return (
      <div className="feedback-stats">
         <h3>{feedback.length} Reviews</h3>
         <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      </div>
   )
}

export default FeedbackStats