import Head from "next/head";
const Blog = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            </Head>
            <p>blog stuff</p>
        </>
    );
}
 
export default Blog;