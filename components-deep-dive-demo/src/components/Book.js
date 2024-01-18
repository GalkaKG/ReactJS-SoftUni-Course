import { useEffect, useState } from "react";

export const Book = (props) => {
    const [highlited, setHighlited] = useState(false);

    useEffect(() => {
        console.log('Mounting');
    }, [])

    const clickHandler = () => {
        setHighlited(state => !state);
    };

    let style = {};
    if (highlited) {
        style.backgroundColor = 'blue';
    }

    return (
        <li onClick={clickHandler} style={style}>
            <article>
                <h2>{props.title}</h2>
                <div>Year: {props.year}</div>
                <div>{props.edition}</div>
                <footer>
                    <span>Author: {props.author}</span>
                </footer>
            </article>
        </li>
    )
}