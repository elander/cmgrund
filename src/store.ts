import create from "zustand";

export type Task = {
    id: string;
    text: string;
};

export type List = {
    id: string;
    text: string;
    tasks: Task[];
};



export const appData: List[] = [
    {
        id: "0",
      text: "Min första kolumn",
      tasks: [{id: "c0", text: "Mitt första kort"}, {id: "c01",text: "Mitt fjärde kort"}]
    },
    {
        id: "1",
      text: "Min andra kolumn",
      tasks: [{id: "c1", text: "Mitt andra kort"}]
    },
    {
        id: "2",
      text: "Min tredje kolumn ",
      tasks: [{id: "c2", text: "Mitt tredje kort"}]
    }
  ];
  
  export type AppState = {
    lists: List[];
    addList: (list: List) => void,
    addTask: (task: Task, listIndex: number) => void,
};

  export const useStore = create<AppState>()((set) => ({
    lists: appData,
    addList: (list: List) => set((state) => ({lists: [...state.lists, list]})),
    addTask: (newTask, listIndex) => set((state) => {
        const newState = JSON.parse(JSON.stringify(state));
        newState.lists[listIndex].tasks.push(newTask);
        state = {...state, lists: newState.lists};
        return state;
    }),
  }));