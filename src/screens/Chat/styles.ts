import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
    backgroundColor: colors.offwhite
  },

  borderbox: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderBottomWidth: 0.2,
    marginLeft: 40,
    justifyContent: "flex-start",
    width: 400,
    opacity: 1,
  },
  rowSearch: {
    flexDirection: "row",
    borderRadius: 0.5,
    borderColor: colors.black,
    margin: 10,
    alignItems: "center",
    borderWidth: 0.2,
    width: 300,
    height: 45
  },

  rowConfig: {
    flexDirection: "row",


    marginTop: 20,
    right: -5,
    alignItems: "center",

    

  },
  icon: {
    fontSize: 15,
    marginLeft: 10,
    padding: 10,
    color: colors.gray
  },
  input: {
    width: "40%",
  },
  list: {
    marginBottom: 10
  }
});

export default styles
