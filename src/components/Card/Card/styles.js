
const cardStyle = {
  card: {
    // border: "0",
    margin: "0",
    borderRadius: "10px",
    color: "rgba(244,244,245,.6)",
    // background: 'rgb(0 0 0 / 24%)',
    width: "100%",
    boxShadow: '0 25px 20px -20px rgba(0,0,0,.1), 0 0 15px rgba(0,0,0,.06)',
    position: "relative",
    display: "block",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center",
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px",
    },
  },
};

export default cardStyle;
