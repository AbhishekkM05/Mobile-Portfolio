const carddiv = document.querySelector('#cards-parent-element');     
const pop = document.querySelector('#pop-window');

       var cardsObj = [
        {
          title: 'Tonic',
          jobDescription: {
            company: 'CANOPY',
            role: 'Back End Dev',
            year: '2015',
          },
          mimg: 'assets/images/Tonic.png',
          dimg: 'assets/images/card1_ds.png',
          description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
          skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
          btn1: 'See live',
          btn2: 'See Source',
        },
        {
          title: 'Multi-Post Stories',
          jobDescription: {
            company: 'CANOPY',
            role: 'Back End Dev',
            year: '2015',
          },
          mimg: 'assets/images/Multipost.png',
          dimg: 'assets/images/card2_ds.png',
          description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
          skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
          btn1: 'See live',
          btn2: 'See Source',
        },
        {
          title: 'Tonic',
          jobDescription: {
            company: 'CANOPY',
            role: 'Back End Dev',
            year: '2015',
          },
          mimg: 'assets/images/Tonic1.png',
          dimg: 'assets/images/card3_ds.png',
          description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
          skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
          btn1: 'See live',
          btn2: 'See Source',
      
        },
        {
          title: 'Multi-Post Stories',
          mimg: 'assets/images/Multpost1.png',
          dimg: 'assets/images/card4_ds.png' ,
          jobDescription: {
            company: 'CANOPY',
            role: 'Back End Dev',
            year: '2015',
          },
          description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
          skills: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
          btn1: 'See live',
          btn2: 'See Source',
      
        }
       
        ];
        // console.log(cardsObj);
        // let i =0;
        // cards.forEach((card)=>{
            for(let i = 0; i< cardsObj.length; i+=1){
                console.log(cardsObj[i].dimg);
            carddiv.innerHTML += `<div class="project`+(i+1)+`">
                <div class="img1"><img src="`+cardsObj[i].mimg+`" alt="T"></div>
                <div class="card`+(i%2+1)+`"><img src="`+cardsObj[i].dimg+`" alt="T"></div>
                <div class="task"><h2>`+cardsObj[i].title+`</h2>
                    <div class="list">
                    <ul>
                        <li class="canopy">CANOPY</li> 
                        <li><img src="assets/images/Counter.png" alt="dot"></li>
                        <li>Backend Dev</li>
                        <li><img src="assets/images/Counter.png" alt="dot"></li>
                        <li>2015</li>
                    </ul>
                    </div>
                    <p class="para">`+cardsObj[i].description+`</p> 
                        <div class="button-list">
                            <ul>
                              <li><a href="">html</a></li>
                              <li><a href="">css</a></li>
                              <li><a href="">javaScript</a></li>
                            </ul>
                          </div>
                      <div> 
                    <button class="btn pop-up" data-id="" id="popup-btn"  type="button">See Project</button>
                    </div>
                </div>
            </div>`;
        //    i++;        

    
        
    }

       
    
function Popup(position) {
    const popContent = document.createElement('section');
    popContent.innerHTML = (`
    <div class="pop-content">
    <div class="head-title">
      <h3>${cardsObj[position].title}</h3>
      <span class="close-icon">&times;</span>
    </div>
    <ul class="work-place">
      <li class="year">${
        cardsObj[position].jobDescription.company
      }&nbsp;&nbsp; &#8226; &nbsp;</li>
      <li class="year gray">${
        cardsObj[position].jobDescription.role
      }&nbsp;&nbsp; &#8226; &nbsp;</li>
      <li class="year gray">${cardsObj[position].jobDescription.year}</li>
    </ul>
    <img class= "popimg" src="${cardsObj[position].mimg}" alt="">
    <div class="bottom">
      <p>${cardsObj[position].description}</p>
      <div class="right-side">
        <ul class="project-languages">
          <li ><a class= "programming" href="">${cardsObj[position].skills[0]}</a></li>
          <li ><a class= "programming" href="">${cardsObj[position].skills[1]}</a></li>
          <li ><a class= "programming" href="">${cardsObj[position].skills[2]}</a></li>
        </ul>
        <div class="popup-buttons">
          <button type="button" class="pop-btn">
                  <a class="btn-live"href="">
                  ${
                    cardsObj[position].btn1
      } &nbsp;&nbsp;&nbsp;
                    <i class="btnicon bi bi-box-arrow-up-right"></i>
                  </a>
          </button>
          <button type="button" class="pop-btn">
                  <a class="btn-live"href="">
                  ${
                    cardsObj[position].btn2
      } &nbsp;&nbsp;&nbsp;
                    <i class="btnicon bi bi-github"></i>
                  </a>
          </button>
      </div>
    </div>
    </div>`);
  
    pop.appendChild(popContent);
    if (pop.style.display === 'block') {
      pop.style.display = 'none';
    } else {
      pop.style.display = 'flex';
      document.querySelector('.close-icon').addEventListener('click', () => {
        pop.removeChild(popContent);
        pop.style.display = 'none';
      });
    }
  }
  
  const projectnBtn = document.querySelectorAll('#popup-btn');
  projectnBtn.forEach((btn, ind) => {
    btn.addEventListener('click', () => {
      Popup(ind);
    });
  });