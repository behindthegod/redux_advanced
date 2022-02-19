import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

//сооздаем редюсер. в toolkit называется - слайс.

export const UserSlice  =  createSlice({
    name: "user",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
        }
    }
    //каждый кейс идет как отдельный редюсер. создаем функции которые меняют состояние.
})

export default UserSlice.reducer;
//имортируем в стор.тс в рутредюсер