export const BookList = (props) => {
    const bookElements = [];

    for (const book of props.books) {
        bookElements.push(
            <li>
                <article>
                    <h2>{book.title}</h2>
                    <div>Year: {book.year}</div>
                    <div>{book.edition}</div>
                    <footer>
                        <span>Author: {book.author}</span>
                    </footer>
                </article>
            </li>
        );
    }

    return (
        <ul>
            {bookElements}
        </ul>
    )
}