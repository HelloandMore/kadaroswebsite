window.onload = function() {
    var btns = document.querySelectorAll('.btn');
    var animationState = [];

    btns.forEach(function(btn, index) {
        animationState[index] = getComputedStyle(btn).animationPlayState;

        btn.addEventListener('mouseover', function() {
            btns.forEach(function(b, i) {
                animationState[i] = getComputedStyle(b).animationPlayState;
                b.style.animationPlayState = 'paused';
            });
        });

        btn.addEventListener('mouseout', function() {
            btns.forEach(function(b, i) {
                b.style.animationPlayState = animationState[i];
            });
        });
    });
};
