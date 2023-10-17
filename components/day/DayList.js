import DayItem from "./DayItem";

const DayList = ({ list: [], onSelectDay }) => {

    return (
        <FlatList 
            horizontal
            data={list}
            renderItem={({item}) => <DayItem item={item} onSelectDay={onSelectDay} />}
         /> 
    )
}

export default DayList;