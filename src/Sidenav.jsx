import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import ClassIcon from "@mui/icons-material/Class";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { TextField, Button, Grid } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [isCollapse, setIsCollapse] = React.useState(false);
  const [isStudentMenuOpen, setIsStudentMenuOpen] = React.useState(false);
  const [isCourseMenuOpen, setIsCourseMenuOpen] = React.useState(false);
  const [isFacultyMenuOpen, setIsFacultyMenuOpen] = React.useState(false);
  const [isExamMenuOpen, setIsExamMenuOpen] = React.useState(false);
  const [isLibraryMenuOpen, setIsLibraryMenuOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  const handleStudentMenuToggle = () => {
    setIsStudentMenuOpen(!isStudentMenuOpen);
  };

  const handleCourseMenuToggle = () => {
    setIsCourseMenuOpen(!isCourseMenuOpen);
  };

  const handleFacultyMenuToggle = () => {
    setIsFacultyMenuOpen(!isFacultyMenuOpen);
  };

  const handleExamMenuToggle = () => {
    setIsExamMenuOpen(!isExamMenuOpen);
  };

  const handleLibraryMenuToggle = () => {
    setIsLibraryMenuOpen(!isLibraryMenuOpen);
  };

  const renderStudentForm = () => {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">Student Management Form</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Student Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Registration Number" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Course" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Phone Number" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderCourseForm = () => {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">Course Management Form</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Course Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Course Code" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Instructor" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderFacultyForm = () => {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">Faculty Management Form</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Faculty Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Faculty ID" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Department" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderExamForm = () => {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">Exam Management Form</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Exam Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Exam Date" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Course" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderLibraryForm = () => {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">Library Management Form</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Book Title" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Book ISBN" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Author" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Student Management Section */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleStudentMenuToggle}>
            <ListItemButton>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Student Management" />
              {isStudentMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isStudentMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Self Registration" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="View Information" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Update Information" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Course Management Section */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleCourseMenuToggle}>
            <ListItemButton>
              <ListItemIcon><ClassIcon /></ListItemIcon>
              <ListItemText primary="Course Management" />
              {isCourseMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isCourseMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Create Course" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Course Enrollment" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Faculty Management Section */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleFacultyMenuToggle}>
            <ListItemButton>
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              <ListItemText primary="Faculty Management" />
              {isFacultyMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isFacultyMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Faculty Profiles" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Leave Management" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Exam Management Section */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleExamMenuToggle}>
            <ListItemButton>
              <ListItemIcon><EventNoteIcon /></ListItemIcon>
              <ListItemText primary="Exam Management" />
              {isExamMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isExamMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Exam Scheduling" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {/* Library Management Section */}
          <ListItem disablePadding sx={{ display: "block" }} onClick={handleLibraryMenuToggle}>
            <ListItemButton>
              <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
              <ListItemText primary="Library Management" />
              {isLibraryMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isLibraryMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Book Inventory" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Book Loan Management" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", padding: 3 }}>
        {isStudentMenuOpen && renderStudentForm()}
        {isCourseMenuOpen && renderCourseForm()}
        {isFacultyMenuOpen && renderFacultyForm()}
        {isExamMenuOpen && renderExamForm()}
        {isLibraryMenuOpen && renderLibraryForm()}
      </Box>
    </Box>
  );
}
