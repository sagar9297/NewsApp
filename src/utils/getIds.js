import site from "./apis";

const getIds = (type) => site.get(`/${type}stories.json?print=pretty`);

export default { getIds };
