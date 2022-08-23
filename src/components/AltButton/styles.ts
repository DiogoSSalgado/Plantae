import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonTransparente: {
    backgroundColor: "#DAEBFB",
    borderRadius: 30,
    justifyContent: 'center',
    marginRight: "30%",
    marginLeft: "14%",
    margin: 5,
    height: '10%'
  },

  buttonThird: {
    backgroundColor: "#EFAD1D",
    borderRadius: 30,
    justifyContent: 'center',
    margin: 5,
    marginTop: "4%",    
  },

  text: {
    color: colors.black,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    fontSize: 18
  }
});

export default styles;