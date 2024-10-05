<h1 align="center"><strong>React Quiz App</strong></h1>

This React Quiz App is an interactive application designed to test users' knowledge of React concepts. The app is built using React and leverages Context API for efficient state management across components. The data for the quiz questions is fetched from a backend emulator provided by npoint.io, simulating real-world API interaction. The app includes essential features like a timer, a loader, a progress bar to track points, and logic to enforce progression through the quiz by preventing access to the next question before passing the current one.

<h1>Features</h1>

**React and Context API for State Management:**
The app utilizes React's Context API for global state management, making it easy to share data (like the current score, quiz progress, and answers) across multiple components without prop drilling.

**Dynamic Quiz Questions:**
Quiz questions are fetched from npoint.io, a backend emulator that serves the questions as JSON data. This simulates a real-world API, demonstrating how the app would handle asynchronous data fetching.

**Context-Based State Sharing:**
The app uses Context API to manage and share the quiz state, including the current question, score, and user answers. This helps avoid prop drilling and keeps the data flow organized.

**Progress Bar for Points Tracking:**
A progress bar visually represents the user's score based on the number of correct answers. As users answer questions correctly, the progress bar fills up, giving them a sense of accomplishment as they move closer to completing the quiz.

**Timer Functionality:**
A built-in timer adds urgency to all questions, challenging users to answer within a specific time frame. The timer is reset when the time is over.

**Loader Animation:**
A loader animation is displayed while data is being fetched from the backend, ensuring a smooth user experience during the loading process.

**Progress Control:** 
Users cannot skip questions or move on to the next question until they've answered the current question.

**Interactive Feedback:**
After each answer, users receive immediate feedback on whether they were correct or incorrect, helping them learn from their mistakes as they progress through the quiz.

<h1>Technology Stack</h1>

-**Frontend:** React (with hooks and functional components)

-**State Management:** React Context API

-**Backend Emulator:** npoint.io for data fetching

-**Loader and Timer:** Custom components for interactive experience

-**Progress Bar:** Tracks points based on correct answers

-**Routing and Navigation:** React Router (optional, if implemented for navigation)


<h1>Installation and Setup</h1>

**Clone the repository:**

bash
Copy code
git clone https://github.com/your-username/react-quiz-app.git
cd react-quiz-app

**Install dependencies:**

bash
Copy code
npm install

**Run the app:**

bash
Copy code**npm start**
The app will be available at http://localhost:3000.

**How it Works**

The app loads quiz data from an API hosted on npoint.io.

The Context API stores the quiz data, user's current progress, score, and correct answers, which are shared across components.

A progress bar tracks the user's progress, filling up based on the number of correct answers.

Each question is presented in sequence, and users must provide the correct answer to move forward. A timer ensures that users answer within a specific time, enhancing engagement.

Loader animations are shown during the initial data fetching and transitions between questions to give users feedback during waiting times.
