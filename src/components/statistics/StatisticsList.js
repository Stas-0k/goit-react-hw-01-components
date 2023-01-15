import PropTypes from 'prop-types';
import { Statistics } from './StatisticsListItem'
import css from './statistics.module.css'

export const StatisticsList = ({title, statistics}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>{
            statistics.map(item =>
            (
                <Statistics
                key={item.id}
                label={item.label}
                percentage={item.percentage}
            />
            ))}
            </ul>
            </section>
    )
}
 
StatisticsList.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
