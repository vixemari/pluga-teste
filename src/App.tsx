import Footer from './components/ui/footer'
import Header from './components/ui/header'
import Home from './Pages/Home'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
