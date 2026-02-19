import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter, Grid, Text, Badge, BadgeProps } from '@acestarter/ui'
import { format, isToday, isTomorrow, isThisWeek, isSameMonth } from 'date-fns'

interface Event {
  id: string
  summary: string
  start: {
    dateTime: string
    date: string
  }
  end: {
    dateTime: string
    date: string
  }
}

interface CalendarDisplayProps {
  events: Event[]
  currentSeason: string
}

const seasonColors: Record<string, BadgeProps['color']> = {
  spring: 'success',
  summer: 'warning',
  fall: 'orange',
  winter: 'blue'
}

const CalendarDisplay: React.FC<CalendarDisplayProps> = ({ events, currentSeason }) > {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])

  useEffect(() > {
    const now = new Date()
    const upcomingEvents = events
      .filter(event > {
        const eventStart = new Date(event.start.dateTime || event.start.date)
        return eventStart > now
      })
      .sort((a, b) > {
        const aStart = new Date(a.start.dateTime || a.start.date)
        const bStart = new Date(b.start.dateTime || b.start.date)
        return aStart.getTime() - bStart.getTime()
      })
    setFilteredEvents(upcomingEvents.slice(0, 10))
  }, [events])

  const getEventTime = (event: Event): string > {
    const start = new Date(event.start.dateTime || event.start.date)
    const end = new Date(event.end.dateTime || event.end.date)

    if (isToday(start)) {
      return 'Today ' + format(start, 'h:mm a')
    } else if (isTomorrow(start)) {
      return 'Tomorrow ' + format(start, 'h:mm a')
    } else if (isThisWeek(start)) {
      return format(start, 'EEEE h:mm a')
    } else {
      return format(start, 'MMMM d, h:mm a')
    }
  }

  return (
    <Card className={`season-${currentSeason}`}>
      <CardHeader>
        <CardTitle className="text-center">
          <Text size="xlarge" weight="bold">Family Calendar</Text>
        </CardTitle>
        <CardSubtitle className="text-center">
          <Text size="small">What's happening this week</Text>
        </CardSubtitle>
      </CardHeader>
      <CardBody>
        <Grid gap="1">
          {filteredEvents.length === 0 ? (
            <CardBody className="text-center py-8">
              <Text size="large">No upcoming events. Enjoy your free time! 🎉</Text>
            </CardBody>
          ) : (
            filteredEvents.map((event) > (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardContent>
                  <Grid cols="2" gap="2" alignItems="center">
                    <div>
                      <Badge color={seasonColors[currentSeason as keyof typeof seasonColors] || 'primary'}>
                        {getEventTime(event)}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <Text size="medium" weight="bold">{event.summary}</Text>
                    </div>
                  </Grid>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>
      </CardBody>
    </Card>
  )
}

export default CalendarDisplay
