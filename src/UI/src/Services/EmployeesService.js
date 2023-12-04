import axios from "axios";
import { Baseurl } from "../Const";

//Gets The employee details

export async function getEmployees() {
  let url = Baseurl + "/api/employees";
  var employeeData;
  console.log("Url", url);
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.error("an Error occured", error));
};
