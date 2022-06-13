
import Head from 'next/head'
import Header from '../Components/Header'
import Feed from '../Components/Feed'
import Footer from '../Components/Footer'
import Modal from '../Components/Modal'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/router"

const Home = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    router.push('/auth/signin')
  }

  return (
    <div className="">
      <Head>
        <title>Adanian Labs Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header with Log out  */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Upload Modal */}
      <Modal />

      {/* Sticky Footer */}

      <Footer />
      

    </div>
  )
}

export default Home
