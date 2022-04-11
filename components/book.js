import Link from "next/link";

const Book = (props) => {
    return (
        <div className='space-y-12'>
            {props.cover}
            {props.name}
            {props.author}
        </div>
    );
}
 
export default Book;