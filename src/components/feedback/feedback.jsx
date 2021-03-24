import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import FeedbackOptions from '../feedbackOptions'
import Notification from '../notification'
import Section from '../section'
import Statistics from '../statistics'

function Feedback({ good, neutral, bad, onBtnClick }) {

	const countTotalFeedback = useCallback(() => {
		return good + neutral + bad;
	}, [good, neutral, bad]);

	const countPositiveFeedbackPercentage = useCallback(() => {
		return good > 0 ? Math.round(good * 100 / countTotalFeedback()) : 0;
	}, [good, countTotalFeedback]);

	return (
		<div>
			<Section title='Please leave feedback'>
				<FeedbackOptions
					options={[{ good: 'Good' },  { neutral: 'Neutral' }, { bad: 'Bad' }] }
					onLeaveFeedback={onBtnClick}
				/>
			</Section>
			<Section title='Statistics'>
				{countTotalFeedback() > 0 ?
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback()}
						positivePercentage={countPositiveFeedbackPercentage()}
					/> :
					<Notification message="No feedback given"></Notification>
				}
				
			</Section>
		</div>
	)
}

// class Feedback extends Component {

// 	countTotalFeedback = () => {
// 		const { good, neutral, bad } = this.props;
// 		return good + neutral + bad;
// 	}

// 	countPositiveFeedbackPercentage = () => {
// 		return this.props.good > 0 ? Math.round(this.props.good * 100 / this.countTotalFeedback()) : 0;
// 	}

// 	render() {
// 		const { good, neutral, bad, onBtnClick } = this.props;
// 		// console.log(this.props);
// 		return (
// 			<div>
// 				<Section title='Please leave feedback'>
// 					<FeedbackOptions
// 						options={[{ good: 'Good' },  { neutral: 'Neutral' }, { bad: 'Bad' }] }
// 						onLeaveFeedback={onBtnClick}
// 					/>
// 				</Section>
// 				<Section title='Statistics'>
// 					{this.countTotalFeedback() > 0 ?
// 						<Statistics
// 							good={good}
// 							neutral={neutral}
// 							bad={bad}
// 							total={this.countTotalFeedback()}
// 							positivePercentage={this.countPositiveFeedbackPercentage()}
// 						/> :
// 						<Notification message="No feedback given"></Notification>
// 					}
					
// 				</Section>
// 			</div>
// 		)
// 	}
// }

Feedback.defaultProps = {
	good: 0,
	neutral: 0,
	bad: 0,
}

Feedback.propTypes = {
	good: PropTypes.number,
	neutral: PropTypes.number,
	bad: PropTypes.number,
	onBtnClick: PropTypes.func
}

export default Feedback;