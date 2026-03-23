// Assessment test to evaluate German level (A1 / A2 / B1)

const ASSESSMENT = {
    questions: [
        // A1 level (questions 0-7)
        {
            level: "A1",
            question: "Si thuhet 'Mirëdita' në gjermanisht?",
            options: ["Guten Morgen", "Guten Tag", "Guten Abend", "Gute Nacht"],
            correct: 1
        },
        {
            level: "A1",
            question: "Plotëso: 'Ich ___ Maria.'",
            options: ["heiße", "bin", "habe", "komme"],
            correct: 0
        },
        {
            level: "A1",
            question: "Çfarë do të thotë 'Wasser'?",
            options: ["bukë", "qumësht", "ujë", "lëng"],
            correct: 2
        },
        {
            level: "A1",
            question: "Cili numër është 'sieben'?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            level: "A1",
            question: "Plotëso: 'Wie ___ Sie?'",
            options: ["heißen", "kommen", "gehen", "machen"],
            correct: 0
        },
        {
            level: "A1",
            question: "Çfarë ditë vjen pas 'Montag'?",
            options: ["Mittwoch", "Dienstag", "Freitag", "Sonntag"],
            correct: 1
        },
        {
            level: "A1",
            question: "'Die Frau' do të thotë:",
            options: ["vajza", "gruaja", "nëna", "motra"],
            correct: 1
        },
        {
            level: "A1",
            question: "Si thuhet 'Unë flas gjermanisht' në gjermanisht?",
            options: ["Ich spreche Deutsch", "Ich lerne Deutsch", "Ich höre Deutsch", "Ich lese Deutsch"],
            correct: 0
        },

        // A2 level (questions 8-15)
        {
            level: "A2",
            question: "Plotëso: 'Ich ___ gestern ins Kino gegangen.'",
            options: ["habe", "bin", "war", "hatte"],
            correct: 1
        },
        {
            level: "A2",
            question: "Cili është e kundërta e 'groß'?",
            options: ["schnell", "klein", "alt", "dünn"],
            correct: 1
        },
        {
            level: "A2",
            question: "'Ich muss zum Arzt gehen' do të thotë:",
            options: ["Dua të shkoj te mjeku", "Duhet të shkoj te mjeku", "Mund të shkoj te mjeku", "Po shkoj te mjeku"],
            correct: 1
        },
        {
            level: "A2",
            question: "Plotëso: 'Das Buch ___ auf dem Tisch.'",
            options: ["steht", "liegt", "sitzt", "hängt"],
            correct: 1
        },
        {
            level: "A2",
            question: "Çfarë do të thotë 'Gestern war ich müde'?",
            options: ["Sot jam i lodhur", "Dje isha i lodhur", "Nesër do jem i lodhur", "Gjithmonë jam i lodhur"],
            correct: 1
        },
        {
            level: "A2",
            question: "Cila fjali është e saktë?",
            options: ["Ich gehe in die Schule", "Ich gehe in der Schule", "Ich gehe auf die Schule", "Ich gehe bei die Schule"],
            correct: 0
        },
        {
            level: "A2",
            question: "'Können Sie mir helfen?' do të thotë:",
            options: ["A mund të më ndihmoni?", "A doni të më ndihmoni?", "A duhet të më ndihmoni?", "A do të më ndihmoni?"],
            correct: 0
        },
        {
            level: "A2",
            question: "Plotëso: 'Wenn es regnet, ___ ich zu Hause.'",
            options: ["bleibe", "gehe", "komme", "laufe"],
            correct: 0
        },

        // B1 level (questions 16-23)
        {
            level: "B1",
            question: "Plotëso: 'Er hat mir gesagt, ___ er morgen kommt.'",
            options: ["dass", "weil", "ob", "wenn"],
            correct: 0
        },
        {
            level: "B1",
            question: "'Ich hätte gerne einen Kaffee' shpreh:",
            options: ["Një urdhër", "Një dëshirë të sjellshme", "Një pyetje", "Një ankesë"],
            correct: 1
        },
        {
            level: "B1",
            question: "Cila fjali përdor Konjunktivin saktë?",
            options: ["Wenn ich reich bin, kaufe ich ein Haus", "Wenn ich reich wäre, würde ich ein Haus kaufen", "Wenn ich reich war, kaufte ich ein Haus", "Wenn ich reich sein, kaufe ich ein Haus"],
            correct: 1
        },
        {
            level: "B1",
            question: "Çfarë do të thotë 'trotzdem'?",
            options: ["për shkak", "megjithatë", "ndërkohë", "gjithashtu"],
            correct: 1
        },
        {
            level: "B1",
            question: "Plotëso: 'Das ist der Mann, ___ ich gestern getroffen habe.'",
            options: ["der", "den", "dem", "dessen"],
            correct: 1
        },
        {
            level: "B1",
            question: "'Nachdem ich gegessen hatte, ging ich spazieren' — çfarë ndodhi para?",
            options: ["Shëtitja", "Ngrënia", "Të dyja njëkohësisht", "Asnjëra"],
            correct: 1
        },
        {
            level: "B1",
            question: "Cila fjalë plotëson: 'Je mehr ich lerne, ___ besser verstehe ich.'",
            options: ["so", "desto", "als", "wie"],
            correct: 1
        },
        {
            level: "B1",
            question: "Çfarë do të thotë 'sich entschuldigen'?",
            options: ["të vendosësh", "të kërkosh falje", "të anohesh", "të shpjegosh"],
            correct: 1
        }
    ]
};
