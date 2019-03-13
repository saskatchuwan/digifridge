export const stringifyPreferences = ({preferences}) => {
  let prefStr = "";
  
  Object.keys(preferences).forEach(key => {
    if (preferences[key].preferred === "true") {
      prefStr = prefStr + `&health=${preferences[key].name}`;
    }
  });
  return prefStr;
};