import React, { useState } from 'react';
import styles from './style.module.css';

const months = [
     'Октябрь', 'Ноябрь', 'Декабрь','Январь', 'Февраль',
];

const Month = () => {
    const [activeMonth, setActiveMonth] = useState('Сентябрь');

    const handleClick = (month) => {
        setActiveMonth(month);
        // здесь можно передать значение переменной, например, вызвать функцию родительского компонента
        // this.props.onMonthChange(month);
    };

    return (
        <div className={styles.container}>
            {months.map(month => (
                <button
                    key={month}
                    className={styles.button}
                    onClick={() => handleClick(month)}>
                    {month}
                </button>
            ))}
        </div>
    );
};

export default Month;



