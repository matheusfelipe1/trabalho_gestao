import Home from "../components/Home";
import Content from "../components/Content";
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Content }  path="/content" />
       </BrowserRouter>
   )
}

export default Routes;