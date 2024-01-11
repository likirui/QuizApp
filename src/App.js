// App.js

// Import necessary React modules and components
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import Question from "./Components/Question"; // Import the Question component
import qBank from "./Components/QuestionBank"; // Import the question bank data
import Score from "./Components/Score"; // Import the Score component
import "./App.css"; // Import custom styles for the App component

// Class component representing the main Quiz App
class App extends Component {
    // Constructor to initialize the component's state
    constructor(props) {
        super(props);
        // Initialize the state with question bank data, current question index, selected option, score, and quiz end flag
        this.state = {
            questionBank: qBank.map((question) => ({
                ...question,
                userAnswer: null,
            })), // Add a userAnswer property to each question
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
        };
    }

    // Event handler for option change in the Question component
    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    // Event handler for form submission in the Question component
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
        this.handleNextQuestion();
    };

    // Check if the selected option is correct and update the score and userAnswer
    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption, score } = this.state;
        if (selectedOption === questionBank[currentQuestion].answer) {
            this.setState((prevState) => ({
                score: prevState.score + 1,
                questionBank: prevState.questionBank.map((question, index) => {
                    if (index === currentQuestion) {
                        return {
                            ...question,
                            userAnswer: selectedOption,
                        };
                    }
                    return question;
                }),
            }));
        } else {
            this.setState((prevState) => ({
                questionBank: prevState.questionBank.map((question, index) => {
                    if (index === currentQuestion) {
                        return {
                            ...question,
                            userAnswer: selectedOption,
                        };
                    }
                    return question;
                }),
            }));
        }
    };

    // Move to the next question or end the quiz
    handleNextQuestion = () => {
        const { questionBank, currentQuestion } = this.state;
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            this.setState({
                quizEnd: true,
            });
        }
    };

    // Render the component
    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
            this.state;
        return (
            <div className="App d-flex flex-column align-items-center justify-content-center">
                {/* Display the app title */}
                <h1 className="app-title">QUIZ APP</h1>
                {/* Conditional rendering based on quiz end flag */}
                {!quizEnd ? (
                    // Render the Question component if the quiz is not ended
                    <Question
                        question={questionBank[currentQuestion]}
                        selectedOption={selectedOption}
                        onOptionChange={this.handleOptionChange}
                        onSubmit={this.handleFormSubmit}
                    />
                ) : (
                    // Render the Score component if the quiz is ended
                    <Score
                        score={score}
                        onNextQuestion={this.handleNextQuestion}
                        questionBank={questionBank}
                        className="score"
                    />
                )}
            </div>
        );
    }
}

// Export the App component for use in other parts of the application
export default App;
