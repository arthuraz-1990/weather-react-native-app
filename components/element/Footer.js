import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const Footer = () => (
    <View style={styles.container}>
        <Text style={styles.footerText}>Previsão Fornecida por WeatherAPI.com</Text>
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
        color: Colors.accent500
    }
})
    