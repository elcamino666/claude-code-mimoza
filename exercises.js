// Exercise data for Mimoza German Learning
// Organized by type and level (A1 → A2 → B1)

const EXERCISES = {
    vocabulary: [
        // A1 - Greetings & Basics
        {
            german: "Guten Morgen",
            pronunciation: "Guten Morgen (Guten Morgën)",
            albanian: "Mirëmëngjes",
            example: "Guten Morgen, wie geht es Ihnen? — Mirëmëngjes, si jeni?"
        },
        {
            german: "Guten Tag",
            pronunciation: "Guten Tag (Guten Tag)",
            albanian: "Mirëdita",
            example: "Guten Tag, mein Name ist Leti. — Mirëdita, emri im është Leti."
        },
        {
            german: "Guten Abend",
            pronunciation: "Guten Abend (Guten Abënd)",
            albanian: "Mirëmbrëma",
            example: "Guten Abend! Wie war Ihr Tag? — Mirëmbrëma! Si ishte dita juaj?"
        },
        {
            german: "Auf Wiedersehen",
            pronunciation: "Auf Wiedersehen (Auf Vidërzeen)",
            albanian: "Mirupafshim",
            example: "Auf Wiedersehen, bis morgen! — Mirupafshim, deri nesër!"
        },
        {
            german: "Danke",
            pronunciation: "Danke (Dankë)",
            albanian: "Faleminderit",
            example: "Danke schön! — Faleminderit shumë!"
        },
        {
            german: "Bitte",
            pronunciation: "Bitte (Bitë)",
            albanian: "Ju lutem / S'ka përse",
            example: "Bitte schön! — Ju lutem! / S'ka përse!"
        },
        {
            german: "Ja",
            pronunciation: "Ja (Ja)",
            albanian: "Po",
            example: "Ja, das ist richtig. — Po, kjo është e saktë."
        },
        {
            german: "Nein",
            pronunciation: "Nein (Najn)",
            albanian: "Jo",
            example: "Nein, das stimmt nicht. — Jo, kjo nuk është e saktë."
        },
        // A1 - Numbers
        {
            german: "Eins, Zwei, Drei",
            pronunciation: "Ajns, Cvaj, Draj",
            albanian: "Një, Dy, Tre",
            example: "Ich habe drei Kinder. — Unë kam tre fëmijë."
        },
        {
            german: "Vier, Fünf, Sechs",
            pronunciation: "Fir, Fynf, Zeks",
            albanian: "Katër, Pesë, Gjashtë",
            example: "Es ist fünf Uhr. — Është ora pesë."
        },
        // A1 - Daily life
        {
            german: "das Wasser",
            pronunciation: "das Vaser",
            albanian: "uji",
            example: "Kann ich ein Glas Wasser haben? — A mund të kem një gotë ujë?"
        },
        {
            german: "das Brot",
            pronunciation: "das Brot",
            albanian: "buka",
            example: "Ich möchte Brot kaufen. — Dua të blej bukë."
        },
        {
            german: "der Arzt",
            pronunciation: "der Arct",
            albanian: "mjeku",
            example: "Ich muss zum Arzt gehen. — Duhet të shkoj te mjeku."
        },
        {
            german: "die Apotheke",
            pronunciation: "di Apotekë",
            albanian: "farmacia",
            example: "Wo ist die Apotheke? — Ku është farmacia?"
        },
        {
            german: "der Supermarkt",
            pronunciation: "der Zupermarkt",
            albanian: "supermarketi",
            example: "Ich gehe zum Supermarkt. — Po shkoj në supermarket."
        },
        {
            german: "die Familie",
            pronunciation: "di Familje",
            albanian: "familja",
            example: "Meine Familie ist groß. — Familja ime është e madhe."
        }
    ],

    multiplechoice: [
        {
            question: "Si thuhet 'Mirëmëngjes' në gjermanisht?",
            options: ["Guten Abend", "Guten Morgen", "Gute Nacht", "Guten Tag"],
            correct: 1
        },
        {
            question: "Çfarë do të thotë 'Danke'?",
            options: ["Ju lutem", "Mirupafshim", "Faleminderit", "Mirëdita"],
            correct: 2
        },
        {
            question: "'Ich heiße Leti' do të thotë:",
            options: ["Unë jam Leti", "Unë quhem Leti", "Unë banoj Leti", "Unë dua Leti"],
            correct: 1
        },
        {
            question: "Si thuhet 'ujë' në gjermanisht?",
            options: ["das Brot", "die Milch", "das Wasser", "der Saft"],
            correct: 2
        },
        {
            question: "Çfarë do të thotë 'Wo ist die Apotheke?'",
            options: ["Kur hapet farmacia?", "Ku është farmacia?", "A ka farmaqi këtu?", "Sa kushton ilaçi?"],
            correct: 1
        },
        {
            question: "'Der Arzt' do të thotë:",
            options: ["farmacisti", "infermierja", "mjeku", "dentisti"],
            correct: 2
        },
        {
            question: "Si thuhet numri 5 në gjermanisht?",
            options: ["Vier", "Fünf", "Sechs", "Drei"],
            correct: 1
        },
        {
            question: "Çfarë do të thotë 'Auf Wiedersehen'?",
            options: ["Mirëdita", "Mirëmëngjes", "Mirupafshim", "Natën e mirë"],
            correct: 2
        },
        {
            question: "'Ich möchte Brot kaufen' do të thotë:",
            options: ["Dua të ha bukë", "Dua të blej bukë", "Ku është buka?", "Buka është e mirë"],
            correct: 1
        },
        {
            question: "Si thuhet 'Po' në gjermanisht?",
            options: ["Nein", "Doch", "Ja", "Gut"],
            correct: 2
        }
    ],

    fillin: [
        {
            sentence: "Guten ___, wie geht es Ihnen?",
            answer: "Morgen",
            hint: "Mirëmëngjes"
        },
        {
            sentence: "___ schön!",
            answer: "Danke",
            hint: "Faleminderit"
        },
        {
            sentence: "Ich ___ Leti.",
            answer: "heiße",
            hint: "Unë quhem..."
        },
        {
            sentence: "Wo ist die ___?",
            answer: "Apotheke",
            hint: "farmacia"
        },
        {
            sentence: "Ich möchte ___ kaufen.",
            answer: "Brot",
            hint: "bukë"
        },
        {
            sentence: "Kann ich ein Glas ___ haben?",
            answer: "Wasser",
            hint: "ujë"
        },
        {
            sentence: "Ich muss zum ___ gehen.",
            answer: "Arzt",
            hint: "mjek"
        },
        {
            sentence: "Meine ___ ist groß.",
            answer: "Familie",
            hint: "familje"
        },
        {
            sentence: "Auf ___!",
            answer: "Wiedersehen",
            hint: "Mirupafshim"
        },
        {
            sentence: "Es ist fünf ___.",
            answer: "Uhr",
            hint: "orë"
        }
    ],

    translation: [
        {
            albanian: "Mirëmëngjes!",
            answer: "Guten Morgen!",
            acceptedAnswers: ["Guten Morgen", "Guten Morgen!"]
        },
        {
            albanian: "Faleminderit shumë!",
            answer: "Danke schön!",
            acceptedAnswers: ["Danke schön", "Danke schön!", "Danke sehr", "Danke sehr!", "Vielen Dank", "Vielen Dank!"]
        },
        {
            albanian: "Unë quhem Leti.",
            answer: "Ich heiße Leti.",
            acceptedAnswers: ["Ich heiße Leti", "Ich heiße Leti.", "Ich heisse Leti", "Ich heisse Leti."]
        },
        {
            albanian: "Ku është farmacia?",
            answer: "Wo ist die Apotheke?",
            acceptedAnswers: ["Wo ist die Apotheke", "Wo ist die Apotheke?"]
        },
        {
            albanian: "Dua të blej bukë.",
            answer: "Ich möchte Brot kaufen.",
            acceptedAnswers: ["Ich möchte Brot kaufen", "Ich möchte Brot kaufen.", "Ich will Brot kaufen", "Ich will Brot kaufen."]
        },
        {
            albanian: "Mirupafshim!",
            answer: "Auf Wiedersehen!",
            acceptedAnswers: ["Auf Wiedersehen", "Auf Wiedersehen!"]
        },
        {
            albanian: "Po",
            answer: "Ja",
            acceptedAnswers: ["Ja", "Ja!"]
        },
        {
            albanian: "Jo",
            answer: "Nein",
            acceptedAnswers: ["Nein", "Nein!"]
        },
        {
            albanian: "Duhet të shkoj te mjeku.",
            answer: "Ich muss zum Arzt gehen.",
            acceptedAnswers: ["Ich muss zum Arzt gehen", "Ich muss zum Arzt gehen.", "Ich muss zum Arzt"]
        },
        {
            albanian: "Ju lutem",
            answer: "Bitte",
            acceptedAnswers: ["Bitte", "Bitte!"]
        }
    ]
};
