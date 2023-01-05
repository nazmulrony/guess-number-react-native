import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons/";
import GuessLogItem from "../components/GuessLogItem";

let maxBoundary = 100;
let minBoundary = 1;

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
        generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = ({ userNumber, onGameOver, numberOfRounds }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [guessRounds, setGuessRounds] = useState([]);

    //s[] the gameOver State

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(true);
            numberOfRounds(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);
    useEffect(() => {
        minBoundary = 0;
        maxBoundary = 100;
    }, []);

    const guessNextHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't Lie!", "You know that is wrong...", [
                { text: "Sorry", style: "cancel" },
            ]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNum = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNum);
        setGuessRounds((previousRounds) => [newRndNum, ...previousRounds]);
    };
    console.log(currentGuess, userNumber);
    const guessRoundsListLength = guessRounds.length;
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => guessNextHandler("lower")}
                        >
                            <Ionicons name="md-remove" size={24} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => guessNextHandler("greater")}
                        >
                            <Ionicons name="md-add" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        ></GuessLogItem>
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 32,
        paddingTop: 80,
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 12,
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
});
