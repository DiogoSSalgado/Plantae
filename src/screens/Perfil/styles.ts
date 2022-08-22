import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "#F7FFEF",
  },
  titlebold: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 5,
    color: colors.black,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    justifyContent: "center",
    color: colors.black,
    marginLeft: 10,
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