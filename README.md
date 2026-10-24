# Wattwise — Electricity Usage Estimator

Wattwise is a lightweight, responsive web app for estimating the electricity use and optional energy cost of household appliances. Add appliances to a local history, compare estimates, search or sort your list, and export the visible results as CSV.

> Estimates are informational only. Actual consumption and charges depend on appliance behavior, utility billing rules, and your electricity tariff.

## Features

- **Energy estimates:** Calculate energy use in kilowatt-hours (kWh) from device power, daily usage hours, and a selected period.
- **Preset and custom periods:** Choose daily, weekly, monthly (30 days), semi-annual (180 days), yearly (365 days), or enter a custom number of days.
- **Optional cost estimates:** Enter a cost per kWh for an appliance. Each estimate keeps its own rate and estimated cost.
- **Dashboard summaries:** View recorded energy, the number of saved estimates, summed estimated costs, and average energy per estimate.
- **Saved appliance history:** Add and remove estimates; history is stored in the current browser.
- **Search and sorting:** Search appliance names and sort by most recent or highest estimated usage.
- **CSV export:** Export the estimates currently shown in the history list.
- **Responsive, lightweight interface:** Solid high-contrast surfaces, Tailwind utilities, lightweight transitions, and system fonts avoid expensive backdrop filters and external font requests.

## How the calculation works

```text
Energy (kWh) = Power (W) × Hours per day × Number of days ÷ 1,000
Estimated cost = Energy (kWh) × Cost per kWh
```

The app does not assign a currency to the rate. Enter a rate in your preferred currency per kWh and interpret the resulting estimate in that same currency.

## Getting started

### Requirements

- Node.js (20 or later recommended)
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Using the app

1. Enter an appliance name, its rated power in watts, and its typical hours of use per day.
2. Select a preset estimate period or choose **Custom days** and enter a number of days.
3. Optionally enable an electricity rate and enter your cost per kWh.
4. Review the live energy estimate and select **Add estimate**.
5. Find saved estimates in the history section. Search by appliance name, change the sort order, remove individual entries, or export the currently visible list to CSV.
6. Use **Clear** to remove all saved estimates after confirming the action.

Hours per day must be greater than zero and no more than 24. Power must be greater than zero. Custom periods must be positive whole numbers.

## Data and privacy

Appliance history is stored in the browser's `localStorage` under the `energy-estimator-items` key. The app does not send this history to a server. Data is specific to the browser and device, so clearing browser storage or changing browsers can remove or hide saved estimates. CSV export creates a file in the browser; it does not upload data.

## Project structure

```text
electricity-management/
├── public/
│   ├── AppIcon.png                       # App/browser icon
│   └── app-thumnail.webp                 # Social preview image
├── src/
│   ├── assets/                           # Assets imported by the application
│   │   └── react.svg                     # Starter asset
│   ├── features/
│   │   └── energy-dashboard/
│   │       ├── components/
│   │       │   ├── ApplianceForm.jsx     # Inputs, live estimate, and validation
│   │       │   ├── ApplianceHistory.jsx  # Search, sorting, export, and saved list
│   │       │   ├── DashboardHeader.jsx   # Brand and privacy status
│   │       │   └── SummaryCards.jsx      # Aggregate energy and cost metrics
│   │       ├── hooks/
│   │       │   └── useEnergyHistory.js   # History state and local persistence
│   │       ├── utils/
│   │       │   └── energy.js             # Calculation, formatting, storage, and CSV helpers
│   │       └── EnergyDashboard.jsx       # Feature composition and dashboard layout
│   ├── App.jsx                           # Root application component
│   ├── index.css                         # Tailwind import and global base styles
│   └── main.jsx                          # React application bootstrap
├── index.html                            # HTML shell and page metadata
├── package.json                          # Dependencies and npm scripts
├── package-lock.json                     # Locked npm dependency versions
├── eslint.config.js                      # ESLint configuration
└── vite.config.js                        # Vite, React, and Tailwind plugin configuration
```

## Technology

- React 19
- Vite with the Rolldown Vite package
- Tailwind CSS 4 with the Vite plugin
- ESLint
