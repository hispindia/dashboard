import { Colors } from "../../constants";

const tabsStyle = {

    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    customTabRoot: {
        color: "red",
        backgroundColor: "green"
    },
    customTabIndicator: {
        backgroundColor: "orange"
    },
    tab: {
        // backgroundColor: Colors.tabColor,
        color: Colors.fontColor,
        borderRadius: '4px',
        fontSize: '12px',
        margin: '0 16px 0px 10px',
        fontWeight: 'normal',
    },
    tabs: {
        backgroundColor: Colors.tabActiveColor,
        fontWeight: '700',
        color: 'yellow',
    },

};

export default tabsStyle;
