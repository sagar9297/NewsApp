import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import NewsFeed from "../screens/NewsFeed";
import BestStories from "../screens/BestStories";
import GetStoryInfo from "../screens/GetStoryInfo";

const Stack = createStackNavigator();

const StackNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      component={BestStories}
      name="BestStories"
      options={{
        headerStyle: { backgroundColor: "#2ECC71", height: 65 },
        headerTitleStyle: { color: "white", fontSize: 23 },
      }}
    />
    <Stack.Screen component={GetStoryInfo} name="GetStoryInfo" />
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
