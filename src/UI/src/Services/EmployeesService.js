import axios from "axios";
import { Baseurl } from "../Const";

//Gets The employee details

export async function getEmployees() {
  let url = Baseurl + "/api/employees";
  console.log("Url", url);
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.error("an Error occured", error));
};

export async function putEmployees(employee) {
  let url = Baseurl + "/api/employees";
  console.log("employee",employee);
  await axios
    .put(url,employee,{
      headers:{
        'Content-Type': 'application/json'
      }})
      .then((response) => console.log("response",response));
}
