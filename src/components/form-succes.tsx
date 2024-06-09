import {CheckCircledIcon } from "@radix-ui/react-icons"

interface FormSuccesProps {
    message?: string
}

export const FormSucces = ({ message }: FormSuccesProps) => {
    if(!message) return null
    return (
        <div className="flex items-center gap-x-2 text-sm bg-emerald-500/15 p-3 rounded-md text-emerald-500">
            <CheckCircledIcon className="w-4 h-4"/>
            <p>{message}</p>
        </div>
    )
}