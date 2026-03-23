// Mimoza - German Learning App
let currentExercise = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let userAnswers = []; // Track all answers for review

function loadExercise(type) {
    currentExercise = type;
    currentIndex = 0;
    score = 0;
    answered = false;
    userAnswers = [];
    currentQuestions = [...EXERCISES[type]];

    hideAll();
    document.getElementById('exercise-area').classList.remove('hidden');

    if (type === 'vocabulary') {
        document.getElementById('exercise-title').textContent = 'Fjalor';
        showVocabulary();
    } else if (type === 'multiplechoice' || type === 'b1_grammar') {
        document.getElementById('exercise-title').textContent = type === 'b1_grammar' ? 'B1 Gramatikë' : 'Zgjedh Përgjigjen';
        shuffleArray(currentQuestions);
        showMultipleChoice();
    } else if (type === 'fillin' || type === 'b1_fillin') {
        document.getElementById('exercise-title').textContent = type === 'b1_fillin' ? 'B1 Plotëso Fjalën' : 'Plotëso Fjalën';
        shuffleArray(currentQuestions);
        showFillIn();
    } else if (type === 'translation' || type === 'b1_translation') {
        document.getElementById('exercise-title').textContent = type === 'b1_translation' ? 'B1 Përkthe' : 'Përkthe';
        shuffleArray(currentQuestions);
        showTranslation();
    }

    updateScore();
}

function hideAll() {
    document.getElementById('exercise-menu').classList.add('hidden');
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('exercise-area').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
}

function goBack() {
    hideAll();
    document.getElementById('exercise-menu').classList.remove('hidden');
    document.getElementById('welcome').classList.remove('hidden');
}

function updateScore() {
    var display = document.getElementById('score-display');
    if (currentExercise === 'vocabulary') {
        display.textContent = (currentIndex + 1) + ' / ' + currentQuestions.length;
    } else {
        display.textContent = score + ' / ' + currentQuestions.length;
    }
}

// --- Vocabulary ---
function showVocabulary() {
    var content = document.getElementById('exercise-content');
    var item = currentQuestions[currentIndex];

    content.innerHTML =
        '<div class="vocab-card">' +
            '<div class="german">' + item.german + '</div>' +
            '<div class="pronunciation">🔊 ' + item.pronunciation + '</div>' +
            '<div class="albanian">' + item.albanian + '</div>' +
            '<div class="example">📝 ' + item.example + '</div>' +
        '</div>';

    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('exercise-feedback').classList.add('hidden');

    var nextBtn = document.getElementById('next-btn');
    if (currentIndex < currentQuestions.length - 1) {
        nextBtn.classList.remove('hidden');
        nextBtn.textContent = 'Vazhdo →';
        nextBtn.onclick = nextQuestion;
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
    var content = document.getElementById('exercise-content');
    var item = currentQuestions[currentIndex];

    var optionsHtml = '<div class="mc-options">';
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
    var selected = document.querySelector('.mc-option.selected');
    if (!selected) return;

    answered = true;
    var item = currentQuestions[currentIndex];
    var selectedIndex = parseInt(selected.dataset.index);
    var feedback = document.getElementById('exercise-feedback');
    var isCorrect = selectedIndex === item.correct;

    document.querySelectorAll('.mc-option').forEach(function(btn) {
        var idx = parseInt(btn.dataset.index);
        if (idx === item.correct) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex) {
            btn.classList.add('wrong');
        }
        btn.style.pointerEvents = 'none';
    });

    if (isCorrect) {
        score++;
        feedback.className = 'correct';
        feedback.textContent = '✓ Saktë! Shumë mirë! 👏';
    } else {
        feedback.className = 'wrong';
        feedback.textContent = '✗ Përgjigja e saktë: ' + item.options[item.correct];
    }
    feedback.classList.remove('hidden');

    // Save answer
    userAnswers.push({
        question: item.question,
        userAnswer: item.options[selectedIndex],
        correctAnswer: item.options[item.correct],
        isCorrect: isCorrect
    });

    document.getElementById('check-btn').classList.add('hidden');
    showNextButton();
    updateScore();
}

// --- Fill in the blank ---
function showFillIn() {
    answered = false;
    var content = document.getElementById('exercise-content');
    var item = currentQuestions[currentIndex];

    var parts = item.sentence.split('___');
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
    var input = document.getElementById('fillin-answer');
    var userAnswer = input.value.trim();
    if (!userAnswer) return;

    answered = true;
    var item = currentQuestions[currentIndex];
    var feedback = document.getElementById('exercise-feedback');
    var isCorrect = userAnswer.toLowerCase() === item.answer.toLowerCase();

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

    // Save answer
    userAnswers.push({
        question: item.sentence,
        userAnswer: userAnswer,
        correctAnswer: item.answer,
        isCorrect: isCorrect
    });

    document.getElementById('check-btn').classList.add('hidden');
    showNextButton();
    updateScore();
}

