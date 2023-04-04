import React, { useEffect, useState } from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import { restoreState, saveState } from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const fullDate = (date: Date) => {
        let newDate = new Date(date)
        // let day = newDate.getDay()
        // let weekDay = day === 1 ? 'Monday' : day === 2 ? 'Tuesday' : day === 3 ? 'Wednesday' : day === 4 ? 'Thursday' : day === 5 ? 'Friday' : 'Suturday'
        let weekDay = newDate.toLocaleDateString('en-US', { weekday: 'long' })
        let month = newDate.toLocaleDateString('en-US', { month: 'long' })
        let numberDate = newDate.toLocaleDateString("ru-RU").replace(/['/']/gi, '.')

        let time = `${newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds()}`
        let fullDate = `${weekDay + ' ' + time + ' ' + month + ' ' + numberDate}`

        return fullDate
    }


    // useEffect(() => {
    //     saveState('hw9-date', new Date())
    // },[])


    const start = () => {

        const id = setInterval(() => setDate(new Date()), 1000)

        setTimerId(Number(id))
        // saveState('hw9-date', id)
        // setTimerId(id)
        // console.log(fullDate)
        // setDate(fullDate)
        // let fullDate = newDate.getDate()
        // setDate(new Date().getDate)
        // setShow(true)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }

    const stop = () => {
        // restoreState('hw9-date', Date.now())
        // setDate(new Date())

        setTimeout(() => { clearInterval(timerId)}, 0.1);
        setTimerId(undefined)
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }
    const allTime = fullDate(date).split(' ')
    console.log(allTime[3])
    const stringTime = allTime[1] || <br /> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = allTime[3] || <br /> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = allTime[0] || <br /> // пишут студенты
    const stringMonth = allTime[2] || <br /> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId === undefined ? false : true} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={timerId === undefined ? true : false} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
