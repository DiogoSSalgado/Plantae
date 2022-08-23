import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  backgroundrec: {
    backgroundColor: "rgba(217, 217, 217, 0.6)",
    borderRadius: 20,
    marginRight: "5%",
    marginTop: "73%",
    marginLeft: "5%",

  },
  title: {
    fontWeight: "bold",
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
  },

  texto: {
    fontSize: 20,
    marginLeft: "7%",
    paddingBottom: 10,
  }
})

export default styles