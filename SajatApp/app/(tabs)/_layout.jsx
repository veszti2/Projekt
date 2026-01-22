import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#f5c542',
      tabBarStyle: { backgroundColor: '#111' },
      headerShown: false 
    }}>
      <Tabs.Screen
        name="index" // Ez hivatkozik az app/(tabs)/index.jsx-re
        options={{
          title: 'Kezdőlap',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}