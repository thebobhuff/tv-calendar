import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardBody, Text } from '@acestarter/ui'

const quotes = [
  '“The best way to get started is to quit talking and begin doing.” - Walt Disney',
  '“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” - Winston Churchill',
  '“Don't let yesterday take up too much of today.” - Will Rogers',
  '“You learn more from failure than from success. Don't let it stop you. Failure builds character.” - Unknown',
  '“It's not whether you get knocked down, it's whether you get up.” - Vince Lombardi',
  '“If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.” - Steve Jobs',
  '“People who are crazy enough to think they can change the world, are the ones who do.” - Rob Siltanen',
  '“Failure will never overtake me if my determination to succeed is strong enough.” - Og Mandino',
  '“We may encounter many defeats but we must not be defeated.” - Maya Angelou',
  '“Knowing is not enough; we must apply. Wishing is not enough; we must do.” - Johann Wolfgang Von Goethe'
]

const QuoteDisplay: React.FC = () > {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() > {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    const quoteParts = randomQuote.split(‘“’)
    if (quoteParts.length > 1) {
      const textParts = quoteParts[1].split(‘.”’)
      setQuote(textParts[0])
      setAuthor(textParts[1] ? textParts[1].trim() : 'Unknown')
    } else {
      setQuote(randomQuote)
      setAuthor('Unknown')
    }
  }, [])

  return (
    <Card className="bg-gradient-to-r from-purple-400 to-pink-400">
      <CardContent className="text-center text-white">
        <Text size="medium" className="mb-4">
          “{quote}”
        </Text>
        <Text size="small" weight="bold" italic>
          {author}
        </Text>
      </CardContent>
    </Card>
  )
}

export default QuoteDisplay
