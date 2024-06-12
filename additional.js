window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
const scrolldiv = document.getElementById("scroll");
const container = document.getElementById("container");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      // scrolldiv.style.zIndex = '-1';
      // container.style.zIndex = '-1';
  
    } else {
      header.classList.remove("sticky");
    }
  }

  function slider() {
    let images = document.querySelectorAll('.slider img');
    let current = 0;
    let prevButton = document.querySelector('#prev');
    let nextButton = document.querySelector('#next');
  
    function reset() {
      for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
      }
    }
  
    function startSlide() {
      reset();
      images[current].classList.add('active');
    }
  
    function slidePrev() {
      reset();
      current = (current != 0) ? current - 1 : images.length - 1;
      images[current].classList.add('active');
    }
  
    function slideNext() {
      reset();
      current = (current != images.length - 1) ? current + 1 : 0;
      images[current].classList.add('active');
    }
  
    prevButton.addEventListener('click', function() {
      slidePrev();
    });
  
    nextButton.addEventListener('click', function() {
      slideNext();
    });
  
    setInterval(function() {
      slideNext();
    }, 10000);
  
    startSlide();
  }
  
  slider();

  const link1 = document.getElementById('link1');
  const img1 = document.getElementById('img1');
  const link2 = document.getElementById('link2');
  const img2 = document.getElementById('img2');
  const link3 = document.getElementById('link3');
  const img3 = document.getElementById('img3');
  const link4 = document.getElementById('link4');
  const img4 = document.getElementById('img4');
  const link5 = document.getElementById('link5');
  const img5 = document.getElementById('img5');
  const link6 = document.getElementById('link6');
  const img6 = document.getElementById('img6');

  img1.addEventListener('mouseenter', function() {
    link1.style.display = 'block';
  });
//   link1.addEventListener('mouseover', function() {
//     link1.style.display = 'block';
//   });

  img1.addEventListener('mouseleave', function() {
    setTimeout(function() {
      link1.style.display = 'none';

    }, 300); 
  });

  img2.addEventListener('mouseenter', function() {
    link2.style.display = 'block';
  });

  img2.addEventListener('mouseleave', function() {
    setTimeout(function() {
      link2.style.display = 'none';

    }, 300); 
  });

  img3.addEventListener('mouseenter', function() {
    link3.style.display = 'block';
  });

  img3.addEventListener('mouseleave', function() {
    setTimeout(function() {
      link3.style.display = 'none';

    }, 300); 
  });

  img4.addEventListener('mouseenter', function() {
    link4.style.display = 'block';
  });

  img4.addEventListener('mouseleave', function() {
    setTimeout(function() {
      link4.style.display = 'none';

    }, 300); 
  });

  img5.addEventListener('mouseenter', function() {
    link5.style.display = 'block';
  });

  img5.addEventListener('mouseleave', function() {
    setTimeout(function() {
      link5.style.display = 'none';

    }, 300); 
  });

  img6.addEventListener('mouseenter', function() {
    link6.style.display = 'block';
  });

  img6.addEventListener('mouseleave', function() {
    setTimeout(function() {
      link6.style.display = 'none';

    }, 300); 
  });
