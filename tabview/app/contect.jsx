
import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, Linking, Alert } from "react-native";

export default function layout() {
  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) await Linking.openURL(url);
      else Alert.alert("Cannot open this link: " + url);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <TouchableOpacity onPress={() => openLink("tel:+919380445488")}>
        <Text style={styles.contactItem}>📞 Phone: +91 9380445488</Text>
      </TouchableOpacity>
      <Text style={styles.contactItem}>🏠 Address: Your City, India</Text>
      <TouchableOpacity onPress={() => openLink("mailto:udayt1223@gmail.com")}>
        <Text style={styles.contactItem}>✉️ Email: udayt1223@gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink("https://github.com/xyzkoooo/trainer-search-app.git")}>
        <Text style={styles.contactItem}>💻 GitHub: github.com/xyzkoooo/trainer-search-app</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#b71c1c", alignItems: "flex-start" },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 15 },
  contactItem: { fontSize: 18, color: "#fff", marginVertical: 10, textDecorationLine: "underline" },
});
