import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
    return <View style={styles.card}>{children}</View>;
};

export default Card;
const styles = StyleSheet.create({
    card: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#72063c",
        borderRadius: 8,
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
    },
});
