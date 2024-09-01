import React, { useState } from "react";
import "./DashboardTopBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CardIcon from "../../../assets/icons/cards-01-stroke-rounded.svg";
import ListIcon from "../../../assets/icons/right-to-left-list-dash-stroke-rounded.svg";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
    display: "flex",
    backgroundColor: "#f0f2f5", // Background color for the toggle switch
    borderRadius: "30px", // Rounded corners
  }));

  // Styled button equivalent to .toggle-button
  const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    border: "none",
    backgroundColor: "transparent", // Default button background color
    color: "#000", // Default button text color
    fontSize: "15px",
    padding: "8px 20px",
    cursor: "pointer",
    fontFamily: "Onest",
    textTransform: "initial",
    borderRadius: "30px", // Rounded corners
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    "&.Mui-selected": {
      backgroundColor: "#005686", // Active button background color
      color: "#ffffff", // Active button text color
    },
    transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition for color changes
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
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="border-0 bg-transparent text-dark"
          >
            Oraș
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="border-0 bg-transparent text-dark"
          >
            Domeniu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="border-0 bg-transparent text-dark"
          >
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
        <StyledToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="view switch"
        >
          <StyledToggleButton
            value="card"
            aria-label="card view"
            className="view-style-button"
          >
            {/* Replace these spans with your custom icons if needed */}
            <img src={CardIcon} alt="Card Icon" role="img" aria-label="card" width={20}/>
            Card
          </StyledToggleButton>
          <StyledToggleButton
            value="list"
            aria-label="list view"
            className="view-style-button"
          >
            <img src={ListIcon} alt="List Icon" role="img" aria-label="card" width={20}/>
            Listă
          </StyledToggleButton>
        </StyledToggleButtonGroup>
      </div>
    </div>
  );
};

export default DashboardTopBar;
