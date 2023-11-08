import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons';

const ReturnButton = ({ onReturn }) => 
    <TouchableOpacity style={styles.container} onPress={onReturn}>
        <Text style={styles.text}>Voltar</Text>
        <FontAwesome5 name="arrow-left" size={12} color={Colors.accent500} />
    </TouchableOpacity>


export default ReturnButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },
    text: {
        color: Colors.accent500,
        fontWeight: '600'
    }
});