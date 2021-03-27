const form = document.querySelector("form");
const answer = document.querySelector(".questions");
const result = document.querySelector(".result-section");
const correctAnswers = ["B","B","B","B"];
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
        const interval = setInterval(() => {
            result.querySelector("span").textContent = `${endCount}%`;
            if (endCount === score) {
                clearInterval(interval);
            }
            else {
                endCount++;
            }
        },100);       
    }

});




