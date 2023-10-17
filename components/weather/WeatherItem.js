import { StyleSheet, View } from "react-native";

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
        padding: 5
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

