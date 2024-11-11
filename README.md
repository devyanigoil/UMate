# UMate - Bumble for Roommates
  ![WhatsApp Image 2024-11-09 at 10 22 56 PM](https://github.com/user-attachments/assets/ad77521f-7a32-4ca9-b6a7-491d6163562d)

Ever had difficulty finding a roommate? Just swipe right and find your perfect match!

UMate is a web application designed to simplify the process of finding compatible roommates. With UMate, users can easily create a profile, set their preferences, and find potential roommates using a swipe interface similar to dating apps. By using a recommendation model, UMate suggests the top matches based on compatibility factors like the duration of stay, lifestyle, budget, dietary preferences, and more.

### Video Walkthrough
[App Demo](https://drive.google.com/file/d/1vyIsDAp8QxKZ619tc18QEW1A_Plb-XPO/view?usp=sharing)

### Table of Contents
- Features
- Tech Stack
- Installation
- Usage
- API Endpoints
- Contributing
- License

### Features
- **User Authentication:** Secure login and sign-up functionality.
- **User Profiles:** Users can create and customize profiles with details such as budget, dietary preferences, smoking habits, etc.
- **Recommendation System:** The application suggests the top 5 roommate matches based on factors like the duration of stay and other preferences.
- **Filtering Options:** Users can filter potential roommates by budget, dietary restrictions, lifestyle preferences, and more.
- **Swipe Interface:** Inspired by dating apps, users can swipe through potential matches to find their ideal roommate.

### Tech Stack
- **Frontend:** React
- **Backend:** Flask with Python
- **Database:** MongoDB

### Installation
To get the project up and running locally, follow these steps:

**Prerequisites**
- Node.js and npm for the React frontend
- Python 3 for the backend
- MongoDB for the database

**Clone the Repository**
```
git clone https://github.com/your-username/UMate.git
cd UMate
```
**Setting Up the Backend (Flask API)** 
Navigate to the backend directory:
```
cd backend
```
**Install the Python dependencies:**
```
pip install -r requirements.txt
```
**Start the Flask server**(By default runs the app on port 5000):
```
flask run
```
**Setting Up the Frontend (React)**
Navigate to the frontend directory:
```
cd frontend
```
**Install the npm dependencies:**
```
npm install
```
**Start the React development server:**
```
npm start
```
The frontend should now be running on http://localhost:3000 and the backend on http://localhost:5000 on Windows. However, on MacOs, port 5000 is occupied with some other process. So run the backend on MacOs on a port other than 5000.
Use the following command to run the backend on port 5050:
```
flask run --port 5050
```

### Usage
Open the frontend application in a browser at http://localhost:3000.
Sign up for an account or log in if you already have one.
Set up your profile by specifying preferences such as budget, dietary restrictions, lifestyle choices, and desired duration of stay.
Use the interface to browse recommended roommate matches.
Use the filtering options to refine your search based on your criteria.
Once you find a match, connect with potential roommates and discuss moving plans!

### API Endpoints
Here’s a summary of the main API endpoints:

**User Authentication**
- POST /user/insert: Create a new user account
- POST /user/validate: Log in to an existing account

**Profile Management**
- GET /user-details/<email>: Fetch user preferences
- POST /user-details/: Add user preferences

**Roommate Matching**
- GET /rs/top-match: Fetch the top 5 recommended roommates based on user email
- GET /rs/other-mates: Fetch all users except the top recommended roommates for a user

**Other APIs**
- POST /user/favourites: Mark or unmark a roommate favourite for a user
- GET /user/favourite-roommates: List all favourite roommates and their details for a user
- GET /all_users/data: Return all users data except for password
Note: Ensure that the backend server is running on http://localhost:5000 (for MacOS - try a different port other than 5000) and the frontend server on http://localhost:3000 for a smooth connection.

### Contributing
Contributions are welcome! If you'd like to improve UMate, please fork the repository, make your changes, and submit a pull request. Ensure your changes align with the project's goals and are thoroughly tested.

