import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center pt-8 px-8">
        <h1 className="text-center">
          Welcome to{' '}
          <a className="link" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <h3 className="pt-8 italic text-center">
          with{' '}
          <a className="link" href="https://tailwindcss.com">
            Tailwind
          </a>
        </h3>

        <h6 className="pt-8">Demo of Tailwind text sizing:</h6>
        <div className="grid grid-cols-3 gap-4 text-center justify-center items-center p-4">
          <p className="text-xs">xs</p>
          <p className="text-sm">sm</p>
          <p className="text-base">base</p>
          <p className="text-lg">lg</p>
          <p className="text-xl">xl</p>
          <p className="text-2xl">2xl</p>
          <p className="text-3xl">3xl</p>
          <p className="text-4xl">4xl</p>
          <p className="text-5xl">5xl</p>
        </div>

        <p className="pt-8 leading-6 text-2xl">
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className="card">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
