export type AnswerProps = {
    prefix: string
    label: string
    isCorrect : boolean
    isSelected : boolean
    onSelect : () => void
}