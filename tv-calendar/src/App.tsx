import React, { useState, useEffect } from 'react'
import { Grid, Text } from '@acestarter/ui'
import CalendarDisplay from './CalendarDisplay'
import WeatherDisplay from './WeatherDisplay'
import QuoteDisplay from './QuoteDisplay'

const getCurrentSeason = () => {
  const now = new Date()
  const month = now.getMonth()

  if (month >= 2 && month <= 4) return 'spring'
  if (month >= 5 && month <= 7) return 'summer'
  if (month >= 8 && month <= 10) return 'fall'
  return 'winter'
}

const App: React.FC = () => {
  const [season, setSeason] = useState(getCurrentSeason())
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const updateSeason = () => {
      setSeason(getCurrentSeason())
    }

    const interval = setInterval(updateSeason, 1000 * 60 * 60 * 24) // Check daily
    updateSeason()
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/calendar')
        const data = await response.json()
        setEvents(data.items || [])
      } catch (error) {
        console.error('Error fetching calendar:', error)
        setEvents([])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Text size="large">Loading calendar...</Text>
      </div>
    )
  }

  return (
    <div className={`season-${season}`}>
      <Grid cols="2" gap="4" className="h-full">
        <Grid rows="3" gap="4" className="h-full">
          <WeatherDisplay 
            location="Spring, Texas 77833" 
            currentSeason={season}
          />
          <QuoteDisplay />
        </Grid>
        <CalendarDisplay 
          events={events} 
          currentSeason={season}
        />
      </Grid>
    </div>
  )
}

export default App
