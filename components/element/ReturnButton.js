import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";

const ReturnButton = ({ onReturn, style }) => 
    <CustomButton style={[styles.container, style]} onPress={onReturn}>
        <CustomText style={styles.text} bold>Voltar</CustomText>
        <FontAwesome5 name="arrow-left" size={12} color={Colors.accent500} />
    </CustomButton>


export default ReturnButton;

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