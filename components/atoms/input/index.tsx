import { ChangeEventHandler } from 'react'
import { OnChangeCallback } from 'react-toastify/dist/core'

export interface FormItemProps {
    id: string
    type: string
    name: string
    placeHolder: string
    title: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function FormItem(props: FormItemProps) {
    const { id, name, placeHolder, title, type, value, onChange, ...nativeProps } = props
    return (
        <div className="pt-30">
            <label htmlFor={id}
                className="form-label text-lg fw-medium color-palette-1 mb-10">{title}</label>
            <input type={type} className="form-control rounded-pill text-lg" id={id}
                name={name} aria-describedby={id} placeholder={placeHolder} required value={value} onChange={onChange} {...nativeProps} />
        </div>
    )
}