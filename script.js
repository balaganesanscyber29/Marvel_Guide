/* =====================
   MOVIE DATABASE
===================== */
const MOVIE_DB = {
  // ── PHASE 1 ──
  "iron-man-2008": {
    title:"Iron Man", year:2008, runtime:"2h 6m", type:"Movie", phase:"Phase 1",
    rating:7.9, trailer:"https://www.youtube.com/watch?v=8ugaeA-nMTc",
    watch:"https://www.hotstar.com/in/movies/iron-man/1660000038",
    plot:"After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    director:"Jon Favreau", writer:"Mark Fergus, Hawk Ostby",
    cast:"Robert Downey Jr., Gwyneth Paltrow, Jeff Bridges, Terrence Howard",
    trivia:"Robert Downey Jr. improvised many of Tony Stark's lines. The suit weighed over 90 pounds and took 40 minutes to put on.",
    theme:"iron", img:"Images/Ironman.jpg"
  },
  "incredible-hulk-2008": {
    title:"The Incredible Hulk", year:2008, runtime:"1h 52m", type:"Movie", phase:"Phase 1",
    rating:6.7, trailer:"https://www.youtube.com/watch?v=xbqNb2PFKKA",
    watch:"https://www.hotstar.com/in/movies/the-incredible-hulk/1000046231",
    plot:"Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    director:"Louis Leterrier", writer:"Zak Penn",
    cast:"Edward Norton, Liv Tyler, Tim Roth, William Hurt",
    trivia:"Edward Norton rewrote large portions of the script. Tony Stark's post-credits cameo confirms the MCU shared universe.",
    theme:"iron", img:"Images/hulk.jpg"
  },
  "iron-man-2": {
    title:"Iron Man 2", year:2010, runtime:"2h 4m", type:"Movie", phase:"Phase 1",
    rating:7.0, trailer:"https://www.youtube.com/watch?v=BoohRoVA9WQ",
    watch:"https://www.hotstar.com/in/movies/iron-man-2/1660000039",
    plot:"With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad scientist.",
    director:"Jon Favreau", writer:"Justin Theroux",
    cast:"Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Mickey Rourke",
    trivia:"Don Cheadle replaced Terrence Howard as War Machine. The film introduces Black Widow and Nick Fury's expanded role in SHIELD.",
    theme:"iron", img:"Images/ironman2.jpg"
  },
  "thor-2011": {
    title:"Thor", year:2011, runtime:"1h 55m", type:"Movie", phase:"Phase 1",
    rating:7.0, trailer:"https://www.youtube.com/watch?v=JOddp-nlNvQ",
    watch:"https://www.hotstar.com/in/movies/thor/1660000044",
    plot:"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans, where he becomes one of their greatest defenders.",
    director:"Kenneth Branagh", writer:"Ashley Miller, Zack Stentz",
    cast:"Chris Hemsworth, Tom Hiddleston, Natalie Portman, Anthony Hopkins",
    trivia:"Kenneth Branagh's theatrical background influenced the Shakespearean family drama. Tom Hiddleston originally auditioned for Thor.",
    theme:"iron", img:"Images/thor.webp"
  },
  "captain-america-1": {
    title:"Captain America: The First Avenger", year:2011, runtime:"2h 4m", type:"Movie", phase:"Phase 1",
    rating:6.9, trailer:"https://www.youtube.com/watch?v=JerVrbLldXw",
    watch:"https://www.hotstar.com/in/movies/captain-america-the-first-avenger/1660000034",
    plot:"Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum.",
    director:"Joe Johnston", writer:"Christopher Markus, Stephen McFeely",
    cast:"Chris Evans, Hayley Atwell, Sebastian Stan, Tommy Lee Jones, Hugo Weaving",
    trivia:"Chris Evans almost turned down the role. The film establishes the Tesseract (Space Stone) as a key MCU artifact.",
    theme:"iron", img:"Images/cap1.jpg"
  },
  "avengers-2012": {
    title:"The Avengers", year:2012, runtime:"2h 23m", type:"Movie", phase:"Phase 1",
    rating:8.0, trailer:"https://www.youtube.com/watch?v=eOrNdBpGMv8",
    watch:"https://www.hotstar.com/in/movies/marvels-the-avengers/1660000015",
    plot:"Nick Fury of S.H.I.E.L.D. assembles a team of superhumans to help defend Earth from the Asgardian Loki and his alien army.",
    director:"Joss Whedon", writer:"Joss Whedon, Zak Penn",
    cast:"Robert Downey Jr., Chris Evans, Chris Hemsworth, Scarlett Johansson, Mark Ruffalo, Jeremy Renner",
    trivia:"The 'Hulk smash Loki' scene was improvised by Mark Ruffalo and Tom Hiddleston. Thanos appears in the post-credits scene.",
    theme:"iron", img:"Images/avengers.jpg"
  },
  // ── PHASE 2 ──
  "iron-man-3": {
    title:"Iron Man 3", year:2013, runtime:"2h 10m", type:"Movie", phase:"Phase 2",
    rating:7.1, trailer:"https://www.youtube.com/watch?v=2CzoSeClcw0",
    watch:"https://www.hotstar.com/in/movies/iron-man-3/1660000042",
    plot:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    director:"Shane Black", writer:"Drew Pearce, Shane Black",
    cast:"Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Guy Pearce, Ben Kingsley",
    trivia:"Shane Black's signature Christmas setting appears again. The Mandarin twist was one of the most debated MCU moments.",
    theme:"iron", img:"Images/ironman3.jpg"
  },
  "thor-2": {
    title:"Thor: The Dark World", year:2013, runtime:"1h 52m", type:"Movie", phase:"Phase 2",
    rating:6.8, trailer:"https://www.youtube.com/watch?v=npvJ9FTgZbM",
    watch:"https://www.hotstar.com/in/movies/thor-the-dark-world/1260018142",
    plot:"When Jane Foster is possessed by the Aether, Thor must protect her from the Dark Elves and their ancient vendetta against the Nine Realms.",
    director:"Alan Taylor", writer:"Christopher Yost, Christopher Markus",
    cast:"Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins, Christopher Eccleston",
    trivia:"The Aether is later revealed to be the Reality Stone (Infinity Stone). Loki's fake death was so convincing that cast members genuinely cried.",
    theme:"iron", img:"Images/thor2.jpg"
  },
  "cap-winter-soldier": {
    title:"Captain America: The Winter Soldier", year:2014, runtime:"2h 16m", type:"Movie", phase:"Phase 2",
    rating:7.8, trailer:"https://www.youtube.com/watch?v=7SlILk2WMTI",
    watch:"https://www.hotstar.com/in/movies/captain-america-the-winter-soldier/1260016410",
    plot:"Steve Rogers teams up with Black Widow to uncover a conspiracy within S.H.I.E.L.D. and battles a mysterious assassin known as the Winter Soldier.",
    director:"Anthony & Joe Russo", writer:"Christopher Markus, Stephen McFeely",
    cast:"Chris Evans, Scarlett Johansson, Sebastian Stan, Anthony Mackie, Robert Redford",
    trivia:"Robert Redford compared the film to 1970s political thrillers. S.H.I.E.L.D.'s dissolution permanently changed the MCU's landscape.",
    theme:"iron", img:"Images/cap2.jpg"
  },
  "gotg-1": {
    title:"Guardians of the Galaxy", year:2014, runtime:"2h 1m", type:"Movie", phase:"Phase 2",
    rating:8.0, trailer:"https://www.youtube.com/watch?v=d96cjJhvlMA",
    watch:"https://www.hotstar.com/in/movies/guardians-of-the-galaxy/1260018294",
    plot:"A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    director:"James Gunn", writer:"James Gunn, Nicole Perlman",
    cast:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper, Lee Pace",
    trivia:"James Gunn wrote the script in three weeks. The film's mix of humour and heart transformed MCU's tone forever.",
    theme:"iron", img:"Images/gotg.jpg"
  },
  "age-of-ultron": {
    title:"Avengers: Age of Ultron", year:2015, runtime:"2h 21m", type:"Movie", phase:"Phase 2",
    rating:7.3, trailer:"https://www.youtube.com/watch?v=tmeOjFno6Do",
    watch:"https://www.hotstar.com/in/movies/marvels-avengers-age-of-ultron/1260018315",
    plot:"When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program, things go awry and it's up to the Avengers to stop the villainous Ultron.",
    director:"Joss Whedon", writer:"Joss Whedon",
    cast:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, James Spader, Paul Bettany",
    trivia:"James Spader wore a motion-capture suit for Ultron. Vision is born from the Mind Stone — a pivotal Infinity Stone moment.",
    theme:"iron", img:"Images/ultron.jpg"
  },
  "ant-man-1": {
    title:"Ant-Man", year:2015, runtime:"1h 57m", type:"Movie", phase:"Phase 2",
    rating:7.3, trailer:"https://www.youtube.com/watch?v=pWdKf3MneyI",
    watch:"https://www.hotstar.com/in/movies/ant-man/1260018141",
    plot:"Armed with the ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero to help Hank Pym protect the Ant-Man suit.",
    director:"Peyton Reed", writer:"Edgar Wright, Joe Cornish, Adam McKay, Paul Rudd",
    cast:"Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll, Michael Peña",
    trivia:"Edgar Wright developed the project for nearly a decade before departing. The Quantum Realm is introduced here, pivotal for Endgame.",
    theme:"iron", img:"Images/antman.jpg"
  },
  // ── PHASE 3 ──
  "civil-war": {
    title:"Captain America: Civil War", year:2016, runtime:"2h 27m", type:"Movie", phase:"Phase 3",
    rating:7.8, trailer:"https://www.youtube.com/watch?v=dKrVegVI0Us",
    watch:"https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768",
    plot:"Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man, while a new danger emerges.",
    director:"Anthony & Joe Russo", writer:"Christopher Markus, Stephen McFeely",
    cast:"Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Chadwick Boseman, Tom Holland",
    trivia:"Spider-Man's MCU debut and Black Panther's introduction. The airport battle scene featured 12 superheroes and took 3 months to film.",
    theme:"iron", img:"Images/civilwar.jpg"
  },
  "doctor-strange-1": {
    title:"Doctor Strange", year:2016, runtime:"1h 55m", type:"Movie", phase:"Phase 3",
    rating:7.5, trailer:"https://www.youtube.com/watch?v=Lt-U_t2pUHI",
    watch:"https://www.hotstar.com/in/movies/doctor-strange/1260018179?search_query=doctor+strange",
    plot:"A brilliant neurosurgeon discovers the world of magic and alternate dimensions after a horrific car accident.",
    director:"Scott Derrickson", writer:"Jon Spaihts, Scott Derrickson, C. Robert Cargill",
    cast:"Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Tilda Swinton, Mads Mikkelsen",
    trivia:"The mirror dimension effects required building new physics simulations. Benedict Cumberbatch learned magic tricks for 6 months.",
    theme:"iron", img:"Images/drstrange.jpg"
  },
  "gotg-2": {
    title:"Guardians of the Galaxy Vol. 2", year:2017, runtime:"2h 16m", type:"Movie", phase:"Phase 3",
    rating:7.6, trailer:"https://www.youtube.com/watch?v=dW1BIid8Osg",
    watch:"https://www.hotstar.com/in/movies/guardians-of-the-galaxy-vol-2/1260018295?search_query=gotg2",
    plot:"The Guardians struggle to keep their team together as they unravel the mystery of Peter Quill's true parentage.",
    director:"James Gunn", writer:"James Gunn",
    cast:"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper, Kurt Russell, Sylvester Stallone",
    trivia:"Kurt Russell plays Ego, a living planet. The film has 5 post-credits scenes — the most in MCU history at the time.",
    theme:"iron", img:"Images/gotg2.jpg"
  },
  "homecoming": {
    title:"Spider-Man: Homecoming", year:2017, runtime:"2h 13m", type:"Movie", phase:"Phase 3",
    rating:7.4, trailer:"https://www.youtube.com/watch?v=rk-dF1lIbIg",
    watch:"https://www.primevideo.com/detail/0Q37VQS7FS9TY96F1SGZSPXEFP/ref=atv_sr_fle_c_sre30869_pvsearchresults_1_1",
    plot:"Peter Parker balances his life as a high school student in New York City while saving the world as Spider-Man.",
    director:"Jon Watts", writer:"Jonathan Goldstein, John Francis Daley",
    cast:"Tom Holland, Michael Keaton, Robert Downey Jr., Marisa Tomei, Jon Favreau",
    trivia:"Tom Holland was kept secret from most of the cast. Michael Keaton's Vulture reveal was called the best MCU villain scene.",
    theme:"iron", img:"Images/homecoming.jpg"
  },
  "ragnarok": {
    title:"Thor: Ragnarok", year:2017, runtime:"2h 10m", type:"Movie", phase:"Phase 3",
    rating:7.9, trailer:"https://www.youtube.com/watch?v=ue80QwXMRHg",
    watch:"https://www.hotstar.com/in/movies/thor-ragnarok/1660010577?search_query=rag",
    plot:"Thor must fight his way out of an alien planet and race against time to stop Ragnarök, the destruction of his homeworld.",
    director:"Taika Waititi", writer:"Eric Pearson, Craig Kyle, Christopher Yost",
    cast:"Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Tessa Thompson, Mark Ruffalo, Jeff Goldblum",
    trivia:"~80% of the film was improvised. Taika Waititi voices Korg, a fan-favourite character. Sets were deliberately retro-cosmic.",
    theme:"iron", img:"Images/thor3.jpg"
  },
  "black-panther-1": {
    title:"Black Panther", year:2018, runtime:"2h 14m", type:"Movie", phase:"Phase 3",
    rating:7.3, trailer:"https://www.youtube.com/watch?v=xjDjIWPwcPU",
    watch:"https://www.hotstar.com/in/movies/black-panther/1660010672?search_query=Black+panther",
    plot:"T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.",
    director:"Ryan Coogler", writer:"Ryan Coogler, Joe Robert Cole",
    cast:"Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Angela Bassett, Forest Whitaker",
    trivia:"First MCU film to be nominated for Best Picture at the Oscars. Chadwick Boseman prepared by travelling to Africa.",
    theme:"iron", img:"Images/blackpanther.jpeg"
  },
  "infinity-war": {
    title:"Avengers: Infinity War", year:2018, runtime:"2h 29m", type:"Movie", phase:"Phase 3",
    rating:8.4, trailer:"https://www.youtube.com/watch?v=6ZfuNTqbHE8",
    watch:"https://www.hotstar.com/in/movies/avengers-infinity-war/1660010677?search_query=infinity+war",
    plot:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the almighty Thanos before his blitz of devastation and ruin puts an end to the universe.",
    director:"Anthony & Joe Russo", writer:"Christopher Markus, Stephen McFeely",
    cast:"Robert Downey Jr., Chris Evans, Chris Hemsworth, Josh Brolin, Scarlett Johansson, Tom Holland, Chadwick Boseman",
    trivia:"Josh Brolin used golf balls to simulate the Infinity Stones' weight. The snap ending was kept secret — even from most of the cast.",
    theme:"iron", img:"Images/infinitywar.jpg"
  },
  "antman-wasp": {
    title:"Ant-Man and the Wasp", year:2018, runtime:"1h 58m", type:"Movie", phase:"Phase 3",
    rating:7.1, trailer:"https://www.youtube.com/watch?v=8_rTIAOohas",
    watch:"https://www.hotstar.com/in/movies/ant-man-and-the-wasp/1660010696?search_query=antman+and+the+wasp",
    plot:"As Scott Lang deals with the consequences of his choices as both a Super Hero and a father, he and Hope van Dyne team up to battle a mysterious villain.",
    director:"Peyton Reed", writer:"Chris McKenna, Erik Sommers, Paul Rudd",
    cast:"Paul Rudd, Evangeline Lilly, Michael Douglas, Michael Peña, Hannah John-Kamen, Laurence Fishburne",
    trivia:"The first MCU film with a female hero in the title. Janet van Dyne's Quantum Realm journey becomes crucial in Endgame.",
    theme:"iron", img:"Images/antman2.jpg"
  },
  "captain-marvel": {
    title:"Captain Marvel", year:2019, runtime:"2h 4m", type:"Movie", phase:"Phase 3",
    rating:6.9, trailer:"https://www.youtube.com/watch?v=Z1BCujX3pw8",
    watch:"https://www.hotstar.com/in/movies/captain-marvel/1260014878?search_query=captain+marvel",
    plot:"Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war.",
    director:"Anna Boden, Ryan Fleck", writer:"Anna Boden, Ryan Fleck, Geneva Robertson-Dworet",
    cast:"Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law, Annette Bening",
    trivia:"Set in the 1990s — Nick Fury loses his eye to a cat (Flerken). The de-ageing VFX on Samuel L. Jackson is the most praised in the MCU.",
    theme:"iron", img:"Images/captainmarvel.jpg"
  },
  "endgame": {
    title:"Avengers: Endgame", year:2019, runtime:"3h 1m", type:"Movie", phase:"Phase 3",
    rating:8.4, trailer:"https://www.youtube.com/watch?v=TcMBFSGVi1c",
    watch:"https://www.hotstar.com/in/movies/avengers-endgame/1260013556?search_query=endgame",
    plot:"After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    director:"Anthony & Joe Russo", writer:"Christopher Markus, Stephen McFeely",
    cast:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Paul Rudd",
    trivia:"Became the highest-grossing film of all time (temporarily). The 'I am Iron Man' line was not in the original script — added in reshoots.",
    theme:"iron", img:"Images/endgame.jpg"
  },
  "ffh": {
    title:"Spider-Man: Far From Home", year:2019, runtime:"2h 9m", type:"Movie", phase:"Phase 3",
    rating:7.4, trailer:"https://www.youtube.com/watch?v=Nt9L1jCKGnE",
    watch:"https://www.primevideo.com/detail/0Q7JJNEW096GSEAARVVLXNQSMY/ref=atv_sr_fle_c_sr782405_pvsearchresults_1_1",
    plot:"Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    director:"Jon Watts", writer:"Chris McKenna, Erik Sommers",
    cast:"Tom Holland, Samuel L. Jackson, Zendaya, Jake Gyllenhaal, Jon Favreau, Cobie Smulders",
    trivia:"Jake Gyllenhaal's Mysterio was chosen because Quentin Beck is the kind of villain only a post-Endgame world could produce.",
    theme:"iron", img:"Images/ffh.jpg"
  },
  // ── PHASE 4 ──
  "wandavision": {
    title:"WandaVision", year:2021, runtime:"30–40m / ep", type:"Series", phase:"Phase 4",
    rating:7.9, trailer:"https://www.youtube.com/watch?v=sj9J2ecsSpo",
    watch:"https://www.hotstar.com/in/shows/wandavision/1260051344?search_query=wanda",
    plot:"Wanda Maximoff and Vision live idealized suburban lives — but begin to suspect that everything is not as it seems.",
    director:"Matt Shakman", writer:"Jac Schaeffer",
    cast:"Elizabeth Olsen, Paul Bettany, Kathryn Hahn, Teyonah Parris, Randall Park",
    trivia:"The sitcom format homaged every era of American television. Agatha Harkness's reveal — and the Scarlet Witch prophecy — set up MoM.",
    theme:"iron", img:"Images/wandavision.jpg"
  },
  "falcon-winter-soldier": {
    title:"The Falcon and the Winter Soldier", year:2021, runtime:"~50m / ep", type:"Series", phase:"Phase 4",
    rating:7.2, trailer:"https://www.youtube.com/watch?v=IWBsDaFWyTE",
    watch:"https://www.hotstar.com/in/shows/the-falcon-and-the-winter-soldier/1260055670?search_query=falcon",
    plot:"Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience with each other.",
    director:"Kari Skogland", writer:"Malcolm Spellman",
    cast:"Anthony Mackie, Sebastian Stan, Daniel Brühl, Emily VanCamp, Wyatt Russell",
    trivia:"Sam Wilson officially becomes Captain America. The Flag Smashers storyline was inspired by real-world displacement issues.",
    theme:"iron", img:"Images/falcon.jpg"
  },
  "loki-s1": {
    title:"Loki — Season 1", year:2021, runtime:"~50m / ep", type:"Series", phase:"Phase 4",
    rating:8.2, trailer:"https://www.youtube.com/watch?v=nW948Va-l10",
    watch:"https://www.hotstar.com/in/shows/loki/1260063451?search_query=loki",
    plot:"The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.",
    director:"Kate Herron", writer:"Michael Waldron",
    cast:"Tom Hiddleston, Sophia Di Martino, Owen Wilson, Gugu Mbatha-Raw, Jonathan Majors",
    trivia:"He Who Remains (Jonathan Majors) introduction is arguably the most important MCU post-Endgame moment — directly leading to Doomsday.",
    theme:"iron", img:"Images/loki_s1.jpeg"
  },
  "black-widow": {
    title:"Black Widow", year:2021, runtime:"2h 14m", type:"Movie", phase:"Phase 4",
    rating:6.7, trailer:"https://www.youtube.com/watch?v=RxAtuMu_ph4",
    watch:"https://www.hotstar.com/in/movies/black-widow/1260067485?search_query=black+widow",
    plot:"Natasha Romanoff confronts the darker parts of her ledger and is forced to deal with her history as a spy and the broken relationships left in her wake.",
    director:"Cate Shortland", writer:"Eric Pearson",
    cast:"Scarlett Johansson, Florence Pugh, David Harbour, Rachel Weisz, Ray Winstone",
    trivia:"Set between Civil War and Infinity War. Florence Pugh's Yelena Belova was immediately beloved — set up for future MCU stories.",
    theme:"iron", img:"Images/bwidow.jpg"
  },
  "what-if-s1": {
    title:"What If…?", year:2021, runtime:"~30m / ep", type:"Animated Series", phase:"Phase 4",
    rating:7.4, trailer:"https://www.youtube.com/watch?v=x9D0uUKJ5KI",
    watch:"https://www.hotstar.com/in/shows/what-if/1260066057?search_query=what+if",
    plot:"The Watcher explores alternate versions of key MCU events — asking 'what if' history unfolded differently.",
    director:"Bryan Andrews", writer:"A.C. Bradley",
    cast:"Jeffrey Wright, Lake Bell, Josh Brolin, Chadwick Boseman, Michael B. Jordan (voices)",
    trivia:"One of the last Chadwick Boseman performances — his T'Challa Star-Lord became a fan favourite. First animated MCU content.",
    theme:"iron", img:"Images/whatif.jpg"
  },
  "shang-chi": {
    title:"Shang-Chi and the Legend of the Ten Rings", year:2021, runtime:"2h 12m", type:"Movie", phase:"Phase 4",
    rating:7.4, trailer:"https://www.youtube.com/watch?v=8YjFbMbfXaQ",
    watch:"https://www.hotstar.com/in/movies/shang-chi-and-the-legend-of-the-ten-rings/1260072682?search_query=shang+chi",
    plot:"Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organisation.",
    director:"Destin Daniel Cretton", writer:"Dave Callaham, Destin Daniel Cretton",
    cast:"Simu Liu, Tony Leung, Awkwafina, Meng'er Zhang, Ben Kingsley",
    trivia:"The Ten Rings of the title have existed in the MCU since Iron Man (2008). Tony Leung's Xu Wenwu is widely praised as the best MCU father figure.",
    theme:"iron", img:"Images/shangchi.jpeg"
  },
  "eternals": {
    title:"Eternals", year:2021, runtime:"2h 37m", type:"Movie", phase:"Phase 4",
    rating:6.3, trailer:"https://www.youtube.com/watch?v=x_me3xsvDgk",
    watch:"https://www.hotstar.com/in/movies/eternals/1260077949?search_query=eternals",
    plot:"The Eternals, an immortal alien race created by the Celestials, have secretly lived on Earth for thousands of years reuniting to protect humanity from their evil counterparts, the Deviants.",
    director:"Chloé Zhao", writer:"Chloé Zhao, Patrick Burleigh",
    cast:"Gemma Chan, Richard Madden, Angelina Jolie, Salma Hayek, Kit Harington, Kumail Nanjiani, Barry Keoghan",
    trivia:"First MCU film by an Oscar-winning director. Tiamut's emergence is directly referenced in Captain America: Brave New World.",
    theme:"iron", img:"Images/eternals.jpeg"
  },
  "hawkeye": {
    title:"Hawkeye", year:2021, runtime:"~50m / ep", type:"Series", phase:"Phase 4",
    rating:7.5, trailer:"https://www.youtube.com/watch?v=5VYb3B1ETlk",
    watch:"https://www.hotstar.com/in/shows/hawkeye/1260073683?search_query=hawkeye",
    plot:"Clint Barton must team up with a young archer who has taken on his Hawkeye identity to confront enemies from his past.",
    director:"Rhys Thomas, Bert & Bertie", writer:"Jonathan Igla",
    cast:"Jeremy Renner, Hailee Steinfeld, Vera Farmiga, Fra Fee, Tony Dalton, Florence Pugh",
    trivia:"Kate Bishop's debut and the Echo (Maya Lopez) introduction. Vincent D'Onofrio reprises Kingpin from Daredevil.",
    theme:"iron", img:"Images/hawkeye.jpg"
  },
  "no-way-home": {
    title:"Spider-Man: No Way Home", year:2021, runtime:"2h 28m", type:"Movie", phase:"Phase 4",
    rating:8.3, trailer:"https://www.youtube.com/watch?v=JfVOs4VSpmA",
    watch:"https://www.primevideo.com/detail/0K2K4N25VGA0GOABHNZ2AXJPF7/ref=atv_sr_fle_c_sre30869_pvsearchresults_1_1",
    plot:"With Spider-Man's identity revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    director:"Jon Watts", writer:"Chris McKenna, Erik Sommers",
    cast:"Tom Holland, Zendaya, Benedict Cumberbatch, Andrew Garfield, Tobey Maguire, Alfred Molina, Jamie Foxx",
    trivia:"Tobey Maguire and Andrew Garfield were kept absolutely secret until release. Became one of the highest-grossing films of all time.",
    theme:"iron", img:"Images/nowayhome.jpg"
  },
  "moon-knight": {
    title:"Moon Knight", year:2022, runtime:"~45m / ep", type:"Series", phase:"Phase 4",
    rating:7.3, trailer:"https://www.youtube.com/watch?v=x7Krla_UxRg",
    watch:"https://www.hotstar.com/in/shows/moon-knight/1260089681?search_query=moon+knight",
    plot:"A mild-mannered gift shop employee becomes embroiled in a deadly mystery involving Egyptian gods, when he discovers he has dissociative identity disorder.",
    director:"Mohamed Diab, Justin Benson, Aaron Moorhead", writer:"Jeremy Slater",
    cast:"Oscar Isaac, Ethan Hawke, May Calamawy, F. Murray Abraham",
    trivia:"Oscar Isaac reportedly cried reading the scripts. The Egyptian mythology was researched extensively with cultural consultants.",
    theme:"iron", img:"Images/moonknight.jpg"
  },
  "mom": {
    title:"Doctor Strange in the Multiverse of Madness", year:2022, runtime:"2h 6m", type:"Movie", phase:"Phase 4",
    rating:6.9, trailer:"https://www.youtube.com/watch?v=aWzlQ2N6qqg",
    watch:"https://www.hotstar.com/in/movies/doctor-strange-in-the-multiverse-of-madness/1260103761?search_query=multiverse",
    plot:"Doctor Strange teams with a mysterious new ally who has the ability to travel between multiverses — while facing a surprising enemy.",
    director:"Sam Raimi", writer:"Michael Waldron",
    cast:"Benedict Cumberbatch, Elizabeth Olsen, Xochitl Gomez, Benedict Wong, Rachel McAdams, Chiwetel Ejiofor",
    trivia:"Sam Raimi's horror sensibility made this the scariest MCU film. The Illuminati sequence — featuring Patrick Stewart — sent fans wild.",
    theme:"iron", img:"Images/mom.webp"
  },
  "ms-marvel": {
    title:"Ms. Marvel", year:2022, runtime:"~40m / ep", type:"Series", phase:"Phase 4",
    rating:6.2, trailer:"https://www.youtube.com/watch?v=m9EX0f6V11Y",
    watch:"https://www.hotstar.com/in/shows/ms-marvel/1260098459?search_query=ms+marvel",
    plot:"Kamala Khan, a Pakistani-American teenager, idolises the Avengers and gains cosmic powers, becoming the superhero Ms. Marvel.",
    director:"Adil El Arbi, Bilall Fallah, Meera Menon, Sharmeen Obaid-Chinoy", writer:"Bisha K. Ali",
    cast:"Iman Vellani, Matt Lintz, Yasmeen Fletcher, Rish Shah, Aramis Knight",
    trivia:"Kamala is the first Muslim superhero headlining their own MCU project. Her power set was changed from comics to hard-light constructs.",
    theme:"iron", img:"Images/msmarvel.jpg"
  },
  "love-and-thunder": {
    title:"Thor: Love and Thunder", year:2022, runtime:"1h 59m", type:"Movie", phase:"Phase 4",
    rating:6.2, trailer:"https://www.youtube.com/watch?v=tgB1wUcmbbw",
    watch:"https://www.hotstar.com/in/movies/thor-love-and-thunder/1260110008?search_query=thor+4",
    plot:"Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster, who now unexpectedly wields Mjolnir, to stop Gorr the God Butcher.",
    director:"Taika Waititi", writer:"Taika Waititi, Jennifer Kaytin Robinson",
    cast:"Chris Hemsworth, Natalie Portman, Tessa Thompson, Christian Bale, Russell Crowe",
    trivia:"Christian Bale researched Gorr extensively. Jane Foster becoming Thor is straight from Jason Aaron's beloved comic run.",
    theme:"iron", img:"Images/thor4.jpeg"
  },
  "she-hulk": {
    title:"She-Hulk: Attorney at Law", year:2022, runtime:"~30m / ep", type:"Series", phase:"Phase 4",
    rating:5.5, trailer:"https://www.youtube.com/watch?v=u7JsKhI2An0",
    watch:"https://www.hotstar.com/in/shows/she-hulk-attorney-at-law/1260103788?search_query=she+hulk",
    plot:"Jennifer Walters, attorney specialising in superhuman-oriented legal cases, navigates life as a seven-foot-tall green superhero.",
    director:"Kat Coiro, Anu Valia", writer:"Jessica Gao",
    cast:"Tatiana Maslany, Mark Ruffalo, Tim Roth, Jameela Jamil, Ginger Gonzaga",
    trivia:"The show regularly breaks the fourth wall — an MCU first in live action. Daredevil's appearance caused a frenzy.",
    theme:"iron", img:"Images/shehulk.jpg"
  },
  "wakanda-forever": {
    title:"Black Panther: Wakanda Forever", year:2022, runtime:"2h 41m", type:"Movie", phase:"Phase 4",
    rating:6.7, trailer:"https://www.youtube.com/watch?v=_Z3QKkl1WyM",
    watch:"https://www.hotstar.com/in/movies/black-panther-wakanda-forever/1260118821?search_query=wakanda",
    plot:"Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death.",
    director:"Ryan Coogler", writer:"Ryan Coogler, Joe Robert Cole",
    cast:"Letitia Wright, Angela Bassett, Tenoch Huerta, Lupita Nyong'o, Danai Gurira, Martin Freeman",
    trivia:"Made as a tribute to Chadwick Boseman, who died in 2020. Angela Bassett's performance was Oscar-nominated.",
    theme:"iron", img:"Images/wakandaforever.jpg"
  },
  "werewolf-by-night": {
    title:"Werewolf by Night", year:2022, runtime:"52m", type:"Special", phase:"Phase 4",
    rating:7.3, trailer:"https://www.youtube.com/watch?v=bLEFqhS5WmI",
    watch:"https://www.hotstar.com/in/movies/werewolf-by-night/1260155694",
    plot:"A secret group of monster hunters gather at Bloodstone Temple following the death of their leader, hiding a dangerous monster within their midst.",
    director:"Michael Giacchino", writer:"Heather Quinn, Peter Cameron",
    cast:"Gael García Bernal, Laura Donnelly, Harriet Sansom Harris",
    trivia:"Filmed in black-and-white as a love letter to classic Universal monster movies. First MCU entry directed by a composer.",
    theme:"iron", img:"Images/werewolf.webp"
  },
  "gotg-holiday": {
    title:"The Guardians of the Galaxy Holiday Special", year:2022, runtime:"44m", type:"Special", phase:"Phase 4",
    rating:7.2, trailer:"https://www.youtube.com/watch?v=OYhFFQl4fLs",
    watch:"https://www.hotstar.com/in/movies/the-guardians-of-the-galaxy-holiday-special/1260111097?search_query=gotg",
    plot:"The Guardians set out on a mission to make Christmas perfect for Peter Quill — by kidnapping Kevin Bacon.",
    director:"James Gunn", writer:"James Gunn",
    cast:"Chris Pratt, Dave Bautista, Pom Klementieff, Kevin Bacon, Michael Rooker",
    trivia:"Mantis reveals she is Peter's sister. Knowhere becoming the Guardians' base is established here before Vol. 3.",
    theme:"iron", img:"Images/gotg_holiday.jpg"
  },
  // ── PHASE 5 ──
  "quantumania": {
    title:"Ant-Man and the Wasp: Quantumania", year:2023, runtime:"2h 5m", type:"Movie", phase:"Phase 5",
    rating:6.1, trailer:"https://www.youtube.com/watch?v=ZlNFpri-Y40",
    watch:"https://www.hotstar.com/in/movies/ant-man-and-the-wasp-quantumania/1260140795?search_query=quantum",
    plot:"Scott Lang and Hope Van Dyne are sucked into the Quantum Realm with their family — where they encounter Kang the Conqueror.",
    director:"Peyton Reed", writer:"Jeff Loveness",
    cast:"Paul Rudd, Evangeline Lilly, Jonathan Majors, Michael Douglas, Michelle Pfeiffer, Kathryn Newton, Bill Murray",
    trivia:"Jonathan Majors' Kang becomes the central MCU villain. The Quantum Realm is now fully established as a multiverse gateway.",
    theme:"iron", img:"Images/quantumania.jpg"
  },
  "gotg-3": {
    title:"Guardians of the Galaxy Vol. 3", year:2023, runtime:"2h 30m", type:"Movie", phase:"Phase 5",
    rating:7.9, trailer:"https://www.youtube.com/watch?v=u3V5KDHRQvk",
    watch:"https://www.hotstar.com/in/movies/guardians-of-the-galaxy-vol-3/1260143699?search_query=gotg+3",
    plot:"The Guardians embark on a mission to protect Rocket — whose past is darker than anyone knew — which puts the team's very existence at risk.",
    director:"James Gunn", writer:"James Gunn",
    cast:"Chris Pratt, Zoe Saldana, Dave Bautista, Bradley Cooper, Vin Diesel, Pom Klementieff, Karen Gillan, Will Poulter",
    trivia:"James Gunn's emotional farewell to the Guardians. Rocket's origin — and Bradley Cooper's voice performance — drew widespread praise.",
    theme:"iron", img:"Images/gotg3.webp"
  },
  "secret-invasion": {
    title:"Secret Invasion", year:2023, runtime:"~45m / ep", type:"Series", phase:"Phase 5",
    rating:5.9, trailer:"https://www.youtube.com/watch?v=qZVTkn2NjS0",
    watch:"https://www.hotstar.com/in/shows/secret-invasion/1260111182?search_query=secret+invasion",
    plot:"Nick Fury and Talos discover a faction of shape-shifting Skrulls who have been infiltrating the highest levels of society.",
    director:"Ali Selim", writer:"Kyle Bradstreet",
    cast:"Samuel L. Jackson, Ben Mendelsohn, Emilia Clarke, Olivia Colman, Kingsley Ben-Adir",
    trivia:"G'iah (Emilia Clarke) becomes arguably the most powerful being in the MCU by the finale.",
    theme:"iron", img:"Images/secretinvasion.jpg"
  },
  "loki-s2": {
    title:"Loki — Season 2", year:2023, runtime:"~55m / ep", type:"Series", phase:"Phase 5",
    rating:8.3, trailer:"https://www.youtube.com/watch?v=dug56u8NN7g",
    watch:"https://www.hotstar.com/in/shows/loki/1260063451?search_query=loki+2",
    plot:"Loki must race against time to save the TVA and his friends as the Sacred Timeline continues to fracture dangerously.",
    director:"Justin Benson, Aaron Moorhead", writer:"Eric Martin",
    cast:"Tom Hiddleston, Sophia Di Martino, Owen Wilson, Ke Huy Quan, Rafael Casal, Jonathan Majors",
    trivia:"Loki's ending — weaving the multiverse into the World Tree — is one of the most emotional MCU conclusions. Ke Huy Quan won an Emmy.",
    theme:"iron", img:"Images/loki_s2.jpg"
  },
  "the-marvels": {
    title:"The Marvels", year:2023, runtime:"1h 45m", type:"Movie", phase:"Phase 5",
    rating:5.9, trailer:"https://www.youtube.com/watch?v=wS_qbDztgVY",
    watch:"https://www.hotstar.com/in/movies/the-marvels/1260167860?search_query=marvels",
    plot:"Carol Danvers, Kamala Khan and Monica Rambeau must work together to untangle their entangled powers while fighting a villain intent on revenge.",
    director:"Nia DaCosta", writer:"Megan McDonnell",
    cast:"Brie Larson, Teyonah Parris, Iman Vellani, Zawe Ashton, Samuel L. Jackson",
    trivia:"The three heroes' power-swapping mechanic was inspired by a quantum entanglement concept. Fastest MCU film runtime at 105 minutes.",
    theme:"iron", img:"Images/themarvels.jpeg"
  },
  "echo": {
    title:"Echo", year:2024, runtime:"~42m / ep", type:"Series", phase:"Phase 5",
    rating:6.4, trailer:"https://www.youtube.com/watch?v=AFUKnherhuw",
    watch:"https://www.hotstar.com/in/shows/echo/1260157856?search_query=echo",
    plot:"Maya Lopez returns to her hometown and confronts her own complicated past while trying to find a way to live with her history.",
    director:"Sydney Freeland, Catriona McKenzie", writer:"Marion Dayre",
    cast:"Alaqua Cox, Charlie Cox, Vincent D'Onofrio, Devery Jacobs, Graham Greene",
    trivia:"First MCU project rated MA/TV-MA. First to star a Native American lead. Daredevil and Kingpin appear prominently.",
    theme:"iron", img:"Images/echo.jpeg"
  },
  "xmen97": {
    title:"X-Men '97", year:2024, runtime:"~30m / ep", type:"Animated Series", phase:"Phase 5",
    rating:8.6, trailer:"https://www.youtube.com/watch?v=pv3Ss8o9gGQ",
    watch:"https://www.hotstar.com/in/shows/x-men-97/1271269313?search_query=xmen97",
    plot:"The X-Men, thought disbanded, are called back into action by a world that still fears and hates mutants.",
    director:"Dirk Edwards", writer:"Beau DeMayo",
    cast:"Cal Dodd, Jennifer Hale, Ray Chase, Alison Sealy-Smith, George Buza (voices)",
    trivia:"Won an Emmy. The Genosha episode was called one of the best individual superhero stories ever made. Connects to MCU multiverse.",
    theme:"xmen", img:"Images/xmen97.jpg"
  },
  "deadpool-wolverine": {
    title:"Deadpool & Wolverine", year:2024, runtime:"2h 7m", type:"Movie", phase:"Phase 5",
    rating:7.7, trailer:"https://www.youtube.com/watch?v=73_1biulkYk",
    watch:"https://www.hotstar.com/in/movies/deadpool-and-wolverine/1271305185?search_query=deadpool+and+wolverine",
    plot:"Deadpool and a variant Wolverine must save the TVA — and the entire multiverse — while dealing with each other.",
    director:"Shawn Levy", writer:"Ryan Reynolds, Rhett Reese, Paul Wernick, Zeb Wells",
    cast:"Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen, Jennifer Garner, Wesley Snipes",
    trivia:"Hugh Jackman returned after saying Logan was his final performance. The film broke R-rated box office records worldwide.",
    theme:"xmen", img:"Images/deadpool3.jpg"
  },
  "agatha": {
    title:"Agatha All Along", year:2024, runtime:"~45m / ep", type:"Series", phase:"Phase 5",
    rating:7.2, trailer:"https://www.youtube.com/watch?v=R9pXbNz6Vbw",
    watch:"https://www.hotstar.com/in/shows/agatha-all-along/1271321224?search_query=agatha",
    plot:"Agatha Harkness assembles a coven of witches to traverse the perilous Witches' Road — a path of trials in exchange for what witches want most.",
    director:"Jac Schaeffer", writer:"Jac Schaeffer",
    cast:"Kathryn Hahn, Joe Locke, Aubrey Plaza, Patti LuPone, Debra Jo Rupp, Sasheer Zamata",
    trivia:"Joe Locke's Billy Maximoff becomes central — setting up the Young Avengers. Aubrey Plaza's Rio Vidal is revealed to be Death.",
    theme:"iron", img:"Images/agatha.webp"
  },
  "your-friendly-neighborhood-spider-man": {
  title:"Your Friendly Neighborhood Spider-Man", year:2025, runtime:"10 Episodes", type:"TV Series", phase:"Phase 5",
  rating:7.7, trailer:"https://www.youtube.com/watch?v=N3J2JRQg040",
  watch:"https://www.hotstar.com/in/shows/your-friendly-neighborhood-spider-man/1271340192?search_query=your+friend",
  plot:"In an alternate timeline, Peter Parker begins his journey as Spider-Man under the guidance of Norman Osborn instead of Tony Stark.",
  director:"Mel Zwyer",
  writer:"Jeff Trammell",
  cast:"Hudson Thames, Colman Domingo, Eugene Byrd, Grace Song, Kari Wahlgren",
  trivia:"Set in an alternate universe outside the main MCU continuity, featuring a fresh origin story and classic comic-inspired art style.",
  theme:"iron", img:"Images/nspiderman.jpg"
  },
  "cap-bnw": {
    title:"Captain America: Brave New World", year:2025, runtime:"1h 58m", type:"Movie", phase:"Phase 5",
    rating:6.1, trailer:"https://www.youtube.com/watch?v=1pHDWnXmK7Y",
    watch:"https://www.hotstar.com/in/movies/captain-america-brave-new-world/1271337438?search_query=brave+new+world",
    plot:"Sam Wilson finds himself in the middle of an international incident after meeting with the newly elected U.S. President.",
    director:"Julius Onah", writer:"Malcolm Spellman, Dalan Musson",
    cast:"Anthony Mackie, Harrison Ford, Danny Ramirez, Shira Haas, Carl Lumbly, Tim Blake Nelson",
    trivia:"Harrison Ford joins the MCU as Thaddeus 'Thunderbolt' Ross / Red Hulk. Tiamut's remains beneath the ocean are plot-critical.",
    theme:"iron", img:"Images/cap4.avif"
  },
  "daredevil-born-again": {
    title:"Daredevil: Born Again", year:2025, runtime:"~50m / ep", type:"Series", phase:"Phase 5",
    rating:8.0, trailer:"https://www.youtube.com/watch?v=7xALolZzhSM",
    watch:"https://www.hotstar.com/in/shows/daredevil-born-again/1271337449?search_query=daredevil+born+again",
    plot:"Matt Murdock and Wilson Fisk (Kingpin) face each other in a world that is shifting around them — while a new Daredevil season of conflict erupts.",
    director:"Justin Benson, Aaron Moorhead", writer:"Dario Scardapane",
    cast:"Charlie Cox, Vincent D'Onofrio, Margarita Levieva, Michael Gandolfini, Nikki M. James",
    trivia:"Brings Daredevil fully into the MCU canon. Kingpin's political rise directly feeds into Thunderbolts and beyond.",
    theme:"iron", img:"Images/daredevil.jpg"
  },
  "thunderbolts": {
    title:"Thunderbolts*", year:2025, runtime:"2h 7m", type:"Movie", phase:"Phase 5",
    rating:7.5, trailer:"https://www.youtube.com/watch?v=v-94Snw-H4o",
    watch:"https://www.hotstar.com/in/movies/thunderbolts/1271337437?search_query=thunderbolts",
    plot:"A group of antiheroes — each with a dark past — are brought together for a dangerous mission, slowly becoming something unexpected.",
    director:"Jake Schreier", writer:"Eric Pearson, Joanna Calo",
    cast:"Florence Pugh, Sebastian Stan, David Harbour, Wyatt Russell, Olga Kurylenko, Julia Louis-Dreyfus",
    trivia:"The asterisk in the title is a reference to the Bob-identity. The Sentry's debut is the most anticipated MCU event of 2025.",
    theme:"iron", img:"Images/thunderbolts.jpg"
  },
  "ironheart": {
  title:"Ironheart", year:2025, runtime:"6 Episodes", type:"TV Series", phase:"Phase 5",
  rating:6.0, trailer:"https://www.youtube.com/watch?v=WpW36ldAqnM",
  watch:"https://www.hotstar.com/in/shows/ironheart/1271341039?search_query=iron+heart",
  plot:"After the events of Black Panther: Wakanda Forever, genius inventor Riri Williams returns to Chicago where technology collides with magic.",
  director:"Sam Bailey, Angela Barnes",
  writer:"Chinaka Hodge",
  cast:"Dominique Thorne, Anthony Ramos, Lyric Ross, Alden Ehrenreich, Manny Montana",
  trivia:"Continues Riri Williams' story after Wakanda Forever and introduces the mystical villain The Hood into the MCU.",
  theme:"iron", img:"Images/ironheart.jpg"
  },
  // ── PHASE 6 ──
  "fantastic-four": {
    title:"The Fantastic Four: First Steps", year:2025, runtime:"2h 10m", type:"Movie", phase:"Phase 6",
    rating:7.8, trailer:"https://www.youtube.com/watch?v=AzMo-FgRp64",
    watch:"https://www.hotstar.com/in/movies/the-fantastic-four-first-steps/1271406275?search_query=fantastic+four+first+steps",
    plot:"Marvel's first family — Reed Richards, Sue Storm, Johnny Storm and Ben Grimm — enter the MCU from a retro-futurist alternate universe.",
    director:"Matt Shakman", writer:"Josh Friedman, Jeff Kaplan, Ian Springer",
    cast:"Pedro Pascal, Vanessa Kirby, Joseph Quinn, Ebon Moss-Bachrach, Julia Garner, Ralph Ineson",
    trivia:"Set in a 1960s-retrofuturist alternate universe — not the main MCU Earth. Galactus arrives, setting the stage for Doomsday.",
    theme:"iron", img:"Images/fantasticfour.avif"
  },

  "wonder-man": {
  title:"Wonder Man", year:2026, runtime:"8 Episodes", type:"TV Series", phase:"Phase 6",
  rating:7.6, trailer:"https://www.youtube.com/watch?v=wHuWmjXsReU",
  watch:"https://www.hotstar.com/in/shows/wonder-man/1271460125?search_query=wonder+man",
  plot:"Struggling actor Simon Williams unexpectedly gains incredible powers while trying to make it in Hollywood, forcing him to balance fame, identity and heroism.",
  director:"Destin Daniel Cretton, James Ponsoldt, Tiffany Johnson, Stella Meghie",
  writer:"Andrew Guest, Destin Daniel Cretton",
  cast:"Yahya Abdul-Mateen II, Ben Kingsley, Demetrius Grosse, Arian Moayed, X Mayo",
  trivia:"A Hollywood satire unlike any previous MCU project. Ben Kingsley returns as Trevor Slattery from Iron Man 3 and Shang-Chi.",
  theme:"iron", img:"Images/wonderman.jpg"
},

"daredevil-born-again-s2": {
  title:"Daredevil: Born Again - Season 2", year:2026, runtime:"8 Episodes", type:"TV Series", phase:"Phase 6",
  rating:8.8, trailer:"https://www.youtube.com/watch?v=sBVjIlTjoIk",
  watch:"https://www.hotstar.com/in/shows/daredevil-born-again/1271337449?search_query=daredevil+born+again",
  plot:"Matt Murdock continues his fight against Wilson Fisk as New York descends further into chaos, forcing Daredevil to unite with unlikely allies.",
  director:"Justin Benson, Aaron Moorhead",
  writer:"Dario Scardapane",
  cast:"Charlie Cox, Vincent D'Onofrio, Deborah Ann Woll, Elden Henson, Jon Bernthal",
  trivia:"Continues directly from Season 1 and further expands Marvel's street-level corner of the MCU.",
  theme:"iron", img:"Images/daredevil2.jpg"
},

"punisher-one-last-kill": {
  title:"The Punisher: One Last Kill", year:2026, runtime:"Special Presentation", type:"Special", phase:"Phase 6",
  rating:8.4, trailer:"https://www.youtube.com/watch?v=oSeqs_xeqv4",
  watch:"https://www.hotstar.com/in/movies/the-punisher-one-last-kill/1271614656?search_query=punisher+on",
  plot:"Frank Castle attempts to leave his violent past behind, but one final mission drags the Punisher back into a brutal war against organized crime.",
  director:"Reinaldo Marcus Green",
  writer:"Jon Bernthal, Reinaldo Marcus Green",
  cast:"Jon Bernthal",
  trivia:"Marvel Television Special Presentation that bridges Daredevil: Born Again and Spider-Man: Brand New Day.",
  theme:"iron", img:"Images/punisher.jpg"
},

"spiderman-brand-new-day": {
  title:"Spider-Man: Brand New Day", year:2026, runtime:"2h 26m", type:"Movie", phase:"Phase 6",
  rating:0, trailer:"https://www.youtube.com/watch?v=62bIsvRcPv0",
  watch:"",
  plot:"With the world having forgotten Peter Parker, Spider-Man begins a new chapter as a street-level hero while facing dangerous new enemies in New York City.",
  director:"Destin Daniel Cretton",
  writer:"Chris McKenna, Erik Sommers",
  cast:"Tom Holland, Zendaya, Jacob Batalon, Jon Bernthal, Mark Ruffalo",
  trivia:"A fresh start following No Way Home, focusing on a grounded Spider-Man while setting up the road to Avengers: Doomsday.",
  theme:"iron", img:"Images/spiderman4.jpg"
},
  // ── X-MEN ──
  "xmen-2000": {
    title:"X-Men", year:2000, runtime:"1h 44m", type:"Movie", phase:"X-Men",
    rating:7.4, trailer:"https://www.youtube.com/watch?v=VNxwlx6etXI",
    watch:"https://www.hotstar.com/in/movies/x-men/1770000943?search_query=x+men", plot:"Two mutants come to a private academy for their kind, whose resident superhero team must oppose a group of mutants with the opposite agenda.",
    director:"Bryan Singer", writer:"Tom DeSanto, Bryan Singer, David Hayter",
    cast:"Hugh Jackman, Patrick Stewart, Ian McKellen, Famke Janssen, Halle Berry, Anna Paquin",
    trivia:"Hugh Jackman replaced Dougray Scott (who was busy with Mission: Impossible 2) just weeks before filming. Started the modern superhero era.",
    theme:"xmen", img:"Images/xmen.jpg"
  },
  "x2": {
    title:"X2: X-Men United", year:2003, runtime:"2h 14m", type:"Movie", phase:"X-Men",
    rating:7.5, trailer:"https://www.youtube.com/watch?v=SIPrQ63O7uM",
    watch:"https://www.hotstar.com/in/movies/x-men-united/1770000775?search_query=x2", plot:"The X-Men band together to find a mutant assassin who has made an attempt on the President's life, while Colonel William Stryker launches a massive assault on Professor X's school.",
    director:"Bryan Singer", writer:"Michael Dougherty, Dan Harris, David Hayter",
    cast:"Hugh Jackman, Patrick Stewart, Ian McKellen, Brian Cox, Alan Cumming, Anna Paquin",
    trivia:"Widely considered the best of the original X-Men trilogy. Nightcrawler's White House opening remains iconic.",
    theme:"xmen", img:"Images/x2.webp"
  },
  "xmen-last-stand": {
    title:"X-Men: The Last Stand", year:2006, runtime:"1h 44m", type:"Movie", phase:"X-Men",
    rating:6.7, trailer:"https://www.youtube.com/watch?v=ZQ0v5dXbw7M",
    watch:"https://www.hotstar.com/in/movies/x-men-the-last-stand/1770000804?search_query=last+stand", plot:"When a pharmaceutical company develops a supposed 'cure' for mutation, lines are drawn among the X-Men and a war looms.",
    director:"Brett Ratner", writer:"Simon Kinberg, Zak Penn",
    cast:"Hugh Jackman, Patrick Stewart, Ian McKellen, Halle Berry, Famke Janssen, Kelsey Grammer",
    trivia:"Originally Bryan Singer's film until he departed for Superman Returns. Jean Grey's death resonated widely despite divisive reception.",
    theme:"xmen", img:"Images/last-stand.jpg"
  },
  "origins-wolverine": {
    title:"X-Men Origins: Wolverine", year:2009, runtime:"1h 47m", type:"Movie", phase:"X-Men",
    rating:6.6, trailer:"https://www.youtube.com/watch?v=8TQ-gD4UCmI",
    watch:"https://www.hotstar.com/in/movies/x-men-origins-wolverine/1770000667?search_query=origins+wolverine", plot:"A look at Wolverine's early life, in particular his time with the government squad Weapon X, as well as his relationship with his brother Victor Creed.",
    director:"Gavin Hood", writer:"David Benioff, Skip Woods",
    cast:"Hugh Jackman, Liev Schreiber, will.i.am, Ryan Reynolds, Taylor Kitsch",
    trivia:"Ryan Reynolds briefly plays Wade Wilson (before the infamous 'Deadpool' version). The film inadvertently made Deadpool's solo movie necessary.",
    theme:"xmen", img:"Images/origins_wolverine.jpg"
  },
  "first-class": {
    title:"X-Men: First Class", year:2011, runtime:"2h 12m", type:"Movie", phase:"X-Men",
    rating:7.7, trailer:"https://www.youtube.com/watch?v=kyQKi5-k0UU",
    watch:"https://www.hotstar.com/in/movies/x-men-first-class/1770000666?search_query=first+class", plot:"In the 1960s, Charles Xavier and Erik Lehnsherr assemble a team of young mutants to stop a nuclear war — before becoming enemies.",
    director:"Matthew Vaughn", writer:"Ashley Miller, Zack Stentz, Jane Goldman, Matthew Vaughn",
    cast:"James McAvoy, Michael Fassbender, Kevin Bacon, Jennifer Lawrence, Nicholas Hoult, Rose Byrne",
    trivia:"Michael Fassbender's Magneto is widely praised as the standout performance. The Cuban Missile Crisis setting grounds the fantasy.",
    theme:"xmen", img:"Images/first-class.jpg"
  },
  "the-wolverine": {
    title:"The Wolverine", year:2013, runtime:"2h 6m", type:"Movie", phase:"X-Men",
    rating:6.7, trailer:"https://www.youtube.com/watch?v=u1VCP3O8wG0",
    watch:"https://www.hotstar.com/in/movies/the-wolverine/1770000445?search_query=wolverine", plot:"Wolverine travels to Japan where he confronts his own mortality during an encounter that changes his life.",
    director:"James Mangold", writer:"Mark Bomback, Scott Frank",
    cast:"Hugh Jackman, Tao Okamoto, Rila Fukushima, Hiroyuki Sanada, Will Yun Lee",
    trivia:"James Mangold's intimate approach was preparation for Logan (2017). Wolverine losing his adamantium claws temporarily shocked fans.",
    theme:"xmen", img:"Images/thewolverine.jpg"
  },
  "dofp": {
    title:"X-Men: Days of Future Past", year:2014, runtime:"2h 11m", type:"Movie", phase:"X-Men",
    rating:8.0, trailer:"https://www.youtube.com/watch?v=pK2zYHWDZKo",
    watch:"https://www.hotstar.com/in/movies/x-men-days-of-future-past/1770000446?search_query=future+past", plot:"The X-Men send Wolverine to the past to change history and prevent an event that results in doom for both humans and mutants.",
    director:"Bryan Singer", writer:"Simon Kinberg",
    cast:"Hugh Jackman, James McAvoy, Michael Fassbender, Jennifer Lawrence, Halle Berry, Patrick Stewart, Ian McKellen",
    trivia:"Quicksilver's kitchen scene is one of the most celebrated VFX sequences in superhero cinema. Resets the entire X-Men timeline.",
    theme:"xmen", img:"Images/days-of-future-past.jpg"
  },
  "deadpool-1": {
    title:"Deadpool", year:2016, runtime:"1h 48m", type:"Movie", phase:"X-Men",
    rating:8.0, trailer:"https://www.youtube.com/watch?v=Xithigfg7dA",
    watch:"https://www.hotstar.com/in/movies/deadpool/1770003257?search_query=deadpool",
    plot:"A wisecracking mercenary with accelerated healing powers seeks revenge against the man who ruined his life.",
    director:"Tim Miller", writer:"Rhett Reese, Paul Wernick",
    cast:"Ryan Reynolds, Morena Baccarin, Ed Skrein, T.J. Miller, Brianna Hildebrand, Gina Carano",
    trivia:"Ryan Reynolds spent 11 years getting the film made. It broke R-rated box office records and proved adult superhero films could succeed.",
    theme:"xmen", img:"Images/deadpool.jpg"
  },
  "apocalypse": {
    title:"X-Men: Apocalypse", year:2016, runtime:"2h 24m", type:"Movie", phase:"X-Men",
    rating:6.9, trailer:"https://www.youtube.com/watch?v=COvnHv42T-A",
    watch:"https://www.hotstar.com/in/movies/x-men-apocalypse/1770015391?search_query=apo", plot:"The X-Men must defeat an ancient all-powerful mutant, En Sabah Nur, who intends to destroy mankind and build a new world order.",
    director:"Bryan Singer", writer:"Simon Kinberg",
    cast:"James McAvoy, Michael Fassbender, Jennifer Lawrence, Oscar Isaac, Sophie Turner, Kodi Smit-McPhee",
    trivia:"Oscar Isaac wore a painful prosthetic suit for 12 hours a day. Sophie Turner makes her debut as young Jean Grey.",
    theme:"xmen", img:"Images/apocalypse.jpg"
  },
  "logan": {
    title:"Logan", year:2017, runtime:"2h 17m", type:"Movie", phase:"X-Men",
    rating:8.1, trailer:"https://www.youtube.com/watch?v=Div0iP65aZo",
    watch:"https://www.hotstar.com/in/movies/logan/1770016994?search_query=logan", plot:"In the near future, a weary Logan cares for an ailing Professor X while hunted by mercenaries and protecting a young girl with powers like his own.",
    director:"James Mangold", writer:"James Mangold, Scott Frank, Michael Green",
    cast:"Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook, Stephen Merchant",
    trivia:"Hugh Jackman's farewell as Logan. Inspired by the Old Man Logan comic. Both Jackman and Stewart submitted it for Oscar consideration.",
    theme:"xmen", img:"Images/logan.jpg"
  },
  "deadpool-2": {
    title:"Deadpool 2", year:2018, runtime:"1h 59m", type:"Movie", phase:"X-Men",
    rating:7.7, trailer:"https://www.youtube.com/watch?v=D86RtevtfrA",
    watch:"https://www.hotstar.com/in/movies/deadpool-2/1770020234?search_query=deadpool2", plot:"Foul-mouthed mutant mercenary Wade Wilson fights alongside X-Force against Cable — a time-travelling supersoldier from the future.",
    director:"David Leitch", writer:"Rhett Reese, Paul Wernick, Ryan Reynolds",
    cast:"Ryan Reynolds, Josh Brolin, Zazie Beetz, Julian Dennison, Morena Baccarin",
    trivia:"Cable was played by Josh Brolin — who was simultaneously playing Thanos in Infinity War (2018). Domino's luck-powers scene is brilliantly unique.",
    theme:"xmen", img:"Images/deadpool2.jpg"
  },
  "dark-phoenix": {
    title:"X-Men: Dark Phoenix", year:2019, runtime:"1h 53m", type:"Movie", phase:"X-Men",
    rating:5.7, trailer:"https://www.youtube.com/watch?v=1-q8C_c-nlM",
    watch:"https://www.hotstar.com/in/movies/x-men-dark-phoenix/1260017860?search_query=dark+phoenix", plot:"Jean Grey begins to develop incredible powers that corrupt and turn her into the Dark Phoenix — threatening to destroy everything she loves.",
    director:"Simon Kinberg", writer:"Simon Kinberg",
    cast:"James McAvoy, Michael Fassbender, Jennifer Lawrence, Sophie Turner, Jessica Chastain",
    trivia:"The production suffered reshoots, delays and a title change. The finale was entirely changed to avoid clashing with Captain Marvel.",
    theme:"xmen", img:"Images/dark-phoenix.png"
  },
  "new-mutants": {
    title:"The New Mutants", year:2020, runtime:"1h 34m", type:"Movie", phase:"X-Men",
    rating:5.3, trailer:"https://www.youtube.com/watch?v=W_vJhUAOFpI",
    watch:"https://www.hotstar.com/in/movies/the-new-mutants/1260057812?search_query=new+mutants", plot:"Five young mutants, just discovering their abilities, are trapped in a secret facility against their will — fighting to escape their past.",
    director:"Josh Boone", writer:"Josh Boone, Knate Lee",
    cast:"Maisie Williams, Anya Taylor-Joy, Charlie Heaton, Alice Braga, Henry Zaga",
    trivia:"Originally set for April 2018, delayed three times. Boone always intended a horror-genre X-Men film — an ambition partially realised.",
    theme:"xmen", img:"Images/newmutants.jpeg"
  },
  "eyes-of-wakanda": {
  title:"Eyes of Wakanda",
  year:2025,
  runtime:"TBA",
  type:"Series",
  phase:"Phase 5",
  rating:6.2,
  trailer:"https://www.youtube.com/watch?v=ODHh6oe4MlE",
  watch:"https://www.hotstar.com/in/shows/eyes-of-wakanda/1271341046?search_query=eyes",
  plot:"An animated anthology series following Wakandan warriors throughout history as they travel the world to retrieve dangerous vibranium artifacts.",
  director:"Todd Harris",
  writer:"Marvel Studios",
  cast:"Danai Gurira, Jona Xiao, Cress Williams",
  trivia:"This is the first animated series focused entirely on Wakanda and its secret missions across different time periods.",
  theme:"wakanda",
  img:"Images/eyesofwakanda.jpg"
},

"marvel-zombies": {
  title:"Marvel Zombies",
  year:2025,
  runtime:"TBA",
  type:"Series",
  phase:"Phase 6",
  rating:7,
  trailer:"https://www.youtube.com/watch?v=twHYF506-9Y",
  watch:"https://www.hotstar.com/in/shows/marvel-zombies/1271435440?search_query=zombies",
  plot:"A darker animated Marvel series set in the universe first seen in What If...?, where a zombie virus has infected many heroes and villains, leaving a small group of survivors fighting to stay alive.",
  director:"Bryan Andrews",
  writer:"Zeb Wells",
  cast:"Iman Vellani, Elizabeth Olsen, Dominique Thorne, Hailee Steinfeld",
  trivia:"The series continues the zombie storyline introduced in the What If...? episode 'What If... Zombies!?'.",
  theme:"zombie",
  img:"Images/marvelzombies.jpg"
}
};

