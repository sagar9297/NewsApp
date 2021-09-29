import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import NewsFeed from "../screens/NewsFeed";
import NewStories from "../screens/NewStories";

const Stack = createStackNavigator();

const StackNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={NewStories}
      name="NewStories"
      options={{
        headerStyle: { backgroundColor: "#3498DB", height: 65 },
        headerTitleStyle: { color: "white", fontSize: 23 },
      }}
    />
    <Stack.Screen
      component={NewsFeed}
      name="NewsFeed"
      options={({ route }) => {
        const newsTitle = route.params.newsTitle;
        return {
          headerTitle: <Text>{newsTitle}</Text>,
        };
      }}
    />
  </Stack.Navigator>
);

export default StackNav;
