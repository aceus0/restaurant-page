import chef1 from './chef1.jpg';
import chef2 from './chef2.jpg';
import chef3 from './chef3.jpg';

function frontPage() {
    const contentParent = document.getElementById('content');
    
    const pictureWheel = () => {
        const picList = [chef1, chef2, chef3];
        const wheel = document.createElement('div');
        const picture1 = document.createElement('img');
        const picture2 = document.createElement('img');
        const picture3 = document.createElement('img');

        wheel.setAttribute(`id`, `wheel`);

        contentParent.appendChild(wheel);

        picture1.setAttribute(`src`, `${chef1}`);
        picture2.setAttribute(`src`, `${chef3}`);
        picture3.setAttribute(`src`, `${chef2}`);
        wheel.appendChild(picture1);
        wheel.appendChild(picture2);
        wheel.appendChild(picture3);

    }
    
    const flavorContent = () => {
        const flavorContainer = document.createElement('div');
        const flavorTitle = document.createElement('h1');
        const flavorPara = document.createElement('p');

        flavorContainer.setAttribute("id", "flavor");
        flavorTitle.textContent = "Chef's Exquiste Creations";
        flavorPara.innerHTML = "Enjoy custom culinary creations made with love by Chef. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        
        contentParent.appendChild(flavorContainer);
        flavorContainer.appendChild(flavorTitle);
        flavorContainer.appendChild(flavorPara);

    }

    return {pictureWheel, flavorContent};
}

export default frontPage;