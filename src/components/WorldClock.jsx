import { useState, useEffect } from 'react'
import Clock from './Clock'
import TimezoneSelector from './TimezoneSelector'
import './WorldClock.css'

function WorldClock() {
  const [clocks, setClocks] = useState(() => {
    const savedClocks = localStorage.getItem('worldClocks')
    if (savedClocks) {
      return JSON.parse(savedClocks)
    }
    
    // Default clocks
    return [
      { id: 1, timezone: 'America/New_York', city: 'New York' },
      { id: 2, timezone: 'Europe/London', city: 'London' },
      { id: 3, timezone: 'Asia/Tokyo', city: 'Tokyo' }
    ]
  })

  useEffect(() => {
    localStorage.setItem('worldClocks', JSON.stringify(clocks))
  }, [clocks])

  const addClock = ({ timezone, city }) => {
    const newClock = {
      id: Date.now(),
      timezone,
      city
    }
    setClocks(prev => [...prev, newClock])
  }

  const removeClock = (id) => {
    setClocks(prev => prev.filter(clock => clock.id !== id))
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          
          // Simple timezone detection based on longitude
          // This is a basic approximation
          let timezone = 'UTC'
          const timezoneOffset = Math.round(longitude / 15)
          
          // Map longitude to common timezones (simplified)
          const timezoneMap = {
            '-8': 'America/Los_Angeles',
            '-7': 'America/Denver',
            '-6': 'America/Chicago',
            '-5': 'America/New_York',
            '0': 'Europe/London',
            '1': 'Europe/Paris',
            '8': 'Asia/Shanghai',
            '9': 'Asia/Tokyo'
          }
          
          timezone = timezoneMap[timezoneOffset.toString()] || 'UTC'
          
          const existingClock = clocks.find(clock => clock.timezone === timezone)
          if (!existingClock) {
            addClock({
              timezone,
              city: 'Your Location'
            })
          }
        },
        (error) => {
          console.log('Geolocation error:', error.message)
        }
      )
    }
  }

  return (
    <div className="world-clock">
      <header className="world-clock-header">
        <h1>🌍 World Clock</h1>
        <p className="subtitle">Keep track of time around the world</p>
        <div className="header-actions">
          <button 
            className="location-btn" 
            onClick={getCurrentLocation}
            title="Add your current location"
          >
            📍 Add Current Location
          </button>
          <TimezoneSelector onAddTimezone={addClock} />
        </div>
      </header>

      <main className="clocks-container">
        {clocks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🕐</div>
            <h2>No clocks yet!</h2>
            <p>Add your first timezone to get started.</p>
          </div>
        ) : (
          <div className="clocks-grid">
            {clocks.map(clock => (
              <Clock
                key={clock.id}
                timezone={clock.timezone}
                city={clock.city}
                onRemove={() => removeClock(clock.id)}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="world-clock-footer">
        <p>Total clocks: {clocks.length}</p>
        <p>Data is automatically saved to your browser</p>
      </footer>
    </div>
  )
}

export default WorldClock