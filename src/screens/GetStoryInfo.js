import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import getStories from "../utils/getStories";

function GetStoryInfo({ navigation, id }) {
  const [stories, setStories] = useState({});

  useEffect(() => {
    getStories(id)
      .then((res) => setStories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("NewsFeed", {
          url: stories.url,
          newsTitle: stories.title,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <Text numberOfLines={1} style={styles.title}>
            Title: {stories.title}
          </Text>
          <Text style={styles.by}>By: {stories.by}</Text>
        </View>

        <MaterialCommunityIcons name="chevron-right" size={20} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 8,
    // borderWidth: 1,
    backgroundColor: "white",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  detailContainer: {
    marginLeft: 5,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  by: {
    fontSize: 15,
    fontWeight: "600",
  },
});

export default GetStoryInfo;
