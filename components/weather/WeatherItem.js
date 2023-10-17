import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

const WeatherItem = ({ icon, children, style }) => {

    return (
        <View style={[style, styles.item]}>
            {icon && 
                <View style={styles.icon}>
                    {icon}
                </View>
            }
            <View style={style.children}>
                {children}
            </View>
        </View>
    )

}

export default WeatherItem;

const styles = StyleSheet.create({
    item: {
        borderColor: 'black',
        borderRadius: 2,
        borderWidth: 1,
        padding: 5,
        backgroundColor: Colors.accent500
    },
    icon: {
        flex: 1,
        alignItems: 'center'
    },
    children: {
        alignItems: 'stretch',
        rowGap: 1
    }
})