/* =====================
   NAVBAR SCROLL
===================== */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));
}

/* =====================
   SCROLL REVEAL
===================== */
const movies = document.querySelectorAll('.movie-box');
function revealMovies() {
  const h = window.innerHeight;
  movies.forEach((m, i) => {
    if (m.getBoundingClientRect().top < h - 55) {
      setTimeout(() => m.classList.add('show'), i * 35);
    }
  });
}
window.addEventListener('scroll', revealMovies);
revealMovies();

/* =====================
   SEARCH
===================== */
const searchBar = document.getElementById('searchBar');
if (searchBar) {
  searchBar.addEventListener('keyup', function () {
    const f = this.value.toLowerCase().trim();
    document.querySelectorAll('.movie-box').forEach(m => {
      m.style.display = (!f || m.innerText.toLowerCase().includes(f)) ? '' : 'none';
    });
    document.querySelectorAll('.phase-label').forEach(l => {
      l.style.display = f ? 'none' : '';
    });
  });
}

/* =====================
   BACK TO TOP
===================== */
const topBtn = document.getElementById('topBtn');
if (topBtn) {
  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* =====================
   MODAL
===================== */
let modalOverlay, modal;

function buildModal() {
  modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-overlay';
  modalOverlay.innerHTML = `
    <div class="modal" id="mainModal">
      <button class="modal-close" id="modalClose">✕</button>
      <div class="modal-body">
        <div class="modal-poster">
          <img id="modalImg" src="" alt="">
          <div class="modal-poster-overlay"></div>
        </div>
        <div class="modal-info">
          <div class="modal-type-row">
            <span class="modal-type-tag" id="modalTypeTag"></span>
            <span class="modal-phase-tag" id="modalPhaseTag"></span>
          </div>
          <div class="modal-title" id="modalTitle"></div>
          <div class="modal-year-runtime" id="modalYearRuntime"></div>
          <div class="modal-rating">
            <span class="modal-rating-stars">★★★★★</span>
            <span class="modal-rating-score" id="modalScore"></span>
            <span class="modal-rating-max">/ 10 IMDb</span>
          </div>
          <div class="modal-plot" id="modalPlot"></div>
          <div class="modal-meta-grid">
            <div class="modal-meta-item">
              <div class="modal-meta-label">Director</div>
              <div class="modal-meta-value" id="modalDirector"></div>
            </div>
            <div class="modal-meta-item">
              <div class="modal-meta-label">Writer</div>
              <div class="modal-meta-value" id="modalWriter"></div>
            </div>
            <div class="modal-meta-item" style="grid-column:1/-1;">
              <div class="modal-meta-label">Cast</div>
              <div class="modal-meta-value" id="modalCast"></div>
            </div>
          </div>
          <div class="modal-trivia">
            <div class="modal-trivia-label">⚡ Did You Know</div>
            <p id="modalTrivia"></p>
          </div>
          <div class="modal-actions" id="modalActions"></div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modalOverlay);
  modal = modalOverlay.querySelector('#mainModal');

  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function openModal(key) {
  const d = MOVIE_DB[key];
  if (!d) return;

  document.getElementById('modalImg').src = d.img || '';
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalYearRuntime').textContent = `${d.year}  ·  ${d.runtime}`;
  document.getElementById('modalScore').textContent = d.rating;
  document.getElementById('modalPlot').textContent = d.plot;
  document.getElementById('modalDirector').textContent = d.director;
  document.getElementById('modalWriter').textContent = d.writer;
  document.getElementById('modalCast').textContent = d.cast;
  document.getElementById('modalTrivia').textContent = d.trivia;
  document.getElementById('modalPhaseTag').textContent = d.phase;

  const typeTag = document.getElementById('modalTypeTag');
  typeTag.textContent = d.type;
  typeTag.className = 'modal-type-tag';
  if (d.type === 'Series') typeTag.classList.add('series');
  if (d.type === 'Animated Series') typeTag.classList.add('animated');
  if (d.type === 'Special') typeTag.classList.add('special');

  modal.className = 'modal theme-' + (d.theme || 'iron');

  const actions = document.getElementById('modalActions');
  actions.innerHTML = '';
  if (d.trailer) {
    const a = document.createElement('a');
    a.href = d.trailer; a.target = '_blank';
    a.className = 'btn-secondary';
    a.style.cssText = 'font-size:.76rem;padding:9px 16px;';
    a.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Watch Trailer`;
    actions.appendChild(a);
  }
  if (d.watch) {
    const a = document.createElement('a');
    a.href = d.watch; a.target = '_blank';
    a.className = 'btn-primary';
    a.style.cssText = 'font-size:.76rem;padding:9px 16px;';
    a.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Watch on Hotstar`;
    actions.appendChild(a);
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* =====================
   BIND MOVIE CARDS
===================== */
function bindCards() {
  document.querySelectorAll('.movie-box[data-key]').forEach(box => {
    box.addEventListener('click', e => {
      if (!e.target.closest('a')) openModal(box.dataset.key);
    });
  });
}

/* =====================
   RIPPLE EFFECT
===================== */
function addRipples() {
  const style = document.createElement('style');
  style.textContent = `@keyframes rippleAnim{to{transform:scale(4);opacity:0}}`;
  document.head.appendChild(style);
  document.querySelectorAll('.movie-box').forEach(box => {
    box.addEventListener('click', e => {
      const r = document.createElement('span');
      r.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,0.12);width:120px;height:120px;left:${e.offsetX-60}px;top:${e.offsetY-60}px;transform:scale(0);animation:rippleAnim 0.55s ease-out forwards;pointer-events:none;z-index:10;`;
      box.appendChild(r);
      setTimeout(() => r.remove(), 600);
    });
  });
}

