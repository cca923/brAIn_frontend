import folders from "./folders/slice";
import files from "./files/slice";
import summary from "./summary/slice";
import quiz from "./quiz/slice";
import chat from "./chat/slice";

export const rootReducer = {
  folders,
  files,
  summary,
  quiz,
  chat,
};
