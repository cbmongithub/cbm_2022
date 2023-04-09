import { Suspense } from 'react'
import Loader from '../../components/Loader'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { MetaData } from '../../data'
import Hero from '../../components/Hero'

import './style.css'

const Home = () => (
  <HelmetProvider>
    <Helmet>
      <title>{MetaData.site_title} | Home</title>
      <meta name='description' content={MetaData.site_description} />
    </Helmet>

    <section
      className={`${
        localStorage.getItem('theme') === 'dark' ? 'home' : 'home-2'
      }`}
    >
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
    </section>
  </HelmetProvider>
)

export default Home
