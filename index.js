// Intersection Observer for project slide-ins

let options = {
  rootMargin: "-100px 0px -100px 0px",
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      const project = entry.target;
      console.log(project);
      project.classList.remove("project-card-unobserved");
      project.classList.add("project-card");
      observer.unobserve(project);
    }
  });
};
let projects = document.querySelectorAll(".project-card-unobserved");
let observer = new IntersectionObserver(callback, options);
projects.forEach((project) => observer.observe(project));
