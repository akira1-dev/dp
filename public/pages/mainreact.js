function Hw() {
    return (
<div class="p-3">
    <h1 class="text-3xl">Health & Wellness</h1>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Daily Health Checklist</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div> 
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Workout Routine</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Personal Health Goals</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div> 

</div>
    );
}
function Pe() {
    return (
<div class="p-3">
    <h1 class="text-3xl">Productivity & Efficiency</h1>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Daily Task Manager</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Weekly Planning</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Time Blocking Schedule</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Habit Tracker</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Project Tracker</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">To-Do-Lists</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg">
        <h1 class="text-2xl">Focus Sessions</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
</div>
    );
}

function App() {
    const [page, setPage] = React.useState("pe");
    return (
    <>
    <header class="flex justify-between px-10 p-3 bg-blue-400 items-center text-white">
        <button onClick={() => setPage("pe")}><i class="fas fa-bolt fa-xl"></i></button>
        <button onClick={() => setPage("hw")}><i class="fas fa-heart-pulse fa-xl"></i></button>
        <a href="#">
            <button><i class="fas fa-wallet fa-xl"></i></button>
        </a>
        <a href="#">
            <button><i class="fas fa-user-group fa-xl"></i></button>
        </a>
        <a href="#">
            <button><i class="fas fa-graduation-cap fa-xl"></i></button>
        </a>
        <a href="#">
            <button><i class="fas fa-palette fa-xl"></i></button>
        </a>
    </header>
    
       {page === "pe" && <Pe />} 
       {page === "hw" && <Hw />}
    </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);