import React, { useState } from "react";
import { Text, View } from "react-native";
import { slides } from "./Model";
import Slide from "./Slide";
import Slider from "./Slider";

interface LiquidSwipeProps {}

const LiquidSwipe: React.FC<LiquidSwipeProps> = () => {
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];

  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      <Slide slide={slides[index]!} />
    </Slider>
  );
};

export default LiquidSwipe;
