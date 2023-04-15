export function scrollToTop() :void{
    const scrollToTopButton = document.getElementById("scroll-to-top");

    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton!.style.display = "block";
      } else {
        scrollToTopButton!.style.display = "none";
      }
    };
    
    scrollToTopButton!.addEventListener("click", function() {
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }