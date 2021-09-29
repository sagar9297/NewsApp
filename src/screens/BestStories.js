import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import GetStoryInfo from "./GetStoryInfo";
import listingIds from "../utils/getIds";

function BestStories({ navigation }) {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    listingIds
      .getIds("best")
      .then((res) => setIds(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      {ids
        .map((val) => (
          <GetStoryInfo id={val} key={val} navigation={navigation} />
        ))
        .slice(0, 30)}
    </ScrollView>
  );
}

export default BestStories;
