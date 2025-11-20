import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Alert, Image } from 'react-native';

export default function App() {

  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert("Error", "Cannot open this link: " + url);
    }
  };

  const handleEmailPress = () => {
    openLink('mailto:udayt1223@gmail.com');
  };

  const handleResumePress = () => {
    openLink('https://your-resume-link.com/resume.pdf');
  };

  const handleWhatsAppPress = () => {
    const phoneNumber = "9380445488"; 
    openLink(`https://wa.me/${phoneNumber}`);
  };

  const handleInstaPress = () => {
    const instaUsername = "_kiran.17";
    openLink(`https://instagram.com/${instaUsername}`);
  };

  return (
    <View style={styles.container}>

      {/* Profile Picture */}
      <Image 
        source={{ uri: "" }} 
        style={styles.profileImage}
      />

      <Text style={styles.name}>Uday</Text>
      <Text style={styles.bio}>Mobile Developer | React Native Enthusiast</Text>

      <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
        <Text style={styles.buttonText}>Email Me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleResumePress}>
        <Text style={styles.buttonText}>View Resume</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleWhatsAppPress}>
        <Text style={styles.buttonText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleInstaPress}>
        <Text style={styles.buttonText}>Instagram</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d47a1',   // 🔵 Background color added
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#fff",
  },

  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },

  bio: {
    fontSize: 16,
    color: '#e0e0e0',
    marginBottom: 30,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#ff9800',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 8,
    width: 200,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
