window.addEventListener('load', function() {
    setBodyLoaded();
    setGoodsBlockLoaded();
});

function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setGoodsBlockLoaded() {
    let reached = false;
    const GOODS_BLOCK_OFFSET = 300;
    const goodsBlock = document.getElementById('goodsBlock');
    const goodsBlockOffset = goodsBlock.offsetTop;
    const windowHeight = window.innerHeight;
    
    window.addEventListener('scroll', function() {
        let scrolled = window.pageYOffset;
        if (scrolled + windowHeight > goodsBlockOffset + GOODS_BLOCK_OFFSET) {
            if (!reached) {
                goodsBlock.classList.add('goods_block_loaded');
                reached = true;
            }
        }
        
    })

}



