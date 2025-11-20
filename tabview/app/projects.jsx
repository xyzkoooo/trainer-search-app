
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, ScrollView } from "react-native";

export default function layout() {
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    { name: "Portfolio App", url: "https://github.com/xyzkoooo/portfolio-app" },
    { name: "E-commerce UI", url: "https://github.com/xyzkoooo/ecommerce-ui" },
    { name: "Chat App UI", url: "https://github.com/xyzkoooo/chat-app-ui" },
    { name: "Task Manager", url: "https://github.com/xyzkoooo/task-manager" },
    { name: "Crypto Tracker", url: "https://github.com/xyzkoooo/crypto-tracker" },
    { name: "Trainer Search App", url: "https://github.com/xyzkoooo/trainer-search-app.git" },
    { name: "Weather App", url: "https://github.com/xyzkoooo/weather-app" },
    { name: "Notes App", url: "https://github.com/xyzkoooo/notes-app" },
  ];

  const showRandomProject = () => {
    const randomIndex = Math.floor(Math.random() * projects.length);
    setCurrentProject(projects[randomIndex]);
  };

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
      <Text style={styles.title}>Projects</Text>
      <TouchableOpacity style={styles.button} onPress={showRandomProject}>
        <Text style={styles.buttonText}>Show Random Project</Text>
      </TouchableOpacity>
      {currentProject && (
        <TouchableOpacity style={styles.projectBox} onPress={() => openLink(currentProject.url)}>
          <Text style={styles.projectName}>{currentProject.name}</Text>
          <Text style={styles.projectUrl}>{currentProject.url}</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#1b5e20", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 15 },
  button: { backgroundColor: "#ff9800", padding: 12, paddingHorizontal: 25, borderRadius: 8, marginBottom: 20 },
  buttonText: { fontSize: 16, fontWeight: "600", color: "#fff" },
  projectBox: { backgroundColor: "#283593", padding: 20, borderRadius: 10, width: "100%", marginBottom: 20, alignItems: "center" },
  projectName: { fontSize: 20, fontWeight: "bold", color: "#ffeb3b", marginBottom: 5 },
  projectUrl: { fontSize: 16, color: "#90caf9", textDecorationLine: "underline" },
});
