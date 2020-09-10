import axios from "axios";

const api = axios.create({
  baseURL: "https://api.edamam.com/",
});

export async function recipes() {
  try {
    const search = "meat";
    const appId = "b405abbb";
    const appKey = "210f6b5041c3a1443fd6300057e7aea2";

    const response = await api.get(
      `search?q=${search}&app_id=${appId}&app_key=${appKey}`
    );

    return response;
  } catch (error) {
    throw error;
  }
}
