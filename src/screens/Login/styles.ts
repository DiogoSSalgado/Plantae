import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white

  },
  title: {
    fontSize: 30,
    letterSpacing: 4,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary,
    marginBottom: 20,
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
    alignItems: 'center',
    width: 250,
    height: 150
  },
  viewimage:{
    alignItems: 'center',
    margin: 10
  }
})

export default styles;