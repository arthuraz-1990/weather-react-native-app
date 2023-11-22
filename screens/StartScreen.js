import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const StartScreen = () => (
    <View style={styles.view}>
        <View style={styles.contentView}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/app-icon.png')} style={styles.image} />
            </View>
            <Text style={styles.text}>Previsão do Tempo</Text>
        </View>
    </View>
)

export default StartScreen;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    contentView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        borderRadius: 10,
        padding: 20
    },
    imageContainer: {
        overflow: 'hidden',
        width: 150,
        height: 150
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: FontSize.getSize('large', width),
        fontWeight: '700',
        color: Colors.accent500
    }
})