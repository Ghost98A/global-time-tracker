# 🌍 Global Time Tracker - World Clock App

A modern, responsive world clock application built with React and Vite. Keep track of time across multiple timezones with a beautiful, intuitive interface.

## ✨ Features

- **Real-time Clocks**: Live updating clocks for multiple timezones
- **Timezone Selection**: Choose from 20+ popular timezones worldwide
- **Custom City Names**: Personalize clock labels with custom names
- **Current Location**: Automatically detect and add your current timezone
- **Persistent Storage**: Your clocks are saved in browser storage
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Modern UI**: Beautiful gradient designs with smooth animations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd global-time-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎯 Usage

### Adding a Clock
1. Click the "Add Timezone" button
2. Select a timezone from the dropdown
3. Optionally, enter a custom city name
4. Click "Add Clock"

### Adding Your Current Location
- Click the "📍 Add Current Location" button
- Allow location access when prompted
- Your timezone will be automatically detected and added

### Removing a Clock
- Click the "×" button on any clock card to remove it

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Clock.jsx              # Individual clock component
│   ├── Clock.css              # Clock styling
│   ├── TimezoneSelector.jsx   # Timezone selection modal
│   ├── TimezoneSelector.css   # Selector styling
│   ├── WorldClock.jsx         # Main app component
│   └── WorldClock.css         # Main app styling
├── App.jsx                    # Root component
├── App.css                    # Global app styles
├── index.css                  # Base styles
└── main.jsx                   # App entry point
```

## 🌐 Supported Timezones

The app includes 24 popular timezones:
- Major US cities (New York, Los Angeles, Chicago, Denver)
- European capitals (London, Paris, Berlin, Rome, Moscow)
- Asian cities (Tokyo, Shanghai, Mumbai, Dubai, Singapore, Hong Kong)
- Australian cities (Sydney, Melbourne)
- Other major cities (São Paulo, Mexico City, Toronto, Auckland, Cairo, Buenos Aires)
- UTC

## 🎨 Features in Detail

### Real-time Updates
- All clocks update every second automatically
- No manual refresh needed
- Accurate timezone calculations

### Responsive Design
- Mobile-first design approach
- Grid layout adapts to screen size
- Touch-friendly interface on mobile devices

### Data Persistence
- Your clock configuration is automatically saved
- Data persists between browser sessions
- No account required

### Accessibility
- Proper ARIA labels for screen readers
- Keyboard navigation support
- High contrast design elements

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Modern styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features
- **Intl API** - International date/time formatting

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- Built with React and Vite for fast development
- Uses browser's native Intl API for accurate timezone handling
- Inspired by modern design principles and user experience
