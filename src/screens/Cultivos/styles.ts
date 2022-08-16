import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#B2DCF2"

  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: colors.white,
    color: colors.black
  },
  formRow: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.secondary,
    borderRadius: 20,
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
    marginTop: 40,
    alignItems: 'center',
    width: "100%",
    height: 250
  },
  viewimage:{
    backgroundColor: colors.white,
  }
})

export default styles;