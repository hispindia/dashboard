import React, {useEffect} from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import OrganisationUnitTree from '../OrganisationUnitTree';
import { Box, Button } from "@material-ui/core";


const Navbar = ({setDisplay}) => {
    const clickedOU = useSelector((state) => state.outree.clickedOU);

    useEffect(() => {
        if(clickedOU && clickedOU.id) {
            setDisplay(true)
        }
    }, [clickedOU])
    
  return (
    <div className="modal-container">
      { <OrganisationUnitTree />}
      <Box sx={{ my: 2 }} >
      <Button variant="contained" color="success" onClick={() => setDisplay(false)}>Submit</Button>
      </Box>
    </div>
  );
};

export default Navbar;
