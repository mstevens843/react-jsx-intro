// first component
function FirstComponent() {
    return <h1>My very first component</h1>;
}


// NamedComponent
function NamedComponent({ name }) {
    return <p>My name is {name}</p>;
}


// App Component
function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="habba doobin" />
        </div>
    );
}


// Render App Component
ReactDOM.render(<App />, document.getElementById('root')); 