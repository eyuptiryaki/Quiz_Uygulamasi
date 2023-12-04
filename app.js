const quizData=[
    {
        question: 'Türkiyenin resmi turnuvalarda en çok şampiyon olmuş futbol takımı hangisidir?' ,
        a:'Gaziantepspor',
        b:'Bursaspor',
        c:'Galatasaray',
        d:'Trabzonspor',
        e:'Barcelona',
        correct:'c',
    },

    {
    question: 'Türkiyenin şampiyonlar liginde en çok mücadele eden futbol takımı hangisidir?' ,
        a:'Galatasaray',
        b:'Bursaspor',
        c:'Fenevbahçe',
        d:'Trabzonspor',
        e:'Barcelona',
        correct:'a',
    },

    {
        question: 'Aşagıdaki futbol takımlarından hangisi 3 yıldızlıdır?' ,
            a:'Ankaragücü',
            b:'Altay',
            c:'Pendikspor',
            d:'Trabzonspor',
            e:'Fenerbahce',
            correct:'e',
        },


        {
            question: 'Türkiyenin en kötü yönetilen futbol takımı hangisidir?' ,
                a:'Çaykur Rizespor',
                b:'Besiktaş',
                c:'Galatasaray',
                d:'Bursaspor',
                e:'FBJK',
                correct:'e',
            },
]

const quiz = document.getElementById("quiz");
const answerElements=document.querySelectorAll(".answer");
const questionElements=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const e_text=document.getElementById("e_text");
const submit_btn=document.getElementById("submit");

let current_question=0;
let score=0;

loadQuiz()

function loadQuiz(){
    const current_question_data=quizData[current_question];

    unselectedanswers()
    
    questionElements.innerText=current_question_data.question;

    a_text.innerText=current_question_data.a;
    b_text.innerText=current_question_data.b;
    c_text.innerText=current_question_data.c;
    d_text.innerText=current_question_data.d;
    e_text.innerText=current_question_data.e;

}

function unselectedanswers(){
    answerElements.forEach(answerElement=>answerElement.checked=false);
}

function getSelected(){
    let answer;
    
    answerElements.forEach((answerElement) => {
        if (answerElement.checked){
        answer=answerElement.id;
    }

});
    return answer;

}


submit_btn.addEventListener("click",()=>{
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer===quizData[current_question].correct){
            score++;
        }
        current_question++;
        if(current_question<quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML=`
            <h2>Sınav Bitti</h2>
            <h3>Sınav Sonucu: ${score * 25}</h3>
            <button class="submit" onclick="location.reload()">Sınavi Yenile</button>
            `;
        }
    }

})