import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Bird from "./components/Bird";

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth / 2;
  const [BirdBottom, setBirdBottom] = useState(screenHeight / 2);
  const gravity = 3;
  let gameTimerId;

  // start bird falling
  useEffect(() => {
    if (BirdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((BirdBottom) => BirdBottom - gravity);
      }, 30);
    }

    return () => {
      clearInterval(gameTimerId);
    };
  }, [BirdBottom]);

  return (
    <View style={styles.container}>
      <Bird birdBottom={BirdBottom} birdLeft={birdLeft} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
