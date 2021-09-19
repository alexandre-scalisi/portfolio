const nav = () => {
  return {
    data: [{
        text: "Présentation",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: true,
      },
      {
        text: "Compétences",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: false
      },
      {
        text: "Projets",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: false
      },
      {
        text: "Formations",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: false
      },
      {
        text: "Contact",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: false
      },
    ],
    active(name) {
      this.data.forEach(dat => dat.text === name ? dat.active = true : dat.active = false);
    },
  };

};