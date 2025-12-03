#  Pet Care App

A modern, responsive web application for pet owners to discover and book winter care services for their beloved companions.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Firebase](https://img.shields.io/badge/Firebase-ffaa00?style=for-the-badge&logo=Firebase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

##  Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

##  Features

- **Pet Service Discovery**: Browse through various winter care services for your pets
- **Category-based Navigation**: Easily find services organized by categories
- **User Authentication**: Secure sign-up and login using Firebase Authentication
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Detailed Service Information**: View comprehensive details about each service
- **Profile Management**: Manage your personal information and booking history
- **Modern UI/UX**: Clean and intuitive interface built with Tailwind CSS and DaisyUI

##  Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS v4, DaisyUI
- **Routing**: React Router v7
- **Authentication**: Firebase Authentication
- **State Management**: React Context API
- **Icons**: Lucide React, React Icons
- **Notifications**: React Hot Toast
- **Loading Indicators**: React Spinners
- **Animations**: React Fast Marquee, Swiper

##  Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Firebase account for authentication

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pet-care-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pet-care-app
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint on the project

##  Project Structure

```
src/
├── Components/        # Reusable UI components
├── Layout/            # Page layouts
├── Pages/             # Individual pages
├── Providers/         # Context providers and routers
├── Routes/            # Route configuration
├── Firebase/          # Firebase configuration
├── Assets/            # Static assets
└── Utils/             # Utility functions
```

## 📸 Screenshots

> _Coming soon: Beautiful screenshots of the application in action_

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Firebase](https://firebase.google.com/) - Backend-as-a-Service platform
- [DaisyUI](https://daisyui.com/) - Tailwind CSS Components

---

<p align="center">Made with  for pet lovers everywhere</p>
