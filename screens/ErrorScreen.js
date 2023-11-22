import { Dimensions, StyleSheet, View } from "react-native";
import CustomText from "../components/element/CustomText";
import FontSize from "../constants/FontSize";
import CustomButton from "../components/element/CustomButton";
import Colors from "../constants/Colors";

const ErrorScreen = ({ onPressRetry, onPressSearch }) => (
    <View style={styles.container}>
        <CustomText bold style={styles.text}>Não foi possível carregar os dados de previsão.</CustomText>
        <CustomButton style={styles.button} onPress={onPressRetry.bind(this)}>
            <CustomText style={[styles.text]}>Tentar novamente</CustomText>
        </CustomButton>
        <CustomButton style={[styles.button]} onPress={onPressSearch.bind(this)}>
            <CustomText style={[styles.text]}>Buscar Localidade</CustomText>
        </CustomButton>
    </View>
);

export default ErrorScreen;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        borderRadius: 10,
        padding: 20,
        rowGap: 15
    },
    button: {
        borderColor: Colors.accent500
    },
    text: {
        fontSize: FontSize.getSize('main', width) + 6,
        fontWeight: '700',
        color: Colors.accent500,
        textAlign: 'center'
    }
})