// unit_data_part1.js - Units 1 to 5 (50 questions each = 250 questions)

const unit1 = {
  id: 1,
  title: "All About Me",
  subtitle: "Present Simple vs Continuous • Appearance & Personality",
  icon: "👤",
  questions: [
    // Unit 1: Present Simple vs Continuous & Stative Verbs & Personality/Appearance
    {
      q: "Look at Sarah! She _______ a lovely yellow dress for the party today.",
      options: ["is wearing", "wears", "wear", "is wear"],
      a: "is wearing",
      tip: "Present Continuous (is + -ing) is used for actions happening right now or today."
    },
    {
      q: "My grandfather has lost all his hair, so he is now completely _______.",
      options: ["bald", "curly", "straight", "fair"],
      a: "bald",
      tip: "'Bald' describes a person who has no hair on their head."
    },
    {
      q: "Jack is usually very calm, but right now he _______ very nervous about the exam.",
      options: ["is feeling", "feels", "feel", "are feeling"],
      a: "is feeling",
      tip: "Use Present Continuous to describe a temporary state or feeling right now."
    },
    {
      q: "I _______ that learning a foreign language takes time and patience.",
      options: ["believe", "am believing", "believes", "believing"],
      a: "believe",
      tip: "'Believe' is a stative verb of opinion and is not used in the continuous form."
    },
    {
      q: "Tom never shares his notes and often speaks rudely. He is quite _______.",
      options: ["impolite", "cheerful", "confident", "patient"],
      a: "impolite",
      tip: "'Impolite' means not polite or bad-mannered (prefix im-)."
    },
    {
      q: "Emma _______ to the swimming pool every Tuesday afternoon after school.",
      options: ["goes", "is going", "go", "are going"],
      a: "goes",
      tip: "Present Simple is used for regular habits and routines ('every Tuesday')."
    },
    {
      q: "Why _______ (you / cry)? Is there something wrong with your project?",
      options: ["are you crying", "do you cry", "you are crying", "you cry"],
      a: "are you crying",
      tip: "Present Continuous question form: Why + are + subject + V-ing?"
    },
    {
      q: "David is not shy at all; he is very _______ when speaking in front of an audience.",
      options: ["confident", "careless", "untidy", "miserable"],
      a: "confident",
      tip: "'Confident' means feeling certain about your abilities and comfortable with people."
    },
    {
      q: "This soup _______ fantastic! What spices did you add to it?",
      options: ["smells", "is smelling", "smell", "are smelling"],
      a: "smells",
      tip: "'Smell' as a sense verb expressing a quality takes Present Simple."
    },
    {
      q: "It was very _______ of him to leave his bedroom so dirty and unorganized.",
      options: ["untidy", "independent", "polite", "fair"],
      a: "untidy",
      tip: "'Untidy' means not neat or messy (prefix un-)."
    },
    {
      q: "Listen! Somebody _______ the guitar in the room next door.",
      options: ["is playing", "plays", "play", "are playing"],
      a: "is playing",
      tip: "'Listen!' signals an action happening at the exact moment of speaking."
    },
    {
      q: "My sister has naturally _______ hair that twists into tight rings.",
      options: ["curly", "bald", "straight", "rude"],
      a: "curly",
      tip: "'Curly' hair has curves and spirals, opposite of straight."
    },
    {
      q: "Do you _______ the meaning of this new grammar term?",
      options: ["understand", "understanding", "are understanding", "understands"],
      a: "understand",
      tip: "'Understand' is a mental stative verb, so it takes Present Simple."
    },
    {
      q: "Harry never waits in line quietly; he is far too _______.",
      options: ["impatient", "independent", "cheerful", "polite"],
      a: "impatient",
      tip: "'Impatient' means easily irritated by having to wait (prefix im-)."
    },
    {
      q: "We _______ dinner with our grandparents this evening at 7 PM.",
      options: ["are having", "have", "has", "are have"],
      a: "are having",
      tip: "Present Continuous is used for definite future arrangements with people."
    },
    {
      q: "Sophie is always smiling and full of positive energy; she is a _______ girl.",
      options: ["cheerful", "miserable", "careless", "shy"],
      a: "cheerful",
      tip: "'Cheerful' means noticeably happy, optimistic, and smiling."
    },
    {
      q: "I _______ what you mean, but I still disagree with your decision.",
      options: ["know", "am knowing", "knows", "have known"],
      a: "know",
      tip: "'Know' is a stative verb of knowledge and cannot take continuous form."
    },
    {
      q: "He left his homework at home because he was in a rush. He is sometimes _______.",
      options: ["careless", "careful", "confident", "patient"],
      a: "careless",
      tip: "'Careless' means not giving enough attention to what you are doing."
    },
    {
      q: "Water _______ at 100 degrees Celsius under normal atmospheric pressure.",
      options: ["boils", "is boiling", "boil", "boiled"],
      a: "boils",
      tip: "Scientific general facts and physical laws use the Present Simple."
    },
    {
      q: "My brother hates asking for help because he likes to be completely _______.",
      options: ["independent", "impossible", "unfair", "untidy"],
      a: "independent",
      tip: "'Independent' describes someone who prefers doing things on their own."
    },
    {
      q: "Hurry up! The school bus _______ outside right now.",
      options: ["is waiting", "waits", "wait", "are waiting"],
      a: "is waiting",
      tip: "'Right now' indicates an activity taking place at this very moment."
    },
    {
      q: "Mark has very light-coloured hair; people usually say he is _______.",
      options: ["fair", "dark", "bald", "straight"],
      a: "fair",
      tip: "'Fair' describes hair that is light or blonde in color."
    },
    {
      q: "I _______ to drink a glass of cold water after my run.",
      options: ["want", "am wanting", "wants", "wanting"],
      a: "want",
      tip: "'Want' is a verb of desire/need and is stative (no -ing in this sense)."
    },
    {
      q: "Giving all the prize money to just one person seemed very _______ to the rest.",
      options: ["unfair", "cheerful", "polite", "careful"],
      a: "unfair",
      tip: "'Unfair' means not treating people equally or justly (prefix un-)."
    },
    {
      q: "What _______ (your father / do) for a living?",
      options: ["does your father do", "is your father doing", "do your father do", "your father does"],
      a: "does your father do",
      tip: "To ask about someone's regular job/profession, use 'What does ... do?'"
    },
    {
      q: "Oliver looked very _______ today because his football team lost the final.",
      options: ["miserable", "cheerful", "confident", "friendly"],
      a: "miserable",
      tip: "'Miserable' means very unhappy, sad, or downcast."
    },
    {
      q: "Can you please speak louder? I _______ you very well.",
      options: ["don't hear", "am not hearing", "not hear", "doesn't hear"],
      a: "don't hear",
      tip: "'Hear' is a verb of perception and does not use continuous form here."
    },
    {
      q: "It is _______ to finish this whole book in five minutes!",
      options: ["impossible", "impatient", "independent", "untidy"],
      a: "impossible",
      tip: "'Impossible' means something that cannot happen or be done (prefix im-)."
    },
    {
      q: "At the moment, we _______ about climate change in our geography class.",
      options: ["are learning", "learn", "learns", "is learning"],
      a: "are learning",
      tip: "'At the moment' requires Present Continuous (are learning)."
    },
    {
      q: "She always says 'please' and 'thank you'. She is very _______.",
      options: ["polite", "rude", "careless", "impatient"],
      a: "polite",
      tip: "'Polite' means having good manners and showing respect to others."
    },
    {
      q: "I _______ tea over coffee; it is much better for my digestion.",
      options: ["prefer", "am preferring", "prefers", "preferring"],
      a: "prefer",
      tip: "'Prefer' is a stative verb of preference and takes Present Simple."
    },
    {
      q: "Tom _______ his teeth twice every day before going to bed and after breakfast.",
      options: ["brushes", "is brushing", "brush", "are brushing"],
      a: "brushes",
      tip: "Habitual actions with 'twice every day' use Present Simple (brushes)."
    },
    {
      q: "Elena feels uncomfortable talking to strangers because she is naturally _______.",
      options: ["shy", "confident", "cheerful", "loud"],
      a: "shy",
      tip: "'Shy' means nervous or hesitant in the company of other people."
    },
    {
      q: "Shh! Be quiet, please. The baby _______ in the bedroom.",
      options: ["is sleeping", "sleeps", "sleep", "are sleeping"],
      a: "is sleeping",
      tip: "An action happening at the current moment requires Present Continuous."
    },
    {
      q: "Do you _______ how much this computer costs?",
      options: ["know", "knowing", "are knowing", "knows"],
      a: "know",
      tip: "'Know' is a stative verb and is not used in the continuous form."
    },
    {
      q: "He always speaks very loudly and interrupts others. That is very _______.",
      options: ["rude", "polite", "helpful", "cheerful"],
      a: "rude",
      tip: "'Rude' means impolite and lacking respect for others."
    },
    {
      q: "Right now, my parents _______ the living room walls white.",
      options: ["are painting", "paint", "paints", "is painting"],
      a: "are painting",
      tip: "'Right now' indicates a temporary action in progress (are painting)."
    },
    {
      q: "Her hair isn't wavy or curly at all; it is completely _______.",
      options: ["straight", "bald", "round", "fair"],
      a: "straight",
      tip: "'Straight' hair has no curls, waves, or bends."
    },
    {
      q: "I _______ this heavy jacket belongs to Peter because his name is on it.",
      options: ["think", "am thinking", "thinks", "thinking"],
      a: "think",
      tip: "When 'think' expresses an opinion, it is a stative verb (Present Simple)."
    },
    {
      q: "Liam is very _______; he always double-checks his work before handing it in.",
      options: ["careful", "careless", "impatient", "untidy"],
      a: "careful",
      tip: "'Careful' means taking care and paying close attention to avoid errors."
    },
    {
      q: "Why _______ (you / look) at me like that? Do I have something on my face?",
      options: ["are you looking", "do you look", "you look", "look you"],
      a: "are you looking",
      tip: "'Look at' as a deliberate continuous action takes Present Continuous."
    },
    {
      q: "He _______ six miles every morning to keep fit for the upcoming marathon.",
      options: ["runs", "is running", "run", "running"],
      a: "runs",
      tip: "Repeated morning routines take Present Simple (runs)."
    },
    {
      q: "It is _______ to push people in front of you while boarding the train.",
      options: ["impolite", "confident", "fair", "patient"],
      a: "impolite",
      tip: "Pushing in front of others is bad manners and 'impolite'."
    },
    {
      q: "They _______ this new television series every Saturday evening.",
      options: ["watch", "are watching", "watches", "watching"],
      a: "watch",
      tip: "'Every Saturday evening' expresses a recurring routine (Present Simple)."
    },
    {
      q: "This jacket _______ to my older brother, so I must return it to him.",
      options: ["belongs", "is belonging", "belong", "belonging"],
      a: "belongs",
      tip: "'Belong' is a stative verb of possession and cannot take continuous form."
    },
    {
      q: "Sam is _______ today because he received the highest mark in the test.",
      options: ["cheerful", "miserable", "careless", "untidy"],
      a: "cheerful",
      tip: "'Cheerful' fits someone who is happy after achieving great results."
    },
    {
      q: "Where _______ (your best friend / live)? In London or Manchester?",
      options: ["does your best friend live", "is your best friend living", "do your best friend live", "lives your friend"],
      a: "does your best friend live",
      tip: "Permanent residence is asked using Present Simple: does + subject + live?"
    },
    {
      q: "Look outside! The sun _______ and the sky is completely clear.",
      options: ["is shining", "shines", "shine", "are shining"],
      a: "is shining",
      tip: "'Look outside!' directs attention to what is happening right now."
    },
    {
      q: "I _______ what you are saying, but my opinion is slightly different.",
      options: ["see", "am seeing", "sees", "seeing"],
      a: "see",
      tip: "'See' in the sense of 'understand' is a stative verb (Present Simple)."
    },
    {
      q: "He never tidies his desk; there are books and papers everywhere. He is so _______.",
      options: ["untidy", "polite", "careful", "independent"],
      a: "untidy",
      tip: "Someone who does not keep things in order is 'untidy'."
    }
  ]
};

