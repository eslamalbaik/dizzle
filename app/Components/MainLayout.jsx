import Header from './Header/Header'
import Footer from './Footer'

const MainLayout = ({children}) => {
  return (
    <div className="flex justify-center flex-col items-center w-full bg-custom-gradient">
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}

export default MainLayout