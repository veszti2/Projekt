import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

const Rules = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Házirend</Text>
          <View style={styles.yellowBar} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Belépés és Nyitvatartás</Text>
          <Text style={styles.sectionText}>
            • Nyitvatartás: minden nap 06:00 - 22:00.{'\n'}
            • A terembe belépni csak érvényes bérlettel vagy napijeggyel lehetséges.{'\n'}
            • A belépőkártya névre szól, másra nem ruházható át.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Higiénia</Text>
          <Text style={styles.sectionText}>
            • Váltócipő használata kötelező!{'\n'}
            • Az edzőgépeken törölköző használata kötelező.{'\n'}
            • Használat után kérjük fertőtlenítsd az eszközöket a kihelyezett szerekkel.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Edzőtermi Etikett</Text>
          <Text style={styles.sectionText}>
            • A súlyokat használat után pakold vissza a helyükre.{'\n'}
            • Ne foglald le a gépeket feleslegesen (pl. telefonozás közben).{'\n'}
            • Ügyelj a környezeted épségére és mások nyugalmára.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Köszönjük, hogy betartod a szabályokat és segíted a közösségünket!</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#111',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f5c542',
    textTransform: 'uppercase',
  },
  yellowBar: {
    width: 60,
    height: 4,
    backgroundColor: '#f5c542',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#f5c542',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f5c542',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 15,
    color: '#ccc',
    lineHeight: 22,
  },
  footer: {
    padding: 40,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
  }
});

export default Rules;