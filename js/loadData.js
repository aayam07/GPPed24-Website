async function insertSpeakers() {
  console.log("inseerring");
  fetch("./data/speakers.json")
    .then((res) => res.json())
    .then((speakers) => {
      const speakerContainer = document.querySelector(
        "#speaker-and-guests .carousel-container"
      );
      speakers.forEach((speaker) => {
        const div = document.createElement("div");
        div.classList.add("item", "speaker-card");
        div.innerHTML = `
            <div class="image">
            <img src="images/${speaker.image}" alt="" />
            </div>
            <div class="content">
                <span class="location">
                    ${speaker.from}
                </span>
                <span class="name"> ${speaker.name} </span>
                <span class="position">
                    ${speaker.position}
                </span>
            </div>
        `;

        speakerContainer.appendChild(div);
      });
    });
}

async function insertOrganizingCommittee() {
  fetch("./data/committee.json")
    .then((res) => res.json())
    .then((members) => {
      const container = document.querySelector("#organizing-commitee .list");
      members.forEach((member) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
      <img src="${member.img}" alt="" />
      <div class="details">
        <h3 class="name">${member.name}</h3>
        <p class="designation">${member.designation}</p>
      </div>
      `;
        container.appendChild(div);
      });
    });
}

async function insertOrganizingSubCommittee() {
  fetch("./data/subcommittee.json")
    .then((res) => res.json())
    .then((members) => {
      const container = document.querySelector("#organizing-subcommitee .list");
      members.forEach((member) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
      <div class="details">
        <h3 class="name">${member.name}</h3>
        <p class="designation">${member.designation}</p>
      </div>
      `;
        container.appendChild(div);
      });
    });
}

async function insertSponsors() {
  fetch("./data/sponsors.json")
    .then((res) => res.json())
    .then((sponsors) => {
      const container = document.querySelector(".sponsors-container");
      sponsors.forEach((sponsor) => {
        const img = document.createElement("img");
        img.src = `images/sponsors/${sponsor}`;
        img.alt = sponsor.split(".")[0];
        container.appendChild(img);
      });
    });
}

async function insertMediaPartners() {
  fetch("./data/mediapartners.json")
    .then((res) => res.json())
    .then((mediaPartners) => {
      const container = document.querySelector(".media-partners-container");
      mediaPartners.forEach((partner) => {
        const img = document.createElement("img");
        img.src = `images/media/${partner}`;
        img.alt = partner.split(".")[0];
        container.appendChild(img);
      });
    });
}

insertSpeakers();
insertOrganizingCommittee();
insertOrganizingSubCommittee();
insertSponsors();
insertMediaPartners();
