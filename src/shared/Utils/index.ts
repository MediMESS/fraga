/**
 * Scroll to section.
 */
export const scrollToSection = (targetSectionID: string) => {
  const section = document.getElementById(targetSectionID);

  if (section) {
    // const scrollOptions: ScrollIntoViewOptionsWithOffset =

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

/**
 * FAQs ID.
 */
export const FAQsID = "FAQsID";
/**
 * FragaCharm ID.
 */
export const FragaCharmID = "FragaCharmID";
/**
 * Wonderland ID.
 */
export const WonderlandID = "WonderlandID";
/**
 * Wonderland ID.
 */
export const TheFragaristasID = "TheFragaristasID";

/**
 * Utility Function to scroll to Wonderland.
 */
export const scrollToWonderland = () => scrollToSection(WonderlandID);
/**
 * Utility Function to scroll to FAQs.
 */
export const scrollToFAQs = () => scrollToSection(FAQsID);
/**
 * Utility Function to scroll to FragaCharm.
 */
export const scrollToFragaCharm = () => scrollToSection(FragaCharmID);
/**
 * Utility Function to scroll to The Fragaristas.
 */
export const scrollToTheFragaristas = () => scrollToSection(TheFragaristasID);
