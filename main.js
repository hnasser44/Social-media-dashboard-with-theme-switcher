tailwind.config = {
    theme: {
      extend: {
        colors: {
          limeGreen: 'hsl(163, 72%, 41%)',
          brightRed: 'hsl(356, 69%, 56%)',
          facebook: 'hsl(208, 92%, 53%)',
          twitter: 'hsl(203, 89%, 53%)',
          instagram: 'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
          instagram1: 'hsl(37, 97%, 70%)',
          instagram2: 'hsl(329, 70%, 58%)',
          youtube: 'hsl(348, 97%, 39%)',
          darkToggle: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
          darkToggle1: 'hsl(210, 78%, 56%)',
          darkToggle2: 'hsl(146, 68%, 55%)',
          lightToggle: 'hsl(230, 22%, 74%)',
            veryDarkBlue: 'hsl(230, 17%, 14%)',
            veryDarkBlue2: 'hsl(232, 19%, 15%)',
            darkDesaturatedBlue: 'hsl(228, 28%, 20%)',
            desaturatedBlue: 'hsl(228, 34%, 66%)',
            white: 'hsl(0, 0%, 100%)',
            paleBlue: 'hsl(225, 100%, 98%)',
            grayishBlue: 'hsl(227, 47%, 96%)',
            darkGrayishBlue: 'hsl(228, 12%, 44%)',
            veryDarkBlue: 'hsl(230, 17%, 14%)',
            hovercard: 'hsl(225, 7%, 89%) ',
        }
      }
    },
    darkMode: 'class',
  }


const ThemeSwitch = document.querySelector('.themeSwitch');
const HTMLTag = document.querySelector('html')


ThemeSwitch.addEventListener('click', () => {
    ThemeSwitch.classList.toggle('clicked');
    HTMLTag.classList.toggle('dark');
});