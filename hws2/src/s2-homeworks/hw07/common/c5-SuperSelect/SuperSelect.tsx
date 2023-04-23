import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import { ArrType } from '../../HW7'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: ArrType[] 
    onChangeOption?: (option: number) => void 
    // onChange: (id: number) => void
}



const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {

    console.log(options)
    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value}
              </option>
          ))
        :  []// map options with key
            


    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // console.log(+e.target.value)
       onChangeOption?.(+e.target.value)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')
    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
