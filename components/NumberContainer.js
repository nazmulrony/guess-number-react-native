import { StyleSheet, Text, View } from "react-native";

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.textNumber}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 4,
        borderColor: "#ddb52f",
        margin: 24,
        padding: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    textNumber: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#ddb52f",
    },
});
