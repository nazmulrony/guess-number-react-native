import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                android_ripple={{ color: "#91084d" }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: "#980b52",
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 4,
    },
    buttonText: {
        // fontFamily: "open-sans",
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});
