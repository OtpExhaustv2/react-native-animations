import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Item, { MAX_HEIGHT } from "./Item";
import { items } from "./Model";

interface ChannelProps {}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
  },
});

const Channel: React.FC<ChannelProps> = () => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value;
    },
  });

  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={onScroll}
        style={styles.scrollView}
        contentContainerStyle={{ height: (items.length + 1) * MAX_HEIGHT }}
        snapToInterval={MAX_HEIGHT}
        decelerationRate={"fast"}
      >
        {items.map((item, index) => (
          <Item key={index} {...{ item, index, y }} />
        ))}
      </Animated.ScrollView>
    </>
  );
};

export default Channel;
