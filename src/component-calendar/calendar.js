import React from 'react';
import './calendar.css'

function Calendar(props) {

    const eventos = Object.values(props.calendar).map(item => {
        return (
            <div className="calendar-card" key={item.evento}>
                <div className="calendar-date"><p>{item.dia}</p><p>{item.mes}</p></div>
                <div className="line2"></div>
                <div className="calendar-content">
                <p><span className="titulo-evento">{item.evento}</span></p>
                <p>{item.descripcion.slice(0,50)} [...]</p>
                </div>
            </div>
        )
    })



    return (
        <div className="calendar-container">
            {eventos}
        </div>
    )

}

export default Calendar;