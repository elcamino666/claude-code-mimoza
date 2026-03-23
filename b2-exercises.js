// B2 Level Exercises — Intensive preparation for B2 exam
// Topics: Konjunktiv I (indirekte Rede), Partizip I/II als Adjektiv,
//         Nominalisierung, Passiv mit Modalverben, Doppelkonnektoren,
//         Futur II, Subjektive Modalverben, Erweiterte Relativsätze

EXERCISES.b2_grammar = [
    // Konjunktiv I (indirekte Rede)
    {
        question: "Plotëso: 'Er sagte, er ___ keine Zeit.' (indirekte Rede)",
        options: ["hat", "habe", "hätte", "hatte"],
        correct: 1
    },
    {
        question: "Plotëso: 'Sie behauptete, sie ___ das nicht gewusst.'",
        options: ["hat", "habe", "hätte", "hatte"],
        correct: 1
    },
    {
        question: "Plotëso: 'Der Arzt sagte, ich ___ mehr Wasser trinken.'",
        options: ["soll", "solle", "sollte", "muss"],
        correct: 1
    },
    {
        question: "Cila fjali përdor Konjunktiv I saktë?",
        options: [
            "Er sagte, er ist müde.",
            "Er sagte, er sei müde.",
            "Er sagte, er wäre müde.",
            "Er sagte, er war müde."
        ],
        correct: 1
    },
    {
        question: "Plotëso: 'Die Zeitung berichtete, es ___ einen Unfall gegeben.'",
        options: ["hat", "habe", "hätte", "hatte"],
        correct: 1
    },

    // Partizip I & II als Adjektiv
    {
        question: "Plotëso: 'Das ___ Kind schläft ruhig.' (schlafen)",
        options: ["schlafende", "geschlafene", "schlafene", "geschlafende"],
        correct: 0
    },
    {
        question: "Plotëso: 'Die ___ Tür war offen.' (reparieren)",
        options: ["reparierende", "reparierte", "reparierene", "reparierente"],
        correct: 1
    },
    {
        question: "Plotëso: 'Der ___ Zug fährt nach Berlin.' (ankommen)",
        options: ["ankommene", "angekommene", "ankommende", "angekommende"],
        correct: 2
    },
    {
        question: "Cila fjali është e saktë?",
        options: [
            "Die gut kochende Suppe schmeckt lecker.",
            "Die gut gekochte Suppe schmeckt lecker.",
            "Die gut kochene Suppe schmeckt lecker.",
            "Die gut gekochende Suppe schmeckt lecker."
        ],
        correct: 1
    },

    // Nominalisierung
    {
        question: "Cila është nominalizimi i 'abfahren'?",
        options: ["die Abfahrung", "die Abfahrt", "das Abfahren", "der Abfahr"],
        correct: 1
    },
    {
        question: "Plotëso: 'Die ___ der Aufgabe dauerte lange.' (bearbeiten)",
        options: ["Bearbeiten", "Bearbeiterei", "Bearbeitung", "Bearbeitnis"],
        correct: 2
    },
    {
        question: "Plotëso: '___ ist gesund.' (schwimmen → nominalizim)",
        options: ["Schwimmen", "Schwimmung", "Schwimmnis", "Schwimmerei"],
        correct: 0
    },

    // Passiv mit Modalverben
    {
        question: "Plotëso: 'Das Auto ___ repariert werden.'",
        options: ["kann", "muss", "soll", "Të gjitha janë të sakta"],
        correct: 3
    },
    {
        question: "Plotëso: 'Die Hausaufgabe ___ bis morgen gemacht werden.'",
        options: ["muss", "wird", "ist", "hat"],
        correct: 0
    },
    {
        question: "Çfarë do të thotë: 'Der Text konnte nicht gelesen werden.'?",
        options: [
            "Teksti nuk u lexua.",
            "Teksti nuk mund të lexohej.",
            "Teksti nuk do të lexohet.",
            "Teksti nuk po lexohet."
        ],
        correct: 1
    },

    // Doppelkonnektoren
    {
        question: "Plotëso: 'Er spricht ___ Deutsch ___ Englisch.'",
        options: [
            "sowohl...als auch",
            "weder...noch",
            "entweder...oder",
            "nicht nur...sondern auch"
        ],
        correct: 0
    },
    {
        question: "Plotëso: 'Sie isst ___ Fleisch ___ Fisch.' (ajo nuk ha asnjërën)",
        options: [
            "sowohl...als auch",
            "weder...noch",
            "entweder...oder",
            "nicht nur...sondern auch"
        ],
        correct: 1
    },
    {
        question: "Plotëso: '___ regnet es, ___ scheint die Sonne.' (ose njëra ose tjetra)",
        options: [
            "Sowohl...als auch",
            "Weder...noch",
            "Entweder...oder",
            "Nicht nur...sondern auch"
        ],
        correct: 2
    },
    {
        question: "Plotëso: 'Er ist ___ intelligent, ___ auch fleißig.'",
        options: [
            "sowohl...als",
            "weder...noch",
            "entweder...oder",
            "nicht nur...sondern"
        ],
        correct: 3
    },

    // Futur II
    {
        question: "Plotëso: 'Bis morgen ___ ich das Buch gelesen haben.'",
        options: ["werde", "würde", "habe", "bin"],
        correct: 0
    },
    {
        question: "Çfarë shpreh Futur II?",
        options: [
            "Diçka që ndodh tani",
            "Diçka që do të përfundojë në të ardhmen",
            "Diçka që ndodhi në të kaluarën",
            "Një dëshirë"
        ],
        correct: 1
    },
    {
        question: "Plotëso: 'Er ___ wohl schon nach Hause gegangen sein.' (supozim)",
        options: ["wird", "hat", "ist", "würde"],
        correct: 0
    },

    // Subjektive Modalverben
    {
        question: "'Er soll reich sein.' — çfarë do të thotë kjo?",
        options: [
            "Ai duhet të jetë i pasur.",
            "Thuhet se ai është i pasur.",
            "Ai do të jetë i pasur.",
            "Ai ishte i pasur."
        ],
        correct: 1
    },
    {
        question: "'Sie will Ärztin gewesen sein.' — çfarë do të thotë kjo?",
        options: [
            "Ajo do të jetë mjeke.",
            "Ajo dëshiron të jetë mjeke.",
            "Ajo pretendon se ka qenë mjeke.",
            "Ajo ishte mjeke."
        ],
        correct: 2
    },
    {
        question: "'Er muss sehr müde sein.' — çfarë shpreh kjo?",
        options: [
            "Ai duhet të flejë.",
            "Ai me siguri është shumë i lodhur.",
            "Ai ishte i lodhur.",
            "Ai do të jetë i lodhur."
        ],
        correct: 1
    },

    // Erweiterte Relativsätze
    {
        question: "Plotëso: 'Die Stadt, ___ ich geboren bin, ist klein.'",
        options: ["die", "wo", "in der", "Të dyja: wo dhe in der"],
        correct: 3
    },
    {
        question: "Plotëso: 'Das ist etwas, ___ ich mich freue.'",
        options: ["worauf", "auf das", "wofür", "Të dyja: worauf dhe auf das"],
        correct: 3
    },
    {
        question: "Plotëso: 'Alles, ___ er gesagt hat, war falsch.'",
        options: ["das", "was", "welches", "dies"],
        correct: 1
    }
];