const unit2 = {
  id: 2,
  title: "In Fashion",
  subtitle: "Past Simple • Adverbs of manner & Clothes",
  icon: "👗",
  questions: [
    {
      q: "Yesterday, Emily _______ a pair of stylish leather boots from the mall.",
      options: ["bought", "buys", "buyed", "is buying"],
      a: "bought",
      tip: "'Bought' is the irregular Past Simple form of 'buy'."
    },
    {
      q: "The driver drove very _______ because the narrow road was covered in ice.",
      options: ["carefully", "careful", "careless", "care"],
      a: "carefully",
      tip: "Adverbs of manner (carefully) modify verbs to describe how an action is done."
    },
    {
      q: "I don't like wearing tight trousers; I prefer _______ clothes when I travel.",
      options: ["loose-fitting", "skinny", "painful", "dirty"],
      a: "loose-fitting",
      tip: "'Loose-fitting' clothes are wide and comfortable, not tight."
    },
    {
      q: "Last Saturday, we _______ our old school friends at the cinema.",
      options: ["met", "meet", "meeted", "are meeting"],
      a: "met",
      tip: "'Met' is the irregular Past Simple form of 'meet'."
    },
    {
      q: "He speaks English very _______ because he spent two years living in Oxford.",
      options: ["well", "good", "goodly", "better"],
      a: "well",
      tip: "'Well' is the adverb of manner corresponding to the adjective 'good'."
    },
    {
      q: "These jeans are not new; I purchased them at a _______ vintage shop.",
      options: ["second-hand", "brand-new", "futuristic", "formal"],
      a: "second-hand",
      tip: "'Second-hand' items were previously owned and used by someone else."
    },
    {
      q: "Which shirt _______ (you / choose) for the graduation ceremony last night?",
      options: ["did you choose", "did you chose", "do you choose", "chose you"],
      a: "did you choose",
      tip: "Past Simple question: Did + subject + base verb (choose)?"
    },
    {
      q: "He ran as _______ as he could to catch the departing morning train.",
      options: ["fast", "fastly", "faster", "fastest"],
      a: "fast",
      tip: "'Fast' is both an adjective and an adverb (there is no 'fastly')."
    },
    {
      q: "My grandfather always dresses in _______ suits whenever he attends a wedding.",
      options: ["smart", "casual", "shabby", "untidy"],
      a: "smart",
      tip: "'Smart' clothes are clean, formal, and neat, suitable for special occasions."
    },
    {
      q: "She _______ her favourite velvet dress to her sister's party last weekend.",
      options: ["wore", "weared", "wears", "worn"],
      a: "wore",
      tip: "'Wore' is the irregular Past Simple form of 'wear'."
    },
    {
      q: "The students worked extremely _______ to prepare their group presentation.",
      options: ["hard", "hardly", "harder", "hardness"],
      a: "hard",
      tip: "'Hard' as an adverb means with great effort ('hardly' means almost not)."
    },
    {
      q: "These sneakers are _______; I took them out of the box only five minutes ago!",
      options: ["brand-new", "second-hand", "worn out", "old-fashioned"],
      a: "brand-new",
      tip: "'Brand-new' means completely new and never used before."
    },
    {
      q: "We _______ a strange noise outside the window in the middle of the night.",
      options: ["heard", "heared", "hear", "hears"],
      a: "heard",
      tip: "'Heard' is the irregular Past Simple form of 'hear'."
    },
    {
      q: "He solved the difficult crossword puzzle _______ in under ten minutes.",
      options: ["easily", "easy", "easier", "easiness"],
      a: "easily",
      tip: "Use the adverb 'easily' (-y changes to -ily) to describe how an action was done."
    },
    {
      q: "For a weekend picnic, it is best to wear _______ clothes like a T-shirt and shorts.",
      options: ["casual", "formal", "smart", "uncomfortable"],
      a: "casual",
      tip: "'Casual' clothing is relaxed, informal, and suitable for everyday leisure."
    },
    {
      q: "My uncle _______ me an authentic leather jacket for my sixteenth birthday.",
      options: ["gave", "gived", "gives", "given"],
      a: "gave",
      tip: "'Gave' is the irregular Past Simple form of 'give'."
    },
    {
      q: "The children played _______ in the living room while their mother rested.",
      options: ["quietly", "quiet", "more quiet", "quietness"],
      a: "quietly",
      tip: "'Quietly' is the adverb describing the quiet manner of playing."
    },
    {
      q: "Maria always follows the latest fashion trends; she is very _______.",
      options: ["trendy", "old-fashioned", "careless", "boring"],
      a: "trendy",
      tip: "'Trendy' means modern, fashionable, and up-to-date."
    },
    {
      q: "The choir _______ three beautiful traditional songs at the end of the concert.",
      options: ["sang", "sung", "singed", "sings"],
      a: "sang",
      tip: "'Sang' is the Past Simple form of the irregular verb 'sing'."
    },
    {
      q: "You must eat _______ if you want to stay energetic and prevent illness.",
      options: ["healthily", "healthy", "health", "healthier"],
      a: "healthily",
      tip: "'Healthily' is the adverb of manner describing how one eats."
    },
    {
      q: "I _______ the answer to the teacher's question, so I raised my hand immediately.",
      options: ["knew", "knowed", "know", "known"],
      a: "knew",
      tip: "'Knew' is the irregular Past Simple form of 'know'."
    },
    {
      q: "The singer performed _______ on stage and received a standing ovation from everyone.",
      options: ["brilliantly", "brilliant", "brilliance", "more brilliant"],
      a: "brilliantly",
      tip: "Adverbs of manner ending in -ly describe the quality of a performance."
    },
    {
      q: "These tight _______ jeans look fashionable, but they are hard to sit in.",
      options: ["skinny", "baggy", "loose", "oversized"],
      a: "skinny",
      tip: "'Skinny' jeans fit very tightly around the legs."
    },
    {
      q: "She _______ all her pocket money on clothes during the summer sales.",
      options: ["spent", "spended", "spends", "spending"],
      a: "spent",
      tip: "'Spent' is the irregular Past Simple form of 'spend'."
    },
    {
      q: "The receptionist answered all our questions very _______ and with a smile.",
      options: ["politely", "polite", "politeness", "impolite"],
      a: "politely",
      tip: "The adverb 'politely' describes speaking in a respectful and kind manner."
    },
    {
      q: "This woollen sweater feels extremely _______ on cold winter evenings.",
      options: ["comfortable", "uncomfortable", "painful", "skinny"],
      a: "comfortable",
      tip: "'Comfortable' clothing provides a pleasant feeling to the body."
    },
    {
      q: "Where _______ (you / find) that wonderful vintage denim jacket?",
      options: ["did you find", "did you found", "do you find", "found you"],
      a: "did you find",
      tip: "Past Simple questions use did + subject + base verb (find)."
    },
    {
      q: "The chef chopped the onions very _______ so they would cook evenly.",
      options: ["finely", "fine", "finer", "finest"],
      a: "finely",
      tip: "The adverb 'finely' describes chopping into tiny pieces."
    },
    {
      q: "He didn't wear a coat, so he _______ freezing cold during the walking tour.",
      options: ["felt", "feeled", "feels", "feeling"],
      a: "felt",
      tip: "'Felt' is the irregular Past Simple form of 'feel'."
    },
    {
      q: "My brother _______ three pairs of designer shoes during his trip to Milan.",
      options: ["bought", "buy", "buyed", "buying"],
      a: "bought",
      tip: "Past Simple of buy is bought."
    },
    {
      q: "The team played _______ in the first half and conceded two quick goals.",
      options: ["badly", "bad", "worse", "baddest"],
      a: "badly",
      tip: "'Badly' is the adverb of manner describing poor performance."
    },
    {
      q: "I like this shirt because the long _______ can be rolled up when it is hot.",
      options: ["sleeves", "collars", "buttons", "pockets"],
      a: "sleeves",
      tip: "'Sleeves' are the parts of a garment covering the arms."
    },
    {
      q: "Who _______ (tell) you that the clothing store was offering a 50% discount?",
      options: ["told", "telled", "did tell", "tells"],
      a: "told",
      tip: "Subject questions with who take the past form directly without 'did': who told you?"
    },
    {
      q: "The athlete trained _______ every day to qualify for the Olympic squad.",
      options: ["hard", "hardly", "hardish", "hardness"],
      a: "hard",
      tip: "'Train hard' means to practice with immense effort."
    },
    {
      q: "A formal black tie event requires men to wear a _______ dark suit.",
      options: ["smart", "casual", "scruffy", "loose-fitting"],
      a: "smart",
      tip: "'Smart' clothing is formal and elegant."
    },
    {
      q: "Yesterday evening, my mother _______ a delicious apple pie for dessert.",
      options: ["baked", "bakes", "is baking", "baken"],
      a: "baked",
      tip: "Regular verbs add -ed in the Past Simple (baked)."
    },
    {
      q: "He listened _______ to the safety instructions before taking off.",
      options: ["carefully", "careful", "careless", "caring"],
      a: "carefully",
      tip: "'Carefully' indicates giving full, close attention to instructions."
    },
    {
      q: "This jacket is made of genuine _______; it will last for many years.",
      options: ["leather", "paper", "glass", "plastic"],
      a: "leather",
      tip: "'Leather' is durable material made from animal skin used for jackets and shoes."
    },
    {
      q: "When _______ (the fashion show / finish) last night?",
      options: ["did the fashion show finish", "did the fashion show finished", "was the fashion show finish", "finished the show"],
      a: "did the fashion show finish",
      tip: "Past Simple question: Did + subject + base verb?"
    },
    {
      q: "The audience clapped _______ when the young designer walked onto the stage.",
      options: ["enthusiastically", "enthusiastic", "enthusiasm", "enthusiast"],
      a: "enthusiastically",
      tip: "'Enthusiastically' is the adverb describing eager and cheerful clapping."
    },
    {
      q: "My sister _______ her old denim jacket into a trendy summer bag.",
      options: ["turned", "turn", "turning", "turns"],
      a: "turned",
      tip: "Past Simple of turn is turned (regular -ed)."
    },
    {
      q: "You don't need to dress up; the invitation clearly states '_______ dress code'.",
      options: ["casual", "smart", "uncomfortable", "traditional"],
      a: "casual",
      tip: "'Casual dress code' means everyday informal clothing."
    },
    {
      q: "They _______ all the tickets for the fashion exhibition within two hours.",
      options: ["sold", "selled", "sells", "selling"],
      a: "sold",
      tip: "'Sold' is the irregular Past Simple form of 'sell'."
    },
    {
      q: "He speaks so _______ that everyone in the back of the hall can hear him.",
      options: ["clearly", "clear", "clearness", "more clear"],
      a: "clearly",
      tip: "'Clearly' is the adverb describing distinct speech."
    },
    {
      q: "I bought these sandals because they were on _______ for half price.",
      options: ["sale", "sell", "sold", "cost"],
      a: "sale",
      tip: "'On sale' means available at a reduced price."
    },
    {
      q: "The model _______ down the runway with incredible elegance.",
      options: ["walked", "walk", "is walking", "walks"],
      a: "walked",
      tip: "Past Simple completed narrative action (walked)."
    },
    {
      q: "She smiled _______ at the photographer as he took the picture.",
      options: ["warmly", "warm", "warmth", "warmer"],
      a: "warmly",
      tip: "'Warmly' is an adverb of manner meaning in a friendly and pleasant way."
    },
    {
      q: "I prefer _______ cotton shirts during the hot summer months.",
      options: ["breathable", "heavy", "woollen", "tight"],
      a: "breathable",
      tip: "'Breathable' fabric allows air to pass through, keeping you cool."
    },
    {
      q: "We _______ at the bus stop for forty minutes before the bus finally arrived.",
      options: ["waited", "wait", "waiting", "have wait"],
      a: "waited",
      tip: "Regular past action: wait + ed = waited."
    },
    {
      q: "The little boy tied his shoelaces _______ without any help from his parents.",
      options: ["correctly", "correct", "correction", "more correct"],
      a: "correctly",
      tip: "'Correctly' describes doing an action accurately without mistakes."
    }
  ]
};

