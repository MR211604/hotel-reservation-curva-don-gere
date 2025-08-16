import { defaultStyles } from "@/constants/DefaultStyles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function reserve() {
  return (
    <View
      style={[
        defaultStyles.container,
        {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        },
      ]}
    >
      <Text style={styles.headerText}>Reservar habitación #10</Text>
      <View style={styles.inputSection}>
        <MaterialCommunityIcons
          name="calendar-arrow-right"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} placeholder="check-in" />
      </View>
      <View style={styles.inputSection}>
        <MaterialCommunityIcons
          name="calendar-arrow-left"
          size={24}
          color="black"
        />
        <TextInput style={styles.input} placeholder="check-out" />
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginVertical: 40 }}>
          <TouchableOpacity
            style={[
              defaultStyles.btn,
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                backgroundColor: "red",
                padding: 5,
              },
            ]}
          >
            <Ionicons name="search" size={24} color={"white"} />
            <Text style={defaultStyles.btnText}>Verificar disponibilidad</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[
              defaultStyles.btn,
              {
                flexDirection: "row",
                backgroundColor: "red",
                justifyContent: "space-evenly",
                padding: 5,
              },
            ]}
          >
            <Ionicons name="calendar-clear" size={24} color="white" />
            <Text style={defaultStyles.btnText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 2,
    marginVertical: 20,
    borderRadius: 4,
  },
  input: {
    paddingLeft: 0,
    backgroundColor: "#fff",
    borderColor: "#fff",
    width: "50%",
    color: "#000",
  },
});
