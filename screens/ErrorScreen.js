import { Button, Dimensions, StyleSheet, View } from "react-native";
import CustomText from "../components/element/CustomText";
import FontSize from "../constants/FontSize";

const ErrorScreen = ({ onPressRetry, onPressSearch }) => (
    <View style={styles.container}>
        <CustomText bold style={styles.text}>Não foi possível carregar os dados de previsão.</CustomText>
        <Button style={[styles.text]} title="Tentar novamente" onPress={onPressRetry.bind(this)}/>
        <Button style={[styles.text]} title="Buscar Localidade" onPress={onPressSearch.bind(this)}/>
    </View>
);

export default ErrorScreen;

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