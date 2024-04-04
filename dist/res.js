// let contactme = document.getElementById('cb');
// let aboutme = document.getElementById('abb');
// let academic = document.getElementById('ab');
// let skills = document.getElementById('sb');
// let project = document.getElementById('pb');
// let expertise = document.getElementById('eb');


function scrollIntoElement(elementId){
    const element = document.getElementById(elementId);

    if(element){
        element.scrollIntoView({behavior:"smooth"});
    }
}

function eventOnclick(elementId){
    scrollIntoElement(elementId);//To scroll to the element first then apply alert function

    setTimeout(()=>{
        switch(elementId){
        case 'cb':
        case 'sb':
        case 'eb':
        case 'abb':
            alert("You got it! , If not- look at left side");
            break;
        
        case 'pb':
        case 'ab':
            alert("You got it! , If not - look at right side");
            break;
        
        default:
            break;
        }
    },1000)
    

}

document.getElementById('cb').onclick = ()=> eventOnclick('cb');
document.getElementById('sb').onclick = ()=> eventOnclick('sb');
document.getElementById('eb').onclick = ()=> eventOnclick('eb');
document.getElementById('abb').onclick = ()=> eventOnclick('abb');
document.getElementById('pb').onclick = ()=> eventOnclick('pb');
document.getElementById('ab').onclick = ()=> eventOnclick('ab');