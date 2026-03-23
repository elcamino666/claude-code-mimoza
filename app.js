// Mimoza - German Learning App
let currentExercise = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

function loadExercise(type) {
    currentExercise = type;
    currentIndex = 0;
    score = 0;
    answered = false;
    currentQuestions = [...EXERCISES[type]];

    document.getElementById('exercise-menu').classList.add('hidden');
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('exercise-area').classList.remove('hidden');

    if (type === 'vocabulary') {
        document.getElementById('exercise-title').textContent = 'Fjalor';
        showVocabulary();
    } else if (type === 'multiplechoice') {
        document.getElementById('exercise-title').textContent = 'Zgjedh Përgjigjen';
        shuffleArray(currentQuestions);
        showMultipleChoice();
    } else if (type === 'fillin') {
        document.getElementById('exercise-title').textContent = 'Plotëso Fjalën';
        shuffleArray(currentQuestions);
        showFillIn();
    } else if (type === 'translation') {
        document.getElementById('exercise-title').textContent = 'Përkthe';
        shuffleArray(currentQuestions);
        showTranslation();
    }

    updateScore();
}

function goBack() {
    document.getElementById('exercise-area').classList.add('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('exercise-menu').classList.remove('hidden');
    document.getElementById('welcome').classList.remove('hidden');
}

function updateScore() {
    const display = document.getElementById('score-display');
    if (currentExercise === 'vocabulary') {
        display.textContent = (currentIndex + 1) + ' / ' + currentQuestions.length;
    } else {
        display.textContent = score + ' / ' + currentQuestions.length;
    }
}

// --- Vocabulary ---
function showVocabulary() {
    const content = document.getElementById('exercise-content');
    const item = currentQuestions[currentIndex];

    content.innerHTML =
        '<div class="vocab-card">' +
            '<div class="german">' + item.german + '</div>' +
            '<div class="pronunciation">🔊 ' + item.pronunciation + '</div>' +
            '<div class="albanian">' + item.albanian + '</div>' +
            '<div class="example">📝 ' + item.example + '</div>' +
        '</div>';

    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('exercise-feedback').classList.add('hidden');

    const nextBtn = document.getElementById('next-btn');
    if (currentIndex < currentQuestions.length - 1) {
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = 'Vazhdo →';
    } else {
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = '← Kthehu te Ushtrimet';
        nextBtn.onclick = goBack;
    }

    updateScore();
}

// --- Multiple Choice ---
function showMultipleChoice() {
    answered = false;
    const content = document.getElementById('exercise-content');
    const item = currentQuestions[currentIndex];

    let optionsHtml = '<div class="mc-options">';
    item.options.forEach(function(opt, i) {
        optionsHtml += '<button class="mc-option" data-index="' + i + '" onclick="selectOption(this, ' + i + ')">' + opt + '</button>';
    });
    optionsHtml += '</div>';

    content.innerHTML =
        '<div class="mc-question">' + item.question + '</div>' +
        optionsHtml;

    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('exercise-feedback').classList.add('hidden');
    document.getElementById('check-btn').onclick = checkMultipleChoice;

    updateScore();
}

function selectOption(btn, index) {
    if (answered) return;
    document.querySelectorAll('.mc-option').forEach(function(b) {
        b.classList.remove('selected');
    });
    btn.classList.add('selected');
}

function checkMultipleChoice() {
    if (answered) return;
    const selected = document.querySelector('.mc-option.selected');
    if (!selected) return;

    answered = true;
    const item = currentQuestions[currentIndex];
    const selectedIndex = parseInt(selected.dataset.index);
    const feedback = document.getElementById('exercise-feedback');

    document.querySelectorAll('.mc-option').forEach(function(btn) {
        const idx = parseInt(btn.dataset.index);
        if (idx === item.correct) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex) {
            btn.classList.add('wrong');
        }
        btn.style.pointerEvents = 'none';
    });

    if (selectedIndex === item.correct) {
        score++;
        feedback.className = 'correct';
        feedback.textContent = '✓ Saktë! Shumë mirë! 👏';
    } else {
        feedback.className = 'wrong';
        feedback.textContent = '✗ Përgjigja e saktë: ' + item.options[item.correct];
    }
    feedback.classList.remove('hidden');

    document.getElementById('check-btn').classList.add('hidden');
    showNextButton();
    updateScore();
}

