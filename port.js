const portfolioImgBackground=document.querySelectorAll('.portfolio-img-background');
function selectItem(e) {
    document.querySelectorAll('.portfolio-img-background').style.background='red';
}
portfolioImgBackground.forEach(item=>item.addEventListener('click',selectItem));
