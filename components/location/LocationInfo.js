import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

import { FontAwesome5 } from '@expo/vector-icons';

const LocationInfo = ({ info, onShowSearch }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.locationSection}>
                <Text style={styles.textCity}>{info.name}</Text>
                <Text style={styles.text}>{info.region}</Text>
                <Text style={styles.text}>{info.country}</Text>
            </View>

            <TouchableOpacity onPress={onShowSearch}>
                <FontAwesome5 name="search-location" size={styles.textCity.fontSize + 10} color={Colors.darkMain} />
            </TouchableOpacity>
            
        </View>
    )
}

export default LocationInfo;


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    locationSection: {
        maxWidth: '75%'
    },
    textCity: {
        fontSize: 18,
        fontWeight: '800',
        color: Colors.darkMain
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: Colors.darkMain
    }
})