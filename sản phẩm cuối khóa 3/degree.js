const degrees = [
  {
    program: "Computer Science",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Competitive",
    dual: "Yes",
    language: "English",
    detail: "Covers programming, AI, systems, and algorithms. Excellent for software development and tech startups."
  },
  {
    program: "Economics",
    degree: "BA",
    semester: 6,
    start: "Fall/Spring",
    admission: "Moderate",
    dual: "No",
    language: "English",
    detail: "Prepares students for careers in finance, policy-making, and international business."
  },
  {
    program: "Mechanical Engineering",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Competitive",
    dual: "Yes",
    language: "English",
    detail: "Focuses on thermodynamics, material science, and mechanical systems design."
  },
  {
    program: "Law",
    degree: "LLB",
    semester: 8,
    start: "Fall",
    admission: "Competitive",
    dual: "No",
    language: "English",
    detail: "Comprehensive study of legal systems, contracts, criminal law, and human rights."
  },
  {
    program: "Artificial Intelligence",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Competitive",
    dual: "Yes",
    language: "English",
    detail: "Machine learning, neural networks, ethics in AI, robotics and automation systems."
  },
  {
    program: "Philosophy",
    degree: "BA",
    semester: 6,
    start: "Spring",
    admission: "Easy",
    dual: "No",
    language: "English",
    detail: "Studies logic, ethics, metaphysics, and reasoning. Ideal for thinkers and future academics."
  },
  {
    program: "Biomedical Engineering",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Challenging",
    dual: "Yes",
    language: "English",
    detail: "Combines biology and engineering to develop healthcare technologies."
  },
  {
    program: "Environmental Science",
    degree: "BSc",
    semester: 6,
    start: "Spring",
    admission: "Moderate",
    dual: "No",
    language: "English",
    detail: "Studies ecosystems, climate change, and sustainable development."
  },
  {
    program: "International Relations",
    degree: "BA",
    semester: 6,
    start: "Fall",
    admission: "Moderate",
    dual: "Yes",
    language: "English",
    detail: "Global politics, diplomacy, conflict resolution, and international law."
  },
  {
    program: "Psychology",
    degree: "BA",
    semester: 6,
    start: "Fall/Spring",
    admission: "Moderate",
    dual: "No",
    language: "English",
    detail: "Human behavior, cognitive science, clinical psychology, and research methods."
  },
  {
    program: "Data Science",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "High",
    dual: "Yes",
    language: "English",
    detail: "Big data, statistics, Python, machine learning, and data-driven decisions."
  },
  {
    program: "Visual Arts",
    degree: "BA",
    semester: 6,
    start: "Spring",
    admission: "Portfolio-based",
    dual: "No",
    language: "English",
    detail: "Studio art, design principles, history of art, and digital creation."
  },
  {
    program: "Music",
    degree: "BA",
    semester: 6,
    start: "Fall",
    admission: "Audition",
    dual: "No",
    language: "English",
    detail: "Music theory, performance, history, and composition."
  },
  {
    program: "Cognitive Science",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Selective",
    dual: "Optional",
    language: "English",
    detail: "Combines neuroscience, linguistics, AI, and psychology to explore how the mind processes information."
  },
  {
    program: "Space Science and Engineering",
    degree: "BEng",
    semester: 10,
    start: "Winter",
    admission: "Competitive",
    dual: "No",
    language: "English",
    detail: "Focuses on space missions, satellite systems, and the physics of space travel."
  },
  {
    program: "Behavioral Economics",
    degree: "BA",
    semester: 8,
    start: "Fall",
    admission: "Challenging",
    dual: "Yes",
    language: "English",
    detail: "Explores the psychology behind economic decision-making and how people often behave irrationally."
  },
  {
    program: "Marine Biotechnology",
    degree: "BSc",
    semester: 8,
    start: "Spring",
    admission: "Moderate",
    dual: "No",
    language: "English",
    detail: "Studies marine organisms for use in medicine, cosmetics, and bioengineering."
  },
  {
    program: "Interaction Design",
    degree: "BA",
    semester: 6,
    start: "Fall",
    admission: "Moderate",
    dual: "Optional",
    language: "English",
    detail: "Designs digital experiences through UI/UX principles, prototyping, and user research."
  },
  {
    program: "Astrobiology",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Highly Selective",
    dual: "No",
    language: "English",
    detail: "Explores the origin, evolution, and possibility of life beyond Earth."
  },
  {
    program: "Sustainable Urban Planning",
    degree: "BA",
    semester: 8,
    start: "Fall",
    admission: "Competitive",
    dual: "Yes",
    language: "English",
    detail: "Focuses on green architecture, transportation systems, and climate-resilient cities."
  },
  {
    program: "Quantum Computing",
    degree: "BSc",
    semester: 8,
    start: "Spring",
    admission: "Difficult",
    dual: "No",
    language: "English",
    detail: "Studies quantum mechanics to build revolutionary computing systems."
  },
  {
    program: "Neuroeconomics",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Challenging",
    dual: "Optional",
    language: "English",
    detail: "Blends neuroscience and economics to study how brain activity influences decisions."
  },
  {
    program: "Environmental Law",
    degree: "LLB",
    semester: 8,
    start: "Fall",
    admission: "Selective",
    dual: "Yes",
    language: "English",
    detail: "Deals with legal frameworks for protecting the environment and combating climate change."
  },
  {
    program: "Digital Anthropology",
    degree: "BA",
    semester: 6,
    start: "Spring",
    admission: "Moderate",
    dual: "Optional",
    language: "English",
    detail: "Studies how technology and digital media shape human societies and identities."
  },
  {
    program: "Food Science and Technology",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Open",
    dual: "No",
    language: "English",
    detail: "Focuses on food chemistry, preservation, packaging, and safety testing."
  },
  {
    program: "Human-Computer Interaction",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Moderate",
    dual: "Yes",
    language: "English",
    detail: "Studies how people interact with computers to design intuitive technologies."
  },
  {
    program: "Forensic Linguistics",
    degree: "BA",
    semester: 6,
    start: "Spring",
    admission: "Moderate",
    dual: "No",
    language: "English",
    detail: "Applies language analysis to criminal investigations and legal evidence."
  },
  {
    program: "Game Design and Development",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Moderate",
    dual: "Optional",
    language: "English",
    detail: "Combines storytelling, programming, and 3D graphics for video game creation."
  },
  {
    program: "Biomimicry Engineering",
    degree: "BEng",
    semester: 8,
    start: "Spring",
    admission: "Selective",
    dual: "No",
    language: "English",
    detail: "Designs engineering systems inspired by biological processes and nature."
  },
  {
    program: "Digital Forensics",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Challenging",
    dual: "Yes",
    language: "English",
    detail: "Investigates cybercrimes by analyzing data from digital devices."
  },
  {
    program: "Nanotechnology",
    degree: "BSc",
    semester: 8,
    start: "Fall",
    admission: "Selective",
    dual: "Optional",
    language: "English",
    detail: "Manipulates atoms and molecules to create ultra-small materials and devices."
  },
  {
    program: "Philosophy, Politics and Economics (PPE)",
    degree: "BA",
    semester: 8,
    start: "Fall",
    admission: "Selective",
    dual: "Yes",
    language: "English",
    detail: "A rigorous interdisciplinary program that explores how societies function and govern."
  },
  {
    program: "Music Technology",
    degree: "BA",
    semester: 6,
    start: "Fall",
    admission: "Open",
    dual: "Optional",
    language: "English",
    detail: "Focuses on sound design, digital production, and recording technologies."
  }
  // Bạn có thể copy các object này và đổi tên để thêm đến 30 ngành.
];

