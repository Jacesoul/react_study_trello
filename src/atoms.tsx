import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "to do": ["a", "b"],
    doing: ["c", "d"],
    done: ["e", "f"],
  },
});
