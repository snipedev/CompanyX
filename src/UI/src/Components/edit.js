import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  RadioGroup,
  TextField,
  Radio,
  FormControlLabel,
  CardActions,
  Button
} from "@mui/material";
import React, { useState } from "react";
import { putEmployees } from "../Services/EmployeesService";

export const Edit = (props) => {
  const [name, setName] = useState(props?.name);
  const [username, setuserName] = useState(props?.username);
  const [address, setAddress] = useState(props?.address);
  const [gender, setGender] = useState(props?.gender);
  const [email, setEmail] = useState(props?.email);


  const handleClick = async () => {
    let employee = {
      "id":props.id,
      "username":username,
      "address":address,
      "gender":gender,
      "email":email
    }
    putEmployees(employee)
  }

  return (
    <>
      <Card>
        <CardHeader>Details</CardHeader>
        <CardContent>
          <FormControl>
            <TextField label="Name" variant="standard" required value={name} disabled/>
            <TextField label="UserName" variant="standard" value={username} onChange={e => setuserName(e.target.value)} />
            <TextField
              label="Address"
              variant="standard"
              required
              value={address}
              multiline
              onChange={e => setAddress(e.target.value)}
            />
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={gender}
              name="radio-buttons-group"
              onChange={e => setGender(e.target.value)}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <TextField label="Email" variant="standard" required value=  {email} onChange={e => setEmail(e.target.value)} type="email"/>
            
          </FormControl>
        </CardContent>
        <CardActions>
        <Button size="small" variant="outlined" onClick={handleClick}>Save</Button>
        </CardActions>
      </Card>
    </>
  );
};
