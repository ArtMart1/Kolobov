// Запрещаем выделение текста
document.onselectstart = function() { return false; }
// Запрещаем контекстное меню
document.oncontextmenu = function() { return false; }

document.addEventListener('DOMContentLoaded', function () {
    const sliderData = [
      { 
        coverSrc: 'images/Pine_cover.png', 
        coverDescription: 'Pinery, кофе- и какао-бар',
        year:'2023',
        images: [ // Массив изображений, связанных с обложкой 1
        { src: 'images/Pine1.png', description: 'Проект по созданию визуального стиля для сети московских кофеен Пайнери, в том числе интерфейсов для сайта и фирменной одежды для бариста В роли: артдира, тимлида, веб, графика', link: 'https://pinerycacao.ru/'  },
        { src: 'images/Pine2.png', description: '', link: 'https://pinerycacao.ru/' },
        { src: 'images/Pine3.png', description: '', link: 'https://pinerycacao.ru/' },
        { src: 'images/Pine4.png', description: '', link: 'https://pinerycacao.ru/' },
        { src: 'images/Pine5.png', description: '', link: 'https://pinerycacao.ru/' },
        { src: 'images/Pine6.png', description: '', link: 'https://pinerycacao.ru/' },

        ]
      },
      { 
        coverSrc: 'images/Ruler_cover.png', // Путь к обложке 2
        coverDescription: 'Линейка',
        year:'2024',
        images: [ // Массив изображений, связанных с обложкой 2
        { src: 'images/Ruler1.png', description: 'Бесплатный гротеск с универсальным характером, снискавший некоторую популярность в узких кругах. Используется как фирменный шрифт навигации города Черноголовка, московской области В роли: автора' },
        { src: 'images/Ruler2.png', description: '' },
        { src: 'images/Ruler3.png', description: '' },
        { src: 'images/Ruler4.png', description: '' },
        { src: 'images/Ruler5.png', description: '' },
        { src: 'images/Ruler6.png', description: '' },
        { src: 'images/Ruler7.png', description: '' },
        
        ]
      },
      { 
        coverSrc: 'images/Mozabrick_cover.gif', // Путь к обложке 2
        coverDescription: 'Mozabrick бренд',
        year:'2022',
        images: [ 
          { src: 'images/mozabrick1.jpg', description: 'Ведение брендов Mozabrick, RingString и QBRIX. Разработка полиграфии, упаковки и сайтов В роли: тимлида, веб, упаковки, графика', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick2.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick3.jpeg', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick3.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick4.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick5.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick6.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick7.jpg', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick8.jpg', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick9.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick10.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick11.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick12.gif', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick13.gif', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick14.png', description: '', link: "https://mozabrick.ru/" },
          { src: 'images/mozabrick15.png', description: '', link: "https://mozabrick.ru/" },
        ]
      },
      { 
        coverSrc: 'images/Agent_cover.jpg', // Путь к обложке 2
        coverDescription: 'Агентура Вариативная',
        year:'2023',
        images: [ 
          { src: 'images/Agent1.jpg', description: 'Проект реформы русского алфавита на основе кириллицы. Сопровождён текстом научной статьи в системе РИНЦ В роли: автора', link:'https://www.elibrary.ru/item.asp?id=54648815' },
          { src: 'images/Agent2.jpg', description: '', link:'https://www.elibrary.ru/item.asp?id=54648815' },
          { src: 'images/Agent3.jpg', description: '', link:'https://www.elibrary.ru/item.asp?id=54648815' },
          { src: 'images/Agent4.jpg', description: '', link:'https://www.elibrary.ru/item.asp?id=54648815' },
          { src: 'images/Agent5.jpg', description: '', link:'https://www.elibrary.ru/item.asp?id=54648815' },
          { src: 'images/Agent6.jpg', description: '', link:'https://www.elibrary.ru/item.asp?id=54648815' },
          { src: 'images/Agent7.jpg', description: '', link:'https://www.elibrary.ru/item.asp?id=54648815' },
          { src: 'images/Agent8.jpg', description: '', link:'https://www.elibrary.ru/item.asp?id=54648815' },

        ]
      },
      { 
        coverSrc: 'images/Garnitura_cover.png', // Путь к обложке 2
        coverDescription: 'Гарнитура Простая Вариативная',
        year:'2023',
        images: [ 
          { src: 'images/Garnitura1.png', description: 'Гарнитура с осью вариативности по насыщенности (100-700). Переосмысление минимального по графике подхода к проектированию наборного шрифта. В наборе более 20 языков, в том числе языки малых народностей РФ и расширенная латиница В роли: автора' },
          { src: 'images/Garnitura2.png', description: '' },
          { src: 'images/Garnitura3.png', description: '' },
          { src: 'images/Garnitura4.png', description: '' },
        ]
      },
      { 
        coverSrc: 'images/Closed_cover.png', // Путь к обложке 2
        coverDescription: 'Закрытая',
        year:'2023',
        images: [ 
          { src: 'images/Closed1.png', description: 'Шрифт с очень закрытым характером знаков на основе классического модернистского подхода. Этим шрифтом набран этот сайт В роли: автора' },
          { src: 'images/Closed2.png', description: '' },
          { src: 'images/Closed3.png', description: '' },

        ]
      },
      { 
        coverSrc: 'images/Kino_cover.png',
        coverDescription: 'Кино Центральный',
        year:'2024',
        images: [ 
          { src: 'images/Kino1.png', description: 'Экспериментальный гротеск с акцентом на геометрии знаков. Содержит авангардную кассу кириллицы и некоторые спецсимволы В роли: автора' },
          { src: 'images/Kino2.png', description: '' },
          { src: 'images/Kino3.png', description: '' },
          { src: 'images/Kino4.png', description: '' },


        ]
      },
      { 
        coverSrc: 'images/Koma_cover.png', // Путь к обложке 2
        coverDescription: 'Кома',
        year:'2024',
        images: [ 
          { src: 'images/Koma1.png', description: 'Последнее слово, которое можно сказать о кирилловской Гельветике. Суженные пропорции знаков служат в первую очередь современным интерфейсам, преимущественно вертикальным В роли: автора' },
          { src: 'images/Koma2.png', description: '' },
          { src: 'images/Koma3.png', description: '' },
          { src: 'images/Koma4.png', description: '' },
          { src: 'images/Koma5.png', description: '' },
          { src: 'images/Koma6.png', description: '' },
          { src: 'images/Koma7.png', description: '' },

        ]
      },
      { 
        coverSrc: 'images/Book_cover.png', // Путь к обложке 2
        coverDescription: 'Мэзон Книжная',
        year:'2024',
        images: [ 
          { src: 'images/Book1.png', description: 'Антиква, целью которой стала систематизация пропорций знаков прежде всего кирилловского письма на поле шрифтов с засечками В роли: автора' },
          { src: 'images/Book8.png', description: '' },
          { src: 'images/Book9.png', description: '' },
          { src: 'images/Book3.png', description: '' },
          { src: 'images/Book4.png', description: '' },
          { src: 'images/Book5.png', description: '' },
          { src: 'images/Book6.png', description: '' },
          { src: 'images/Book7.png', description: '' },
        ]
      },
      { 
        coverSrc: 'images/Handsome_cover.png', // Путь к обложке 2
        coverDescription: 'Красавицы могут все',
        year:'2023',
        nda: true,
        images: [ 
          { src: 'images/Handsome1.png', description: 'Разработка фирменного стиля, тары и упаковки для люкс-бренда косметики. NDA, по запросу В роли: артдира, промграфика, упаковка',  nda: true },
          { src: 'images/Handsome2.png', description: '', nda: true },
          { src: 'images/Handsome3.png', description: '', nda: true },
          { src: 'images/Handsome4.png', description: '', nda: true },
          { src: 'images/Handsome5.png', description: '', nda: true },
         
        ]
      },
      { 
        coverSrc: 'images/School_cover.png', // Путь к обложке 2
        coverDescription: 'Онлайн школа',
        year:'2023',
        nda: true,
        images: [ 
          { src: 'images/school1.png', description: 'Проект по созданию онлайн-школы и интерфейса для нее в рамках учебного заведения. Проведение анализа и исследований с участием учеников, учителей, а так же непосредственно проектная деятельность В роли: продакта, артдира, тимлида', link:'https://living-crop-208.notion.site/d30abe72d8674f1eb299f1a30ea1ab4c',  nda: true },
          { src: 'images/school2.png', description: '', link:'https://living-crop-208.notion.site/d30abe72d8674f1eb299f1a30ea1ab4c',  nda: true },
          { src: 'images/school3.png', description: '', link:'https://living-crop-208.notion.site/d30abe72d8674f1eb299f1a30ea1ab4c',  nda: true },
         
        ]
      },


      
      
    ];

    
    
      const slider = document.querySelector('.slider');
      const popup = document.querySelector('.popup');
      const popupImg = document.querySelector('.popup-img');
      const popupText = document.querySelector('.popup-text');
      const closeBtn = document.querySelector('.close-btn');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      const refreshBtn = document.querySelector('.refresh');
    
      let currentSlide = 0;
      let currentCover = 0;
      let popupOpen = false;
      let timer;
    
      function updateCover(index) {
        slider.innerHTML = '';
        const coverData = sliderData[index];
        coverData.images.forEach((image, imgIndex) => {
          const imgElement = document.createElement('img');
          imgElement.src = coverData.coverSrc;
          imgElement.alt = coverData.coverDescription;
          imgElement.style.display = imgIndex === 0 ? 'flex' : 'none';
          imgElement.addEventListener('click', () => openPopup(imgIndex));
      
          // Добавляем классы к каждой обложке
          imgElement.classList.add('slide');
          imgElement.classList.add(`cover-${index + 1}`);
          
          // Добавляем класс 'nda' если свойство nda: true
          if (coverData.nda) {
            slider.classList.add('nda');
          }
          else {
            slider.classList.remove('nda');
          }
      
          slider.appendChild(imgElement);
        });
        document.querySelector('.about_project h3').innerText = coverData.year;
        document.querySelector('.about_project p').innerText = coverData.coverDescription;
      }
    
      function openPopup(index) {
        currentSlide = index;
        const coverData = sliderData[currentCover];
        const imageData = coverData.images[currentSlide];
        popupImg.src = imageData.src;
        popupText.innerText = imageData.description;
      
        if (imageData.link) {
          popupText.setAttribute('data-has-link', 'true');
          popupText.onclick = () => {
            window.open(imageData.link, '_blank');
          };
        } else {
          popupText.setAttribute('data-has-link', 'false');
          popupText.onclick = null;
        }
      
        if (coverData.nda) {
          document.querySelector('.popup-content').classList.add('nda');
        } else {
          document.querySelector('.popup-content').classList.remove('nda');
        }
      
        popup.style.display = 'flex';
        popupOpen = true;
        clearInterval(timer);
        slider.style.display = 'none';
        centerPopup();
      }
    
      function closePopup() {
        popup.style.display = 'none';
        popupOpen = false;
        slider.style.display = 'flex';
        startSlider();
      }
    
      function nextSlide() {
        const coverData = sliderData[currentCover];
        currentSlide = (currentSlide + 1) % coverData.images.length;
        openPopup(currentSlide);
      }
    
      function prevSlide() {
        const coverData = sliderData[currentCover];
        currentSlide = (currentSlide - 1 + coverData.images.length) % coverData.images.length;
        openPopup(currentSlide);
      }
    
      function centerPopup() {
        const popupContent = document.querySelector('.popup-content');
        popupContent.style.top = '50%';
        popupContent.style.left = '50%';
        popupContent.style.transform = 'translate(-50%, -50%)';
      }
    
      function startSlider() {
        timer = setInterval(() => {
          currentCover = (currentCover + 1) % sliderData.length;
          updateCover(currentCover);
        }, 3000);
      }
    
      function stopSlider() {
        clearInterval(timer);
      }
    
      updateCover(currentCover);
      startSlider();
    
      closeBtn.addEventListener('click', closePopup);
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
      refreshBtn.addEventListener('click', () => {
        stopSlider();
        const randomIndex = Math.floor(Math.random() * sliderData.length);
        updateCover(randomIndex);
        currentCover = randomIndex;
      });
    
      document.addEventListener('keydown', (event) => {
        if (popupOpen) {
          if (event.key === 'Escape') closePopup();
          else if (event.key === 'ArrowLeft') prevSlide();
          else if (event.key === 'ArrowRight') nextSlide();
        }
      });
    });
    
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVh();
window.addEventListener('resize', setVh);
  
let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});
document.querySelectorAll('.prev-btn, .next-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var circle = this.querySelector('circle');
    var svg = this.querySelector('svg');
    var newCircle = circle.cloneNode(true);
    svg.replaceChild(newCircle, circle);
    newCircle.style.animation = 'fill 0.6s ease-out';
  });
});
