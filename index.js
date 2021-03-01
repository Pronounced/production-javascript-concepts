const quiz = function()
{
    var ans;
    var score = 0;
    var question = function(input){
        return prompt(input).toLowerCase();
    };

    console.log('QUIZ')
    console.log(ans = question('1. What is 3 times 4?'));
    if(ans === '12' || 'twelve') score++;
    console.log(ans);

    console.log(ans = question('2.How many legs does a cat have?'));
    if(ans === '4' || 'four') score++;

    console.log(ans = question('3. How many feet are in a mile?'));
    if(ans === '5280') score++;

    console.log(ans = question('4. What color does mixing blue and yellow create?'));
    if(ans === 'green') score++;

    console.log('Score: ' + score)
}

quiz();