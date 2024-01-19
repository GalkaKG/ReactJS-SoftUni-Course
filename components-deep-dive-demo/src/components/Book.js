import { useEffect, useState } from "react";
import styles from './Book.module.css';

export const Book = (props) => {
    const [highlited, setHighlited] = useState(false);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        console.log('Mounting: ' + props.title);
        // debugger;
    }, [])

    useEffect(() => {
        console.log('Updating: ' + props.title);
    }, [highlited, deleted])

    const clickHandler = () => {
        setHighlited(state => !state);
    };

    const deleteHandler = () => {
        setDeleted(true);
    }

    let style = {};
    if (highlited) {
        style.backgroundColor = 'blue';
    }

    if(deleted) {
        style.backgroundColor = 'red';
    }

    return (
        <li style={style} className={styles['book-item']}>
            <article>
                <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>{props.edition}</div>
                <footer>
                    <button onClick={clickHandler}>Highlight</button>
                    <button onClick={deleteHandler}>Delete</button>
                    <span className={styles.author}>Author: {props.author}</span>
                </footer>
            </article>
        </li>
    )
}