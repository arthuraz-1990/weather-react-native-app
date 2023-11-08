import { StyleSheet, View } from "react-native";
import DayItem from "./DayItem";

const DayList = ({ dayList, onSelectDay, selected }) => (
    <View style={styles.viewContainer}>
        {dayList.map((item, idx) => 
            <DayItem key={idx} item={item} selected={selected} onSelectDay={onSelectDay} />
        )}
    </View>
);

export default DayList;

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        rowGap: 25
    }
})