EXERCISES.b2_fillin = [
    // Konjunktiv I
    {
        sentence: "Er sagte, er ___ krank. (sein, Konjunktiv I)",
        answer: "sei",
        hint: "Konjunktiv I i 'sein' = sei"
    },
    {
        sentence: "Sie behauptete, sie ___ das Buch gelesen. (haben, Konj. I)",
        answer: "habe",
        hint: "Konjunktiv I i 'haben' = habe"
    },
    {
        sentence: "Der Lehrer meinte, die Schüler ___ mehr üben. (sollen, Konj. I)",
        answer: "sollten",
        hint: "Konjunktiv I i 'sollen' (shumës) = sollten"
    },

    // Partizip als Adjektiv
    {
        sentence: "Das ___ Mädchen lachte laut. (tanzen → Partizip I)",
        answer: "tanzende",
        hint: "Partizip I = folja + d + mbaresa (tanzend + e)"
    },
    {
        sentence: "Die ___ Blumen duften schön. (frisch pflücken → Partizip II)",
        answer: "frisch gepflückten",
        hint: "Partizip II = ge + folja + t (gepflückt + en)"
    },
    {
        sentence: "Der ___ Brief lag auf dem Tisch. (schreiben → Partizip II)",
        answer: "geschriebene",
        hint: "Partizip II i 'schreiben' = geschrieben + e"
    },

    // Nominalisierung
    {
        sentence: "Die ___ des Problems war schwierig. (lösen → emër)",
        answer: "Lösung",
        hint: "lösen → die Lösung (zgjidhja)"
    },
    {
        sentence: "Die ___ des neuen Mitarbeiters findet morgen statt. (einführen → emër)",
        answer: "Einführung",
        hint: "einführen → die Einführung (prezantimi)"
    },

    // Passiv mit Modalverben
    {
        sentence: "Die Rechnung ___ sofort bezahlt werden. (duhet)",
        answer: "muss",
        hint: "muss + Partizip II + werden"
    },
    {
        sentence: "Das Fenster ___ nicht geöffnet werden. (nuk mund)",
        answer: "kann",
        hint: "kann nicht + Partizip II + werden"
    },

    // Doppelkonnektoren
    {
        sentence: "Er spricht nicht ___ Deutsch, sondern auch Französisch.",
        answer: "nur",
        hint: "nicht nur... sondern auch (jo vetëm... por edhe)"
    },
    {
        sentence: "Sie trinkt ___ Kaffee noch Tee. (as... as)",
        answer: "weder",
        hint: "weder... noch (as... as)"
    },
    {
        sentence: "___ du kommst mit, oder du bleibst zu Hause.",
        answer: "Entweder",
        hint: "Entweder... oder (ose... ose)"
    },

    // Futur II
    {
        sentence: "Bis nächste Woche ___ ich die Prüfung bestanden haben.",
        answer: "werde",
        hint: "Futur II = werden + Partizip II + haben/sein"
    },

    // Subjektive Modalverben
    {
        sentence: "Er ___ schon abgefahren sein. (me siguri - supozim i fortë)",
        answer: "muss",
        hint: "muss + Infinitiv Perfekt = supozim i fortë"
    },
    {
        sentence: "Sie ___ die Wahrheit gesagt haben. (thuhet se)",
        answer: "soll",
        hint: "soll = thuhet se, sipas të tjerëve"
    },

    // Relativsätze mit wo/wohin
    {
        sentence: "Das ist die Stadt, ___ ich aufgewachsen bin.",
        answer: "wo",
        hint: "wo = ku (për vende)"
    },
    {
        sentence: "Das Land, ___ wir reisen wollen, ist weit weg.",
        answer: "wohin",
        hint: "wohin = ku (drejtim, me lëvizje)"
    }
];

