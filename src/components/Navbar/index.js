import React, {useState} from "react";
import "./styles.scss";

import { Period } from "./Period";
import { Box, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import Modal from "../Modal";

const Navbar = () => {
    const clickedOU = useSelector((state) => state.outree.clickedOU);
    const [displayOU, setDisplayOU] = useState(false);
    
  return (
    <div className="navbar-container">
      <Box sx={{ display: 'flex' }}>
      {clickedOU && clickedOU.name ? 
      <TextField 
      label="Organsation Unit"
      value={clickedOU.name}
      onFocus={() => setDisplayOU(true)}
      /> : ''} 
      <Period />
      </Box>
      {displayOU && <Modal setDisplay={setDisplayOU}/>}

    </div>
  );
};

export default Navbar;
