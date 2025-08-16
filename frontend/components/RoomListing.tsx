import {
  View,
  Text,
  StyleSheet,
  ListRenderItem,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Room, ROOM_LISTINGS } from "@/constants/TemporalRoomData";

//Todo: reemplazar esto con una lista
const imagePath = require("../assets/images/room10.jpg");

export default function RoomListing() {
  const renderRow: ListRenderItem<Room> = ({ item }: { item: Room }) => (
    <Link href={{ pathname: "/listing/[id]", params: { id: item.id } }} asChild>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={imagePath} style={styles.image} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "mon-b",
                fontSize: 16,
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
              }}
            >
              <Ionicons name="star" size={14} />
              <Text style={{ fontFamily: "mon-b" }}>{item.rating}</Text>
            </View>
          </View>

          <Text style={{ fontFamily: "mon-sb" }}>Capacidad: 4 personas</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontFamily: "mon-b" }}>$150</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderRow}
        data={ROOM_LISTINGS}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  listing: {
    padding: 0,
    marginVertical: 16,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
});
