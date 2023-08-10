export const parseDataForMap = (values) => {
  let headerLabel = [];
  let data = [];
  headerLabel = Object.keys(values[0]);
  values.map((item) => {
    data.push([item._id, item.count]);
  });
  return [headerLabel, ...data];
};

export const parseDataForLine = (values) => {
  let headerLabel = [];
  let data = [];
  headerLabel = ["Year", "count"];
  values.map((item) => {
    data.push([`${item.Year}`, item.count]);
  });
  return [headerLabel, ...data];
};

export const parseDataForPie = (values) => {
  let headerLabel = [];
  let data = [];
  headerLabel = ["device", "count"];
  values.map((item) => {
    data.push([item.device, item.count]);
  });
  return [headerLabel, ...data];
};

export const parseDataForBar = (values) => {
  let headerLabel = [];
  let data = [];
  headerLabel = ["country", "Male", "Female"];
  values.map((item) => {
    let maleCount = 0;
    let femaleCount = 0;
    item.gender_counts.map((value) => {
      if (value.gender === "Male") {
        maleCount = value.count;
      } else if (value.gender === "Female") {
        femaleCount = value.count;
      }
    });
    data.push([item.country, maleCount, femaleCount]);
  });
  return [headerLabel, ...data];
};
