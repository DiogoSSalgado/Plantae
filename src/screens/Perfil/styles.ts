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
    justifyContent: "flex-start",
    color: colors.black,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    justifyContent: "flex-start",
    color: colors.black,
    marginLeft: 10,
  },
  icon: {
    color: colors.black,
    fontSize: 15,
    padding: 5,
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