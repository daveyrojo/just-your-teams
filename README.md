# just-your-teams

Project 2

Sports League news site

Pitch: 
The modern sports website is too convoluted and numerous. We are aiming to build a clean, preferences focus news resource for sports. The user will be prompted to pick a preference of leagues/teams upon initial log in and will only see news related to results, current matches, upcoming fixtures and press releases. This will make our website a personalized team feed as opposed to requiring a user to syphon through pages upon pages to find the news they are looking for. 

create a site that allows a user to login and track their favorite team from EPL to start -> then add La Liga -> then add NBA
user will be able to see live match updates, previous scores, upcoming matches and press releases if available
    If work moves quickly we will expand to multiple leagues/Sports

Activities:
    files structure
    model structure
    html/css
        landing page
        user page
    api
        pull specified data
        produce page based off of data requirement set by user 
    our api takes in 
        user log in
        user team preferences

Schedule:
    **Update: all completed
    End of day Monday:
        Be connected to api
        Start working on models
        Begin html/css
        File structure completed
        Repo created
            Branches created etc.
    
    End of day Tuesday:
    ** Routes not done due to User auth being introduced
        Pulling data for API
        Models done
        Relationships and routes done
        Skeleton of HTML done
    
    End of day Wednesday:
        Have a deployable site
            - simple html 
            - accept user credentials
            - produce ANY API data
        
        Plan:
            Dave and Mike will work on user auth
                - Building out routes for both front and backend are main focus
                - User password in User model needs:
                    BCRYPT
                    Hooks
            Jelani simply needs a log in button that accepts user credential creation
                - Aim to also accept user input for already created credentials
            James will simply have a hardcoded API fetch that can produce a team and their basic info on user page
                - Then if James can help integrate front and backend/review Dave and Mike's work

Navigating to DB in heroku:
    Lecture 3/16 21 minute mark

API needs:
    From team feeds: team results, team schedule, standings
    From match feeds: match summary, match timeline

