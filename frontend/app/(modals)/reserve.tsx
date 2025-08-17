import { defaultStyles } from "@/constants/DefaultStyles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";

export default function Reserve() {
  const today = getToday();
  const [CheckInDate, setCheckInDate] = useState<string>(today);
  const [CheckOutDate, setCheckOutDate] = useState<string>(today);

  const [openDate, setOpenDate] = useState(false);
  const [modalReady, setModalReady] = useState(false);
  const [activePicker, setActivePicker] = useState<
    "checkin" | "checkout" | null
  >(null);

  const canReserve = useMemo(() => {
    return CheckInDate && CheckOutDate && CheckOutDate >= CheckInDate;
  }, [CheckInDate, CheckOutDate]);

  const handleOpenPicker = (type: "checkin" | "checkout") => {
    setActivePicker(type);
    setOpenDate(true);
    setModalReady(false);
  };

  const closePicker = () => {
    setOpenDate(false);
    setActivePicker(null);
    setModalReady(false);
  };

  const onDateSelected = (date: string) => {
    if (activePicker === "checkin") {
      setCheckInDate(date);
      // Si el nuevo Check In es posterior al Check Out, ajusta el Check Out
      if (date > CheckOutDate) {
        setCheckOutDate(date);
      }
    } else if (activePicker === "checkout") {
      // No permitir que el Check Out sea anterior al Check In
      if (date < CheckInDate) {
        setCheckOutDate(CheckInDate);
      } else {
        setCheckOutDate(date);
      }
    }
  };

  const getMinimumDate = () => {
    if (activePicker === "checkout") return CheckInDate || today;
    return today;
  };

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
        <TouchableOpacity
          onPress={() => handleOpenPicker("checkin")}
          style={styles.checkSection}
        >
          <MaterialCommunityIcons
            name="calendar-arrow-left"
            size={24}
            color="black"
          />
          <Text style={styles.checkText}>Check in: {CheckInDate}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputSection}>
        <TouchableOpacity
          onPress={() => handleOpenPicker("checkout")}
          style={styles.checkSection}
        >
          <MaterialCommunityIcons
            name="calendar-arrow-right"
            size={24}
            color="black"
          />
          <Text style={styles.checkText}>Check out: {CheckOutDate}</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ marginVertical: 40, paddingHorizontal: 50 }}>
          <TouchableOpacity
            style={[
              defaultStyles.btn,
              {
                flexDirection: "row",
                gap: 4,
                backgroundColor: "red",
                paddingHorizontal: 10,
              },
            ]}
            onPress={() => {
              // Aquí puedes disparar la consulta de disponibilidad usando CheckInDate y CheckOutDate
            }}
          >
            <Ionicons name="search" size={24} color={"white"} />
            <Text style={[defaultStyles.btnText]}>Ver disponibilidad</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 50 }}>
          <TouchableOpacity
            disabled={!canReserve}
            style={[
              defaultStyles.btn,
              {
                flexDirection: "row",
                backgroundColor: canReserve ? "#2763a8ff" : "#86b0f488",
                gap: 4,
                padding: 5,
              },
            ]}
            onPress={() => {
              if (!canReserve) return;
              // Acción de reservar con CheckInDate y CheckOutDate
            }}
          >
            <Ionicons name="calendar-clear" size={24} color="white" />
            <Text style={defaultStyles.btnText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent
        visible={openDate}
        onShow={() => setModalReady(true)}
        onRequestClose={closePicker}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {openDate && modalReady && (
              <>
                <Text
                  style={{
                    fontFamily: "mon-b",
                    fontSize: 18,
                    marginBottom: 10,
                  }}
                >
                  {activePicker === "checkin"
                    ? "Selecciona Check In"
                    : "Selecciona Check Out"}
                </Text>
                <DatePicker
                  key={`${activePicker}-${openDate ? "open" : "closed"}`}
                  mode="calendar"
                  minimumDate={getMinimumDate()}
                  isGregorian
                  selected={
                    activePicker === "checkin" ? CheckInDate : CheckOutDate
                  }
                  current={
                    activePicker === "checkin" ? CheckInDate : CheckOutDate
                  }
                  onSelectedChange={onDateSelected}
                  onDateChange={onDateSelected}
                  style={{ alignSelf: "stretch" }}
                />
              </>
            )}
            <TouchableOpacity onPress={closePicker} style={{ marginTop: 12 }}>
              <Text style={{ fontFamily: "mon", color: "#007aff" }}>
                Cerrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontFamily: "mon-b",
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    alignItems: "center",
    width: "auto",
    marginHorizontal: 40,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#5e5e5eff",
    borderWidth: 2,
    borderRadius: 8,
  },
  checkText: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    fontFamily: "mon",
    fontSize: 16,
  },
  checkSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