EXERCISES.b2_translation = [
    {
        albanian: "Ai tha se nuk ka kohë.",
        answer: "Er sagte, er habe keine Zeit.",
        acceptedAnswers: [
            "Er sagte, er habe keine Zeit.",
            "Er sagte, er habe keine Zeit",
            "Er hat gesagt, er habe keine Zeit.",
            "Er hat gesagt, er habe keine Zeit"
        ]
    },
    {
        albanian: "Fëmija që po qan dëshiron akullore.",
        answer: "Das weinende Kind möchte ein Eis.",
        acceptedAnswers: [
            "Das weinende Kind möchte ein Eis.",
            "Das weinende Kind möchte ein Eis",
            "Das weinende Kind will ein Eis.",
            "Das weinende Kind will ein Eis"
        ]
    },
    {
        albanian: "Detyra duhet të përfundohet deri nesër.",
        answer: "Die Aufgabe muss bis morgen erledigt werden.",
        acceptedAnswers: [
            "Die Aufgabe muss bis morgen erledigt werden.",
            "Die Aufgabe muss bis morgen erledigt werden",
            "Die Aufgabe muss bis morgen gemacht werden.",
            "Die Aufgabe muss bis morgen gemacht werden"
        ]
    },
    {
        albanian: "Ai flet jo vetëm gjermanisht, por edhe frëngjisht.",
        answer: "Er spricht nicht nur Deutsch, sondern auch Französisch.",
        acceptedAnswers: [
            "Er spricht nicht nur Deutsch, sondern auch Französisch.",
            "Er spricht nicht nur Deutsch, sondern auch Französisch",
            "Er spricht nicht nur Deutsch sondern auch Französisch."
        ]
    },
    {
        albanian: "Ajo nuk pi as kafe as çaj.",
        answer: "Sie trinkt weder Kaffee noch Tee.",
        acceptedAnswers: [
            "Sie trinkt weder Kaffee noch Tee.",
            "Sie trinkt weder Kaffee noch Tee"
        ]
    },
    {
        albanian: "Deri javën tjetër do ta kem përfunduar provimin.",
        answer: "Bis nächste Woche werde ich die Prüfung bestanden haben.",
        acceptedAnswers: [
            "Bis nächste Woche werde ich die Prüfung bestanden haben.",
            "Bis nächste Woche werde ich die Prüfung bestanden haben",
            "Nächste Woche werde ich die Prüfung bestanden haben.",
            "Nächste Woche werde ich die Prüfung bestanden haben"
        ]
    },
    {
        albanian: "Thuhet se ai është shumë i pasur.",
        answer: "Er soll sehr reich sein.",
        acceptedAnswers: [
            "Er soll sehr reich sein.",
            "Er soll sehr reich sein"
        ]
    },
    {
        albanian: "Kjo është qyteti ku kam lindur.",
        answer: "Das ist die Stadt, wo ich geboren bin.",
        acceptedAnswers: [
            "Das ist die Stadt, wo ich geboren bin.",
            "Das ist die Stadt, wo ich geboren bin",
            "Das ist die Stadt, in der ich geboren bin.",
            "Das ist die Stadt, in der ich geboren bin"
        ]
    },
    {
        albanian: "Zgjidhja e problemit ishte e vështirë.",
        answer: "Die Lösung des Problems war schwierig.",
        acceptedAnswers: [
            "Die Lösung des Problems war schwierig.",
            "Die Lösung des Problems war schwierig"
        ]
    },
    {
        albanian: "Dritarja nuk mund të hapej.",
        answer: "Das Fenster konnte nicht geöffnet werden.",
        acceptedAnswers: [
            "Das Fenster konnte nicht geöffnet werden.",
            "Das Fenster konnte nicht geöffnet werden",
            "Das Fenster kann nicht geöffnet werden.",
            "Das Fenster kann nicht geöffnet werden"
        ]
    }
];
