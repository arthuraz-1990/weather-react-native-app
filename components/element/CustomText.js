import { Text } from "react-native";

const CustomText = ({ style, children, bold = false }) => {

    const fontFamily = bold ? 'Inter_700Bold' : 'Inter_400Regular';

    return (
        <Text style={[style, { fontFamily }]}>
            { children }
        </Text>
    );

}

export default CustomText;