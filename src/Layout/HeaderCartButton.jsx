import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <AiOutlineShoppingCart />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    )
}

export default HeaderCartButton;