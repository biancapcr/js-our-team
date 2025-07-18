// Array iniziale dei membri del team
const teamMembers = [
  { name: "Marco Bianchi", role: "Designer",            email: "marcobianchi@team.com", img: "img/male1.png" },
  { name: "Laura Rossi",   role: "Front-end Developer", email: "laurarossi@team.com",    img: "img/female1.png" },
  { name: "Giorgio Verdi", role: "Back-end Developer",  email: "giorgioverdi@team.com",  img: "img/male2.png" },
  { name: "Marta Ipsum",   role: "SEO Specialist",      email: "martarossi@team.com",    img: "img/female2.png" },
  { name: "Roberto Lorem", role: "SEO Specialist",      email: "robertolorem@team.com",  img: "img/male3.png" },
  { name: "Daniela Amet",  role: "Analyst",             email: "danielaamet@team.com",   img: "img/female2.png" }
];

// Markup HTML di una singola card
const createCard = (member) => {
  const { name, role, email, img } = member;
  let card = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="d-flex bg-dark text-white rounded-0 overflow-hidden mb-4">
        <img src="${img}"
             class="img-fluid"
             style="width:40%; object-fit:cover;"
             alt="${name}">
        <div class="p-4">
          <h5 class="mb-1">${name.toUpperCase()}</h5>
          <p class="mb-2">${role}</p>
          <a href="#:${email}" class="text-info">${email}</a>
        </div>
      </div>
    </div>`;
  return card;
};

document.addEventListener('DOMContentLoaded', () => {
  // recupero il container che conterrà tutte le card
  const teamContainer = document.getElementById('teamContainer');

  // definisco una variabile per accumulare tutte le colonne/card
  let cards = '';

  // ciclo l'array dei membri e, per ciascuno, creo la card e la accumulo in `cards`
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    let card = createCard(member);
    cards += card;
  }

  // inietto tutte le colonne/card in un unico innerHTML
  teamContainer.innerHTML = cards;
  });