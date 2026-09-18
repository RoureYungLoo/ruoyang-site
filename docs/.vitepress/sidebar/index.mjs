import { dataSidebar } from "./data.mjs";
import { generalSidebar } from "./general.mjs";
import { interviewsSidebar } from "./interviews.mjs";
import { languagesSidebar } from "./languages.mjs";
import { middlewareSidebar } from "./middleware.mjs";

export const sidebar = {
  ...generalSidebar,
  ...languagesSidebar,
  ...dataSidebar,
  ...interviewsSidebar,
  ...middlewareSidebar,
};
