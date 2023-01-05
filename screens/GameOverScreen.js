import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    return (
        <View style={styles.screen}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/success.png")}
                />
            </View>
            <Text style={styles.summeryText}>
                Your phone needed{" "}
                <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
                guess the number{" "}
                <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>
                Start New Game
            </PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        height: 240,
        width: 240,
        borderRadius: 120,
        borderWidth: 4,
        borderColor: "#72063c",
        overflow: "hidden",
        marginVertical: 16,
    },
    image: {
        height: "100%",
        width: "100%",
    },
    summeryText: {
        fontSize: 24,
        // fontFamily: "open-sans",
        textAlign: "center",
        marginVertical: 16,
    },
    highlight: {
        color: "#72063c",
    },
});
