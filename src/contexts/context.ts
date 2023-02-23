import React, { createContext } from 'react';
import { ActionType } from '../types/ActionType';

export const CounterContext: React.Context<number> = createContext(0);

const initialAction: ActionType = {
    type: ''
};
// 急遽anyで逃げる
export const CounterDispatchContext: any = createContext(initialAction);