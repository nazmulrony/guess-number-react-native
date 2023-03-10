import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { useFonts } from "expo-font";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    // useFonts({
    //     "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    //     "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    // });
    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    };
    const startNewGameHandler = () => {
        setUserNumber(null);
        setGuessRounds(0);
    };

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
    if (userNumber) {
        screen = (
            <GameScreen
                userNumber={userNumber}
                onGameOver={setGameIsOver}
                gameIsOver={gameIsOver}
                numberOfRounds={setGuessRounds}
            />
        );
    }
    if (gameIsOver && userNumber) {
        screen = (
            <GameOverScreen
                roundsNumber={guessRounds}
                userNumber={userNumber}
                onStartNewGame={startNewGameHandler}
            />
        );
    }
    return (
        <LinearGradient
            colors={["#980b52", "#ddb52f"]}
            style={styles.appContainer}
        >
            <ImageBackground
                source={require("./assets/images/dice.jpg")}
                style={styles.appContainer}
                imageStyle={styles.backgroundImage}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.appContainer}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
