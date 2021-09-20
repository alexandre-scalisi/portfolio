const nav = () => {
  return {
    data: [
      {
        text: "Présentation",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: true,
        id: "presentation",
      },
      {
        text: "Compétences",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: false,
        id: "competences",
      },
      {
        text: "Projets",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: false,
        id: "projets",
      },
      {
        text: "Formations",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: false,
        id: "formations"
      },
      {
        text: "Contact",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png",
        active: false,
        id: "contact",
      },
    ],
    active(name) {
      this.data.forEach((dat) =>
        dat.text === name ? (dat.active = true) : (dat.active = false)
      );
    },

    test(id) {
      const targetOffset = document.getElementById(id).offsetTop;
      console.log(document.getElementById(id));
      window.scrollTo({ top: targetOffset, behavior: "smooth" });
    }
  };

};