const unit3 = {
  id: 3,
  title: "My Way of Life",
  subtitle: "Comparatives & Superlatives • Life events",
  icon: "🌟",
  questions: [
    {
      q: "Life in a small village is usually _______ than living in a crowded capital city.",
      options: ["more peaceful", "peacefuler", "peaceful", "most peaceful"],
      a: "more peaceful",
      tip: "Multi-syllable adjectives form comparatives with 'more + adjective'."
    },
    {
      q: "Mount Everest is the _______ mountain on our planet.",
      options: ["highest", "higher", "most high", "high"],
      a: "highest",
      tip: "Short adjectives take -est for the superlative: the highest."
    },
    {
      q: "My brother isn't old _______ to vote in the national elections; he is only 16.",
      options: ["enough", "too", "as", "more"],
      a: "enough",
      tip: "'Adjective + enough' indicates having the required degree (old enough)."
    },
    {
      q: "This smartphone is _______ expensive; I cannot afford to buy it this month.",
      options: ["too", "enough", "as", "than"],
      a: "too",
      tip: "'Too + adjective' means more than necessary or acceptable (too expensive)."
    },
    {
      q: "After four years of hard study at Oxford, Sarah finally got her _______ in law.",
      options: ["degree", "licence", "job", "pension"],
      a: "degree",
      tip: "At university, completing your studies earns you an academic 'degree'."
    },
    {
      q: "This exercise is not _______ difficult as the one we did yesterday.",
      options: ["as", "so", "than", "more"],
      a: "as",
      tip: "Comparisons of equality use the structure 'as ... as' or 'not as ... as'."
    },
    {
      q: "The weather today is much _______ than it was yesterday; it is pouring with rain.",
      options: ["worse", "badder", "worst", "more bad"],
      a: "worse",
      tip: "'Worse' is the irregular comparative form of 'bad'."
    },
    {
      q: "My grandfather decided to _______ at age 65 after working for 40 years as an engineer.",
      options: ["retire", "vote", "be born", "study"],
      a: "retire",
      tip: "'Retire' means to stop working permanently, usually after reaching an older age."
    },
    {
      q: "Who is the _______ person in your immediate family?",
      options: ["oldest", "older", "most old", "old"],
      a: "oldest",
      tip: "Superlative of short adjective 'old' is 'the oldest'."
    },
    {
      q: "He passed his driving test on the first attempt and received his driving _______.",
      options: ["licence", "degree", "diploma", "contract"],
      a: "licence",
      tip: "The official permit that allows you to drive legally is a 'driving licence'."
    },
    {
      q: "Travelling by plane is _______ faster than travelling by long-distance coach.",
      options: ["much", "more", "very", "as"],
      a: "much",
      tip: "Use 'much' or 'far' to modify and emphasize comparative adjectives (much faster)."
    },
    {
      q: "This winter has been the _______ one we have experienced in twenty years.",
      options: ["coldest", "colder", "most cold", "cold"],
      a: "coldest",
      tip: "Superlative form of cold is 'the coldest'."
    },
    {
      q: "I don't have _______ time to finish this project before the deadline.",
      options: ["enough", "too", "many", "as"],
      a: "enough",
      tip: "'Enough' goes before uncountable nouns: enough time."
    },
    {
      q: "She was _______ in a small coastal town in the south of Italy in 2005.",
      options: ["born", "bear", "bore", "birth"],
      a: "born",
      tip: "The passive collocation for entering the world is 'to be born'."
    },
    {
      q: "The train station is _______ away from our house than the bus terminal.",
      options: ["further", "fartherer", "more far", "furthest"],
      a: "further",
      tip: "'Further' (or farther) is the irregular comparative of 'far'."
    },
    {
      q: "This is by far the _______ film I have ever watched at the cinema.",
      options: ["best", "better", "goodest", "most good"],
      a: "best",
      tip: "'Best' is the irregular superlative of 'good'."
    },
    {
      q: "The coffee was _______ hot to drink immediately, so I waited five minutes.",
      options: ["too", "enough", "as", "than"],
      a: "too",
      tip: "'Too hot to drink' means it was excessively hot, preventing drinking."
    },
    {
      q: "In many democratic countries, citizens have the right to _______ when they turn 18.",
      options: ["vote", "retire", "graduate", "drive"],
      a: "vote",
      tip: "'Vote' means to officially choose a candidate in an election."
    },
    {
      q: "Physics is often considered _______ than history by many secondary students.",
      options: ["more difficult", "difficulter", "most difficult", "as difficult"],
      a: "more difficult",
      tip: "Long adjectives use 'more + adjective + than' for comparison."
    },
    {
      q: "She doesn't run as _______ as her twin sister, who is a track champion.",
      options: ["fast", "faster", "fastest", "fastly"],
      a: "fast",
      tip: "In 'as ... as' constructions, use the base form of the adverb/adjective (fast)."
    },
    {
      q: "After finishing high school, Arthur hopes to go to _______ to study medicine.",
      options: ["university", "nursery", "office", "driving"],
      a: "university",
      tip: "'Go to university' is the British collocation for higher education."
    },
    {
      q: "This laptop is the _______ one in the shop; it only costs \$250.",
      options: ["cheapest", "cheaper", "most cheap", "cheap"],
      a: "cheapest",
      tip: "Superlative of one-syllable adjective 'cheap' is 'the cheapest'."
    },
    {
      q: "Are you tall _______ to reach the top shelf in the kitchen?",
      options: ["enough", "too", "more", "as"],
      a: "enough",
      tip: "The adjective precedes 'enough': tall enough."
    },
    {
      q: "It took my brother several months of interviews to finally get a _______.",
      options: ["job", "degree", "vote", "retire"],
      a: "job",
      tip: "The common life event collocation is 'to get a job'."
    },
    {
      q: "That was the _______ mistake you could possibly make on this test!",
      options: ["worst", "worse", "baddest", "most bad"],
      a: "worst",
      tip: "'Worst' is the irregular superlative of 'bad'."
    },
    {
      q: "My new apartment is _______ than my old one, so I have plenty of room now.",
      options: ["larger", "more large", "largest", "as large"],
      a: "larger",
      tip: "Short adjectives ending in -e simply add -r: larger."
    },
    {
      q: "There were _______ many people on the platform, so we couldn't board the train.",
      options: ["too", "enough", "as", "much"],
      a: "too",
      tip: "'Too many + plural noun' indicates an excessive number."
    },
    {
      q: "They celebrated their 50th wedding anniversary; they got _______ in 1974.",
      options: ["married", "born", "licence", "degree"],
      a: "married",
      tip: "'Get married' is the standard life event collocation."
    },
    {
      q: "Which planet is the _______ from the Sun in our solar system?",
      options: ["furthest", "further", "farthestest", "most far"],
      a: "furthest",
      tip: "'Furthest' (or farthest) is the superlative form of 'far'."
    },
    {
      q: "He didn't get the job because he wasn't experienced _______.",
      options: ["enough", "too", "so", "than"],
      a: "enough",
      tip: "'Experienced enough' means possessing the required amount of experience."
    },
    {
      q: "This suitcase is _______ heavy for me to lift on my own; could you help me?",
      options: ["too", "enough", "as", "than"],
      a: "too",
      tip: "'Too heavy to lift' indicates excess weight beyond capability."
    },
    {
      q: "His exam results were _______ than expected, so his parents were delighted.",
      options: ["better", "gooder", "best", "more good"],
      a: "better",
      tip: "'Better' is the irregular comparative of 'good'."
    },
    {
      q: "When did you _______ house from Manchester to London?",
      options: ["move", "born", "retire", "leave"],
      a: "move",
      tip: "'Move house' means changing your residence to a new location."
    },
    {
      q: "Public transport here is _______ convenient than having a private car.",
      options: ["more", "much", "most", "as"],
      a: "more",
      tip: "'More + adjective + than': more convenient than."
    },
    {
      q: "Is basketball as popular _______ football in your home country?",
      options: ["as", "than", "so", "like"],
      a: "as",
      tip: "The comparison of equality pattern is 'as + adjective + as'."
    },
    {
      q: "We don't have _______ chairs for all the guests who arrived.",
      options: ["enough", "too", "much", "as"],
      a: "enough",
      tip: "'Enough + plural countable noun' indicates sufficient quantity."
    },
    {
      q: "My sister wants to _______ a career in digital graphic design.",
      options: ["start", "be born", "retire", "vote"],
      a: "start",
      tip: "Collocation: 'start a career'."
    },
    {
      q: "The Sahara is the _______ hot desert in the world.",
      options: ["largest", "larger", "most large", "as large"],
      a: "largest",
      tip: "Superlative: the largest."
    },
    {
      q: "The water in the pool was _______ cold, so the children refused to swim.",
      options: ["too", "enough", "as", "more"],
      a: "too",
      tip: "'Too cold' indicates an excessive, unpleasant low temperature."
    },
    {
      q: "He is three years _______ than his cousin David.",
      options: ["older", "elder", "oldest", "more old"],
      a: "older",
      tip: "Comparative of 'old' is 'older'."
    },
    {
      q: "Have you got _______ money to pay for both train tickets?",
      options: ["enough", "too", "many", "as"],
      a: "enough",
      tip: "'Enough money' means sufficient financial funds."
    },
    {
      q: "After ten years of hard work, she became the _______ successful chef in town.",
      options: ["most", "more", "much", "as"],
      a: "most",
      tip: "Superlative of multi-syllable adjective 'successful' is 'the most successful'."
    },
    {
      q: "This test was _______ easier than the one we had last term.",
      options: ["a bit", "more", "too", "as"],
      a: "a bit",
      tip: "'A bit' modifies and softens comparative adjectives: a bit easier."
    },
    {
      q: "He is not _______ strong as his training partner.",
      options: ["as", "than", "like", "so as"],
      a: "as",
      tip: "'Not as + adjective + as' shows inequality."
    },
    {
      q: "My grandfather had to _______ school at the age of 14 to work on the farm.",
      options: ["leave", "graduate", "retire", "vote"],
      a: "leave",
      tip: "Collocation: 'leave school' means to stop attending."
    },
    {
      q: "This is the _______ exciting football match I have ever attended!",
      options: ["most", "more", "much", "best"],
      a: "most",
      tip: "Superlative of exciting is 'the most exciting'."
    },
    {
      q: "The box was _______ large to fit inside the car trunk.",
      options: ["too", "enough", "as", "more"],
      a: "too",
      tip: "'Too large' indicates excess size."
    },
    {
      q: "She was the _______ young author to win the national book prize.",
      options: ["youngest", "younger", "most young", "as young"],
      a: "youngest",
      tip: "Superlative of young is 'youngest'."
    },
    {
      q: "Eating fresh fruit is much _______ for you than snacking on potato chips.",
      options: ["better", "good", "best", "gooder"],
      a: "better",
      tip: "Comparative of good is better: much better for you."
    },
    {
      q: "Did he _______ his driving test when he was seventeen?",
      options: ["pass", "get", "do", "take on"],
      a: "pass",
      tip: "Collocation: 'pass an exam / test'."
    }
  ]
};

