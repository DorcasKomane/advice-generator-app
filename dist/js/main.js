async function getAdvice(){
    try{
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        const adviceNumber = document.getElementById('adviceNumber');
        const text = document.getElementById('quoteContent');
        const btn = document.getElementById('btn');

        adviceNumber.textContent = data.slip.id;
        text.textContent = `"${data.slip.advice}"`;

        btn.addEventListener('click', function(){
            getAdvice();
        })   

    }catch (error) {
        console.error('Error fetching or displaying data:', error)
    }
}

getAdvice();