import food1 from './food1.jpg';
import food2 from './food2.jpg';
import food3 from './food3.jpg';

function menuPage() {
    const contentParent = document.getElementById('content');
    const foodContainer = document.createElement('div')
    foodContainer.setAttribute('id', 'foods');
    
    let hasRun = false;

    const foods = [
        {title: `Steak`, price: `Price: Priceless`, img: food1},
        {title: `Bao Bun`, price: `Price: Priceless`, img: food3},
        {title: `Sliders`, price: `Price: Priceless`, img: food2}
    ]

    function createContainer(title, price, img) {
        const container = document.createElement('div');
        container.setAttribute('id', 'container');
        
        const imgElement = document.createElement('img');
        imgElement.src = img;
        container.appendChild(imgElement);


        const titleElement = document.createElement('p');
        titleElement.textContent = title;
        container.appendChild(titleElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = price;
        container.appendChild(priceElement);

        return container;
    }
    
    const foodItems = () => {

        if (hasRun === false){
        foods.forEach(food => {
            const container = createContainer(food.title, food.price, food.img);
            foodContainer.appendChild(container);
        })
        hasRun = true;
        }
        contentParent.appendChild(foodContainer);

    }

    return {foodItems};
}

export default menuPage;