import { StyleSheet, Text } from "react-native";

const InstructionText = ({ children }) => {
    return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        color: "#ddb52f",
    },
});
