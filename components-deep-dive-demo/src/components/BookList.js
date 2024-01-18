import { useEffect } from "react"
import { Book } from "./Book"

export const BookList = (props) => {
    // useEffect(() => {
    //     console.log('Mounting');
    // })

    const bookElements = props.books.map((book, idx) => <Book key={idx} {...book} />)

    return (
        <ul>
            {bookElements}
        </ul>
    )
}