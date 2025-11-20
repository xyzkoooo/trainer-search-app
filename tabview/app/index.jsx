import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/me.jpg')} style={styles.avatar} />

      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.bio}>Short bio about yourself...</Text>

      <Text style={styles.skillsTitle}>Skills</Text>
      <Text style={styles.skills}>• React Native{"\n"}• JavaScript{"\n"}• UI/UX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  bio: { fontSize: 16, textAlign: 'center', marginTop: 8 },
  skillsTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
  skills: { fontSize: 16, textAlign: 'center', marginTop: 6 }
});
