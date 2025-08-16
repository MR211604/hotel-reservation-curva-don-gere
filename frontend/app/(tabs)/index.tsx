import RoomListing from "@/components/RoomListing";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [search, setSearch] = useState<string | undefined>("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={styles.headerContainer}>
        <View style={styles.actionRow}>
          <TextInput
            style={styles.input}
            value={search}
            onChange={() => setSearch(search)}
            placeholder="Habitacion #..."
          />
          <Ionicons
            style={{ marginLeft: 20 }}
            name="search"
            size={24}
            color={"black"}
          />
        </View>
        <View style={{ marginBottom: 70 }}>
          <RoomListing />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    height: "auto",
    marginTop: 20,
  },
  actionRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
  },
});
