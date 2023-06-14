function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add("sectionShow")
            } else {
                entry.target.classList.remove("sectionShow")
            }
        } )
  })

const section = document.querySelectorAll(".section")
section.forEach((el) => observer.observe(el))


