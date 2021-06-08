import Head from 'next/head'
import Link from 'next/link'

function Blog() {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>Welcome to the Blog, Baby!</div>
      <Link href='/'>
        <a>Go back home</a>
      </Link>
    </>
  )
}

export default Blog
