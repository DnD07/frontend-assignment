import React from 'react'
// import {Helmet} from "react-helmet";
import Home from './Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = () =>{
    return(
        <>
        <div className='app'>
        {/* <Helmet>
                <meta charSet="utf-8" />
                <title>Online Store</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Site icon "/>
            </Helmet> */}

       <BrowserRouter>
       <Routes>
        <Route index element={<Home/>}/>
       </Routes>
       </BrowserRouter>
        </div>
        </>
    );
}

export default App;