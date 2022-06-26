import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,

    resizeMode: "cover",
    backgroundColor: "#F7FFEF",
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    color: colors.black,
    marginLeft: 10,
  },
  icon: {
    color: colors.black,
    textAlign: "right",
    fontSize: 15,
    padding: 5
  },
  link: {
    fontSize: 20
  },
  img: {
    width: 20,
    height: 20,
    borderRadius: 40,
    },
})

export default styles