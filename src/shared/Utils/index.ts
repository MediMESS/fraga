/**
 * Scroll to section.
 */
export const scrollToSection = (targetSectionID: string) => {
  const section = document.getElementById(targetSectionID);

  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};
