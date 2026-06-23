# Calendar App

A modern and responsive Calendar App built with **React.js**. Users can navigate through months and years, view dates in a clean calendar layout, and easily identify the current day.

## Features

* 📅 Monthly calendar view
* 🔄 Change month using dropdown
* 📆 Change year using dropdown
* 🎯 Highlights the current date
* 📱 Responsive and clean UI
* ⚡ Built with React Hooks (`useState`)

## Technologies Used

* React.js
* JavaScript (ES6+)
* CSS3
* Vite

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd calendar-app
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## Project Structure

```text
src/
├── assets/
│   ├── left-arrow.svg
│   └── right-arrow.svg
├── App.jsx
├── App.css
└── main.jsx
```

## How It Works

* The application initializes with the current date.
* Users can select a month and year from dropdown menus.
* The calendar dynamically generates the correct number of days for the selected month.
* Empty cells are added before the first day to align dates with their respective weekdays.
* The current date is highlighted for better visibility.

## Future Improvements

* Previous and next month navigation buttons
* Event reminders
* Date selection feature
* Dark mode support
* Holiday highlighting
* Local storage for events

## Author

**Muthukannan**

Designed and developed with ❤️ using React.

## License

This project is open source and available under the MIT License.
