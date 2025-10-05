import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Czerwony pasek */}
      <View style={styles.red}></View>

      {/* Zielony pasek z dwoma kwadratami */}
      <View style={styles.green}>
        <View style={styles.blackBox}>
          <Text style={styles.whiteText}>1</Text>
        </View>

        <View style={styles.whiteBox}>
          <Text style={styles.blackText}>2</Text>
        </View>
      </View>

      {/* Żółty kwadrat na dole */}
      <View style={styles.yellow}>
        <Text style={styles.abcText}>ABC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end", // żółty ma być przy dole
  },
  red: {
    backgroundColor: "red",
    height: "15%",
    width: "100%",
  },
  green: {
    backgroundColor: "green",
    height: "15%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 0, // brak odstępu
  },
  blackBox: {
    backgroundColor: "black",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteBox: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  blackText: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
  },
  yellow: {
    backgroundColor: "yellow",
    height: "25%",
    width: "50%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto", // dopycha żółty na sam dół
  },
  abcText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
  },
});