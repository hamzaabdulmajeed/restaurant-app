"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function DropdownButton({ buttonLabel = "Options", menuItems = [] }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          color: "black",
          "&:hover": {
            backgroundColor: "transparent",
          },
          borderRadius: "4px",
          textTransform: "none",
          width: "316px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {buttonLabel}
        <ArrowDropDownIcon sx={{}} />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default DropdownButton;
