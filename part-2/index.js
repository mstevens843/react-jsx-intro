// Tweet Component
function Tweet({ username, name, date, message }) {
    return (
        <div className="tweet">
            <h3>{name} (@{username})</h3>
            <p>{message}</p>
            <small>{date}</small>
        </div>
    );
}



// App component
function App() {
    return (
        <div>
            <Tweet username="HobJob" name="Hob Job" date="Sep 3, 2024" message="habadoobin" />
            <Tweet username="JobRob" name="Job Rob" date="Sep 3, 2024" message="habadoobinn" />
            <Tweet username="JobBob" name="Job Bob" date="Sep 3, 2024" message="habadoobinnn" />
        </div>
    );
}

// Render App Component
ReactDOM.render(<App />, document.getElementById('root'));