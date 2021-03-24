import { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ButtonEl } from './feedbackOptions.css.jsx'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	const buttonsList = options.map((button) => {
		const name = Object.values(button);
		const value = Object.keys(button);
		return <ButtonEl type="button" key={value} value={value} onClick={onLeaveFeedback}>{name}</ButtonEl>
	})
	
	return (
		<Fragment>
			{buttonsList}
		</Fragment>
	);
};

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
	onLeaveFeedback: PropTypes.func
};

export default FeedbackOptions;