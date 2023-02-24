import React, { createContext } from 'react';
import { ActionType } from '../types/ActionType';

const initialAction: ActionType = {
  type: '',
};

// ユーザー情報用Context
// 色々なコンポーネントで使いたい
export const UserInfoContext: any = createContext(null);

// List用のContext
// 急遽anyで逃げる
export const ListContext: any = createContext([]);
export const ListDispatchContext: any = createContext(initialAction);

// Counter用のContext
export const CounterContext: React.Context<number> = createContext(0);
// 急遽anyで逃げる
export const CounterDispatchContext: any = createContext(initialAction);
