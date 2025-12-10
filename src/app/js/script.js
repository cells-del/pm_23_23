document.addEventListener("DOMContentLoaded", () => {
    fetch("json/data.json")
        .then(res => res.json())
        .then(data => {

            document.getElementById("text2").textContent = data.header.text2;
            document.getElementById("text3").textContent = data.header.text3;
            document.getElementById("text4").textContent = data.header.text4;


            const skillsContainer = document.getElementById("skills");

            data.skills.forEach(skill => {
                const div = document.createElement("div");
                div.classList.add("skill");

                div.innerHTML = `
                    <span>${skill.name}</span>
                    <input type="range" value="${skill.value}" max="100">
                `;

                skillsContainer.appendChild(div);
            });


            const header = document.getElementById("eduToggle");
            const content = document.getElementById("eduContent");
            const arrow = header.querySelector(".arrow");

            header.addEventListener("click", () => {
                content.classList.toggle("open");
                arrow.classList.toggle("open");
            });

        })
        .catch(err => console.error("JSON load error:", err));
});
