import { Colors } from "../../constants";

const dashboardStyle = {
    loader: {
        margin: "auto",
        marginTop: '50vh'
    },
    cardTitle: {
        margin: 0,
        fontWeight: '400',
        fontSize: '20px'
    },
    graphCard: {
        margin: '0',
        width: '100%',
        // height: '600px',
        position: 'absolute',
        transform: 'translate(10px, 670px)',
        backgroundColor: Colors.Graph.backgroundColor,
    },
    subGraphCard: {
        margin: '0',
        width: '100%',
        minHeight: '300px',
        backgroundColor: Colors.Graph.backgroundColor,

    },
    graphStyle: {
        color: Colors.fontColor,
        margin: 0,
        fontWeight: '400',
        fontSize: '20px',
        backgroundColor: Colors.Graph.backgroundColor,
    }

};

export default dashboardStyle;
