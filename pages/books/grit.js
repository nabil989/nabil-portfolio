import Book from '../../components/book'
import Image from 'next/image'
const Grit = () => {
    return (
        <div>
            <Book
                name={
                    <h1>Grit: The Power of Passion and Perseverance</h1>
                }
                author={
                    <p>Angela Duckworth</p>
                }
            
            />
        </div>
    );
}
 
export default Grit;