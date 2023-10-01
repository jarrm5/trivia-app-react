export type MainFormCheckbox = {
    name : string,
    label: string,
    //checked : boolean,
    handleCheckboxChecked: (e : React.ChangeEvent<HTMLInputElement>) => void;
}