import FooterApp from './components/FooterApp'
import { HeaderApp } from './components/HeaderApp'
import { AppRouter } from './router/AppRouter'

function App() {
   return (
      <div>
         <HeaderApp />
         <AppRouter />
         <FooterApp />
      </div>
   )
}

export default App
