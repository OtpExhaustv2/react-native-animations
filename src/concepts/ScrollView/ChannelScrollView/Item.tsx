import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");
const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;

const styles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "500",
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: "center",
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    padding: 32,
    transform: [{ translateY: 64 }],
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

interface Item {
  title: string;
  subtitle: string;
  picture: number;
  top: number;
}

interface ItemProps {
  index: number;
  y: Animated.SharedValue<number>;
  item: Item;
}

const Item: React.FC<ItemProps> = ({ index, item, y }) => {
  const INPUT_RANGE = [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT];
  const container = useAnimatedStyle(() => ({
    height: interpolate(
      y.value,
      INPUT_RANGE,
      [MIN_HEIGHT, MAX_HEIGHT],
      Extrapolate.CLAMP
    ),
  }));

  const titleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(y.value, INPUT_RANGE, [0, 1], Extrapolate.CLAMP),
  }));

  return (
    <TouchableWithoutFeedback>
      <Animated.View style={[styles.container, container]}>
        <Image source={item.picture} style={styles.picture} />
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>{item.subtitle.toUpperCase()}</Text>
          <View style={styles.mainTitle}>
            <Animated.View style={titleStyle}>
              <Text style={styles.title}>{item.title.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Item;
