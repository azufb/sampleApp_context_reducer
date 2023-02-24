// ジェネリクスのデフォルトの型はanyとしておく。
export type ActionType<T = any> = {
  type: string;
  payload?: T;
};
