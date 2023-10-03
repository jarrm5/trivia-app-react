export type MainFormCheckbox = {
    name : string,
    label: string,
    handleCheckboxChecked: (e : React.ChangeEvent<HTMLInputElement>) => void;
}