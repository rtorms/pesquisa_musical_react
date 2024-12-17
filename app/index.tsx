import { pesquisar } from "@/service/ai/generator";
import { styles,  dynamicStyles } from "@/styles";
import { useState, useEffect } from "react";
import { ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MotiView } from 'moti';
import * as SystemUI from 'expo-system-ui'

export default function Index() {
  const [pesquisa, setPesquisa] = useState(""); 
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const themeStyles = dynamicStyles(darkMode);

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(themeStyles.container.backgroundColor)
  }, [darkMode])

  const callPesquisa = async () => {
    if (pesquisa.length < 5) {
      alert("Desculpe, o evento precisa ter mais de 5 caracteres")
      return;
    }

    setIsLoading(true);
    setPesquisa("")
    setResposta("")

    try {
      const result = await pesquisar(pesquisa);
      setResposta(result)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false);
    }


  }

  return (
    <View style={[styles.container, themeStyles.container]}>
      <View style={{  flexDirection: "row", alignItems: "center", justifyContent: "flex-end", padding: 10, width: "100%"  }}>
        <Text style={[styles.subtitulo, themeStyles.subtitulo, { marginRight: 10 }]}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <Text style={[styles.titulo, themeStyles.titulo]}>Busca musical</Text>
      <Text style={[styles.subtitulo, themeStyles.subtitulo]}>
        Tire suas dúvidas sobre músicas e bandas
      </Text>

      <TextInput
        style={[styles.input, themeStyles.input]}
        placeholder="Digite algo relacionado a música..."
        placeholderTextColor={darkMode ? "#BBBBBB" : "#888888"}
        onChangeText={(text) => setPesquisa(text)}
        value={pesquisa}
      />

      <TouchableOpacity style={styles.button} onPress={callPesquisa}>
        <Text style={styles.buttonText}>
          {isLoading ? "Carregando..." : "Pesquisar"}
        </Text>
      </TouchableOpacity>

      {resposta && (
        <ScrollView style={{ flex: 1, marginTop: 20 }} contentContainerStyle={{ paddingBottom: 20 }}>
          <MotiView style={[styles.card, themeStyles.card]}>
            <Text style={[styles.cardTitle, themeStyles.cardTitle]}>Sua pesquisa está pronta:</Text>
            <Text style={[styles.cardText, themeStyles.cardText]}>{resposta}</Text>
          </MotiView>
        </ScrollView>
      )}

    </View>
  );
}
