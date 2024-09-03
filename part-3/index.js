// Person Component
function Person({ name, age, hobbies }) {
    // Trim name if it exceeds 8 char
    const displayName = name.length > 8 ? name.slice(0,6) : name;


    return (
        <div>
            <p>Learn some information about this person:</p>
            <h2>{displayName}</h2>
            <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                {hobbies.map((hobby, index) => {
                    return <li key={index}>{hobby}</li>
                })}
            </ul>
        </div>
    );
}


// App Component
function App() {
    return (
        <div>
            <Person name="Jonas" age={29} hobbies={["Reading", "Swimming", "Coding" ]} />
            <Person name="Bryan" age={30} hobbies={["Drawing", "Running", "Reading" ]} />
            <Person name="Samantha" age={31} hobbies={["TV", "Coloring", "Knitting" ]} />
        </div>
    );
}

// Render the App Component
ReactDOM.render(<App />, document.getElementById('root'));