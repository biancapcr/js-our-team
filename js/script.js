document.addEventListener('DOMContentLoaded', () => {
  // Array iniziale dei membri del team
  const teamMembers = [
    { name: "Marco Bianchi",  role: "Designer",             email: "marcobianchi@team.com", img: "assets/img/male1.png" },
    { name: "Laura Rossi",    role: "Front-end Developer", email: "laurarossi@team.com",    img: "assets/img/female1.png" },
    { name: "Giorgio Verdi",  role: "Back-end Developer",  email: "giorgioverdi@team.com",  img: "assets/img/male2.png" },
    { name: "Marta Ipsum",    role: "SEO Specialist",      email: "martarossi@team.com",    img: "assets/img/female2.png" },
    { name: "Roberto Lorem",  role: "SEO Specialist",      email: "robertolorem@team.com",  img: "assets/img/male3.png" },
    { name: "Daniela Amet",   role: "Analyst",             email: "danielaamet@team.com",   img: "assets/img/female2.png" }
  ];
    //Markup html di una singola card
    const createCard = (member) => {
    const { name, role, email, img } = member;
    return `
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
  };
  // Selezione DOM
  const container = document.getElementById('teamContainer');
  const form = document.getElementById('addMemberForm');
  const nameInput = document.getElementById('memberName');
  const roleInput = document.getElementById('memberRole');
  const emailInput= document.getElementById('memberEmail');
  const imgInput  = document.getElementById('memberImage');


   // Popolamento iniziale delle card con ciclo for
  for (let i = 0; i < teamMembers.length; i++) {
    container.innerHTML += createCard(teamMembers[i]);
  }

}
);