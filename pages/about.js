import Head from 'next/Head'
const About = () => {
    return (  
        <div>
            <Head>
                <title>About</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            </Head>
            <div class='flex flex-col justify-center items-center space-y-24'>
                <div class='flex flex-col justify-center items-center space-y-12 '>
                    <h class='font-bold text-3xl lg:text-6xl'>Lifelong learner</h>
                    <p class='text-center text-xl md:text-base w-2/5 md:w-7/12'>Hi! My name's Nabil, but you probably already know that. In my freetime I like to read, solve puzzles, take weird and obscure photos, and workout.</p>
                </div>
                <div class='flex flex-col justify-center items-center space-y-12 w-2/5'>
                    <h class='font-bold text-3xl lg:text-4xl'>Technologies I frequently use</h>
                    <div class='grid gap-4 grid-cols-3 grid-rows-6 sm:grid-cols-6 sm:grid-rows-4'>
                        <Link>
                            
                        </Link>>
                        <span>asd</span>

                        <span>asd</span>

                    </div>
                </div>
            </div>
            
        </div>
        
    );
}
 
export default About;