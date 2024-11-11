# UMate - Bumble for Roommates
  ![WhatsApp Image 2024-11-09 at 10 22 56 PM](https://github.com/user-attachments/assets/ad77521f-7a32-4ca9-b6a7-491d6163562d)

Ever had difficulty finding a roommate? Just swipe right and find your perfect match!

UMate is a web application designed to simplify the process of finding compatible roommates. With UMate, users can easily create a profile, set their preferences, and find potential roommates using a swipe interface similar to dating apps. By using a recommendation model, UMate suggests the top matches based on compatibility factors like the duration of stay, lifestyle, budget, dietary preferences, and more.

Table of Contents
Features
Tech Stack
Installation
Usage
API Endpoints
Contributing
License
Features
User Authentication: Secure login and sign-up functionality.
User Profiles: Users can create and customize profiles with details such as budget, dietary preferences, smoking habits, etc.
Recommendation System: The application suggests the top 5 roommate matches based on factors like the duration of stay and other preferences.
Filtering Options: Users can filter potential roommates by budget, dietary restrictions, lifestyle preferences, and more.
Swipe Interface: Inspired by dating apps, users can swipe through potential matches to find their ideal roommate.
Tech Stack
Frontend: React
Backend: Flask with Python
Database: MongoDB
Installation
To get the project up and running locally, follow these steps:

Prerequisites
Node.js and npm for the React frontend
Python 3 for the backend
MongoDB for the database
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/UMate.git
cd UMate
Setting Up the Backend (Flask API)
Navigate to the backend directory:

bash
Copy code
cd backend
Install the Python dependencies:

bash
Copy code
pip install -r requirements.txt
Start the Flask server:

bash
Copy code
python app.py
Setting Up the Frontend (React)
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the npm dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The frontend should now be running on http://localhost:3000 and the backend on http://localhost:5000.

Usage
Open the frontend application in a browser at http://localhost:3000.
Sign up for an account or log in if you already have one.
Set up your profile by specifying preferences such as budget, dietary restrictions, lifestyle choices, and desired duration of stay.
Use the swipe interface to browse recommended roommate matches.
Use the filtering options to refine your search based on your criteria.
Once you find a match, connect with potential roommates and discuss moving plans!
API Endpoints
Here’s a summary of the main API endpoints:

User Authentication

POST /api/signup: Create a new user account
POST /api/login: Log in to an existing account
Profile Management

GET /api/user/<user_id>: Fetch user details
PUT /api/user/<user_id>: Update user profile
Roommate Matching

GET /api/recommendations/<user_id>: Fetch top 5 recommended roommates for a given user
GET /api/matches: Fetch all available matches based on filters
Filtering

GET /api/filter: Apply filters based on budget, dietary preferences, duration of stay, and more
Note: Ensure that the backend server is running on http://localhost:5000 and the frontend server on http://localhost:3000 for a smooth connection.

## Final outcome
Contributing
Contributions are welcome! If you'd like to improve UMate, please fork the repository, make your changes, and submit a pull request. Ensure your changes align with the project's goals and are thoroughly tested.

