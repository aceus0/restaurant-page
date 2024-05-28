import self from "./self.jpg";

function aboutPage() {
    const contentParent = document.getElementById('content');

    const selfInfo = () => {
        const aboutConatiner = document.createElement('div');
        const selfImg = document.createElement('img');
        const aboutMe = document.createElement('p');

        aboutConatiner.id = "about-container"
        selfImg.src = self;
        selfImg.id = "self";
        aboutMe.innerHTML = "Chef, or privatly known as Slop Star has been making culinary creations<br> since he was a little tiny baby."

        contentParent.appendChild(aboutConatiner);
        aboutConatiner.appendChild(selfImg);
        aboutConatiner.appendChild(aboutMe);
    }

    return {selfInfo};
}

export default aboutPage;