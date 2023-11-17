// The Question/Answer Bank

const categories = [

{
topic: "THAT'S BUSSIN'",
questions: [
    {  question:"In the 2000s, if someone said 'BRB' in a chat, what did it mean?",
        answer: "Be Right Back",
        difficulty: 100,
    
    },

    {
        question:"What term was commonly used in the 1960s to describe something excellent or impressive?",
        answer: "Far Out",
        difficulty: 200,
    
    },

    {
        question:"What phrase from the 1990s was used to acknowledge a mistake or admit wrongdoing?",
        answer: "My Bad",
        difficulty: 300,
    
    },

    {
        question:"What term from the 2000s was often used to describe something that was cool or impressive?",
        answer: "Sick",
        difficulty: 400,
    
    },


    {
        question:"The expression 'sksksk' is often used by Generation Z to convey this emotion",
        answer: "laughter",
        difficulty: 500,
    
    }
] 
},

{
    topic: "SHAKE A TAILFEATHER",
    questions: [
        {  question:"What popular dance craze emerged in the 1950s, often associated with Elvis Presley's music?",
            answer: "The Twist",
            difficulty: 100,
        
        },
    
        {
            question:"In the 1970s, what dance style was inspired by a popular movie and involved stepping and clapping?",
            answer: "The Saturday Night Fever Dance",
            difficulty: 200,
        
        },
    
        {
            question:"In the 1980s, what dance became synonymous with Michael Jackson and featured a signature gliding move?",
            answer: "The Moonwalk",
            difficulty: 300,
        
        },
    
        {
            question:"What dance from the 1990s was associated with a popular line dance and involved hopping and sliding?",
            answer: "The Macarena",
            difficulty: 400,
        
        },
    
        {
            question:"In the 1990s, what dance style gained popularity with the rise of hip-hop music and involved a distinctive shuffling step?",
            answer: "The Running Man Dance",
            difficulty: 500,
        
        }
        
    
    ]
    },

    {
        topic: "ONE FIST UP",
        questions: [
            {  question:"Who was the charismatic political leader, known for his 'I Have a Dream' speech during the March on Washington in 1963?",
                answer: "Martin Luther King Jr.",
                difficulty: 100,
            
            },
        
            {
                question: "What movement, often associated with music and fashion, sought to raise awareness and funds for famine relief in Ethiopia during the 1980s?",
                answer: "The Live Aid Movement",
                difficulty: 200,
            
            },
        
            {
                question:"Who was the 40th President of the United States, serving from 1981 to 1989 and known for his conservative policies?",
                answer: "Ronald Reagan",
                difficulty: 300,
            
            },
        
            {
                question:"In the 1970s, what LGBTQ+ rights movement began to fight against discrimination and for equal rights?",
                answer: "The Gay Liberation Movement",
                difficulty: 400,
            
            },
        
            {
                question:"In the 1980s, what political movement in Eastern Europe contributed to the fall of the Berlin Wall and the end of the Cold War?",
                answer: "The Solidarity Movement",
                difficulty: 500,
            
            }  
        
        ]
        },

{

    topic: "FAMOUS GOATS",
    questions: [
    {  question:"Who was the iconic martial artist and actor, known for his roles in 'Enter the Dragon' and 'Way of the Dragon'?",
    answer: "Bruce Lee",
        difficulty: 100,
    
    },

    {
        question:"Which British musician and former frontman of The Police released hit songs like 'Every Breath You Take' in the '80s?",
        answer: "Sting",
        difficulty: 200,
    
    },

    {
        question:"Who was the world-famous British author known for the 'Harry Potter' book series, which gained immense popularity in the '90s?",
        answer: "J.K. Rowling",
        difficulty: 300,
    
    },

    {
        question:"Which American reality TV star and businesswoman rose to fame with the show 'Keeping Up with the Kardashians' in the 2000s?",
        answer: "Kim Kardashian",
        difficulty: 400,
    
        
    },

    {
        question:"Which American talk show host became a cultural icon in the '90s, known for her influential and long-running daytime show?",
        answer: "Oprah Winfrey",
        difficulty: 500,
    
    }

]
},
{

    topic: "NICE THREADS",
    questions: [
    {  question:"Which iconic '90s sitcom character popularized the 'Rachel' haircut, sparking a major hair trend?",
        answer: "Friends",
        difficulty: 100,
    
    },

    {
        question:"What type of pants, often made of denim, became a fashion staple in the '90s, especially among teenagers?",
        answer: "Wide-Legged Jeans",
        difficulty: 200,
    
    },

    {
        question:"What specific style of low-rise jeans became a notable fashion trend in the 2000s?",
        answer: "Bootcut Jeans",
        difficulty: 300,
    
    },

    {
        question:"What popular accessory of the '80s was often worn on wrists, featuring various bright colors and often associated with fitness?",
        answer: "Sweatbands",
        difficulty:400,
    
    },

    {
        question:"Which accessory, characterized by colorful rubber bands interwoven into different shapes, was a popular fashion trend in the early 2000s?",
        answer: "Silly Bandz",
        difficulty:500,
        
    }
    

]
}
]

// let score1 = 0;
// console.log(score1);
// creating columns for the Genpardy Topics
categories.forEach(category => addTopic(category));


function addTopic(category) {

const column = document.createElement('div');
column.classList.add('topic-column');
genpardy.appendChild(column);


const topicListing = document.createElement('div');
topicListing.classList.add('topic-title');
topicListing.innerText = category.topic;
column.appendChild(topicListing)



// column.appendChild(card);

category.questions.forEach(question => {
    const card = document.createElement('div');
    card.classList.add('cluecard');
    card.innerText = question.difficulty;
    column.appendChild(card);


    card.dataset.question = question.question;
    card.dataset.answer = question.answer;
    card.dataset.difficulty = question.difficulty;

    card.addEventListener('click', flipCard);


card.setAttribute('data-question', question.question);
card.setAttribute('data-answer', question.answer);
card.setAttribute('data-difficulty', question.difficulty);


});
// card.addEventListener('click', flipCard);



function flipCard() {
    this.innerText = "";
    this.style.fontSize = "10px"
    this.style.lineHeight = "15px"
    const textDisplay = document.createElement('div');
    textDisplay.classList.add('card-text');
    textDisplay.innerText = this.getAttribute('data-question');
    const button1 = document.createElement('button');
   
     button1.classList.add('button1');

        button1.innerText = "Answer";
        this.append(textDisplay, button1);

}
}



    // const answerBox = document.createElement('answerBox');
    // answerBox.classList.add('answerInput');

    // const answerButton = document.createElement('answerButton');
    // answerButton.classList.add('answer-button')
    // answerButton.innerText = 'Answer!'

    // answerButton.addEventListener('click', () => {
    //     const userResponse = answerBox.ariaValueMax.toLowerCase();
    //     const correctAnswer = this.getAttribute('data-answer').toLowerCase();
       

    // if (userAnswer === correctAnswer){
    //     alert("You are CORRECT");
    //     updateScore(parseInt(this.getAttribute('data-difficulty')));


    // } else { 
    //     alert("You are INCORRECT");
    //     updateScore(-parseInt(this.getAttribute('data-difficulty')));
    
    
    // }
    //     scoreDisplay1.innerText = score;
    // }
    }

  




        // if (question.difficulty === 'easy'){
    //     card.innerText = 200;
    // }

    // if (question.difficulty === 'medium'){
    //     card.innerText = 300;
    // }

    // if (question.difficulty === 'hard'){
    //     card.innerText = 400;
    // }

    // if (question.difficulty === 'superhard'){
    //     card.innerText = 500;
    // }
    





