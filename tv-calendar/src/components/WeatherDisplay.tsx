import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardBody, Grid, Text, Badge } from '@acestarter/ui'

interface WeatherDisplayProps {
  location: string
  currentSeason: string
}

const seasonIcons: Record<string, string> = {
  spring: '🌸',
  summer: '☀️',
  fall: '🍂',
  winter: '❄️'
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ location, currentSeason }) > {
  const [weather, setWeather] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() > {
    const fetchWeather = async () > {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
        )
        const data = await response.json()
        setWeather(data)
      } catch (error) {
        console.error('Weather API error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [location])

  if (loading) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <Text size="large">Loading weather...</Text>
        </CardContent>
      </Card>
    )
  }

  if (!weather || weather.cod !== 200) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <Text size="large">Weather unavailable</Text>
        </CardContent>
      </Card>
    )
  }

  const { main, weather: conditions, wind } = weather
  const icon = conditions[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

  return (
    <Card className={`season-${currentSeason}`}>
      <CardHeader>
        <CardTitle className="text-center">
          <Text size="xlarge" weight="bold">
            {seasonIcons[currentSeason]}
            Weather
            {seasonIcons[currentSeason]}
          </Text>
        </CardTitle>
        <CardSubtitle className="text-center">
          <Text size="small">{location}</Text>
        </CardSubtitle>
      </CardHeader>
      <CardBody>
        <Grid cols="2" gap="4">
          <div className="text-center">
            <img 
              src={iconUrl} 
              alt={conditions[0].description}
              width={100}
              height={100}
              className="mx-auto"
            />
            <Text size="xlarge" weight="bold" className="mt-2">
              {Math.round(main.temp)}°F
            </Text>
            <Text size="small">{conditions[0].description}</Text>
          </div>
          <div>
            <Grid gap="2">
              <div>
                <Text size="medium" weight="bold">Feels Like:</Text>
                <Text size="small">{Math.round(main.feels_like)}°F</Text>
              </div>
              <div>
                <Text size="medium" weight="bold">Humidity:</Text>
                <Text size="small">{main.humidity}%</Text>
              </div>
              <div>
                <Text size="medium" weight="bold">Wind:</Text>
                <Text size="small">{Math.round(wind.speed)} mph</Text>
              </div>
            </Grid>
          </div>
        </Grid>
      </CardBody>
    </Card>
  )
}

export default WeatherDisplay
