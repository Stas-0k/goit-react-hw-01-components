import PropTypes from 'prop-types';
import cont from './container.module.css'

export function Container({ children }) { 
    return <div className={cont.container}>{children}</div>
}

Container.propTypes = {
    children: PropTypes.node
}


