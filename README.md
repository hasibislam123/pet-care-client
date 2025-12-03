# Pet Care App

Welcome to the Pet Care App - your one-stop solution for all your pet care needs!

## Features

- 🐾 Browse pet care services by category
- 🔐 Secure user authentication (Email/Password & Google Sign-In)
- 📱 Responsive design for all devices
- 🎨 Beautiful UI with glassmorphism effects
- 🛒 Service booking and management

## Technologies Used

- React.js
- Vite
- Firebase Authentication
- Tailwind CSS
- DaisyUI
- React Router
- React Hot Toast

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password and Google Sign-In methods)

4. Set up environment variables:
   - Copy the `.env.example` file to `.env`
   - Replace the placeholder values with your Firebase project credentials:
     ```
     VITE_apiKey=your-api-key
     VITE_authDomain=your-project-id.firebaseapp.com
     VITE_projectId=your-project-id
     VITE_storageBucket=your-project-id.appspot.com
     VITE_messagingSenderId=your-messaging-sender-id
     VITE_appId=your-app-id
     ```

5. Start the development server:
   ```bash
   npm run dev
   ```

### Firebase Configuration

To enable Google authentication and other Firebase features:

1. In your Firebase project, go to Project Settings
2. Under "General" tab, copy the web app configuration
3. Paste the values in your `.env` file
4. For Google Sign-In:
   - Go to Authentication > Sign-in method
   - Enable Google sign-in provider
   - Add your domain to authorized domains if deploying to a custom domain

### Deployment

#### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel project settings:
   - VITE_apiKey
   - VITE_authDomain
   - VITE_projectId
   - VITE_storageBucket
   - VITE_messagingSenderId
   - VITE_appId
4. Deploy!

## Troubleshooting

### Google Authentication Not Working?

1. **Check Environment Variables**: Ensure all Firebase configuration values are correctly set in your `.env` file or deployment platform
2. **Enable Google Sign-In**: In Firebase Console, go to Authentication > Sign-in method and enable Google
3. **Authorized Domains**: Make sure your deployment domain is added to Firebase authorized domains
4. **Browser Popups**: Ensure popups are not blocked by your browser
5. **Console Errors**: Check browser console for specific error messages

### Blank Page on Deployment?

1. **Check Firebase Config**: Missing or incorrect Firebase configuration can cause initialization failures
2. **Environment Variables**: Ensure all required environment variables are set in your deployment platform
3. **Check Console**: Open browser developer tools and check for JavaScript errors

## Project Structure

```
src/
├── Components/          # Reusable UI components
├── Contexts/            # React Context providers
├── firebase/            # Firebase configuration
├── Laytout/             # Layout components
├── Page/                # Page components
├── Provider/            # Authentication provider
├── Route/               # Routing configuration
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.