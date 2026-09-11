import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Temporary placeholder sections */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold">
          Ashutosh Palhare
        </h1>
      </section>
      
      <section id="about" className="section-padding">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold mb-4">About</h2>
          <p className="text-light-muted dark:text-dark-muted">Coming soon...</p>
        </div>
      </section>
    </div>
  )
}

export default App