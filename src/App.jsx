import './App.css'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Section from './components/Section/Section'

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Form />
        <Section />
      </main>
      <Footer />
    </div>
  )
}

export default App
