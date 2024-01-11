// Import necessary React modules and the Options component
import React, { Component } from "react";
import Options from "./Option";

// Class-based component representing a single question in the quiz
class Question extends Component {
    // Render method to display the question and options
    render() {
        // Destructure props for easier access
        const { question, selectedOption, onOptionChange, onSubmit } = this.props;

        return (
            <div className="">
                {/* Display the question number */}
                <h3>Question {question.id}</h3>
                {/* Display the question text */}
                <h5 className="mt-2">{question.question}</h5>

                {/* Form for submitting the selected option */}
                <form onSubmit={onSubmit} className="mt-2 mb-2">
                    {/* Render options using the Options component */}
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />

                    {/* Submit button to submit the selected option */}
                    <button type="submit" className="btn btn-primary mt-2">
                        SUBMIT
                    </button>
                </form>
            </div>
        );
    }
}

// Export the Question component for use in other parts of the application
export default Question;
