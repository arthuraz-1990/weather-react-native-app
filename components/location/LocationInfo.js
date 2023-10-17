import { StyleSheet, Text, View } from "react-native";

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
        fontWeight: '600'
    },
    text: {
        fontSize: 11,
        fontWeight: '400'
    }
})