// --- Fill in the blank ---
function showFillIn() {
    answered = false;
    const content = document.getElementById('exercise-content');
    const item = currentQuestions[currentIndex];

    const parts = item.sentence.split('___');
    content.innerHTML =
        '<div class="fillin-sentence">' +
            parts[0] +
            '<input type="text" class="fillin-input" id="fillin-answer" autocomplete="off" autocapitalize="off" placeholder="...">' +
            (parts[1] || '') +
        '</div>' +
        '<p style="color: #888; font-size: 0.9rem;">💡 Ndihmë: ' + item.hint + '</p>';

    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('exercise-feedback').classList.add('hidden');
    document.getElementById('check-btn').onclick = checkFillIn;

    document.getElementById('fillin-answer').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') checkFillIn();
    });

    updateScore();
}

function checkFillIn() {
    if (answered) return;
    const input = document.getElementById('fillin-answer');
    const userAnswer = input.value.trim();
    if (!userAnswer) return;

    answered = true;
    const item = currentQuestions[currentIndex];
    const feedback = document.getElementById('exercise-feedback');
    const isCorrect = userAnswer.toLowerCase() === item.answer.toLowerCase();

    input.disabled = true;
    if (isCorrect) {
        score++;
        input.classList.add('correct');
        feedback.className = 'correct';
        feedback.textContent = '✓ Saktë! Shumë mirë! 👏';
    } else {
        input.classList.add('wrong');
        feedback.className = 'wrong';
        feedback.textContent = '✗ Përgjigja e saktë: ' + item.answer;
    }
    feedback.classList.remove('hidden');

    document.getElementById('check-btn').classList.add('hidden');
    showNextButton();
    updateScore();
}

// --- Translation ---
function showTranslation() {
    answered = false;
    const content = document.getElementById('exercise-content');
    const item = currentQuestions[currentIndex];

    content.innerHTML =
        '<div class="translation-prompt">Përkthe në gjermanisht:</div>' +
        '<div style="font-size: 1.3rem; font-weight: 600; margin-bottom: 1rem; color: #d4739d;">"' + item.albanian + '"</div>' +
        '<textarea class="translation-input" id="translation-answer" placeholder="Shkruaj në gjermanisht..." rows="2"></textarea>';

    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('exercise-feedback').classList.add('hidden');
    document.getElementById('check-btn').onclick = checkTranslation;

    updateScore();
}

function checkTranslation() {
    if (answered) return;
    const input = document.getElementById('translation-answer');
    const userAnswer = input.value.trim();
    if (!userAnswer) return;

    answered = true;
    const item = currentQuestions[currentIndex];
    const feedback = document.getElementById('exercise-feedback');
    const isCorrect = item.acceptedAnswers.some(function(a) {
        return userAnswer.toLowerCase() === a.toLowerCase();
    });

    input.disabled = true;
    if (isCorrect) {
        score++;
        input.style.borderColor = '#4caf50';
        feedback.className = 'correct';
        feedback.textContent = '✓ Saktë! Shumë mirë! 👏';
    } else {
        input.style.borderColor = '#f44336';
        feedback.className = 'wrong';
        feedback.textContent = '✗ Përgjigja e saktë: ' + item.answer;
    }
    feedback.classList.remove('hidden');

    document.getElementById('check-btn').classList.add('hidden');
    showNextButton();
    updateScore();
}

// --- Shared ---
function showNextButton() {
    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hidden');
    if (currentIndex < currentQuestions.length - 1) {
        nextBtn.textContent = 'Vazhdo →';
        nextBtn.onclick = nextQuestion;
    } else {
        nextBtn.textContent = 'Shiko Rezultatin →';
        nextBtn.onclick = showResults;
    }
}

function nextQuestion() {
    currentIndex++;
    if (currentExercise === 'vocabulary') showVocabulary();
    else if (currentExercise === 'multiplechoice') showMultipleChoice();
    else if (currentExercise === 'fillin') showFillIn();
    else if (currentExercise === 'translation') showTranslation();
}

function showResults() {
    document.getElementById('exercise-area').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');

    const total = currentQuestions.length;
    const percent = Math.round((score / total) * 100);
    let message = '';
    if (percent === 100) message = 'Perfekt! Shkëlqyeshëm! 🌟';
    else if (percent >= 80) message = 'Shumë mirë! Vazhdo kështu! 💪';
    else if (percent >= 60) message = 'Mirë! Mund të bësh edhe më mirë! 😊';
    else if (percent >= 40) message = 'Jo keq! Provo përsëri për rezultat më të mirë. 📚';
    else message = 'Vazhdo të mësosh! Çdo hap ka rëndësi. 🌸';

    document.getElementById('results-content').innerHTML =
        '<div class="results-score">' + percent + '%</div>' +
        '<div class="results-text">' + score + ' nga ' + total + ' përgjigje të sakta</div>' +
        '<div class="results-text">' + message + '</div>';
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function checkAnswer() {
    // Delegated to specific check functions
}
