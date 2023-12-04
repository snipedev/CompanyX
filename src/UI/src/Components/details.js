import React, { useState } from "react";
import { Box,Card, CardActions, CardContent, Button, colors } from "@mui/material";
import Modal from '@mui/material/Modal';

import Typography from "@mui/material/Typography";
import { Edit } from "./edit";

function clicked() {
  return <Edit />;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        variant="outlined"
        sx={{minWidth: '20em', minHeight: 300 }}
      >
        <CardContent>
          <Typography variant="h5" component="div" color="text.primary">
            {props.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <label>{props.phonenumber}</label>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <label>{props.email}</label>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <label>{props.gender}</label>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <label>{props.username}</label>
          </Typography>
          <Typography variant="body2">
            <label>{props.address}</label>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" variant="outlined" onClick={handleOpen}>
            Edit
          </Button>
          
        </CardActions>
      </Card>
      <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Edit {...props}/>
            </Box>
          </Modal>
    </>
  );
};

export default Home;
