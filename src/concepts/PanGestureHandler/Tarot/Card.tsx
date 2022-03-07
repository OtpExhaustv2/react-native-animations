import React, { useEffect } from "react";
import { Dimensions, Image, Platform, StyleSheet, View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";
import { HEIGHT } from "../LiquidSwipe/Wave";

const { width: WIDTH, height } = Dimensions.get("window");

const aspectRatio = 722 / 368;
const CARD_WIDTH = WIDTH - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const IMAGE_WIDTH = CARD_WIDTH * 0.9;
const DURATION = 250;
const SIDE = (WIDTH + CARD_WIDTH) / 2;
const SNAP_POINTS = [-SIDE, 0, SIDE];

interface CardProps {
  card: {
    source: ReturnType<typeof require>;
  };
  index: number;
  shuffleBack: Animated.SharedValue<boolean>;
}

const Card: React.FC<CardProps> = ({
  card: { source },
  index,
  shuffleBack,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(-HEIGHT - CARD_HEIGHT / 2);
  const theta = Math.random() * 20 - 10;
  const rotateZ = useSharedValue(0);
  const rotateX = useSharedValue(30);
  const scale = useSharedValue(1);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number; rotateZ: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
      ctx.y = translateY.value;
      ctx.rotateZ = rotateZ.value;
      scale.value = withTiming(1.1, { easing: Easing.inOut(Easing.ease) });
      rotateZ.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
      rotateX.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
    },
    onActive: ({ translationX, translationY }, ctx) => {
      translateX.value = translationX + ctx.x;
      translateY.value = translationY + ctx.y;
    },
    onEnd: ({ velocityX, velocityY }, ctx) => {
      const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(0, { velocity: velocityY });
      rotateZ.value = withTiming(ctx.rotateZ, {
        easing: Easing.inOut(Easing.ease),
      });
      rotateX.value = withTiming(30, { easing: Easing.inOut(Easing.ease) });
      scale.value = withTiming(1, { easing: Easing.inOut(Easing.ease) }, () => {
        if (index === 0 && dest !== 0) {
          shuffleBack.value = true;
        }
      });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1500 },
      { rotateX: `${rotateX.value}deg` },
      { rotateZ: `${rotateZ.value}deg` },
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  useAnimatedReaction(
    () => shuffleBack.value,
    (value) => {
      if (value) {
        const delay = 150 * index;
        translateX.value = withDelay(delay, withSpring(0));
        rotateZ.value = withDelay(
          delay,
          withSpring(theta, {}, () => {
            shuffleBack.value = false;
          })
        );
      }
    }
  );

  useEffect(() => {
    const delay = 1000 + index * DURATION;
    translateY.value = withDelay(
      delay,
      withTiming(0, {
        duration: DURATION,
        easing: Easing.inOut(Easing.ease),
      })
    );
    rotateZ.value = withDelay(
      delay,
      withTiming(theta, {
        duration: DURATION,
        easing: Easing.inOut(Easing.ease),
      })
    );
  }, [index, translateY]);

  return (
    <View style={styles.container} pointerEvents="box-none">
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[styles.card, Platform.OS === "ios" && styles.shadow, style]}
        >
          <Image
            source={source}
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_WIDTH * aspectRatio,
            }}
            resizeMode="contain"
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});
