import folders from "./folders/slice";
import files from "./files/slice";
import summary from "./summary/slice";
import quiz from "./quiz/slice";
import chat from "./chat/slice";
import toast from "./toast/slice";

export const rootReducer = {
  folders,
  files,
  summary,
  quiz,
  chat,
  toast,
};
