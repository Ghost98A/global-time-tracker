import { useState } from 'react'
import './TimezoneSelector.css'

// Common timezones with their display names
const POPULAR_TIMEZONES = [
  { value: 'America/New_York', label: 'New York (EST/EDT)' },
  { value: 'America/Los_Angeles', label: 'Los Angeles (PST/PDT)' },
  { value: 'America/Chicago', label: 'Chicago (CST/CDT)' },
  { value: 'America/Denver', label: 'Denver (MST/MDT)' },
  { value: 'Europe/London', label: 'London (GMT/BST)' },
  { value: 'Europe/Paris', label: 'Paris (CET/CEST)' },
  { value: 'Europe/Berlin', label: 'Berlin (CET/CEST)' },
  { value: 'Europe/Rome', label: 'Rome (CET/CEST)' },
  { value: 'Asia/Tokyo', label: 'Tokyo (JST)' },
  { value: 'Asia/Shanghai', label: 'Shanghai (CST)' },
  { value: 'Asia/Kolkata', label: 'Mumbai (IST)' },
  { value: 'Asia/Dubai', label: 'Dubai (GST)' },
  { value: 'Australia/Sydney', label: 'Sydney (AEST/AEDT)' },
  { value: 'Australia/Melbourne', label: 'Melbourne (AEST/AEDT)' },
  { value: 'Pacific/Auckland', label: 'Auckland (NZST/NZDT)' },
  { value: 'America/Sao_Paulo', label: 'São Paulo (BRT)' },
  { value: 'America/Mexico_City', label: 'Mexico City (CST/CDT)' },
  { value: 'America/Toronto', label: 'Toronto (EST/EDT)' },
  { value: 'Asia/Singapore', label: 'Singapore (SGT)' },
  { value: 'Asia/Hong_Kong', label: 'Hong Kong (HKT)' },
  { value: 'Europe/Moscow', label: 'Moscow (MSK)' },
  { value: 'Africa/Cairo', label: 'Cairo (EET)' },
  { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires (ART)' },
  { value: 'UTC', label: 'UTC' }
]

function TimezoneSelector({ onAddTimezone }) {
  const [selectedTimezone, setSelectedTimezone] = useState('')
  const [customCity, setCustomCity] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!selectedTimezone) return

    const selectedTz = POPULAR_TIMEZONES.find(tz => tz.value === selectedTimezone)
    const cityName = customCity.trim() || selectedTz.label.split(' (')[0]
    
    onAddTimezone({
      timezone: selectedTimezone,
      city: cityName
    })

    setSelectedTimezone('')
    setCustomCity('')
    setIsOpen(false)
  }

  const toggleSelector = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="timezone-selector">
      <button 
        className="add-clock-btn" 
        onClick={toggleSelector}
        aria-label="Add new timezone"
      >
        + Add Timezone
      </button>
      
      {isOpen && (
        <div className="selector-modal">
          <div className="selector-content">
            <div className="selector-header">
              <h3>Add New Clock</h3>
              <button 
                className="close-btn" 
                onClick={toggleSelector}
                aria-label="Close selector"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="timezone-select">Select Timezone:</label>
                <select
                  id="timezone-select"
                  value={selectedTimezone}
                  onChange={(e) => setSelectedTimezone(e.target.value)}
                  required
                >
                  <option value="">Choose a timezone...</option>
                  {POPULAR_TIMEZONES.map(tz => (
                    <option key={tz.value} value={tz.value}>
                      {tz.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="city-input">Custom City Name (optional):</label>
                <input
                  id="city-input"
                  type="text"
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  placeholder="e.g., Home, Office, etc."
                />
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={toggleSelector} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="add-btn" disabled={!selectedTimezone}>
                  Add Clock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default TimezoneSelector