document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.nave-links');
    const sections =document.querySelectorAll('[data-observe]')
    const homeLink = document.querySelector('.Home-link');
    const aboutLeyar=document.querySelector('.layre-Up');
    const aboutHeader=document.querySelector('.About-Header');
    const ContactHeader=document.querySelector('.ContactHeader');
    
    const aboutImage=document.querySelector('.About-Image');
    const allNav=document.querySelector('.All-Nav');
    const navSpan=document.querySelector('.nav-Span');
    
    
    

    // lazy loading
    
    const images = document.querySelectorAll("img:not([loading])");
    images.forEach(img => img.setAttribute("loading", "lazy"));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if(id==='About'){
            if (entry.isIntersecting) {
            
            
               
                
                aboutLeyar.classList.add("bottom-[100%]");
                aboutHeader.classList.remove("translate-y-[100%]");
                aboutImage.classList.remove("scale-110");
            }
             else{

                  aboutLeyar.classList.remove("bottom-[100%]");
                  aboutHeader.classList.add("translate-y-[100%]")
                  aboutImage.classList.add("scale-110"); 
             }
        }
        else if(id==='Home') {
            if (entry.isIntersecting){
                navItems.forEach(navItem => navItem.classList.remove("hidden"));
                homeLink.classList.add("hidden");
            }
            else{
                navItems.forEach(navItem => navItem.classList.add("hidden"));
                homeLink.classList.remove("hidden");
            }

        }
        else if(id==='Work'){
            if (entry.isIntersecting) {
            
            
               
                
                allNav.classList.remove('main-color');
                allNav.classList.add('text-[#ECE7E1]');
                navSpan.classList.remove('main-bg');
                navSpan.classList.add('bg-[#ECE7E1]');

            }
             else{

                allNav.classList.add('main-color');
                allNav.classList.remove('text-[#ECE7E1]');
                
                navSpan.classList.add('main-bg');
                navSpan.classList.remove('bg-[#ECE7E1]');
                 
             }

        }
        if(id==='Contact'){
            if (entry.isIntersecting) {
            
            
               
                
                
                ContactHeader.classList.remove("translate-y-[100%]");
                
            }
             else{

                 
                  ContactHeader.classList.add("translate-y-[100%]")
                  
             }
        }
      });
    }, { threshold: 0.1 });
  
    
    sections.forEach(section => observer.observe(section));
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: { delay: 3000 }
      });
  });