import React from 'react';
import styles from './styles.scss'

const Loader = (props) => (
    <div className="loader text-center">
        <div className="loading"></div>
        <p>{props.text}</p>
    </div>
);

export default Loader