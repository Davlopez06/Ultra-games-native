import Constants from "expo-constants";
import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({
    main : {
        marginTop: Constants.statusBarHeight
    },
    landing : {
        backgroundColor : '#000',
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Style;