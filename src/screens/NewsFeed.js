import React from "react";
import { WebView } from "react-native-webview";

function NewsFeed({ route }) {
  const url = route.params.url;
  console.log(url);
  return <WebView source={{ uri: url }} style={{ margin: 10 }} />;
}

export default NewsFeed;
