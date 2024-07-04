import './App.css'
import Footer from './layouts/Footer'
import Main from './layouts/Main'
import Header from './layouts/Header'


function App() { 
  

  return (
    <div className='flex flex-col gap-12 bg-custom-gradient font-generalRegular lg:gap-16'>
      <Header />
      <Main />
      <Footer />
      {/* <Logo /> */}
    </div>
  ) 
}

export default App
