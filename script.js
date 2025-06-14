document.addEventListener('DOMContentLoaded', () => {
  const navbarTitle = document.querySelector('.navbar-title')
  const heroTitle = document.querySelector('.title')
  const hero = document.querySelector('.hero')

  // 네비게이션 바 제목을 hero 제목과 동일하게 맞춤
  navbarTitle.textContent = heroTitle.textContent

  window.addEventListener('scroll', () => {
    const heroRect = hero.getBoundingClientRect()
    const scrollRatio = Math.min(
      Math.max(1 - heroRect.bottom / window.innerHeight, 0),
      1
    )

    // hero 제목이 점점 작아지고 투명해짐
    const minFontSize = 1.5
    const maxFontSize = 4
    const fontSize =
      minFontSize + (maxFontSize - minFontSize) * (1 - scrollRatio)
    heroTitle.style.fontSize = `${fontSize}rem`
    heroTitle.style.opacity = 1 - scrollRatio * 1.2

    if (scrollRatio > 0.3) {
      navbarTitle.style.opacity = (scrollRatio - 0.3) / 0.7
    } else {
      navbarTitle.style.opacity = 0
    }
  })
})
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.title').style.opacity = '1'
})
document.addEventListener('DOMContentLoaded', function () {
  const title = document.querySelector('.title')
  const text = title.innerText
  title.innerText = '' // 초기화 (빈 값에서 시작하려면 주석 해제)
  let i = 0
  function typing() {
    if (i < text.length) {
      title.innerText += text.charAt(i)
      i++
      setTimeout(typing, 100) // 100ms마다 한 글자씩 추가
    }
  }
  typing()
})

document.addEventListener('DOMContentLoaded', function () {
  const intros = document.querySelectorAll('.profile-intro')
  let delay = 0
  intros.forEach((intro) => {
    const text = intro.innerText
    intro.innerText = ''
    setTimeout(() => {
      let i = 0
      function typing() {
        if (i < text.length) {
          intro.innerText += text.charAt(i)
          i++
          setTimeout(typing, 70)
        }
      }
      typing()
    }, delay)
    delay += 1500 // 각 요소마다 1.5초씩 딜레이 추가
  })
})
document.addEventListener('DOMContentLoaded', function () {
  const teamTitle = document.querySelector('.team-title')
  const teamContainer = document.querySelector('.team-container')
  teamTitle.addEventListener('click', function () {
    teamContainer.classList.toggle('open')
  })
})