const unit4 = {
  id: 4,
  title: "Champions",
  subtitle: "Past Continuous vs Past Simple • Sports collocations",
  icon: "🏆",
  questions: [
    {
      q: "While we _______ football in the park, it suddenly started to pour with rain.",
      options: ["were playing", "played", "are playing", "was playing"],
      a: "were playing",
      tip: "Past Continuous (were playing) describes the ongoing background activity interrupted by Past Simple."
    },
    {
      q: "I _______ my ankle while I was jumping over the high hurdle in athletics.",
      options: ["twisted", "was twisting", "twist", "am twisting"],
      a: "twisted",
      tip: "The short, sudden interrupting event takes the Past Simple (twisted)."
    },
    {
      q: "Do you prefer to _______ gymnastics or athletics during PE lessons?",
      options: ["do", "play", "go", "make"],
      a: "do",
      tip: "We use 'do' with individual non-team exercises and martial arts: do gymnastics, do athletics."
    },
    {
      q: "Every summer, my family loves to _______ windsurfing on the calm lake.",
      options: ["go", "do", "play", "make"],
      a: "go",
      tip: "We use 'go' with sports and activities that end in -ing: go windsurfing, go cycling."
    },
    {
      q: "He is a fantastic athlete because he _______ rugby for the regional junior team.",
      options: ["plays", "does", "goes", "makes"],
      a: "plays",
      tip: "We use 'play' with team sports that involve a ball: play rugby, play football."
    },
    {
      q: "The coach was talking to the team while the players _______ on the grass.",
      options: ["were resting", "rested", "are resting", "was resting"],
      a: "were resting",
      tip: "Two parallel ongoing actions in the past both use the Past Continuous."
    },
    {
      q: "Our fitness _______ designed a special training program to strengthen our leg muscles.",
      options: ["coach", "referee", "spectator", "fan"],
      a: "coach",
      tip: "A 'coach' is a person who trains and guides sports players."
    },
    {
      q: "What _______ (you / do) at 8 PM yesterday when I tried calling your mobile?",
      options: ["were you doing", "did you do", "are you doing", "you were doing"],
      a: "were you doing",
      tip: "Past Continuous question for an action in progress at an exact point in time."
    },
    {
      q: "He goes to the gym four times a week to keep _______ and healthy.",
      options: ["fit", "match", "train", "coach"],
      a: "fit",
      tip: "'Keep fit' is a polysemous collocation meaning to stay in good physical shape."
    },
    {
      q: "The referee blew his whistle and ended the _______ after ninety minutes.",
      options: ["match", "train", "workout", "pitch"],
      a: "match",
      tip: "A sports contest between two teams or players is a 'match'."
    },
    {
      q: "I _______ my homework when all the electricity suddenly went out.",
      options: ["was doing", "did", "am doing", "were doing"],
      a: "was doing",
      tip: "Ongoing past action interrupted by an event: was doing."
    },
    {
      q: "Many teenagers in our club _______ cycling along the mountain trails on weekends.",
      options: ["go", "play", "do", "make"],
      a: "go",
      tip: "Collocation: 'go cycling' (-ing sport)."
    },
    {
      q: "When the captain scored the winning goal, all the fans _______ wildly.",
      options: ["cheered", "were cheering", "cheer", "cheering"],
      a: "cheered",
      tip: "Past Simple is used for completed actions following a specific moment."
    },
    {
      q: "She _______ her knee badly while she was skiing down the steep slope.",
      options: ["hurt", "was hurting", "hurts", "hurting"],
      a: "hurt",
      tip: "Past Simple of 'hurt' is 'hurt' (irregular short interrupting event)."
    },
    {
      q: "Do you want to _______ badminton with me at the sports centre this evening?",
      options: ["play", "do", "go", "make"],
      a: "play",
      tip: "Sports with a racket, net, and shuttlecock/ball take 'play': play badminton."
    },
    {
      q: "The tennis players _______ on the grass court when the heavy rain stopped the game.",
      options: ["were warming up", "warmed up", "warm up", "was warming up"],
      a: "were warming up",
      tip: "Plural subject (players) takes 'were + V-ing' in Past Continuous."
    },
    {
      q: "I try to _______ out at the gym for at least forty minutes every other day.",
      options: ["work", "train", "fit", "coach"],
      a: "work",
      tip: "'Work out' is a phrasal verb meaning to do physical exercise."
    },
    {
      q: "While my brother was cooking dinner, I _______ the dining table.",
      options: ["was setting", "set", "am setting", "were setting"],
      a: "was setting",
      tip: "Two simultaneous past actions connected by 'while': was setting."
    },
    {
      q: "My uncle used to _______ judo when he was at secondary school.",
      options: ["do", "play", "go", "make"],
      a: "do",
      tip: "Martial arts like judo, karate, and taekwondo take 'do'."
    },
    {
      q: "The football _______ was completely covered in mud after two hours of rain.",
      options: ["pitch", "court", "track", "ring"],
      a: "pitch",
      tip: "A football or rugby field is called a 'pitch'."
    },
    {
      q: "She dropped her water bottle while she _______ towards the finish line.",
      options: ["was running", "ran", "is running", "were running"],
      a: "was running",
      tip: "Past Continuous describes the background movement in progress."
    },
    {
      q: "We need to _______ hard all week if we want to win the championship final.",
      options: ["train", "coach", "match", "fit"],
      a: "train",
      tip: "'Train' means to practice intensely to improve athletic skills."
    },
    {
      q: "Did you _______ squash with Peter at the sports club yesterday?",
      options: ["play", "do", "go", "make"],
      a: "play",
      tip: "'Play squash' (racket and ball sport)."
    },
    {
      q: "As the gymnast was performing her routine, she _______ her balance and fell.",
      options: ["lost", "was losing", "loses", "has lost"],
      a: "lost",
      tip: "Sudden interrupting event takes Past Simple: lost."
    },
    {
      q: "The tennis _______ had to be cleaned and dried before the final set began.",
      options: ["court", "pitch", "pitcher", "field"],
      a: "court",
      tip: "Tennis, basketball, and volleyball are played on a 'court'."
    },
    {
      q: "I _______ about the tactics when the referee blew his whistle.",
      options: ["was thinking", "thought", "am thinking", "were thinking"],
      a: "was thinking",
      tip: "Past Continuous: was thinking."
    },
    {
      q: "Do you ever _______ snowboarding during your winter holiday in the Alps?",
      options: ["go", "do", "play", "have"],
      a: "go",
      tip: "'Go snowboarding' (-ing sports take 'go')."
    },
    {
      q: "The team _______ new strategies every single day before the big tournament.",
      options: ["practised", "was practising", "practise", "practising"],
      a: "practised",
      tip: "Completed regular past training routine: practised."
    },
    {
      q: "While Tom was cycling home, he _______ a flat tire on his bicycle.",
      options: ["got", "was getting", "gets", "getting"],
      a: "got",
      tip: "Single completed event interrupting an action: got."
    },
    {
      q: "He is not _______ enough to play ninety minutes of intense football without resting.",
      options: ["fit", "match", "coach", "train"],
      a: "fit",
      tip: "'Fit' means in good physical condition."
    },
    {
      q: "Who _______ (drive) the team minibus when the puncture happened?",
      options: ["was driving", "drove", "were driving", "is driving"],
      a: "was driving",
      tip: "Single subject who was in the middle of driving: was driving."
    },
    {
      q: "My cousin loves to _______ athletics and holds the school record for 100 metres.",
      options: ["do", "play", "go", "make"],
      a: "do",
      tip: "'Do athletics' is the correct collocation."
    },
    {
      q: "They _______ in the pool when the thunderstorm warning sounded.",
      options: ["were swimming", "swam", "are swimming", "was swimming"],
      a: "were swimming",
      tip: "Plural subject 'they' takes 'were swimming'."
    },
    {
      q: "The boxing _______ was surrounded by hundreds of enthusiastic fans.",
      options: ["ring", "pitch", "court", "track"],
      a: "ring",
      tip: "Boxing matches take place in a 'ring'."
    },
    {
      q: "I _______ the ball as hard as I could, but the goalkeeper saved it.",
      options: ["kicked", "was kicking", "kick", "kicking"],
      a: "kicked",
      tip: "Single completed past action: kicked."
    },
    {
      q: "While she was stretching, her muscles _______ to feel much more relaxed.",
      options: ["began", "were beginning", "begin", "begun"],
      a: "began",
      tip: "Interruption / result: began."
    },
    {
      q: "We often _______ sailing along the coast during the warmer months.",
      options: ["go", "do", "play", "make"],
      a: "go",
      tip: "'Go sailing' (-ing activity)."
    },
    {
      q: "The young defender _______ an incredible tackle right inside the penalty box.",
      options: ["made", "did", "was making", "makes"],
      a: "made",
      tip: "Collocation: 'make a tackle'."
    },
    {
      q: "What were you watching on TV when I _______ you yesterday afternoon?",
      options: ["phoned", "was phoning", "phone", "am phoning"],
      a: "phoned",
      tip: "Short past event that interrupts: when I phoned."
    },
    {
      q: "A healthy diet and regular workouts help you keep _______ throughout the year.",
      options: ["fit", "match", "court", "coach"],
      a: "fit",
      tip: "'Keep fit' means maintain physical fitness."
    },
    {
      q: "The athletes _______ around the running track when the timer started.",
      options: ["were jogging", "jogged", "are jogging", "was jogging"],
      a: "were jogging",
      tip: "Past Continuous background action: were jogging."
    },
    {
      q: "Can you _______ table tennis using your left hand?",
      options: ["play", "do", "go", "make"],
      a: "play",
      tip: "'Play table tennis' (ball game)."
    },
    {
      q: "I fell off my skateboard while I _______ a new trick on the ramp.",
      options: ["was trying", "tried", "try", "am trying"],
      a: "was trying",
      tip: "Background action with 'while': was trying."
    },
    {
      q: "The golf _______ was in perfect condition for the international championship.",
      options: ["course", "court", "pitch", "ring"],
      a: "course",
      tip: "Golf is played on a golf 'course'."
    },
    {
      q: "They _______ dinner when the news of their victory was announced.",
      options: ["were having", "had", "are having", "was having"],
      a: "were having",
      tip: "Past Continuous: were having."
    },
    {
      q: "Let's _______ skiing in the mountains next January!",
      options: ["go", "do", "play", "make"],
      a: "go",
      tip: "'Go skiing' (-ing sport)."
    },
    {
      q: "He broke his arm when he _______ off his bicycle during the mountain race.",
      options: ["fell", "was falling", "falls", "fallen"],
      a: "fell",
      tip: "Past Simple: fell off."
    },
    {
      q: "The running _______ was wet and slippery after the sudden morning shower.",
      options: ["track", "court", "pitch", "ring"],
      a: "track",
      tip: "Athletics races take place on a running 'track'."
    },
    {
      q: "While the coach _______ the tactics, all players took careful notes.",
      options: ["was explaining", "explained", "explains", "were explaining"],
      a: "was explaining",
      tip: "Single coach: was explaining."
    },
    {
      q: "She _______ her opponent in straight sets to win the tennis trophy.",
      options: ["beat", "won", "gained", "scored"],
      a: "beat",
      tip: "You 'beat' an opponent/person, but you 'win' a trophy or game."
    }
  ]
};

