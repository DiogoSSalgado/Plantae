import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    resizeMode: "cover",
  },
  titlebold: {
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: 'center',
    color: colors.black,
    marginLeft: 10,
  },

  row: {
    paddingTop: 10,
    flexDirection:'row',
    backgroundColor: colors.white,
  },
  subtitle: {
    fontSize: 12,
    textAlignVertical: 'center',
    justifyContent: "center",
    color: colors.black2,
    marginLeft: 10,
  },
  link: {
    fontSize: 20
  },
  img: {
    marginLeft: 10,
    width: 70,
    height: 70,
    borderRadius: 40,
    },
})

export default styles