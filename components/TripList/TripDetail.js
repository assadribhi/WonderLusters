import React from "react";
import { observer } from "mobx-react";

//Stores
import { TripTitle } from "./styles";

//Styles
import { ListItem, Left } from "native-base";
import { UpdateButtonStyled } from "./styles";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;

  return (
    <ListItem>
      <Left>
        <TripTitle>{trip.tripName}</TripTitle>
        <TripTitle>{trip.date}</TripTitle>

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
