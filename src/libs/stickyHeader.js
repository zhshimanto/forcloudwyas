const stickyHeader = () => {
  function handleScroll() {
    const header = document.querySelector(".header__sticky");
    if (!header) return;

    if (window.scrollY > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);
  
  // Initial check
  handleScroll();

  // Cleanup function
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export default stickyHeader;
