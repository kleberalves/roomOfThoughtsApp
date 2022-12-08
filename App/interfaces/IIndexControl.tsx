export interface IIndexControl {
    active: number;
    current: number;
    set: React.Dispatch<React.SetStateAction<number>>;
}