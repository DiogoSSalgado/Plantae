import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 0,
    resizeMode: "cover",
    marginBottom: "5%"
  },

  titlebold: {
    fontWeight: "bold",
    fontSize: 20,
    textAlignVertical: 'center',
    color: colors.black,
    marginLeft: 10,
  },

  column: {
    paddingTop: 0,
    flexDirection:'column',
    width: Dimensions.get("window").width
    
  },

  input: {
    backgroundColor: colors.white,
    paddingLeft: 5,
    borderColor: colors.black2,
    borderWidth: 0.5,
    borderRadius: 8,
    margin: 5, 
    width: '20%'
  },
  subtitle: {
    fontSize: 13,
    textAlignVertical: 'center',
    justifyContent: "center",
    color: colors.black2,
    marginLeft: 10,
  },

  iconview:{
    marginTop: 10,
    
    flex: 1, 
    flexDirection: 'row',
    justifyContent: "flex-start"
  },
  icon: {
    marginLeft: 10,
    paddingLeft: 28,
    
    backgroundColor: "#d3d3d3",
    height: "95%",
    width: "20%",
    borderRadius: 20,
    padding: 5
  },

  link: {
    fontSize: 20
  },
  img: {
    marginLeft: 0,
    width: 70,
    height: 70,
    borderRadius: 0,
  },
  rank: {
    marginTop: 5,
    textAlign: "center",
    
  }
})

export default styles;