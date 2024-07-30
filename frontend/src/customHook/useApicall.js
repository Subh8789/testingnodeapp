import React from "react";
import axios from 'axios';
import Token from '../utils/ApiList/Token.js';
//import {detailsApi} from '../utils/ApiList/axiosapi.js'
import {contactApi, detailsApi} from '../utils/ApiList/axiosapi.js'

import { useEffect,useState } from "react";


export default function useApicall() {

  const [detailData, setDetailData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [error,setError] = useState(null);

  useEffect(() => {
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

  return {detailData, contactData, error};

}