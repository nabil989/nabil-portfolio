import Link from "next/link";

const Book = (props) => {
    return (
        <div className='space-y-6 flex flex-col justify-center items-center text-center align-middle'>
            <div className='flex space-y-4 flex-col items-center text-center justify-center align-middle'>
                <a className='font-bold text-3xl md:text-4xl transition-all duration-500  hover:scale-105'target="_blank" href="https://www.google.com/books/edition/Grit/pFoJCgAAQBAJ?hl=en&gbpv=0" rel="noopener noreferrer">{props.name}</a>
                <a className='font-semibold text-xl md:text-2xl transition-all duration-500  hover:scale-105'target="_blank" href="https://www.google.com/search?q=angela+duckworth&oq=angela+duckwor&aqs=chrome.0.35i39j46i67i131i433j69i57j69i59j46i20i263i433i512j69i60j69i61l2.2492j0j7&sourceid=chrome&ie=UTF-8" rel="noopener noreferrer">By: {props.author}</a>
            </div>
            <div className='flex flex-col'>

            </div>
            
        </div>
    );
}
 
export default Book;