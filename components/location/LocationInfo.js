import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

import { FontAwesome5 } from '@expo/vector-icons';
import CustomButton from "../element/CustomButton";
import CustomText from "../element/CustomText";
import FontSize from "../../constants/FontSize";
import ScreenSize from "../../constants/ScreenSize";

const LocationInfo = ({ info, onShowSearch }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.locationSection}>
                <CustomText style={styles.textCity} bold>{info.name}</CustomText>
                <CustomText style={styles.text}>{info.region}</CustomText>
                <CustomText style={styles.text}>{info.country}</CustomText>
            </View>

            <CustomButton style={styles.locationButton} onPress={onShowSearch}>
                <FontAwesome5 name="search-location" size={styles.textCity.fontSize + 10} color={Colors.accent500} />
                <CustomText style={[styles.text, styles.textLocationButton]}>Buscar Localização</CustomText>
            </CustomButton>
        </View>
    )
}

export default LocationInfo;

const width = Dimensions.get('window').width;

const breakpoint = ScreenSize.getScreenSize(width);

const locationButtonWidth = {
    xl: 160,
    lg: 110,
    md: 70,
    sm: 60,
    xs: 50
}


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    locationSection: {
        width: '80%'
    },
    locationButton: {
        // flex: 1,
        alignItems: 'center',
        width: locationButtonWidth[breakpoint]
    },
    textLocationButton: {
        textAlign: 'center',
        fontSize: FontSize.getSize('secondary', width) - 2
    },
    textCity: {
        fontSize: FontSize.getSize('main', width),
        fontWeight: '800',
        color: Colors.accent500
    },
    text: {
        fontSize: FontSize.getSize('secondary', width),
        fontWeight: '500',
        color: Colors.accent500
    }
})