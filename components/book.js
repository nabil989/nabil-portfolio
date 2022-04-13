import Link from "next/link";

const Book = (props) => {
    return (
        <div className='space-y-6 flex flex-col justify-center items-center text-center align-middle'>
            <div className='flex space-y-4 flex-col items-center text-center justify-center align-middle'>
                <h className='font-bold text-3xl md:text-4xl'>
                    {props.name}
                </h>
                <h className='font-semibold text-xl md:text-2xl'>
                    By: {props.author}
                </h>
            </div>
            <div className='flex flex-col'>
                <div className=' md:text-lg md:w-3/4 w-4/5 mx-auto justify-center text-center  '>
                    {props.thoughts}
                </div>
            </div>
            
        </div>
    );
}
 
export default Book;