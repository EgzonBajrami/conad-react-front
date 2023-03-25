import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import React,{Suspense} from 'react';
import PublicRoutes from './Lib/Routes/PublicRoutes';
import PrivateRoutes from './Lib/Routes/PrivateRoutes'
import {routeData} from './Lib/Routes/RouteData'
import {Provider} from 'react-redux';
import {store} from './Lib/store/store.js'
import Header from './components/HeaderMain/Header';
import './scss/style.scss'
import {api,endpoints} from './Lib/Api'
import {useRef, useEffect} from 'react';

function App() {
  const ref = useRef(null)

useEffect(() => {
  const makeCall = async() =>{
    const result = await api.call(endpoints.getOffertImages);
    console.log(result);

  }
  ref.current = setInterval(makeCall, 5 * 60 * 1000);

  return () => {
    if(ref.current){
      clearInterval(ref.current)
    }
  }
}, [])
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )
// Containers


// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
  return (
   <>
   <Provider store={store}> 
   <Header />
  
   <Router> 
    <Suspense fallback={loading}>

   
   <Routes>
   <Route exact path="/login1" name="Login Page" element={<Login />} />
            <Route exact path="/register1" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />

    {routeData.public.map((elem,index)=>( 
      <Route key={index} path={elem.path} element={<PublicRoutes>{elem.element}</PublicRoutes>} />
  ))}
     {routeData.private.map((elem,index)=>( 
      <Route key={index} path={elem.path} element={<PrivateRoutes>{elem.element}</PrivateRoutes>} />
  ))}
   </Routes>
   </Suspense>
   </Router>
   </Provider>
   </>
  );
}

export default App;