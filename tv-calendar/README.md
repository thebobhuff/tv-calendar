# TV Family Calendar App

A warm and friendly family calendar app designed for TV display in your kitchen.

## Features

- **Google Calendar Integration**: Shows your family events
- **Weather Display**: Current conditions for Spring, Texas 77833
- **Inspirational Quotes**: Daily motivational quotes
- **Seasonal Themes**: Automatic color palettes based on the season
- **TV-Optimized**: Large text and readable layout for distance viewing
- **Fancy Design**: Built with Aceternity UI components

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   # Create .env file in the root directory
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key
   REACT_APP_GOOGLE_API_KEY=your_google_api_key
   REACT_APP_CALENDAR_ID=your_calendar_id
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to http://localhost:3000

## Configuration

### Google Calendar API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google Calendar API
4. Create credentials (API key)
5. Share your calendar with the API key

### Weather API

Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)

## TV Display

For optimal TV display:
- Resolution: 1920x1080
- Browser: Fullscreen mode
- Hide browser UI for cleaner look

## Seasonal Color Palettes

- **Spring**: Pastel blues and pinks
- **Summer**: Warm oranges and purples
- **Fall**: Earthy oranges and magentas
- **Winter**: Cool blues and cyans

## Font

Uses Playfair Display for a warm, friendly, and elegant appearance.

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Development Notes

- The app automatically detects the current season based on the month
- Updates calendar events every time the app loads
- Quote changes on each page refresh
- Weather updates automatically every few minutes

## File Structure

```
tv-calendar/
├── src/
│   ├── components/          # React components
│   │   ├── CalendarDisplay.tsx
│   │   ├── WeatherDisplay.tsx
│   │   └── QuoteDisplay.tsx
│   ├── hooks/              # Custom hooks
│   ├── App.tsx             # Main app component
│   └── index.tsx           # Entry point
├── public/                 # Static assets
├── package.json            # Dependencies
└── vite.config.ts          # Build configuration
```

## Next Steps

1. Set up Google Calendar API credentials
2. Get OpenWeatherMap API key
3. Configure your calendar ID
4. Test on your TV!

## Support

If you need help with API setup or customization, let me know!