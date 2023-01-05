import React from "react";
import { View } from "react-native";
import StyleText from "./StyleText";

const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}K` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyleText align="center" fontWeight="bold">
          STARS
        </StyleText>
        <StyleText align="center">
          {parseThousand(props.stargazersCount)}
        </StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          FORKS
        </StyleText>
        <StyleText align="center">{parseThousand(props.forksCount)}</StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          REVIEW
        </StyleText>
        <StyleText align="center">{props.reviewCount}</StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          RATING
        </StyleText>
        <StyleText align="center">{props.ratingAverage}</StyleText>
      </View>
    </View>
  );
};

export default RepositoryStats;
