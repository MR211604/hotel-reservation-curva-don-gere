import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Room, ROOM_LISTINGS } from "@/constants/TemporalRoomData";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { defaultStyles } from "@/constants/DefaultStyles";

const { width } = Dimensions.get("window");

export default function Page() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  //Este filtro lo usaremos con la informacion traida de la base de datos (despues)
  const listing: Room = (ROOM_LISTINGS as any[]).find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <Animated.ScrollView showsVerticalScrollIndicator={false}>
        <Animated.Image
          source={require("../../assets/images/room10.jpg")}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View style={styles.gridItem}>
            <Text style={{ fontFamily: "mon-b", fontSize: 24 }}>
              {listing.name}
            </Text>
            <Text style={{ fontFamily: "mon-b", paddingVertical: 10 }}>
              Ubicado en San Salvador
            </Text>
            <Text style={{ fontFamily: "mon", paddingBottom: 10 }}>
              Capacidad: 4 personas
            </Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Ionicons name="star" size={14} />
              <Text style={{ fontFamily: "mon-b" }}>
                {listing.rating} - 46 valoraciones
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/(modals)/reserve",
                  params: { id },
                })
              }
              style={[
                defaultStyles.btn,
                { backgroundColor: "red", paddingRight: 5, paddingLeft: 5 },
              ]}
            >
              <Text style={defaultStyles.btnText}>Reservar habitación</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />

        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ fontFamily: "mon", textAlign: "auto" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
            voluptates reiciendis nemo quo deleniti labore necessitatibus ad
            provident enim! Id cupiditate quae reprehenderit nostrum?
            Reiciendis, adipisci, veniam illum minus numquam accusamus quas quod
            debitis corporis magnam nihil sapiente exercitationem aut. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Nisi, voluptates
            reiciendis nemo quo deleniti labore necessitatibus ad provident
            enim! Id cupiditate quae reprehenderit nostrum? Reiciendis,
            adipisci, veniam illum minus numquam accusamus quas quod debitis
            corporis magnam nihil sapiente exercitationem aut. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Nisi, voluptates reiciendis
            nemo quo deleniti labore necessitatibus ad provident enim! Id
            cupiditate quae reprehenderit nostrum? Reiciendis, adipisci, veniam
            illum minus numquam accusamus quas quod debitis corporis magnam
            nihil sapiente exercitationem aut. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nisi, voluptates reiciendis nemo quo
            deleniti labore necessitatibus ad provident enim! Id cupiditate quae
            reprehenderit nostrum? Reiciendis, adipisci, veniam illum minus
            numquam accusamus quas quod debitis corporis magnam nihil sapiente
            exercitationem aut. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nisi, voluptates reiciendis nemo quo deleniti
            labore necessitatibus ad provident enim! Id cupiditate quae
            reprehenderit nostrum? Reiciendis, adipisci, veniam illum minus
            numquam accusamus quas quod debitis corporis magnam nihil sapiente
            exercitationem aut. exercitationem aut. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nisi, voluptates reiciendis nemo quo
            deleniti labore necessitatibus ad provident enim! Id cupiditate quae
            reprehenderit nostrum? Reiciendis, adipisci, veniam illum minus
            numquam accusamus quas quod debitis corporis magnam nihil sapiente
            exercitationem aut.
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  infoContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.dark.icon,
    marginVertical: 10,
  },
  gridItem: {
    width: "50%",
  },
  image: {
    height: 300,
    width,
  },
});
