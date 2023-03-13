export interface TodoEssence {
    id: number;
    label: string;
    checked: boolean;
}

export interface TodoItemContextEssence {
    onCheck: () => void;
    checked: boolean;
    label: string;
    onDelete: () => void;
}

export interface InputTodoEssence {
    id: number;
    label: string;
    checked: boolean;
}

export interface patchEssence {
    id: number;
    body: InputTodoEssence;
}