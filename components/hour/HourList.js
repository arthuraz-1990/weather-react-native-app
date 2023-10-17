import { FlatList } from "react-native"
import HourItem from "./HourItem";

const HourList = ({ hourList, onSelectHour, selected }) => (
    <FlatList 
        horizontal
        data={hourList}
        renderItem={({item}) => <HourItem item={item} selected={selected} onSelectHour={onSelectHour} />}
        />
)
export default HourList;