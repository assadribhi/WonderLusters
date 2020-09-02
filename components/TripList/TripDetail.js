import React from "react";
import { observer } from "mobx-react";
import { ListItem, Left, Text } from "native-base";

import { AuthTitle, UpdateButtonStyled } from "../../styles";

import TripModal from "../modal/TripModal";

// REVIEW: Clean your imports

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;

  return (
    <ListItem>
      <Left>
        <AuthTitle>{trip.tripName}</AuthTitle>
        <AuthTitle>{trip.date}</AuthTitle>

        <UpdateButtonStyled
          onPress={() => navigation.navigate("TripModal", { oldTrip: trip })}
        >
          Update
        </UpdateButtonStyled>
      </Left>
    </ListItem>
  );
};

export default observer(TripDetail);
