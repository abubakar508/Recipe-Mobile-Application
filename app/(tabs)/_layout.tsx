// expo vector-icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons'; 

//expo-router
import { Link, Tabs } from 'expo-router';

//react-native components
import { Pressable, TouchableOpacity, useColorScheme } from 'react-native';


// colors
import Colors from '../../constants/Colors';


//components
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';


//routing dependency
import { useNavigation } from '@react-navigation/native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Define navigation 
  const navigation = useNavigation()

  const handlePress = () => {
    console.log("button pressed" )

  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <ScreenHeaderBtn
            iconUrl={require("../../assets/images/Abisma.png")}
            onPress={handlePress}
             />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={handlePress}>
              <Pressable>
                {({ pressed }) => (
                  <Entypo name="menu" size={42} color="black" />
                )}
              </Pressable>
            </TouchableOpacity>
          ),
        }}
      />
      
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
    </Tabs>
  );
}