let openIndex = null;

function renderDegrees(filtered) {
  const list = document.getElementById("degreeList");
  list.innerHTML = "";

  filtered.forEach((deg, idx) => {
    const card = document.createElement("div");
    card.className = "degree-card";

    card.innerHTML = `
      <div class="degree-title">${deg.program}</div>
      <div class="degree-type">${deg.degree} Program</div>
      ${
        openIndex === idx
          ? `
        <div class="degree-detail">
          <p><strong>Semesters:</strong> ${deg.semester}</p>
          <p><strong>Start:</strong> ${deg.start}</p>
          <p><strong>Admission:</strong> ${deg.admission}</p>
          <p><strong>Dual/Coop:</strong> ${deg.dual}</p>
          <p><strong>Language:</strong> ${deg.language}</p>
          <p style="margin-top:10px">${deg.detail}</p>
        </div>
        `
          : ""
      }
    `;

    card.onclick = () => {
      openIndex = openIndex === idx ? null : idx;
      renderDegrees(filtered);
    };

    list.appendChild(card);
  });
}

const search = document.getElementById("search");

search.addEventListener("input", () => {
  const query = search.value.toLowerCase().trim();

  const filtered = degrees.filter((d) =>
    d.program.toLowerCase().includes(query)
  );

  if (!query) openIndex = null;

  renderDegrees(filtered);
});

// dropdown inter 
renderDegrees(degrees);



  const btn = document.getElementById("international-btn");
  const dropdownItem = btn.closest(".dropdown");
  const dropdownMenu = document.getElementById("international-dropdown");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropdownItem.classList.toggle("open");
  });

  document.addEventListener("click", function () {
    dropdownItem.classList.remove("open");
  });


