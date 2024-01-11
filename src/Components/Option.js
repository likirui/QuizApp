// Option.js

// Import necessary React modules and components
import React, { Component } from 'react';

// Class component representing a set of options for a question
class Options extends Component {
	// Render method to display the options
	render() {
		// Destructure props for easy access
		const { options, selectedOption, onOptionChange } = this.props;

		return (
			<div className='options'>
				{/* Map through the options and create a radio input for each */}
				{options.map((option, index) => (
					<div key={index} className="form-check">
						{/* Radio input for the option */}
						<input
							type="radio"
							name="option"
							value={option}
							checked={selectedOption === option}
							onChange={onOptionChange}
							className="form-check-input"
						/>
						{/* Label for the radio input */}
						<label className="form-check-label">{option}</label>
					</div>
				))}
			</div>
		);
	}
}

// Export the Options component for use in other parts of the application
export default Options;
