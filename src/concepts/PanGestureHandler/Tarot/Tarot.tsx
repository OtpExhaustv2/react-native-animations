import React from "react";
import { StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Card from "./Card";

const cards = [
  {
    source: require("./assets/death.png"),
  },
  {
    source: require("./assets/chariot.png"),
  },
  {
    source: require("./assets/high-priestess.png"),
  },
  {
    source: require("./assets/justice.png"),
  },
  {
    source: require("./assets/lover.png"),
  },
  {
    source: require("./assets/pendu.png"),
  },
  {
    source: require("./assets/tower.png"),
  },
  {
    source: require("./assets/strength.png"),
  },
];

interface TarotProps {}

const Tarot: React.FC<TarotProps> = () => {
  const shuffleBack = useSharedValue(false);
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card card={card} key={index} index={index} shuffleBack={shuffleBack} />
      ))}
    </View>
  );
};

export default Tarot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
});
