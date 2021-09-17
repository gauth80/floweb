import React, {useState, useEffect} from 'react';

import {Link as LinkRouter} from 'react-router-dom';

// Material Ui
import clsx from 'clsx';
import useStyles from './styles';

import { Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Divider,
    List,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    MenuItem,
    IconButton,
    Link } from '@material-ui/core';

// Global Sidebar
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Website
import HomeIcon from '@material-ui/icons/Home';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HelpIcon from '@material-ui/icons/Help';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Utility
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import LanguageIcon from '@material-ui/icons/Language';

// Account
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SettingsIcon from '@material-ui/icons/Settings';

// Components tiers
//import data from './../../routes/data.json';



/*
* @Params : children => vue, data => json
* @Note : format incontrollée
*/
const Sidebar = ({children}) => {

    // charge les styles.js
    const classes = useStyles();

    // etat local
    const storedMode = localStorage.getItem("DARK_MODE");
    const [open, setOpen] = useState(false);
    const [night, setNight] = useState(storedMode);
    const [log, setLog] = useState(false);
    // handler
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    const handleNight = () => setNight(!night);

    //effect

    useEffect(()=> {
        localStorage.setItem("DARK_MODE", night);
    }, [night]);

    // view
    return (
        <div className={`${classes.root} app`} data-theme = {night? "dark" : "light"}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Navigation
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}

                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {classes.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <Divider />

                <List>
                    <ListSubheader>WebSite</ListSubheader>
                    <MenuItem>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <LinkRouter to="/">Accueil</LinkRouter>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><QuestionAnswerIcon/></ListItemIcon>
                        <LinkRouter to="/contact">Contact</LinkRouter>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><HelpIcon/></ListItemIcon>
                        <LinkRouter to="/aide">Aide</LinkRouter>
                    </MenuItem>
                    <MenuItem>
                        {
                            log ? (
                                <>
                                    <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                                    <LinkRouter to="/logout">Se déconnecter</LinkRouter>
                                </>
                            ) : (
                                <>
                                    <ListItemIcon><PersonAddIcon/></ListItemIcon>
                                    <LinkRouter to="/inscription">S'inscrire</LinkRouter>
                                </>
                            )
                        }
                    </MenuItem>

                    <Divider />
                    <ListSubheader>Utilitaire</ListSubheader>
                    <MenuItem>
                        <ListItemIcon onClick={handleNight}>
                            {!night ? (
                                <>
                                    <ListItemIcon><NightsStayIcon/></ListItemIcon>
                                    <Link>Mode sombre</Link>
                                </>
                            ) : (
                                <>
                                    <ListItemIcon><Brightness5Icon/></ListItemIcon>
                                    <Link>Mode clair</Link>
                                </>
                            )}
                        </ListItemIcon>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><LanguageIcon/></ListItemIcon>
                        <ListItemText>A venir..</ListItemText>
                    </MenuItem>

                    <Divider />
                    <ListSubheader>Compte</ListSubheader>
                    <MenuItem>
                        <ListItemIcon><SupervisedUserCircleIcon/></ListItemIcon>
                        <LinkRouter to="/gestion">Gestion</LinkRouter>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon><SettingsIcon/></ListItemIcon>
                        <LinkRouter to="/setting">Paramètre</LinkRouter>
                    </MenuItem>
                </List>

                <Divider />


            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {children}
            </main>
        </div>
    );
}

export default Sidebar;
