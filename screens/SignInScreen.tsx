import { Text, View, StyleSheet } from "react-native";

export default function SignInScreen() {
    return (
        <View>
            <Text>
                SignIn Screen!
            </Text>
        </View>
    );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
