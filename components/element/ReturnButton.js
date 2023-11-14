import { Dimensions, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import FontSize from "../../constants/FontSize";

const ReturnButton = ({ onReturn, style }) => {

    const fontSize = FontSize.getSize('secondary', width);
    const styleSize = { fontSize };

    return (
        <CustomButton style={[styles.container, style]} onPress={onReturn}>
            <CustomText style={[styles.text, styleSize]} bold>Voltar</CustomText>
            <FontAwesome5 name="arrow-left" size={fontSize} color={Colors.accent500} />
        </CustomButton>
    )    
}
    


export default ReturnButton;

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 5,
        alignItems: 'center',
        borderColor: Colors.accent500,
        padding: 6
    },
    text: {
        color: Colors.accent500,
        fontWeight: '600'
    }
});