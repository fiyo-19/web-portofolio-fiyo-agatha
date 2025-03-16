document.addEventListener("DOMContentLoaded", function () {
    const webBtn = document.getElementById("web-btn");
    const digitingBtn = document.getElementById("digiting-btn");
    const webProjects = document.getElementById("web-projects");
    const digitingProjects = document.getElementById("digiting-projects");

    function setActiveButton(activeBtn, inactiveBtn) {
        activeBtn.classList.add("font-bold", "text-black", "after:w-full");
        activeBtn.classList.remove("text-gray-600");

        inactiveBtn.classList.remove("font-bold", "text-black", "after:w-full");
        inactiveBtn.classList.add("text-gray-600");
    }

    function showProjects(show, hide) {
        show.classList.remove("hidden");
        hide.classList.add("hidden");
    }

    webBtn.addEventListener("click", function () {
        setActiveButton(webBtn, digitingBtn);
        showProjects(webProjects, digitingProjects);
    });

    digitingBtn.addEventListener("click", function () {
        setActiveButton(digitingBtn, webBtn);
        showProjects(digitingProjects, webProjects);
    });

    // Set default active state
    setActiveButton(webBtn, digitingBtn);
});
