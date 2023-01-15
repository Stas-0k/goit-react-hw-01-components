import PropTypes from 'prop-types';
import css from './statistics.module.css'

export const Statistics = ({label,percentage }) => { 
    return (             
    <li className={css.itemStat}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>  
    )
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage:PropTypes.number.isRequired,
}