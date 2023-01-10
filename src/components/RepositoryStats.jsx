import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}K` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          STARS
        </StyledText>
        <StyledText align="center">
          {parseThousand(props.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          FORKS
        </StyledText>
        <StyledText align="center">{parseThousand(props.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          REVIEW
        </StyledText>
        <StyledText align="center">{props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          RATING
        </StyledText>
        <StyledText align="center">{props.ratingAverage}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
