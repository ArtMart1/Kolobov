document.addEventListener('DOMContentLoaded', function () {
  const sliderData = [
    { 
      coverSrc: 'https://via.placeholder.com/300x200.png?text=Cover+1', 
      coverDescription: 'Pinery, кофе- и какао-бар',
      year:'2023',
      images: [ // Массив изображений, связанных с обложкой 1
        { src: 'https://via.placeholder.com/600x400.png?text=Image+1.1', description: 'Описание для изображения 1.1' },
        { src: 'https://via.placeholder.com/600x400.png?text=Image+1.2', description: 'Описание для изображения 1.2' },
        // Добавьте другие объекты для остальных изображений, связанных с этой обложкой
      ]
    },
    { 
      coverSrc: 'https://via.placeholder.com/300x200.png?text=Cover+2', // Путь к обложке 2
      coverDescription: 'Описание второй обложки',
      year:'2022',
      images: [ // Массив изображений, связанных с обложкой 2
        { src: 'https://via.placeholder.com/600x400.png?text=Image+2.1', description: 'Описание для изображения 2.1' },
        { src: 'https://via.placeholder.com/600x400.png?text=Image+2.2', description: 'Описание для изображения 2.2' },
        // Добавьте другие объекты для остальных изображений, связанных с этой обложкой
      ]
    },
    // Добавьте другие объекты для остальных обложек с их изображениями
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
  let currentCover = 0;
  let popupOpen = false;
  let timer;

  function openPopup(index) {
    const coverData = sliderData[currentCover];
    const imageData = coverData.images[index];
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
    currentSlide = index;

    // Центрируем попап и изображение
    centerPopup();
  }

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
    const coverData = sliderData[currentCover];
    const imagesCount = coverData.images.length;
    currentSlide = (currentSlide + 1) % imagesCount;
    showSlide(currentSlide);
    if (popupOpen) {
      openPopup(currentSlide);
    }
  }

  function prevSlide() {
    const coverData = sliderData[currentCover];
    const imagesCount = coverData.images.length;
    currentSlide = (currentSlide - 1 + imagesCount) % imagesCount;
    showSlide(currentSlide);
    if (popupOpen) {
      openPopup(currentSlide);
    }
  }

  function startSlider() {
    timer = setInterval(() => {
        nextSlide();
        updateCoverDescription(currentSlide);
    }, 3000);
}
function updateCoverDescription(index) {
  // Получаем данные о текущей обложке из массива sliderData
  const coverData = sliderData[index];
  // Получаем описание текущей обложки
  const coverDescription = coverData.coverDescription;
  // Получаем год текущей обложки
  const coverYear = coverData.year;
  // Обновляем текст в блоке about_project
  document.querySelector('.about_project p').innerText = coverDescription;
  document.querySelector('.about_project h3').innerText = coverYear; // Обновляем текст с годом
}

// При загрузке страницы обновляем описание и год для первой обложки
updateCoverDescription(0);

  startSlider();

  sliderImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentCover = index;
      openPopup(0); // Открываем попап с первым изображением после клика на обложку
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

  let currentCoverIndex = 0;

// Добавляем обработчик события клика на кнопку "Обновить"
refreshBtn.addEventListener('click', () => {
    // Генерируем случайный индекс для рандомной картинки
    const randomIndex = Math.floor(Math.random() * sliderImages.length);
    // Показываем случайный слайд
    showSlide(randomIndex);
    // Обновляем описание обложки и год
    updateCoverDescription(randomIndex);
    // Сохраняем текущий индекс обложки
    currentCoverIndex = randomIndex;
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