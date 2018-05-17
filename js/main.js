const cat = document.getElementById('catImage');
let counter = 0;
cat.addEventListener('click', function () {
    document.getElementById("counter").textContent = "Counter:" + (++counter);
});