const unit5 = {
  id: 5,
  title: "Call the Police!",
  subtitle: "Past narrative • Reflexive pronouns & Crime vocab",
  icon: "🚨",
  questions: [
    {
      q: "The masked _______ broke into the jewellery shop through the back window at night.",
      options: ["burglar", "pickpocket", "shoplifter", "vandal"],
      a: "burglar",
      tip: "A 'burglar' is someone who enters a building illegally to steal property."
    },
    {
      q: "Be careful with that sharp kitchen knife, or you will cut _______!",
      options: ["yourself", "myself", "himself", "each other"],
      a: "yourself",
      tip: "Reflexive pronoun matching subject 'you' is 'yourself'."
    },
    {
      q: "The dishonest cashier tried to _______ \$500 from the company's cash register.",
      options: ["steal", "rob", "burgle", "vandalise"],
      a: "steal",
      tip: "You 'steal' an object/money, but you 'rob' a person or a bank."
    },
    {
      q: "The police caught the _______ who spray-painted graffiti all over the school wall.",
      options: ["vandal", "pickpocket", "burglar", "thief"],
      a: "vandal",
      tip: "A 'vandal' is someone who deliberately damages or defaces public or private property."
    },
    {
      q: "Tom and David have known _______ since they were five years old.",
      options: ["each other", "themselves", "myself", "himself"],
      a: "each other",
      tip: "'Each other' shows a reciprocal relationship between two or more people."
    },
    {
      q: "Two armed men attempted to _______ the central city bank yesterday morning.",
      options: ["rob", "steal", "pickpocket", "vandalise"],
      a: "rob",
      tip: "You 'rob' a bank or a person (steal money from a place/person)."
    },
    {
      q: "A clever _______ managed to gain illegal access to the company's secure computer servers.",
      options: ["hacker", "burglar", "shoplifter", "vandal"],
      a: "hacker",
      tip: "A 'hacker' illegally accesses data in a computer system."
    },
    {
      q: "I looked at _______ in the mirror and noticed a smudge of black ink on my nose.",
      options: ["myself", "me", "himself", "each other"],
      a: "myself",
      tip: "Subject 'I' takes reflexive pronoun 'myself'."
    },
    {
      q: "Keep your wallet in your front pocket; crowded tourist areas often attract _______.",
      options: ["pickpockets", "hackers", "burglars", "judges"],
      a: "pickpockets",
      tip: "A 'pickpocket' steals things from people's pockets or bags in crowded public places."
    },
    {
      q: "The children prepared the entire breakfast all by _______ without any adult help.",
      options: ["themselves", "each other", "ourselves", "himself"],
      a: "themselves",
      tip: "Subject 'the children' (they) takes reflexive pronoun 'themselves'."
    },
    {
      q: "The security guard caught a _______ slipping an expensive perfume into her handbag.",
      options: ["shoplifter", "burglar", "hacker", "vandal"],
      a: "shoplifter",
      tip: "A 'shoplifter' steals goods from a shop while pretending to be a customer."
    },
    {
      q: "He accidentally burned _______ while taking the hot pizza tray out of the oven.",
      options: ["himself", "myself", "themselves", "each other"],
      a: "himself",
      tip: "Subject 'he' takes reflexive pronoun 'himself'."
    },
    {
      q: "The detective was investigating the _______ of several valuable oil paintings.",
      options: ["theft", "thief", "steal", "robber"],
      a: "theft",
      tip: "'Theft' is the noun meaning the crime of stealing property."
    },
    {
      q: "We introduced _______ to our new neighbours when they moved into the building.",
      options: ["ourselves", "each other", "themselves", "myself"],
      a: "ourselves",
      tip: "Subject 'we' takes reflexive pronoun 'ourselves'."
    },
    {
      q: "The burglar broke in while the owners _______ peacefully upstairs.",
      options: ["were sleeping", "slept", "are sleeping", "was sleeping"],
      a: "were sleeping",
      tip: "Past Continuous describes the background activity while the break-in occurred."
    },
    {
      q: "The two tennis finalists shook hands and congratulated _______ after the match.",
      options: ["each other", "themselves", "myself", "himself"],
      a: "each other",
      tip: "'Each other' shows mutual reciprocal action between the two finalists."
    },
    {
      q: "Someone _______ my bicycle from outside the library while I was studying.",
      options: ["stole", "robbed", "stealed", "was robbing"],
      a: "stole",
      tip: "'Stole' is the Past Simple of steal (used for objects like a bicycle)."
    },
    {
      q: "She taught _______ how to code in Python by reading tutorials online.",
      options: ["herself", "himself", "themselves", "myself"],
      a: "herself",
      tip: "Subject 'she' takes reflexive pronoun 'herself'."
    },
    {
      q: "Police warned residents about a recent increase in house _______ in the area.",
      options: ["burglaries", "hackers", "shoplifters", "pickpockets"],
      a: "burglaries",
      tip: "'Burglary' (plural: burglaries) is the crime of breaking into buildings to steal."
    },
    {
      q: "The cat saw _______ in the full-length mirror and puffed up its tail.",
      options: ["itself", "himself", "herself", "themselves"],
      a: "itself",
      tip: "Animals of unspecified gender take the reflexive pronoun 'itself'."
    },
    {
      q: "The robber threatened the shopkeeper and demanded all the cash in the register.",
      options: ["robber", "pickpocket", "hacker", "vandal"],
      a: "robber",
      tip: "A 'robber' steals from a person or place using threats or violence."
    },
    {
      q: "Did you and your sister enjoy _______ at the theme park yesterday?",
      options: ["yourselves", "yourself", "themselves", "each other"],
      a: "yourselves",
      tip: "Plural 'you' (you and your sister) takes reflexive pronoun 'yourselves'."
    },
    {
      q: "Someone has broken the bus shelter glass; it is pure _______.",
      options: ["vandalism", "theft", "burglary", "hacking"],
      a: "vandalism",
      tip: "'Vandalism' is the crime of deliberately damaging public or private property."
    },
    {
      q: "The bank _______ escaped in a black car waiting outside the building.",
      options: ["robbers", "hackers", "shoplifters", "pickpockets"],
      a: "robbers",
      tip: "People who rob a bank are called bank 'robbers'."
    },
    {
      q: "Peter blamed _______ for the team's defeat because he missed the final penalty.",
      options: ["himself", "myself", "each other", "themselves"],
      a: "himself",
      tip: "Subject 'Peter' (he) takes reflexive pronoun 'himself'."
    },
    {
      q: "The witness said she _______ the suspect running down the alley at 11 PM.",
      options: ["saw", "was seeing", "seen", "sees"],
      a: "saw",
      tip: "Completed past observation takes Past Simple: saw."
    },
    {
      q: "We looked at _______ and burst out laughing at how ridiculous we looked.",
      options: ["each other", "ourselves", "themselves", "myself"],
      a: "each other",
      tip: "Two people looking mutually at one another: 'each other'."
    },
    {
      q: "Cyber _______ is a serious modern crime that threatens financial institutions.",
      options: ["hacking", "shoplifting", "pickpocketing", "vandalism"],
      a: "hacking",
      tip: "Using computers to commit digital crimes is 'hacking'."
    },
    {
      q: "I pride _______ on always being punctual and prepared for meetings.",
      options: ["myself", "me", "himself", "each other"],
      a: "myself",
      tip: "'Pride myself on' is a reflexive collocation."
    },
    {
      q: "A _______ stole her smartphone while she was standing in the crowded subway car.",
      options: ["pickpocket", "burglar", "vandal", "hacker"],
      a: "pickpocket",
      tip: "Crowded public transit thefts are typical of a 'pickpocket'."
    },
    {
      q: "While the officer was questioning the suspect, another patrol car _______.",
      options: ["arrived", "was arriving", "arrives", "has arrived"],
      a: "arrived",
      tip: "Past Simple interrupting event: arrived."
    },
    {
      q: "The twins always help _______ with their mathematics homework.",
      options: ["each other", "themselves", "ourselves", "myself"],
      a: "each other",
      tip: "Mutual help between two people: each other."
    },
    {
      q: "He was arrested for _______ after taking clothes from three different department stores.",
      options: ["shoplifting", "burglary", "hacking", "vandalism"],
      a: "shoplifting",
      tip: "Stealing merchandise from stores is 'shoplifting'."
    },
    {
      q: "Make _______ at home while I prepare some tea in the kitchen.",
      options: ["yourself", "myself", "himself", "each other"],
      a: "yourself",
      tip: "Polite phrase: 'Make yourself at home'."
    },
    {
      q: "The thief _______ with a bag containing thousands of dollars in cash.",
      options: ["escaped", "was escaping", "escape", "escapes"],
      a: "escaped",
      tip: "Completed narrative past event: escaped."
    },
    {
      q: "The jury found the defendant guilty of grand _______.",
      options: ["theft", "thief", "steal", "stealing"],
      a: "theft",
      tip: "The legal crime name is 'theft'."
    },
    {
      q: "They built the wooden garden shed all by _______ over the weekend.",
      options: ["themselves", "each other", "ourselves", "himself"],
      a: "themselves",
      tip: "'By themselves' means alone without help."
    },
    {
      q: "Can you believe that somebody _______ my jacket while I was washing my hands?",
      options: ["stole", "robbed", "was stealing", "stealed"],
      a: "stole",
      tip: "You 'steal' an object (jacket)."
    },
    {
      q: "The two boxers respected _______ despite their intense rivalry in the ring.",
      options: ["each other", "themselves", "himself", "myself"],
      a: "each other",
      tip: "Mutual respect between two competitors: each other."
    },
    {
      q: "She managed to defend _______ using basic self-defence moves.",
      options: ["herself", "himself", "themselves", "each other"],
      a: "herself",
      tip: "Subject 'she' takes 'herself'."
    },
    {
      q: "Security cameras caught the _______ spraying paint onto the historical statue.",
      options: ["vandal", "pickpocket", "shoplifter", "burglar"],
      a: "vandal",
      tip: "Spraying paint on statues is an act by a 'vandal'."
    },
    {
      q: "We must protect _______ against online scams and fake websites.",
      options: ["ourselves", "each other", "themselves", "myself"],
      a: "ourselves",
      tip: "Subject 'we' takes 'ourselves'."
    },
    {
      q: "The police _______ the stolen jewels hidden beneath the floorboards.",
      options: ["discovered", "were discovering", "discover", "discovering"],
      a: "discovered",
      tip: "Past Simple completed finding: discovered."
    },
    {
      q: "The criminal was sentenced to three years in prison for bank _______.",
      options: ["robbery", "theft", "burglary", "shoplifting"],
      a: "robbery",
      tip: "The crime of taking money from a bank is bank 'robbery'."
    },
    {
      q: "You shouldn't blame _______ for an accident that wasn't your fault.",
      options: ["yourself", "myself", "himself", "each other"],
      a: "yourself",
      tip: "Subject 'you' takes 'yourself'."
    },
    {
      q: "The alarm went off while the intruder _______ through the cellar window.",
      options: ["was climbing", "climbed", "climbs", "is climbing"],
      a: "was climbing",
      tip: "Ongoing background action interrupted by the alarm: was climbing."
    },
    {
      q: "They haven't spoken to _______ since their big argument last month.",
      options: ["each other", "themselves", "myself", "ourselves"],
      a: "each other",
      tip: "Reciprocal communication: speak to each other."
    },
    {
      q: "He bought _______ a brand-new electric guitar with his savings.",
      options: ["himself", "herself", "myself", "each other"],
      a: "himself",
      tip: "Subject 'he' takes 'himself'."
    },
    {
      q: "A _______ took my purse from my open shopping bag on the bus.",
      options: ["pickpocket", "hacker", "vandal", "burglar"],
      a: "pickpocket",
      tip: "Stealing from an open purse in transit: pickpocket."
    },
    {
      q: "I hope you all enjoy _______ at the end-of-year school party tonight!",
      options: ["yourselves", "yourself", "themselves", "each other"],
      a: "yourselves",
      tip: "Addressing a group ('you all') takes 'yourselves'."
    }
  ]
};

module.exports = [unit1, unit2, unit3, unit4, unit5];
