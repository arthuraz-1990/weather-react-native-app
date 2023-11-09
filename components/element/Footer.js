import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import CustomText from "./CustomText";

const Footer = () => (
    <View style={styles.container}>
        <CustomText style={styles.footerText} bold>Previsão Fornecida por WeatherAPI.com</CustomText>
    </View>
)

export default Footer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    footerText: {
        fontWeight: '600',
        color: Colors.accent500,
        fontSize: 13
    }
})
    