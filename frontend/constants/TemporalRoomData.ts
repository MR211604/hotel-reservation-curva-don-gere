export interface Room {
  id: string;
  name: string;
  rating: string;
  uri: string;
}

export const ROOM_LISTINGS: Room[] = [
  {
    id: "1",
    name: "Habitacion #10",
    rating: "4.6",
    uri: require("../assets/images/room10.jpg"),
  },
  {
    id: "2",
    name: "Habitacion #10",
    rating: "4.6",
    uri: require("../assets/images/room10.jpg"),
  },
  {
    id: "3",
    name: "Habitacion #10",
    rating: "4.6",
    uri: require("../assets/images/room10.jpg"),
  },
  {
    id: "4",
    name: "Habitacion #10",
    rating: "4.6",
    uri: require("../assets/images/room10.jpg"),
  },
];
