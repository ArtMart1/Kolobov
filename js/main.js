document.addEventListener('DOMContentLoaded', function () {
  const sliderData = [
      { src: 'images/pine.png', description: 'Проект по созданию визуального стиля для\nсети московских кофеен Пайнери, в том числе\n интерфейсов для сайта\n В роли: артдира, тимлида, веб ' },
      { src: 'images/font.png', description: 'Описание для картинки 2' },
      // Добавьте другие объекты для остальных изображений с их описаниями
    ];
    
  const sliderImages = document.querySelectorAll('.slider img');
  const slider = document.querySelector('.slider');
  const popup = document.querySelector('.popup');
  const popupImg = document.querySelector('.popup-img');
  const popupText = document.querySelector('.popup-text');
  const closeBtn = document.querySelector('.close-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const refreshBtn = document.querySelector('.refresh'); // Выбираем кнопку "Обновить"

  let currentSlide = 0;
  let popupOpen = false;
  let timer;
 document.addEventListener('DOMContentLoaded', function() {
// Вызываем функцию открытия попапа после загрузки всех ресурсов
openPopup(0); // Мы можем начать с первого изображения, например
});
function openPopup(index) {
  const imageData = sliderData[index];
  popupImg.src = imageData.src;
  popupText.innerText = imageData.description;
  popupImg.style.transform = 'scale(1.85)';
  popup.style.display = 'block';
  popupOpen = true;
  clearInterval(timer);

  // Скрываем основной слайдер при открытии попапа
  slider.style.display = 'none';

  // Устанавливаем активный слайд в попапе
  const popupSlides = document.querySelectorAll('.popup .slide');
  popupSlides.forEach(slide => slide.classList.remove('active'));
  popupSlides[index].classList.add('active');

  // Обновляем индекс текущего активного слайда в попапе
  currentPopupSlideIndex = index;

  // Центрируем попап и изображение
  centerPopup();
}
popup.addEventListener('click', function(event) {
  if (popupOpen && event.target === this) {
    closePopup();
  }
});
  function closePopup() {
    popup.style.display = 'none';
    popupOpen = false;
    startSlider();

    // Показываем основной слайдер при закрытии попапа
    slider.style.display = 'block';
  }

  function showSlide(index) {
    sliderImages.forEach(image => image.style.display = 'none');
    sliderImages[index].style.display = 'block';
  }

  function nextSlide() {
      const slides = document.querySelectorAll('.slider .slide');
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
      if (popupOpen) {
        openPopup(currentSlide);
      }
    }
    

  function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentSlide);
    if (popupOpen) {
      openPopup(currentSlide);
    }
  }

  function startSlider() {
    timer = setInterval(nextSlide, 3000);
  }

  startSlider();

  sliderImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      openPopup(index);
    });
  });

  closeBtn.addEventListener('click', () => {
    closePopup();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
  });

  refreshBtn.addEventListener('click', () => { // Добавляем обработчик события для кнопки "Обновить"
    const randomIndex = Math.floor(Math.random() * sliderImages.length); // Генерируем случайный индекс
    showSlide(randomIndex); // Показываем случайный слайд
  });

  document.addEventListener('keydown', (event) => {
    if (popupOpen) {
      if (event.key === 'Escape') {
        closePopup();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    }
  });

  function centerPopup() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.style.top = '50%';
    popupContent.style.left = '50%';
    popupContent.style.transform = 'translate(-50%, -50%)';
  }
});

  
let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});