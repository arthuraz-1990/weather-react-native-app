import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const LoadingScreen = () => (
    <View style={styles.container}>
        <ActivityIndicator size='large'/>
        <Text style={styles.text}>Carregando...</Text>
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