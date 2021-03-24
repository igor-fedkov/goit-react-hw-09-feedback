import PropTypes from 'prop-types';

import {StatisticItemEl} from './statistics.css.jsx'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<div>
			<StatisticItemEl>Good: {good}</StatisticItemEl>
			<StatisticItemEl>Neutral: {neutral}</StatisticItemEl>
			<StatisticItemEl>Bad: {bad}</StatisticItemEl>
			<StatisticItemEl>Total: {total}</StatisticItemEl>
			<StatisticItemEl>Positive feedback: {positivePercentage}%</StatisticItemEl>
		</div>
	)
};

Statistics.defaultProps = {
	neutral: 0,
	good: 0,
	bad: 0,
	total: 0,
	positivePercentage: 0
};

Statistics.propTypes = {
	neutral: PropTypes.number,
	good: PropTypes.number,
	bad: PropTypes.number,
	total: PropTypes.number,
	positivePercentage: PropTypes.number
};

export default Statistics;