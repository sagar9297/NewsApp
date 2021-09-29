import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NewStoriesNav from "./NewStoriesNav";
import TopStoriesNav from "./TopStoriesNav";
import BestStoriesNav from "./BestStoriesNav";

const Tab = createBottomTabNavigator();

const TabNav = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
      }}
    >
      <Tab.Screen
        component={NewStoriesNav}
        name="NewStories"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper-plus"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        component={TopStoriesNav}
        name="TopStories"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        component={BestStoriesNav}
        name="BestStories"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="alpha-b-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default TabNav;
