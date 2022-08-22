import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B2DCF2",
    flexWrap: 'wrap',
    flexDirection: "row",
    marginBottom: "-100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: colors.white,
    color: colors.black
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%",
    color: colors.black,
  },
  icon: {
    fontSize: 24,
    color: colors.secondary,
    padding: 10
  },
  imagem:{
    alignItems: 'center',
    width: "100%",
    height: 250
  },
  viewimage:{
    backgroundColor: colors.white,
  }
})

export default styles;