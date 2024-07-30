import './App.css';
import SearchPage from './pages/Search-page.js';
import Layout from './Layout/Layout.js';
import {Route, RouterProvider, createRoutesFromElements,createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.js';
import NotFound from './components/NotFound.js';

import useApicall from './customHook/useApicall.js';
import Pdp from './components/Pdp.js';

function App() {


  const {detailData, contactData, error} = useApicall();

 /* useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get( `${detailsApi}`);
        ////console.log("detailsmainpage",response.data);
        setDetailData(response.data); 
        localStorage.setItem('Session_status', JSON.stringify(response.data.session_valid));
      } catch (error) {
        //console.error(error);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await axios.get( `${contactApi}`);
        ////console.log("setContactData", response.data);
        setContactData(response.data); 
      } catch (error) {
        ////console.log(error);
        ////console.log(error.response.data.session_valid)
        setError(error.response.data.session_valid)
      }
    };

    fetchData1();
    fetchData2();
  }, []);
*/
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout detailData={detailData} contactData={contactData} error={error}/>}>
        <Route index element={<Home/>}/>
        <Route path='search' element={<SearchPage/>}/>
         
        <Route path='search/:pdpid' element={<Pdp/>}></Route>
        <Route path='*' element={<NotFound error="404 page not found"/>}/>
      </Route>
    )
  )


 //console.log("detaildtaa",detailData)
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
