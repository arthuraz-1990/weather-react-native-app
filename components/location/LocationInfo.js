import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const LocationInfo = ({ info }) => {
    return (
        <View>
            <Text style={styles.textCity}>{info.name}</Text>
            <Text style={styles.text}>{info.region}</Text>
            <Text style={styles.text}>{info.country}</Text>
        </View>
    )
}

export default LocationInfo;


const styles = StyleSheet.create({
    textCity: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.darkMain
    },
    text: {
        fontSize: 11,
        fontWeight: '400',
        color: Colors.darkMain
    }
})