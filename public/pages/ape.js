function Pe() {
    return (
        <div class="p-3">
    <h1 class="text-3xl">Productivity & Efficiency</h1>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg" data-aos="zoom-in">
        <h1 class="text-2xl">Daily Task Manager</h1>
        <hr /> <br />
        <div>
            <div class="flex justify-between items-center px-3">
                <h1 class="text-2xl">Tasks</h1>
                <button class="bg-blue-400 text-white p-1 px-2 rounded-lg text-xl">Add Task</button>
            </div>
            <input class="border w-full p-1 px-1 mt-2 text-lg outline-none rounded-lg" type="text" placeholder="Search Tasks..."></input>
            <div class="flex justify-between gap-3 mt-2">
                <button class="text-2xl bg-gray-400 text-white p-2 w-full rounded-lg">All</button>
                <button class="text-2xl bg-gray-400 text-white p-2 w-full rounded-lg">Active</button>
                <button class="text-2xl bg-gray-400 text-white p-2 w-full rounded-lg">Completed</button>
            </div>
            <div class="mt-2">
                <p>Example</p>
                <div class="border p-2 rounded-lg">
                    <div class="flex justify-between items-center">
                        <div class="flex gap-2">
                            <input type="checkbox"></input>
                            <h1 class="text-2xl">Task Title</h1>
                        </div>
                        <div class="flex gap-2">
                            <button class="text-lg rounded-lg p-1 px-2 bg-orange-300 text-white">Edit</button>
                            <button class="text-lg rounded-lg p-1 px-2 bg-red-400 text-white">Del</button>
                        </div>
                    </div>
                    <div class="flex justify-between">
                    <label>Due: Dec 25, 2025</label>
                    <label > Priority: <span class="textc -red-500">High</span></label>
                    </div>
                    <div>Description</div>
                </div>
                
                <div id="task-display"></div>
            </div>
        </div>
        <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg" data-aos="zoom-in">
        <h1 class="text-2xl">Weekly Planning</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg" data-aos="zoom-in">
        <h1 class="text-2xl">Time Blocking Schedule</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg" data-aos="zoom-in">
        <h1 class="text-2xl">Habit Tracker</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg" data-aos="zoom-in">
        <h1 class="text-2xl">Project Tracker</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg" data-aos="zoom-in">
        <h1 class="text-2xl">To-Do-Lists</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
    <br />
    <div class="bg-white p-3 rounded-lg shadow-lg" data-aos="zoom-in">
        <h1 class="text-2xl">Focus Sessions</h1>
        <hr /> <br />
        <h1>No Backend</h1>
    </div>
</div>
    );
}