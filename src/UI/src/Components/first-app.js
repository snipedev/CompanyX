import {
  Grid
} from "@mui/material";
//import Stack from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./details";
import  {getEmployees}  from "../Services/EmployeesService";

const FirstApp = (props) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getEmployees().then(data =>{
      console.log("data",data);
      setPost(data);
    });
    //setPost(data?.data);
  }, []);

  return (
    <>
    <div id="parentdiv" style={{padding:'5%'}}>
      <Grid container="false">
        {
        post?.map((item, i) => {
          return (
            <div key={i}>
              <Grid item xs={9}>
                <Home {...item}/>
              </Grid>
            </div>
          );
        })}
        ;
      </Grid>
      </div>
    </>
  );
};

export default FirstApp;
