import { Footer } from './components/Footer'
import BlogsPage from './components/BlogsPage'
import Nav from './components/Nav'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <div className='w-full pt-28 lg:pt-20'>
      <Nav />
      {/* <div className="flex items-start w-full max-w-[600px] m-auto">
        <RiMessage3Fill className="w-40 h-20" />
        <p className=''>
          Hey, I'm Arnav, and this blog is where I document my journey through the world of tech and development. Whether it's coding tutorials, insights on new technologies, or practical tips, I aim to make it all approachable and useful. If you're into building cool stuff and learning along the way, you're in the right place."
        </p>
      </div> */}
      <BlogsPage />
      <Footer />
      <Analytics/>
    </div>
  )
}

export default App
