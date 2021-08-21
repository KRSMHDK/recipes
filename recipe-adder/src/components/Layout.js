import { Container, Tab, Tabs } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(7),
  },

  link: {
    margin: theme.spacing(1),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [tab, setTab] = useState(0);

  const menuItems = [
    {
      text: 'My Recipes',
      icon: <HomeIcon />,
      path: '/',
    },
    {
      text: 'Add Recipes',
      icon: <AddIcon />,
      path: '/addrecipe',
    },
  ];

  console.log(tab);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Tabs value={tab} onChange={(event, newValue) => setTab(newValue)}>
          {menuItems.map((item) => (
            <Tab
              onClick={() => history.push(item.path)}
              key={item.text}
              label={
                <Typography
                  noWrap
                  className={classes.wrapIcon}
                  variant='subtitle1'
                >
                  {item.icon}
                  {item.text}
                </Typography>
              }
              className={`
                  ${classes.link}
                  ${location.pathname === item.path ? classes.active : null}
                `}
            />
          ))}
        </Tabs>
      </AppBar>

      <Container>
        <div className={classes.page}>
          <div className={classes.toolbar}></div>
          {children}
        </div>
      </Container>
    </div>
  );
}

export default Layout;
