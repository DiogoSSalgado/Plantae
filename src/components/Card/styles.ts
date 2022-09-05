import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 5,
    margin: 8,
    width: 345,
  },

  user: {
    paddingLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.secondary,
  },

  data: {
    paddingLeft: 5,
    color: colors.black2,
  },
  titulo:{
    paddingLeft: 5,
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },

  msg: {
    paddingLeft: 5,
    color: colors.black,
  },
  topicos: {
    flexDirection: "row",
  },
  topic: {
    backgroundColor: colors.third,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
  img: {
    width: "100%",
    height: 300,
  },
})

export default styles;