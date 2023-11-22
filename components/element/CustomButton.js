import { StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ children, style, onPress }) => (
    <TouchableOpacity style={[ style, styles.view ]} onPress={onPress}>
        { children }
    </TouchableOpacity>
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