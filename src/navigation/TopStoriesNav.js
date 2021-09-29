import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import NewsFeed from "../screens/NewsFeed";
import TopStories from "../screens/TopStories";

const Stack = createStackNavigator();

const StackNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={TopStories}
      name="TopStories"
      options={{
        headerStyle: { backgroundColor: "#F39C12", height: 65 },
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
