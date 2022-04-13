import Book from '../../components/book'
import Image from 'next/image'
const Grit = () => {
    return (
        <div>
            <Book
                // cover={
                //     <Image width='250px' height='250px' src='/../public/book_covers/grit.jpeg'/>
                // }
                // title={
                //     <>https://www.google.com/books/edition/Grit/pFoJCgAAQBAJ?hl=en&gbpv=0</>
                // }
                name={
                    <h1>Grit: The Power of Passion and Perseverance</h1>
                }
                author={
                    <p>Angela Duckworth</p>
                }
                thoughts={
                    <p className='text-center '>
                        Grit was a pretty interesting book. A lot of the ideas that were stated are at first glance arequite obvious, however, people often ignore the simplest and most obvious of things.
                        The book promotes achievement and hardwork over talent, which is something that I agree with. Even if you're the most talented musician in the world, without practice you won't go far.
                        One idea that I really liked from the book was the concept of identity and how it shapes what we do. All of our actions and our worldviewe are based on our identity if you think about it.
                        This is why people with fixed mindsets never manage to go far or accomplish much of anything compared to those with growth mindsets who manage to continuously grow and get better. These are just my initial thoughts on the book.
                        I personally believe that when one wants to be somewhere or achieve their dreams, their identity must first match what they want to accomplish. I would recommend this book to anyone interested in becoming a better version of themselves.
                    </p>
                }
            
            />
        </div>
    );
}
 
export default Grit;