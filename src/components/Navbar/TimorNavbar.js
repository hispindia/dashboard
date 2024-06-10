import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Colors } from "../../constants";
import { hospitalRoute, malariaRoute, tbRoute } from "../../routes/routes";
import { Link } from "react-router-dom";

const themeTypo = createTheme({
    overrides: {
        MuiTypography: {
            root: {
                margin: '10px 5px',
                zIndex: 1,
                backgroundColor: 'rgba(0,0,0,.24)',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
            },
        },
    }
});

const theme = createTheme({
    overrides: {
        MuiTabs: {
            indicator: {
                backgroundColor: 'transparent',
            },
        },
        MuiTab: {
            root: {
                "&:hover": {
                    // border: "0.5px solid white",
                },
                color: Colors.fontColor,
                backgroundColor: Colors.tabActivebackgroundColor,
                borderRadius: "4px",
                margin: "5px",
                textTransform: "capitalize",
                padding: '0px 12px',
                letterSpacing: '0',
                minHeight: '40px',
            },
            textColorInherit: {
                fontWeight: 300,
            },
        },
    }
});


function SubTabContainer({ route }) {
    const [subValue, setSubValue] = React.useState(0)
    const handleSubChange = (event, value) => {
        setSubValue(value);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <AppBar position="static" style={{ boxShadow: 'none' }}>
                    <Tabs centered value={subValue} onChange={handleSubChange} style={{ background: '#2e3360' }}>
                        {route.map(rt =>
                            <Tab
                                wrapped
                                label={rt.title}
                                value={rt.path}
                                component={Link}
                                to={rt.path}
                            />)}
                    </Tabs>
                </AppBar>

            </div>
        </MuiThemeProvider>
    );
}


function TabContainer(props) {
    const [subValue, setSubValue] = React.useState(0)
    const handleSubChange = (event, value) => {
        setSubValue(value);
    };

    return (
        <MuiThemeProvider theme={themeTypo}>
            <Typography component="div">
                <MuiThemeProvider theme={theme}>
                    <div>
                        <AppBar position="static" style={{ boxShadow: 'none' }}>
                            <Tabs centered value={subValue} onChange={handleSubChange} style={{ background: '#2e3360', marginTop: '-8px' }} wrapped>
                                <Tab label="HIV, STI, Hepatitis" />
                                <Tab label="END TB" />
                                <Tab label="Malaria" />
                            </Tabs>
                        </AppBar>
                        {subValue === 0 && <SubTabContainer route={hospitalRoute} />}
                        {subValue === 1 && <SubTabContainer route={tbRoute} />}
                        {subValue === 2 && <SubTabContainer route={malariaRoute} />}
                    </div>
                </MuiThemeProvider>
            </Typography>
        </MuiThemeProvider>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};


function TimorNavbar() {
    const [value, setState] = React.useState(0)

    const handleChange = (event, value) => {
        setState(value);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <AppBar position="static" style={{ boxShadow: 'none' }}>
                    <Tabs wrapped centered value={value} onChange={handleChange} style={{ background: 'radial-gradient(farthest-side at 20% 277px, rgb(68 72 113) 64%  , rgb(24 27 70))' }}>
                        <Tab label="Integrated TB, HIV, Malaria dashboard" component={Link} value='/' to='/' />
                        <Tab label="Disease-specific dashboard" />
                    </Tabs>
                </AppBar>
                {value === 1 && <TabContainer>Item Two</TabContainer>}
            </div>
        </MuiThemeProvider>
    );
}

TimorNavbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default TimorNavbar;
