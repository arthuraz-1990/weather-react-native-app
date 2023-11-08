import { StyleSheet, Text, View } from "react-native"
import ReturnButton from "./ReturnButton"
import Colors from "../../constants/Colors";

const SelectScreenHeader = ({ location, onReturn, date }) => 
    <View style={styles.header}>
        <View style={styles.locationSection}>
            <Text style={[ styles.text, styles.locationText ]}>{location.name}</Text>
            <Text style={styles.text}>{location.region}</Text>
            <Text style={styles.text}>{location.country}</Text>
        </View>
        {date && <Text style={[styles.text, styles.locationText]}>{ date }</Text> }
        <ReturnButton onReturn={onReturn} />
    </View>

export default SelectScreenHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.toRgba(Colors.darkMain, 0.7),
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    locationSection: {
        maxWidth: '50%'
    },
    text: {
        color: Colors.accent500,
        fontSize: 12
    },
    locationText: {
        fontSize: 14,
        fontWeight: '700'
    }
})