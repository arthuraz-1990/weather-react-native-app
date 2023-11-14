import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import CustomText from "../components/element/CustomText";
import FontSize from "../constants/FontSize";

const LoadingScreen = ({ textStyle }) => (
    <View style={styles.container}>
        <ActivityIndicator size='large'/>
        <CustomText bold style={[styles.text, textStyle]}>Carregando...</CustomText>
    </View>
);

export default LoadingScreen;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: FontSize.getSize('main', width) + 6,
        fontWeight: '700'
    }
})