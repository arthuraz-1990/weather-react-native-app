import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import CustomText from "../components/element/CustomText";

const LoadingScreen = ({ textStyle }) => (
    <View style={styles.container}>
        <ActivityIndicator size='large'/>
        <CustomText bold style={[styles.text, textStyle]}>Carregando...</CustomText>
    </View>
);

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: '700'
    }
})