import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  buttonTransparente: {
    backgroundColor: "#DAEBFB",
    borderRadius: 30,
    justifyContent: 'center',
    margin: 10, 
    marginLeft: 20, 
    width: '40%',
    height: '10%'
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