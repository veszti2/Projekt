import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack>
        {/* A fő navigáció, ami a (tabs) mappát indítja el */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* A felugró ablak (Modal) globális beállítása */}
        <Stack.Screen 
          name="modal" 
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Információ',
            headerStyle: { backgroundColor: '#1a1a1a' },
            headerTintColor: '#f5c542',
          }} 
        />
        
        {/* Hibakezelő oldal (pl. ha elgépelsz egy útvonalat) */}
        <Stack.Screen name="+not-found" options={{ title: 'Hiba!' }} />
      </Stack>
      
      {/* Az állapotjelző sáv (óra, akksi) színe sötét módban fehér legyen */}
      <StatusBar style="light" />
    </ThemeProvider>
  );
}