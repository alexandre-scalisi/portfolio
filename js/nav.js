const nav = () => {
  return {
    data: [
      {
        text: "Présentation",
        img: "../img/icons/user-icon.png",
        active: true,
        id: "presentation",
      },
      {
        text: "Compétences",
        img: "../img/icons/skills-icon.png",
        active: false,
        id: "competences",
      },
      {
        text: "Projets",
        img: "../img/icons/projects-icon.png",
        active: false,
        id: "projets",
      },
      {
        text: "Formations",
        img: "../img/icons/formations-icon.png",
        active: false,
        id: "formations",
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
    },
  };

};