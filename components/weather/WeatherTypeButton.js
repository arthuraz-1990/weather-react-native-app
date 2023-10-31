import { StyleSheet, Text, TouchableHighlight } from "react-native";
import Colors from "../../constants/Colors";

const WeatherTypeButton = ({onSelect, type, current, label}) => {
    const active = type === current;

    const backgroundStyle = {
        backgroundColor: active ? Colors.primary500 : Colors.secondary500
    }

    const fontColorStyle = {
        color: active ? Colors.accent500 : Colors.darkMain
    }

    return (
        <TouchableHighlight style={[styles.view, backgroundStyle]} onPress={onSelect.bind(this, type)} activeOpacity={type === current ? 1 : 0.75}>
            <Text style={[styles.text, fontColorStyle]}>{ label }</Text>
        </TouchableHighlight>
    )
}

export default WeatherTypeButton;

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 5,
        backgroundColor: Colors.primary500,
        borderRadius: 2,
        width: 50,
        borderWidth: 1,
        borderColor: Colors.darkMain
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});