export interface InputValidState {
  email: boolean;
  password: boolean;
}

export interface TodoItemType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ButtonProps extends TodoItemType {
  additionalStyle?: string;
}
