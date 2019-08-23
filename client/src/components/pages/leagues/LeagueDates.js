import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const LeagueDates = ({ set, type, min, max, selected }) => {
  return (
    <div className="l-col-6 set-date">
      <label className="react-datepicker-wrapper">
        {type} Date
        <DatePicker minDate={min} maxDate={max} selected={selected} onChange={set} />
      </label>
    </div>
  )
}

export default LeagueDates
