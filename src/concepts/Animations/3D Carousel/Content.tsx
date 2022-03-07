import React from "react";
import { Text, View } from "react-native";
import { Item } from "./Carousel";

interface ContentProps {
  item: Item;
}

export const SPACING = 20;

const Content: React.FC<ContentProps> = ({ item }) => {
  return (
    <>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: 16,
          textTransform: "uppercase",
        }}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {item.title}
      </Text>
      <Text style={{ fontSize: 12, opacity: 0.4 }}>{item.subtitle}</Text>
      <View style={{ flexDirection: "row", marginTop: SPACING }}>
        <Text
          style={{
            fontSize: 42,
            letterSpacing: 3,
            fontWeight: "900",
            marginRight: 8,
          }}
        >
          {item.price}
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 36,
            fontWeight: "800",
            alignSelf: "flex-end",
          }}
        >
          USD
        </Text>
      </View>
    </>
  );
};

export default Content;
