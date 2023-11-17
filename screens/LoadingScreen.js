import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import CustomText from "../components/element/CustomText";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

const LoadingScreen = ({ textStyle }) => (
    <View style={styles.mainContainer}>
        <View style={styles.borderContainer}>
            <ActivityIndicator size='large'/>
            <CustomText bold style={[styles.text, textStyle]}>Carregando...</CustomText>
        </View>
    </View>
);

export default LoadingScreen;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    borderContainer: {
        borderRadius: 5,
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        padding: 15
    },
    text: {
        fontSize: FontSize.getSize('main', width) + 6,
        fontWeight: '700',
        color: Colors.accent500
    }
})