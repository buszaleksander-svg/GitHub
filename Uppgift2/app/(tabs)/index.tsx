import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Item = {
  id: string;
  name: string;
};

export default function Index() {
  const [items, setItems] = useState<Item[]>([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (text.trim() === "") return;
    const newItem = { id: Date.now().toString(), name: text };
    setItems([...items, newItem]);
    setText("");
  };

  const deleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const resetList = () => setItems([]);

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Skriv något..."
          value={text}
          onChangeText={setText}
        />
        <Button title="Add" onPress={addItem} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <View style={styles.listItem}>
              <Text style={styles.listText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Button title="Reset" color="red" onPress={resetList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    backgroundColor: "white",
    marginRight: 5,
  },
  listItem: {
    backgroundColor: "blue",
    padding: 15,
    marginVertical: 4,
  },
  listText: {
    color: "white",
    fontSize: 18,
  },
});