// --- Translation ---
function showTranslation() {
    answered = false;
    var content = document.getElementById('exercise-content');
    var item = currentQuestions[currentIndex];

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
    var input = document.getElementById('translation-answer');
    var userAnswer = input.value.trim();
    if (!userAnswer) return;

    answered = true;
    var item = currentQuestions[currentIndex];
    var feedback = document.getElementById('exercise-feedback');
    var isCorrect = item.acceptedAnswers.some(function(a) {
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

    // Save answer
    userAnswers.push({
        question: item.albanian,
        userAnswer: userAnswer,
        correctAnswer: item.answer,
        isCorrect: isCorrect
    });

    document.getElementById('check-btn').classList.add('hidden');
    showNextButton();
    updateScore();
}

// --- Assessment Test ---
function startAssessment() {
    currentExercise = 'assessment';
    currentIndex = 0;
    score = 0;
    answered = false;
    userAnswers = [];
    currentQuestions = [...ASSESSMENT.questions];

    hideAll();
    document.getElementById('exercise-area').classList.remove('hidden');
    document.getElementById('exercise-title').textContent = 'Test Vlerësimi';

    showAssessmentQuestion();
}

function showAssessmentQuestion() {
    answered = false;
    var content = document.getElementById('exercise-content');
    var item = currentQuestions[currentIndex];

    var levelBadge = '<span class="level-badge level-' + item.level.toLowerCase() + '">' + item.level + '</span>';

    var optionsHtml = '<div class="mc-options">';
    item.options.forEach(function(opt, i) {
        optionsHtml += '<button class="mc-option" data-index="' + i + '" onclick="selectOption(this, ' + i + ')">' + opt + '</button>';
    });
    optionsHtml += '</div>';

    content.innerHTML =
        levelBadge +
        '<div class="mc-question">' + item.question + '</div>' +
        optionsHtml;

    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('exercise-feedback').classList.add('hidden');
    document.getElementById('check-btn').onclick = checkAssessment;

    document.getElementById('score-display').textContent = (currentIndex + 1) + ' / ' + currentQuestions.length;
}

function checkAssessment() {
    if (answered) return;
    var selected = document.querySelector('.mc-option.selected');
    if (!selected) return;

    answered = true;
    var item = currentQuestions[currentIndex];
    var selectedIndex = parseInt(selected.dataset.index);
    var feedback = document.getElementById('exercise-feedback');
    var isCorrect = selectedIndex === item.correct;

    document.querySelectorAll('.mc-option').forEach(function(btn) {
        var idx = parseInt(btn.dataset.index);
        if (idx === item.correct) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex) {
            btn.classList.add('wrong');
        }
        btn.style.pointerEvents = 'none';
    });

    if (isCorrect) {
        score++;
        feedback.className = 'correct';
        feedback.textContent = '✓ Saktë!';
    } else {
        feedback.className = 'wrong';
        feedback.textContent = '✗ Përgjigja e saktë: ' + item.options[item.correct];
    }
    feedback.classList.remove('hidden');

    userAnswers.push({
        level: item.level,
        question: item.question,
        userAnswer: item.options[selectedIndex],
        correctAnswer: item.options[item.correct],
        isCorrect: isCorrect
    });

    document.getElementById('check-btn').classList.add('hidden');

    var nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hidden');
    if (currentIndex < currentQuestions.length - 1) {
        nextBtn.textContent = 'Vazhdo →';
        nextBtn.onclick = function() {
            currentIndex++;
            showAssessmentQuestion();
        };
    } else {
        nextBtn.textContent = 'Shiko Rezultatin →';
        nextBtn.onclick = showAssessmentResults;
    }
}

function showAssessmentResults() {
    hideAll();
    document.getElementById('results').classList.remove('hidden');

    // Calculate per-level scores
    var levels = { A1: { correct: 0, total: 0 }, A2: { correct: 0, total: 0 }, B1: { correct: 0, total: 0 } };
    userAnswers.forEach(function(a) {
        levels[a.level].total++;
        if (a.isCorrect) levels[a.level].correct++;
    });

    var a1pct = Math.round((levels.A1.correct / levels.A1.total) * 100);
    var a2pct = Math.round((levels.A2.correct / levels.A2.total) * 100);
    var b1pct = Math.round((levels.B1.correct / levels.B1.total) * 100);

    // Determine level
    var determinedLevel = 'A0';
    if (a1pct >= 60) determinedLevel = 'A1';
    if (a1pct >= 60 && a2pct >= 60) determinedLevel = 'A2';
    if (a1pct >= 60 && a2pct >= 60 && b1pct >= 60) determinedLevel = 'B1';

    var levelMessages = {
        'A0': 'Fillestar — do të fillojmë nga baza! Çdo udhëtim fillon me hapin e parë. 🌱',
        'A1': 'Niveli A1 — ke bazat! Tani punojmë për A2. 📗',
        'A2': 'Niveli A2 — shumë mirë! Je në rrugë të mirë drejt B1. 📘',
        'B1': 'Niveli B1 — shkëlqyeshëm! Ke arritur objektivin! 🏆'
    };

    document.getElementById('results-content').innerHTML =
        '<div class="results-score">' + determinedLevel + '</div>' +
        '<div class="results-text">' + levelMessages[determinedLevel] + '</div>' +
        '<div class="level-bars">' +
            '<div class="level-bar"><span>A1</span><div class="bar"><div class="bar-fill" style="width:' + a1pct + '%"></div></div><span>' + a1pct + '%</span></div>' +
            '<div class="level-bar"><span>A2</span><div class="bar"><div class="bar-fill" style="width:' + a2pct + '%"></div></div><span>' + a2pct + '%</span></div>' +
            '<div class="level-bar"><span>B1</span><div class="bar"><div class="bar-fill" style="width:' + b1pct + '%"></div></div><span>' + b1pct + '%</span></div>' +
        '</div>' +
        '<button class="share-btn" onclick="shareResults()">📤 Dërgo rezultatin te Mimoza</button>';

    // Save to history
    saveToHistory({
        type: 'assessment',
        date: new Date().toISOString(),
        level: determinedLevel,
        scores: { A1: a1pct, A2: a2pct, B1: b1pct },
        answers: userAnswers
    });
}

// --- Shared ---
function showNextButton() {
    var nextBtn = document.getElementById('next-btn');
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
    hideAll();
    document.getElementById('results').classList.remove('hidden');

    var total = currentQuestions.length;
    var percent = Math.round((score / total) * 100);
    var message = '';
    if (percent === 100) message = 'Perfekt! Shkëlqyeshëm! 🌟';
    else if (percent >= 80) message = 'Shumë mirë! Vazhdo kështu! 💪';
    else if (percent >= 60) message = 'Mirë! Mund të bësh edhe më mirë! 😊';
    else if (percent >= 40) message = 'Jo keq! Provo përsëri për rezultat më të mirë. 📚';
    else message = 'Vazhdo të mësosh! Çdo hap ka rëndësi. 🌸';

    var typeNames = {
        multiplechoice: 'Zgjedh Përgjigjen',
        fillin: 'Plotëso Fjalën',
        translation: 'Përkthe'
    };

    document.getElementById('results-content').innerHTML =
        '<div class="results-score">' + percent + '%</div>' +
        '<div class="results-text">' + score + ' nga ' + total + ' përgjigje të sakta</div>' +
        '<div class="results-text">' + message + '</div>' +
        '<button class="share-btn" onclick="shareResults()">📤 Dërgo rezultatin te Mimoza</button>';

    // Save to history
    saveToHistory({
        type: currentExercise,
        typeName: typeNames[currentExercise] || currentExercise,
        date: new Date().toISOString(),
        score: score,
        total: total,
        percent: percent,
        answers: userAnswers
    });
}

// --- History & Sharing ---
function saveToHistory(result) {
    var history = JSON.parse(localStorage.getItem('mimoza_history') || '[]');
    history.unshift(result);
    if (history.length > 50) history = history.slice(0, 50);
    localStorage.setItem('mimoza_history', JSON.stringify(history));
}

function showHistory() {
    hideAll();
    document.getElementById('history-section').classList.remove('hidden');

    var history = JSON.parse(localStorage.getItem('mimoza_history') || '[]');
    var content = document.getElementById('history-content');

    if (history.length === 0) {
        content.innerHTML = '<p style="text-align:center; color:#888; padding:2rem 0;">Nuk ke bërë asnjë ushtrim ende.</p>';
        return;
    }

    var html = '';
    history.forEach(function(item, idx) {
        var date = new Date(item.date);
        var dateStr = date.toLocaleDateString('sq-AL') + ' ' + date.toLocaleTimeString('sq-AL', { hour: '2-digit', minute: '2-digit' });

        if (item.type === 'assessment') {
            html += '<div class="history-item">' +
                '<div class="history-header">' +
                    '<strong>🎯 Test Vlerësimi</strong>' +
                    '<span class="history-date">' + dateStr + '</span>' +
                '</div>' +
                '<div>Niveli: <strong>' + item.level + '</strong> — A1: ' + item.scores.A1 + '%, A2: ' + item.scores.A2 + '%, B1: ' + item.scores.B1 + '%</div>' +
                '<button class="share-btn small" onclick="shareHistoryItem(' + idx + ')">📤 Dërgo te Mimoza</button>' +
            '</div>';
        } else {
            html += '<div class="history-item">' +
                '<div class="history-header">' +
                    '<strong>' + (item.typeName || item.type) + '</strong>' +
                    '<span class="history-date">' + dateStr + '</span>' +
                '</div>' +
                '<div>' + item.score + '/' + item.total + ' (' + item.percent + '%)</div>' +
                '<button class="share-btn small" onclick="shareHistoryItem(' + idx + ')">📤 Dërgo te Mimoza</button>' +
            '</div>';
        }
    });

    content.innerHTML = html;
}

function shareResults() {
    var history = JSON.parse(localStorage.getItem('mimoza_history') || '[]');
    if (history.length > 0) {
        shareHistoryItem(0);
    }
}

function shareHistoryItem(idx) {
    var history = JSON.parse(localStorage.getItem('mimoza_history') || '[]');
    var item = history[idx];
    if (!item) return;

    var text = '📊 Mimoza — Rezultati\n';
    var date = new Date(item.date);
    text += '📅 ' + date.toLocaleDateString('sq-AL') + '\n\n';

    if (item.type === 'assessment') {
        text += '🎯 Test Vlerësimi\n';
        text += 'Niveli: ' + item.level + '\n';
        text += 'A1: ' + item.scores.A1 + '% | A2: ' + item.scores.A2 + '% | B1: ' + item.scores.B1 + '%\n\n';
    } else {
        text += '📝 ' + (item.typeName || item.type) + '\n';
        text += 'Rezultati: ' + item.score + '/' + item.total + ' (' + item.percent + '%)\n\n';
    }

    // Detail answers
    if (item.answers && item.answers.length > 0) {
        text += 'Detaje:\n';
        item.answers.forEach(function(a, i) {
            var mark = a.isCorrect ? '✓' : '✗';
            text += mark + ' ' + a.question + '\n';
            if (!a.isCorrect) {
                text += '  Përgjigja jote: ' + a.userAnswer + '\n';
                text += '  E saktë: ' + a.correctAnswer + '\n';
            }
        });
    }

    // Try native share, fallback to clipboard
    if (navigator.share) {
        navigator.share({ text: text }).catch(function() {
            copyToClipboard(text);
        });
    } else {
        copyToClipboard(text);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showToast('📋 U kopjua! Dërgo tekstin te Mimoza në Telegram.');
    }).catch(function() {
        // Fallback: show in a prompt
        prompt('Kopjo këtë tekst dhe dërgo te Mimoza:', text);
    });
}

