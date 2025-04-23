import { createSlice } from "@reduxjs/toolkit";

const eventsInitialState = [
  {
    eventName: "مهدی مکس",
    imageUrl:
      "https://www.georgeinstitute.org/sites/default/files/2020-10/world-food-day-2020.png",
    id: "n1",
  },
  {
    eventName: "مهدی پرو",
    imageUrl:
      "https://img.freepik.com/photos-gratuite/vue-dessus-table-pleine-nourriture_23-2149209253.jpg?ga=GA1.1.451102820.1745419076&semt=ais_hybrid&w=740",
    id: "n2",
  },
  {
    eventName: "مهدی بمب",
    imageUrl:
      "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=300",
    id: "n3",
  },
  {
    eventName: "اژدر مهدی",
    imageUrl:
      "https://www.georgeinstitute.org/sites/default/files/2020-10/world-food-day-2020.png",
    id: "n4",
  },
];

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsInitialState,
  reducers: {
    addEvent(state, action) {
      var temp = {
        eventName: action.payload.eventName,
        imageUrl: action.payload.imageUrl,
        id: action.payload.id,
      };
      state.push(temp);
    },
  },
});

export const eventsActions = eventsSlice.actions;
export default eventsSlice.reducer;
