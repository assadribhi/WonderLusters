import React from "react";
import { observer } from "mobx-react";

//Styling

import { ListItem, Left } from "native-base";
import { TripTitle } from "./styles";

const TripItem = ({ trip, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Left>
        <TripTitle>{trip.tripName}</TripTitle>
      </Left>
      {/* <Right>
        <Button>Add to Favorite</Button>
      </Right> */}
    </ListItem>
  );
};

export default observer(TripItem);
