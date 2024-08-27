import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Dropdown } from "react-bootstrap";

const DashboardTopBar = () => {
  // Search Button
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black", // Set the text color to black
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 2, 1, 2),
      // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      color: "black", // Set the input text color to black
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
      "&::placeholder": {
        color: "black", // Set the placeholder text color to black
        opacity: 1, // Ensure the placeholder is fully opaque
      },
    },
  }));

  // Mobile Search
  const MobileSearch = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const MobileSearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const MobileStyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // Switch Toggle
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    backgroundColor: "#f1f3f5", // Background color for the entire switch
    borderRadius: theme.shape.borderRadius,
    padding: "4px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  }));

  // Styled component for each ToggleButton
  const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    textTransform: "none", // Ensure text remains normal case
    borderRadius: theme.shape.borderRadius, // Match border radius for both buttons
    border: "none", // Remove the default border
    padding: "6px 16px", // Adjust padding
    "&.Mui-selected": {
      backgroundColor: "#0B132B", // Active background color
      color: "#fff", // Active text color
      "&:hover": {
        backgroundColor: "#0B132B", // Hover effect on active button
      },
    },
    "&:not(.Mui-selected)": {
      backgroundColor: "transparent", // Inactive background color
      color: "#000", // Inactive text color
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.05)", // Hover effect on inactive button
      },
    },
  }));

  const [view, setView] = useState("card");

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <div className="d-flex shadow px-4 py-3 rounded-4 justify-content-between mb-5">
      <div className="d-flex gap-2 align-items-center">
        <Search className="m-0 text-white search-bar bg-body-secondary rounded-pill">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Căutare..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Oraș
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Domeniu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Nr. participanți
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        {/* <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={isCardView}
              onChange={handleSwitch}
            />
            <span className="slider"></span>
          </label>
          <span>{isCardView ? "Card View" : "List View"}</span>
        </div> */}
        <StyledToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="view switch"
        >
          <StyledToggleButton value="card" aria-label="card view">
            {/* Replace these spans with your custom icons if needed */}
            <span role="img" aria-label="card">
              📋
            </span>{" "}
            Card
          </StyledToggleButton>
          <StyledToggleButton value="list" aria-label="list view">
            <span role="img" aria-label="list">
              📋
            </span>{" "}
            List
          </StyledToggleButton>
        </StyledToggleButtonGroup>
      </div>
    </div>
  );
};

export default DashboardTopBar;
