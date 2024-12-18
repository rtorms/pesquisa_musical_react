import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF6B6B",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#666",
    fontStyle: "italic",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4ECDC4",
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
    width: "100%",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#FFF",
  },
  card: {
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 30,
    width: "100%",
    borderRadius: 10,
    padding: 20,
    borderColor: "#ddd",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: "#666",
  },
});

const dynamicStyles = (darkMode: boolean) => ({
  container: {
    backgroundColor: darkMode ? "#121212" : "#f5f5f5",
  },
  titulo: {
    color: darkMode ? "#FF6B6B" : "#FF6B6B", // Sem alteração
  },
  subtitulo: {
    color: darkMode ? "#CCCCCC" : "#666",
  },
  input: {
    backgroundColor: darkMode ? "#333333" : "#FFF",
    borderColor: darkMode ? "#555555" : "#ddd",
    color: darkMode ? "#FFFFFF" : "#000000",
  },
  card: {
    backgroundColor: darkMode ? "#333333" : "#FFFFFF",
    borderColor: darkMode ? "#555555" : "#ddd",
  },
  cardTitle: {
    color: darkMode ? "#FFFFFF" : "#333",
  },
  cardText: {
    color: darkMode ? "#CCCCCC" : "#666",
  },
  placeholder: darkMode ? "#BBBBBB" : "#888888",
  button: {
    backgroundColor: "#333333",
  }
});

// Exporte ambos
export { styles, dynamicStyles };
