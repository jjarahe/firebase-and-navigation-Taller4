import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <Text>
                Home Screen!
            </Text>
        </View>
    );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
