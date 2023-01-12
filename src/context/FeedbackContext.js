import {createContext, useState} from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 7,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel error amet temporibus vitae nobis ea nihil perferendis laboriosam aliquid esse autem velit magni doloribus unde dolorem, neque totam eum.",
        },
        {
            id: 2,
            rating: 8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel error amet temporibus vitae nobis ea nihil perferendis laboriosam aliquid esse autem velit magni doloribus unde dolorem, neque totam eum.",
        },
        {
            id: 3,
            rating: 9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel error amet temporibus vitae nobis ea nihil perferendis laboriosam aliquid esse autem velit magni doloribus unde dolorem, neque totam eum.",
        },
    ])

    // the edited feedback object goes there
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // update feedback item
    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {
                ...item, ...updatedItem
            } : item))
        )
    }

// set feedback item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext