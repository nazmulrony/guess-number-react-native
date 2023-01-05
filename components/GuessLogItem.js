import { StyleSheet, Text, View } from "react-native";

const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    );
};

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 2,
        borderColor: "#72063c",
        backgroundColor: "#ddb52f",
        borderRadius: 48,
        marginVertical: 8,
        padding: 12,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
    },
});
