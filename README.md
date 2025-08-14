<h1>Current Time</h1>

<h3>Component Structure</h3>

1. App.jsx (Main Component)

- Root component of the project.
- Responsible for rendering other components: Title, Hour, and Gmt.
- Manages the main state for the selected timezone to update the displayed time.

2. Title.jsx
   
- Simple component that displays the app’s title, such as “World Clock” or similar.
- Used only for presentation and visual organization.

3. Hour.jsx
   
- Displays the current time based on the selected timezone.
- Receives the GMT (timezone) value as a prop to adjust the shown time.
- Updates the time in real-time, typically every second.

4. Gmt.jsx

- Contains a selector (select) that allows the user to choose the desired timezone (e.g., GMT-3, GMT+0, GMT+2, etc.).
- When the selected value changes, it informs the App component to update the time shown in Hour.
- Has predefined timezone options for easier selection.

<h3>Style</h3>

Obs: Every components have been edited in ```index.css```. Except for Title.jsx, which uses the ```styled-components``` library where the styling is done inside the same file.
