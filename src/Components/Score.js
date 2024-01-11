// Score.js

import React, { Component } from 'react';
import '../App.css';

class Score extends Component {
    render() {
        // Destructure props for easy access
        const { score, onNextQuestion, questionBank } = this.props;

        return (
            <div>
                {/* Display the results heading */}
                <h2>Results</h2>

                {/* Display the user's total score */}
                <h4>Your score: {score}</h4>

                {/* Iterate through each question in the questionBank array */}
                {questionBank.map((question, index) => (
                    <div key={index}>
                        {/* Display the question number and text */}
                        <p>
                            Question {question.id}: {question.question}
                        </p>
                        {/* Display the user's answer and a checkmark/cross for correctness */}
                        <p>
                            Your Answer: {question.userAnswer || "Not answered"}
                            {question.userAnswer === question.answer
                                ? "  ✓ Correct"
                                : `  ✗ Wrong | Correct Answer: ${question.answer}`}
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Score;
