import Head from 'next/Head'
const About = () => {
    return (  
        <>
            <Head>
                <title>About</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            </Head>
            <div>
                <h1 class="text-red-400">About</h1>
                <p class="text-red-400">lemonade</p>
                <p class='text-3xl'>this is the about page </p>
            </div>
        </>
        
    );
}
 
export default About;