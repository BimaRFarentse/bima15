const title = document.querySelector('.title')

const text = `BIMA has something for you`.split('')


// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

const subtitle = document.querySelector('.subtitle')
const subtitleText = `HALLO LUPI`.split('')

// Atur gaya layout seperti sebelumnya
subtitle.style.display = 'flex'
subtitle.style.flexWrap = 'wrap'
subtitle.style.justifyContent = 'center'
subtitle.style.gap = '0.5rem'

// Tambahkan huruf per huruf
for (let i = 0; i < subtitleText.length; i++) {
  if (subtitleText[i] !== ' ') {
    subtitle.innerHTML += `<span>${subtitleText[i]}</span>`
  } else {
    subtitle.innerHTML += `<span style='width: 1rem'></span>`
  }
}

// Tambahkan animasi dengan delay acak
const subtitleElements = document.querySelectorAll('.subtitle span')
subtitleElements.forEach((el) => {
  const delay = Math.random() * 3
  el.style.animationDelay = `${delay}s`
})
