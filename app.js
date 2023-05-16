const sections = document.querySelectorAll('.section')
const controlsBtn = document.querySelectorAll('.controls')
const controlBtn = document.querySelectorAll('.control')
const allSection = document.querySelector('.main-content')


function PageTransition(){
    //Button active
    for(let i = 0; i < controlBtn.length; i++){
        controlBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    //Sections active 
    allSection.addEventListener('click', (e) =>{
        const id = e.target.dataset.id
        if(id){
            //Remove selected from other buttons
            controlsBtn.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })

    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () => {
        let element = document.body
        element.classList.toggle('light-mode')
    })
}

PageTransition()