import supabase from "./supabase.js";

const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error("Cbins could not be fetched");
  }

  return data;
};

export default getCabins;
