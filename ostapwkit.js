//Скрипт в форме удаления текста
  	function clearField(inputId) {
        document.getElementById(inputId).value = "";
        updatePlaceholder(inputId);
    }

    const inputBoxes = document.querySelectorAll(".input-box");
    inputBoxes.forEach(inputBox => {
        inputBox.addEventListener("input", () => {
            updatePlaceholder(inputBox.id);
        });
    });

	//Скрипт placeholder
	function updatePlaceholder(inputId) {
        const inputBox = document.getElementById(inputId);
        const customPlaceholder = document.getElementById(`custom-placeholder-${inputId.split("-")[2]}`);

        if (inputBox.value.trim() === "") {
            customPlaceholder.style.opacity = "1";
        } else {
            customPlaceholder.style.opacity = "0";
        }
    }

  	//Скрипт поиска
  	document.addEventListener('DOMContentLoaded', function() {
    	const searchContainer = document.querySelector('.search');
    	const searchIcon = document.querySelector('.search-image');

    	searchIcon.addEventListener('click', function() {
        	searchContainer.classList.toggle('active');
        	if (searchContainer.classList.contains('active')) {
            	setTimeout(function() {
                	const searchInput = searchContainer.querySelector('.search-input'	);
                	searchInput.focus();
            	}, 300);
        	}
   		 });
	});

  	//Скрипт прокрутки
  	if (window.location.hash) {
	    window.history.replaceState(null, null, window.location.pathname);
	}
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();

	        // Получаем ID якоря из атрибута href ссылки
	        const target = document.querySelector(this.getAttribute('href'));

	        // Прокручиваем страницу к якорю с плавностью
	        if (target) {
	            target.scrollIntoView({
	                behavior: 'smooth'
	            });
	        }
	    });
	});

	//Скрипт карусели
	// const carousel = document.querySelector('.carousel');
	// const container = document.querySelector('.carousel-container');
	// const dots = document.querySelectorAll('.carousel-dot');
	// let currentIndex = 0;

	// dots[currentIndex].classList.add('active');

	// for (let i = 0; i < dots.length; i++) {
	//     dots[i].addEventListener('click', () => {
	//         currentIndex = i;
	//         updateCarousel();
	//         clearInterval(interval);
	//         interval = setInterval(autoCarousel, 5000);
	//     });
	// }

	// function updateCarousel() {
	//     const translateXValue = -currentIndex * 100;
	//     container.style.transform = `translateX(${translateXValue}%)`;

	//     for (let i = 0; i < dots.length; i++) {
	//         if (i === currentIndex) {
	//             dots[i].classList.add('active');
	//         } else {
	//             dots[i].classList.remove('active');
	//         }
	//     }
	// }

	// function autoCarousel() {
	//     currentIndex = (currentIndex + 1) % dots.length;
	//     updateCarousel();
	// }

	// let interval = setInterval(autoCarousel, 5000);


	//Скрипт отображаемого блока при выборе текста
	document.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('.block-text p');
  const contentBlocks = document.querySelectorAll('.news-padding');
  let activeParagraph = null;

  paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
      const target = paragraph.getAttribute('data-target');

      if (activeParagraph) {
        activeParagraph.classList.remove('active');
        activeParagraph = null;
      }

      paragraphs.forEach(p => p.classList.remove('active'));
      paragraph.classList.add('active');
      activeParagraph = paragraph;

      contentBlocks.forEach(block => {
        const blockContent = block.getAttribute('id');
        if (blockContent === target) {
          block.classList.add('active-block');

          // Check if any line blocks are open within the active block
          const activeLineBlocks = block.querySelectorAll('.line-block');
          const isAnyLineBlockOpen = Array.from(activeLineBlocks).some(lineBlock => {
            return lineBlock.style.display === 'flex';
          });

          // Close all line blocks if any are open
          if (isAnyLineBlockOpen) {
            activeLineBlocks.forEach(lineBlock => {
              lineBlock.style.display = 'none';
            });
          }
        } else {
          block.classList.remove('active-block');
        }
      });
    });
  });

  const showAllButton = document.getElementById('show-all-button');
  showAllButton.addEventListener('click', () => {
    contentBlocks.forEach(block => {
      if (block.classList.contains('active-block')) {
        block.querySelectorAll('.line-block').forEach(lineBlock => {
          lineBlock.style.display = lineBlock.style.display === 'none' ? 'flex' : 'none';
        });
      }
    });
  });

});

//Скрипт разворачивания блока с текстом
	//Скрипт разворачивания блока с текстом
function toggleAccordion(content, button, openIcon, closedIcon) {
    const isContentVisible = content.style.maxHeight !== "0px";

    if (!content.style.maxHeight || content.style.maxHeight === "0px") {
        content.style.maxHeight = content.scrollHeight + "px";
        button.src = openIcon;
    } else {
        content.style.maxHeight = "0";
        button.src = closedIcon;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");
    const showAllButton = document.getElementById("quer-show-all-button");
    const closedIcon = "image/queries1.png";
    const openIcon = "image/queries2.png";

    accordions.forEach(accordion => {
        const button = accordion.querySelector(".accordionc-icon");
        const content = accordion.querySelector(".accordion-content");

        // Изменили добавление обработчика с .accordionc-icon на .accordion
        accordion.addEventListener("click", () => {
            toggleAccordion(content, button, openIcon, closedIcon);
        });
    });

    showAllButton.addEventListener("click", () => {
        accordions.forEach(accordion => {
            const button = accordion.querySelector(".accordionc-icon");
            const content = accordion.querySelector(".accordion-content");

            toggleAccordion(content, button, openIcon, closedIcon);
        });
    });
});
	
	//Скрипт slick slider center mode
	document.addEventListener('DOMContentLoaded', function () {
    var slider = document.querySelector('.slider');

    $(slider).slick({
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 3,
      focusOnSelect: true,
      prevArrow: '.slider-prev',
      nextArrow: '.slider-next',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
	//Скрипт смотреть все на слайдере
	const showAllButton = document.getElementById('сomp-show-all-button');
	const mainBlock = document.querySelector('.main');
	const compPodBlock = document.querySelector('.comp-pod');

	showAllButton.addEventListener('click', () => {
	  mainBlock.classList.toggle('hidden');
	  compPodBlock.classList.toggle('hidden');
	});