document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("text2").textContent = "Hello.";
    document.getElementById("text3").textContent = "I'm";
    document.getElementById("text4").textContent = "John Harrie";

    const skillsData = [
        { name: "Graphic Designing", value: 80 },
        { name: "Web Designing", value: 75 },
        { name: "Microsoft Word", value: 60 },
        { name: "Affinity Designer", value: 85 },
        { name: "MS Powerpoint", value: 90 },
        { name: "Corel i Draw", value: 70 }
    ];

    const skillsContainer = document.getElementById("skills");

    skillsData.forEach(skill => {
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
});
