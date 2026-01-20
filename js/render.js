fetch("data/content.json")
  .then(res => res.json())
  .then(data => {
    const app = document.getElementById("app");

    app.innerHTML = `
      <section class="hero">
        <div class="left">
          <img src="${data.profile.photo}" alt="Profile" />
          <h1>${data.profile.name}</h1>
          <p>${data.profile.qualification}</p>
          <ul>
            ${data.profile.quickFacts.map(f => `<li>${f}</li>`).join("")}
          </ul>
        </div>

        <div class="right glass">
          <h2>About Me</h2>
          <p>${data.aboutMe.text}</p>
        </div>
      </section>

      <section class="glass">
        <h2>Project</h2>
        ${data.projects.map(p => `
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a href="${p.github}" target="_blank">GitHub</a>
        `).join("")}
      </section>

      <section class="glass">
        <h2>Skills</h2>
        <p><strong>Programming:</strong> ${data.skills.programming.join(", ")}</p>
        <p><strong>Concepts:</strong> ${data.skills.concepts.join(", ")}</p>
      </section>

      <section class="glass">
        <h2>Contact</h2>
        <a href="mailto:${data.contact.email}">Email</a> |
        <a href="${data.contact.linkedin}" target="_blank">LinkedIn</a> |
        <a href="${data.contact.github}" target="_blank">GitHub</a> |
        <a href="${data.contact.resume}" target="_blank">View Resume</a>
      </section>
    `;
  });
