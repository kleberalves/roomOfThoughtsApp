import { ETaskState } from "../enums/ETaskState";

export interface ITaskItem {
    title?: string;
    description?: string;
    state?: ETaskState;
} 