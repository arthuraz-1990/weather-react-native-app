import { Button, StyleSheet, Text, View } from "react-native";

const ErrorScreen = ({ onPressRetry }) => (
    <View style={styles.container}>
        <Text style={styles.text}>Não foi possível carregar os dados de previsão.</Text>
        <Button style={[styles.text]} title="Tentar novamente" onPress={onPressRetry.bind(this)}/>
    </View>
);

export default ErrorScreen;

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