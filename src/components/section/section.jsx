import PropTypes from 'prop-types'

import {TitleEl} from './section.css.jsx'

const Section = ({ title, children }) => {
	return (
		<section>
			<TitleEl>{title}</TitleEl>
			{children}
		</section>
	)
}

Section.defaultProps = {
	title: ''
}

Section.propTypes = {
	title: PropTypes.string
}

export default Section;