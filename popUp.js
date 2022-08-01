function popUp(id_el){
    try{
        const pop = document.getElementById('popUpSection');
        pop.remove();
    }
    catch{
    const button = document.getElementById(id_el);
    const container = document.createElement('div');
    container.id = "popUpSection"
    //Spence
    const spenseHeader =document.createElement('h5');
    const fiberHeader =document.createElement('h5');
    const gradieHeader =document.createElement('h5');
    spenseHeader.textContent = "Spense";
    fiberHeader.textContent = "Fiber";
    gradieHeader.textContent = "Gradie";
    const spenseText  = document.createElement('p');
    const fiberText  = document.createElement('p');
    const gradieText  = document.createElement('p');
    fiberText.textContent = "An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning";
    gradieText.textContent = "Gradie is a simple sign up page, great to practice centering layouts";
    spenseText.textContent = "Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts"
    const wordContent = document.createElement('div');
    wordContent.id='words';
    const spense  = document.createElement('div');
    spense.append(spenseHeader,spenseText);
    const fiber =document.createElement('div');
    fiber.append(fiberHeader,fiberText);
    const gradie = document.createElement('div');
    gradie.append(gradieHeader,gradieText);
    wordContent.append(spense,fiber,gradie);
    spense.id = 'spense';
    fiber.id ='fiber';
    gradie.id='gradie';
    //img spence
    const spImg = document.createElement('img');
    const fibImg = document.createElement('img');
    const graImg = document.createElement('img');
    const icons = document.createElement('div');
    icons.id="icons";
    spImg.src ="../Assets/Spense_Icon.svg";
    spImg.className ="icon";
    fibImg.src ="../Assets/Fiber_Icon.svg";
    fibImg.className ="icon";
    graImg.src ="../Assets/Gradie_Icon.svg";
    graImg.className ="icon";
    icons.append(spImg,fibImg,graImg);
    container.append(icons,wordContent);
    button.append(container);
    console.log(button);
    }
}