import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B2DCF2",
    flexWrap: 'wrap',
    flexDirection: "row",
    
  },
  imagem:{
    alignItems: 'center',
    height: 250
  },
  viewimage:{
    backgroundColor: colors.white,
  }
})

export default styles;