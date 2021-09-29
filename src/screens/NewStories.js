import React, { useEffect, useState } from "react";
import { ScrollView,SafeAreaView,StatusBar } from "react-native";

import GetStoryInfo from "./GetStoryInfo";
import listingIds from "../utils/getIds";

function NewStories({ navigation }) {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    listingIds
      .getIds("new")
      .then((res) => setIds(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle='-content' />
    <ScrollView>
      {ids
        .map((val) => (
          <GetStoryInfo id={val} key={val} navigation={navigation} />
        ))
        .slice(0, 30)}
    </ScrollView>
    </SafeAreaView>
  );
}

export default NewStories;
