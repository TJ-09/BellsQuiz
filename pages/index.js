import Head from 'next/head'
import NavBar from '../components/NavBar/NavBar'
import Feature from '../components/Feature/Feature'


export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Bell Ring Conductor</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
          <Feature />
        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          Powered by{' '} Love
        </footer>
      </div>
    </>
  )
}
