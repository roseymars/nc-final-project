import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const TradeGameCard = ({ item }) => {
  return (
    <View style={styles.surroundingView}>
      <View style={styles.cardLeft}>
        <Image
          style={styles.image}
          source={require("../assets/placeholder.png")}
        ></Image>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.cardRightTop}>
          <Text style={styles.gameTitle}>{item.title}</Text>
        </View>

        <View style={styles.cardRightBottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Game</Text>
            <Text style={styles.text}>{item.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  surroundingView: {
    flex: 1,
    borderRadius: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: "white",
    width: "95%",
    margin: "2%",
    borderColor: "#694fad",
  },
  image: {
    borderRadius: 20,
    width: 110,
    height: 110,
  },
  cardLeft: {
    flexDirection: "row",
  },
  cardRight: {
    flexDirection: "column",
    flexShrink: 1,
  },
  cardRightTop: {
    flexShrink: 1,
  },
  cardRightBottom: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#694fad",
    borderRadius: 10,
    fontWeight: "700",
    fontSize: 16,
    justifyContent: "center",
    marginHorizontal: 10,
    height: 50,
    padding: 10,
  },
  text: {
    color: "#F0EDF6",
    fontWeight: "500",
    fontSize: 16,
  },
  gameTitle: {
    color: "#694FAD",
    fontWeight: "700",
    fontSize: 16,
    paddingBottom: 10,
    flexShrink: 1,
  },
});

export { TradeGameCard };
