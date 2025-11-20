// ================================
// LocalStorage Helper
// ================================
function getAdmins() {
    return JSON.parse(localStorage.getItem("admins")) || [];
}

function saveAdmins(admins) {
    localStorage.setItem("admins", JSON.stringify(admins));
}

// ================================
// UI Elements
// ================================
const addAdminDiv = document.getElementById("add-admin");
const adminsAccountDiv = document.getElementById("admins-account");
const profileDiv = document.getElementById("profile");
const adminBtn = document.getElementById("admin");

// ================================
// Render "Add Admin" Form
// ================================
function renderAddAdminForm() {
    addAdminDiv.innerHTML = `
        <h2 class="text-lg font-bold mb-3">Add New Admin</h2>
        <input id="name" placeholder="Full Name" class="text-black p-2 w-full mb-2" />
        <input id="email" placeholder="Email" class="text-black p-2 w-full mb-2" />
        <button id="submitAdmin" class="bg-green-600 px-3 py-2 mt-2">Add Admin</button>
        <hr class="my-3">
    `;
    
    document.getElementById("submitAdmin").onclick = addAdmin;
}

// ================================
// Add Admin Function
// ================================
function addAdmin() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    
    if (name === "" || email === "") {
        alert("Please fill all fields.");
        return;
    }
    
    const admins = getAdmins();
    admins.push({ id: Date.now(), name, email });
    saveAdmins(admins);
    
    renderAdminsList();
    alert("Admin Added Successfully.");
}

// ================================
// Display Admin List
// ================================
function renderAdminsList() {
    const admins = getAdmins();
    
    adminsAccountDiv.innerHTML = `
        <h2 class="text-lg font-bold mb-3">Admins List</h2>
    `;
    
    if (admins.length === 0) {
        adminsAccountDiv.innerHTML += `<p>No admins found.</p>`;
        return;
    }
    
    admins.forEach(admin => {
        const div = document.createElement("div");
        div.classList = "p-2 border mb-2 cursor-pointer hover:bg-blue-700";
        div.textContent = admin.name + " - " + admin.email;
        div.onclick = () => viewProfile(admin.id);
        adminsAccountDiv.appendChild(div);
    });
}

// ================================
// View Profile
// ================================
function viewProfile(id) {
    const admins = getAdmins();
    const admin = admins.find(a => a.id === id);
    
    profileDiv.innerHTML = `
        <h2 class="text-lg font-bold mb-3">Admin Profile</h2>
        <p><strong>Name:</strong> ${admin.name}</p>
        <p><strong>Email:</strong> ${admin.email}</p>

        <button class="bg-red-600 px-3 py-2 mt-3" onclick="deleteAdmin(${id})">Delete Admin</button>
    `;
}

// ================================
// Delete Admin
// ================================
function deleteAdmin(id) {
    let admins = getAdmins();
    admins = admins.filter(a => a.id !== id);
    saveAdmins(admins);
    
    profileDiv.innerHTML = "";
    renderAdminsList();
    alert("Admin deleted.");
}

// ================================
// Event Listeners
// ================================
adminBtn.addEventListener("click", () => {
    renderAddAdminForm();
    renderAdminsList();
});

// ================================
// Initial Load
// ================================
renderAddAdminForm();
renderAdminsList();