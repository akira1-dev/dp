function App() {
    const [page, setPage] = React.useState("pe");
    return (
    <>
    <header class="flex justify-between px-10 p-3 bg-blue-400 items-center text-white m-5 rounded-xl shadow-lg" data-aos="zoom-in">
        <button onClick={() => setPage("pe")}><i class="fas fa-bolt fa-xl"></i></button>
        <button onClick={() => setPage("hw")}><i class="fas fa-heart-pulse fa-xl"></i></button>
        <button onClick={() => setPage("fm")}><i class="fas fa-wallet fa-xl"></i></button>
        <button onClick={() => setPage("rs")}><i class="fas fa-user-group fa-xl"></i></button>
        <button onClick={() => setPage("ls")}><i class="fas fa-graduation-cap fa-xl"></i></button>
        <button onClick={() => setPage("ch")}><i class="fas fa-palette fa-xl"></i></button>
    </header>
    
       {page === "pe" && <Pe />} 
       {page === "hw" && <Hw />}
       {page === "fm" && <Fm />}
       {page === "rs" && <Rs />}
       {page === "ls" && <Ls />}
       {page === "ch" && <Ch />}
    </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// https://akira1-dev.github.io/dp/public/app.html