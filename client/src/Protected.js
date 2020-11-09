import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Protected = () => {
  const history = useHistory();

  const getProtected = async () => {
    try {
      const res = await axios.get("/protected");

      console.log("res ", res);
      if (res.status === 200) {
        //Even though we're already on at /protected
        //we have to reload (make a HTTP call) in order
        //to be able to fetch the index file for the private SPA.
        //window.location.reload();
      } else {
        window.location = "http://localhost:5000/";
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProtected();
  }, []);
  return <div></div>;
};

export default Protected;
