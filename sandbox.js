const form = document.querySelector("form");
const answer = document.querySelector(".questions");
const result = document.querySelector(".result-section");
const correctAnswers = ["B","B","B","B"];
const condResult = document.querySelector(".cond-result");
const condScore = document.querySelector(".cond-score");
console.log(condResult);
console.log(condScore);
//let score = 0;
//let endCount = 0;


form.addEventListener("submit", e => {
    scrollTo(0,0);
    result.style.display = "inherit";
    let score = 0;
    let endCount = 0;
    e.preventDefault();
    const givenAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    for (let i = 0; i < givenAnswers.length; i++) {
        if (givenAnswers[i] === correctAnswers[i]) {
            score += 25;
            
        }
        if (score <= 25) {
            condResult.textContent = "Come on, you can do it better! Your Score: ";
            }
        if (score <= 50) {
            condResult.textContent = "Not too bad, your score: ";
        }
        if (score <= 75) {
            condResult.textContent = "Good, but you might get better next time, your score: ";
        }
        else {
            condResult.textContent = "Awesome! Your score: ";
        }


        const interval = setInterval(() => {
            condScore.textContent = `${endCount}%`;
            if (endCount === score) {
                clearInterval(interval);
            }
            else {
                endCount++;
            }
        },100);       
    }

});




