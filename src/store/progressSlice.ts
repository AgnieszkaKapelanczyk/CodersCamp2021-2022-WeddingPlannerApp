import { createSlice } from '@reduxjs/toolkit';
import { tasks, toDoList } from 'components/WeddingCouple/ToDoList/tasks';
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
        const stage = action.payload.stage;
        const title = action.payload.title;
        const checked = action.payload.checked;

        if (stage === "preparation") {
            state.list.preparation.filter((el,id)=> el.title === title)
        } else if (stage === "weddingCeremony") {

        } else if (stage === "weddingParty") {

        }
      },
    },
  });
  
  export const { updateProgress } = progressSlice.actions;
  
  export default progressSlice.reducer;

  export const selectActualProgress = ((state: RootState)=>state.progress.progress);
  export const selectToDOList = ((state: RootState)=>state.progress.list);

  