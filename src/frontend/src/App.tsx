import FeaturedProducts from './sections/featured-products'
import FeaturesSection from './sections/features'
import HeroSection from './sections/hero-section'

function App() {

  return (
    <div className='flex flex-col justify-center items-center'>
      <HeroSection />
      <FeaturesSection />
      <FeaturedProducts />
    </div>
  )
}

export default App
