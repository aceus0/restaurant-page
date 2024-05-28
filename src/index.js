import './style.css';
import frontPage from "./frontpage/frontPage";
import menuPage from "./menu/menu";
import aboutPage from "./about/about";

console.log("Howdy, partner!");

function buildPage() {

    const btns = document.querySelectorAll('button');
    const content = document.getElementById('content');
    const front = frontPage();
    const menu = menuPage();
    const about = aboutPage();

    front.pictureWheel();
    front.flavorContent();

    btns.forEach(element => {
        element.addEventListener(`click`, (e) => {
        
            if (e.target.id === `front`){
                content.innerHTML = ``;
                front.pictureWheel();
                front.flavorContent();
            } else if (e.target.id === `menu`){
                content.innerHTML = ``;
                menu.foodItems();
            } else if (e.target.id === `about`){
                content.innerHTML = ``;
                about.selfInfo();
            }
    
        })
    })
    

    // const about = about();

    //front.pictureWheel();
    //front.flavorContent();

    //menu.foodItems();


}

const page = buildPage();