import site from "./apis";

const getStories = (ids) => site.get(`/item/${ids}.json`);

export default getStories;
