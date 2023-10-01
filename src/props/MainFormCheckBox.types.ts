export type MainFormCheckbox = {
    name : string,
    label: string,
    handleChecked: (e : React.ChangeEvent<HTMLInputElement>) => void;
}