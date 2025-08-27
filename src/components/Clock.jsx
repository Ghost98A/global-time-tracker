import { useState, useEffect } from 'react'
import './Clock.css'

function Clock({ timezone, city, onRemove }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: timezone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      timeZone: timezone,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTimeOffset = (date) => {
    // Get timezone offset using Intl.DateTimeFormat
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        timeZoneName: 'longOffset'
      })
      const parts = formatter.formatToParts(date)
      const offsetPart = parts.find(part => part.type === 'timeZoneName')
      return offsetPart ? offsetPart.value : 'UTC'
    } catch (error) {
      // Fallback for browsers that don't support longOffset
      const now = new Date()
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000)
      const targetTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
      const localTime = new Date(now.toLocaleString('en-US'))
      
      const offsetMs = targetTime.getTime() - localTime.getTime()
      const offsetHours = offsetMs / (1000 * 60 * 60)
      
      const sign = offsetHours >= 0 ? '+' : '-'
      const absHours = Math.abs(offsetHours)
      const hours = Math.floor(absHours)
      const minutes = Math.round((absHours - hours) * 60)
      
      return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    }
  }

  return (
    <div className="clock-card">
      <div className="clock-header">
        <h3 className="city-name">{city}</h3>
        <button className="remove-btn" onClick={onRemove} aria-label={`Remove ${city} clock`}>
          ×
        </button>
      </div>
      <div className="time-display">
        {formatTime(time)}
      </div>
      <div className="date-display">
        {formatDate(time)}
      </div>
      <div className="timezone-display">
        {getTimeOffset(time)}
      </div>
    </div>
  )
}

export default Clock