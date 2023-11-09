import { StyleSheet, TouchableOpacity } from "react-native";
import { Shadow } from 'react-native-shadow-2';

const CustomButton = ({ children, style, onPress }) => (
    <Shadow>
        <TouchableOpacity style={[ style, styles.view ]} onPress={onPress}>
            { children }
        </TouchableOpacity>
    </Shadow>
)

export default CustomButton;

const styles = StyleSheet.create({
    view: {
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderWidth: 0.5
    }
})