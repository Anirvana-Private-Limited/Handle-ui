import { BACKEND_URL } from "../config";

export const fetchCityList = async () => {
  const token = getUserData().token;

  try {
    const responce = await fetch(BACKEND_URL + "location/cities/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    return await responce.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchCourseList = async () => {
  const token = getUserData().token;

  try {
    const responce = await fetch(BACKEND_URL + "organisation/1/courses/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    return await responce.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchPlatformList = async () => {
  const token = getUserData().token;

  try {
    const responce = await fetch(BACKEND_URL + "organisation/1/platform/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    return await responce.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const formateDate = (date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
};

export const getUserData = () => {
  return JSON.parse(localStorage.getItem("user-data"));
};
