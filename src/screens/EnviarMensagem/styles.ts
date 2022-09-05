import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    borderbox:{
        flexDirection: "row",
        backgroundColor: colors.white,
        borderColor: colors.gray,
        borderBottomWidth: 0.2,
        justifyContent: "flex-start",
        height: 50,
        opacity: 1,
    },
    voltar: {
        paddingLeft: 10,
        paddingTop: 12
    },

    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 10
    },

    textHeader2: {
        fontSize: 17,
        justifyContent: "flex-end",
        left: 150,
        color: colors.secondary,
        paddingTop: 14
    },

    containerForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "100%",
        backgroundColor: colors.white,
        textAlignVertical: 'top',
        borderWidth: 0,
        borderColor: colors.black,
        borderRadius: 5,
        margin: 10,
    },
    label: {
        height: 2
    },
    select: {
        width: "100%", 
    },
    selectTopico: {
        borderWidth: 0,
        borderColor: colors.black,
        borderRadius: 5,
        paddingLeft: 5,
        width: "100%",
        height: 80
    },
    imagem: {
        flexDirection: "row",
    },
    img: {
        borderRadius: 10,
        width: 200,
        height: 200,
    },
    buttonImage: {
        margin: 10,
    },
    buttonTop: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    buttonTopPosition: {
        position: "absolute",
        top: "5%",
        right: "5%",
    },
    textClose: {
        color: colors.white,
        fontSize: 20,
    },
    buttonFlip: {
        position: "absolute",
        top: "5%",
        left: "5%",
    },
    textFlip: {
        fontSize: 18,
        marginBottom: 10,
        color: colors.white,
    },
    viewTakePicture: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
    },
    positionTakePicture: {
        alignSelf: "center",
        flex: 1,
        alignItems: "center",
    },
    buttonTakePicture: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: colors.white,
    },
});

export default styles
