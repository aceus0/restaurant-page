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
        console.log(`Wheel built.`)

        picture1.setAttribute(`src`, `${chef1}`);
        picture2.setAttribute(`src`, `${chef2}`);
        picture3.setAttribute(`src`, `${chef3}`);
        wheel.appendChild(picture1);
        wheel.appendChild(picture2);
        wheel.appendChild(picture3);


    }
    
    const HeadLine = () => {
        const headLine = document.createElement('h1');
    
        headLine.textContent = "Chef has what YOU need!";
        contentParent.appendChild(headLine);
    }

    return {pictureWheel, HeadLine};
}

export default frontPage;