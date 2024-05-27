import './style.css';
import frontPage from "./frontPage";

console.log("Howdy, partner!");

function buildPage() {
    const page1 = frontPage();

    page1.pictureWheel();

}

const page = buildPage();