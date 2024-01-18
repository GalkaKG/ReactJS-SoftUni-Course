import { useEffect, useState } from "react";

export const Book = (props) => {
    const [highlited, setHighlited] = useState(false);
    const [marked, setMarked] = useState(false);

    useEffect(() => {
        console.log('Mounting: ' + props.title);
        debugger;
    }, [])

    useEffect(() => {
        console.log('Updating: ' + props.title);
    }, [highlited, marked])

    const clickHandler = () => {
        setHighlited(state => !state);
    };

    const deleteHandler = () => {
        setMarked(true);
    }

    let style = {};
    if (highlited) {
        style.backgroundColor = 'blue';
    }

    if(marked) {
        style.backgroundColor = 'red';
    }

    return (
        <li style={style}>
            <article>
                <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>{props.edition}</div>
                <footer>
                    <button onClick={clickHandler}>Highlight</button>
                    <button onClick={deleteHandler}>Delete</button>
                    <span>Author: {props.author}</span>
                </footer>
            </article>
        </li>
    )
}