function showToast(message) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function() { toast.classList.add('show'); }, 10);
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
}

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function checkAnswer() {
    // Delegated to specific check functions
}

// --- Settings ---
function openSettings() {
    document.getElementById('settings-modal').classList.remove('hidden');
    var currentSize = parseInt(localStorage.getItem('mimoza_fontsize') || '22');
    document.getElementById('font-size-display').textContent = currentSize;
}

function closeSettings() {
    document.getElementById('settings-modal').classList.add('hidden');
}

function changeFontSize(delta) {
    var currentSize = parseInt(localStorage.getItem('mimoza_fontsize') || '22');
    var newSize = Math.max(16, Math.min(36, currentSize + delta));
    localStorage.setItem('mimoza_fontsize', newSize);
    document.getElementById('font-size-display').textContent = newSize;
    document.body.style.fontSize = newSize + 'px';
    document.getElementById('font-preview').style.fontSize = newSize + 'px';
}

// Apply saved font size on load
(function() {
    var savedSize = localStorage.getItem('mimoza_fontsize');
    if (savedSize) {
        document.body.style.fontSize = savedSize + 'px';
    }
})();

function refreshApp() {
    // Clear service worker cache and reload
    if ('caches' in window) {
        caches.keys().then(function(names) {
            names.forEach(function(name) { caches.delete(name); });
        }).then(function() {
            window.location.reload(true);
        });
    } else {
        window.location.reload(true);
    }
}
