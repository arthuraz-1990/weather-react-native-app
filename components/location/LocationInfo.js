import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from "../element/CustomButton";
import CustomText from "../element/CustomText";

const LocationInfo = ({ info, onShowSearch }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.locationSection}>
                <CustomText style={styles.textCity} bold>{info.name}</CustomText>
                <CustomText style={styles.text}>{info.region}</CustomText>
                <CustomText style={styles.text}>{info.country}</CustomText>
            </View>

            <CustomButton style={styles.locationButton} onPress={onShowSearch}>
                <FontAwesome5 name="search-location" size={styles.textCity.fontSize + 10} color={Colors.darkMain} />
                <CustomText style={[styles.text, styles.textLocationButton]}>Buscar Localização</CustomText>
            </CustomButton>
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
        width: '80%'
    },
    locationButton: {
        // flex: 1,
        alignItems: 'center',
        width: 80
    },
    textLocationButton: {
        textAlign: 'center',
        fontSize: 10
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