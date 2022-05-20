import { createSlice } from '@reduxjs/toolkit';
import { tasks, toDoList } from 'components/WeddingCouple/ToDoList/tasks';
import ToDoList from 'components/WeddingCouple/ToDoList/ToDoList';
import { RootState } from 'store/store';
interface initial {
  progress: number
  list: toDoList
};

const initialState: initial = {
  progress: 0,
  list:  tasks
};
 
const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
      updateProgress: (state, action) => {
        state.list  = action.payload;
        state.progress = ( 
            (state.list.preparation.filter((task,id)=>(task.checked))).length 
          + (state.list.weddingCeremony.filter((task,id)=>(task.checked))).length
          + (state.list.weddingParty.filter((task,id)=>(task.checked))).length
        ) * 100 / (
            (state.list.preparation).length 
          + (state.list.weddingCeremony).length
          + (state.list.weddingParty).length
        );
      },
      updateProgressList: (state, action) => {
        const stage: string = action.payload.stage;
        const title: string = action.payload.title;
        const checked: boolean = action.payload.checked;

        if (stage === "preparation") {
          let newItem =  JSON.parse(JSON.stringify(state.list.preparation.filter((el,id)=> el.title === title)[0]));
          newItem.checked = checked;
          const newStateList: toDoList = JSON.parse(JSON.stringify( Object.assign({}, state.list)));
          let index: number | undefined = newStateList.preparation.find(el=>el.title===title)?.id;
          if (isNotUndefined(index)){
            newStateList.preaparation.splice(index-1, 1, newItem);
            state.list = newStateList;
          }
        } else if (stage === "weddingCeremony") {
          let newItem =  JSON.parse(JSON.stringify(state.list.weddingCeremony.filter((el,id)=> el.title === title)[0]));
          newItem.checked = checked;
          const newStateList: toDoList = JSON.parse(JSON.stringify( Object.assign({}, state.list)));
          let index: number | undefined = newStateList.weddingCeremony.find(el=>el.title===title)?.id;
          if (isNotUndefined(index)){
            newStateList.weddingCeremony.splice(index-1, 1, newItem);
            state.list = newStateList;
          }
        } else if (stage === "weddingParty") {
          let newItem =  JSON.parse(JSON.stringify(state.list.weddingParty.filter((el,id)=> el.title === title)[0]));
          newItem.checked = checked;
          const newStateList: toDoList = JSON.parse(JSON.stringify( Object.assign({}, state.list)));
          let index: number | undefined = newStateList.weddingParty.find(el=>el.title===title)?.id;
          if (isNotUndefined(index)){
            newStateList.weddingParty.splice(index-1, 1, newItem);
            state.list = newStateList;
          }
        }
      },
    },
  });
  
  export const { updateProgress, updateProgressList } = progressSlice.actions;
  
  export default progressSlice.reducer;

  export const selectActualProgress = ((state: RootState)=>state.progress.progress);
  export const selectToDOList = ((state: RootState)=>state.progress.list);

  function isNotUndefined(id: number | undefined): id is number {
    return(
      (id as number) !== undefined 
    ) 
  };

  