/* =====================
   MARVEL INTRO VIDEO
===================== */
function initIntro() {
  const overlay = document.getElementById('introOverlay');
  if (!overlay) return;

  const skipBtn = document.getElementById('introSkipBtn');
  const bar = document.getElementById('introProgressBar');

  // Auto-dismiss after 18 seconds (Marvel logo intro is ~10s, we give a bit more)
  const INTRO_DURATION = 18000;
  let startTime = Date.now();
  let dismissed = false;

  function dismissIntro() {
    if (dismissed) return;
    dismissed = true;
    overlay.classList.add('fade-out');
    document.body.style.overflow = '';
    setTimeout(() => overlay.classList.add('gone'), 1050);
  }

  // Lock scroll while intro plays
  document.body.style.overflow = 'hidden';

  // Animate progress bar
  function animateBar() {
    if (dismissed) return;
    const elapsed = Date.now() - startTime;
    const pct = Math.min((elapsed / INTRO_DURATION) * 100, 100);
    if (bar) bar.style.width = pct + '%';
    if (elapsed >= INTRO_DURATION) {
      dismissIntro();
    } else {
      requestAnimationFrame(animateBar);
    }
  }
  requestAnimationFrame(animateBar);

  // Skip button
  if (skipBtn) skipBtn.addEventListener('click', dismissIntro);

  // Also allow pressing any key to skip
  document.addEventListener('keydown', function onKey(e) {
    if (!dismissed) { dismissIntro(); document.removeEventListener('keydown', onKey); }
  }, { once: true });
}

/* =====================
   INIT
===================== */
window.addEventListener('DOMContentLoaded', () => {
  buildModal();
  bindCards();
  addRipples();
  initIntro();
  console.log('%cMarvel Guide — Loaded', 'color:#e31b23;font-family:monospace;font-size:14px;font-weight:bold');
});
