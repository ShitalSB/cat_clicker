const cat1 = document.getElementById('catImage1');
let counter1 = 0,
    counter2 = 0;
    const cat1name="Venia",cat2name="Bella";
    document.getElementById('cat1name').textContent=cat1name;
    document.getElementById('cat2name').textContent=cat2name;
cat1.addEventListener('click', function () {
    document.getElementById("counter1").textContent = "Counter:" + (++counter1);
});

const cat2 = document.getElementById('catImage2');
cat2.addEventListener('click', function () {
    document.getElementById("counter2").textContent = "Counter:" + (++counter2);
});