export function seedDatabase(firebase) {
  /* Series
     ============================================ */

  //action
  firebase.firestore().collection("series").add({
    backdrop_path: "/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg",
    genre: "action",
    id: 88396,
    maturity: 17,
    slug: "The Falcon and the Winter Soldier",
    title: "The Falcon and the Winter Soldier",
    description:
      "Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.",
    poster_path: "/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/z59kJfcElR9eHO9rJbWp4qWMuee.jpg",
    genre: "action",
    id: 60735,
    slug: "The Flash",
    title: "The Flash",
    description:
      'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash.',
    poster_path: "/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
    maturity: 17,
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg",
    genre: "action",
    id: 63174,
    slug: "Lucifer",
    maturity: 17,
    title: "Lucifer",
    description:
      "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
    poster_path: "/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/uro2Khv7JxlzXtLb8tCIbRhkb9E.jpg",
    maturity: 17,
    genre: "action",
    id: 1402,
    slug: "The Walking Dead",
    title: "The Walking Dead",
    description:
      "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
    poster_path: "/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/57vVjteucIF3bGnZj6PmaoJRScw.jpg",
    maturity: 17,
    genre: "action",
    id: 85271,
    slug: "WandaVision",
    title: "WandaVision",
    description:
      "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
    poster_path: "/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/TXaR5xmz2ohHgnpf0YPWtZPlCO.jpg",
    maturity: 17,
    genre: "action",
    id: 95057,
    slug: "Superman & Lois",
    title: "Superman & Lois",
    description:
      "After years of facing megalomaniacal supervillains, monsters wreaking havoc on Metropolis, and alien invaders intent on wiping out the human race, The Man of Steel aka Clark Kent and Lois Lane come face to face with one of their greatest challenges ever: dealing with all the stress, pressures and complexities that come with being working parents in today's society.",
    poster_path: "/6SJppowm7cdQgLkvoTlnTUSbjr9.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
    maturity: 17,
    genre: "action",
    id: 1399,
    slug: "Game of Thrones",
    title: "Game of Thrones",
    description:
      "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/fRYwdeNjMqC30EhofPx5PlDpdun.jpg",
    maturity: 17,
    genre: "action",
    id: 79460,
    slug: "Legacies",
    title: "Legacies",
    description:
      "In a place where young witches, vampires, and werewolves are nurtured to be their best selves in spite of their worst impulses, Klaus Mikaelson’s daughter, 17-year-old Hope Mikaelson, Alaric Saltzman’s twins, Lizzie and Josie Saltzman, among others, come of age into heroes and villains at The Salvatore School for the Young and Gifted.",
    poster_path: "/qTZIgXrBKURBK1KrsT7fe3qwtl9.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/k7T9xRyzP41wBVNyNeLmh8Ch7gD.jpg",
    maturity: 17,
    genre: "action",
    id: 18165,
    slug: "The Vampire Diaries",

    title: "The Vampire Diaries",
    description:
      "The story of two vampire brothers obsessed with the same girl, who bears a striking resemblance to the beautiful but ruthless vampire they knew and loved in 1864.",

    poster_path: "/kLEha9zVVv8acGFKTX4gjvSR2Q0.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/y0A3EFeGJhzKS4Zyy3LilbwDFvV.jpg",
    maturity: 17,
    genre: "action",
    id: 100617,
    slug: "Transformers: War for Cybertron: Siege",
    title: "Transformers: War for Cybertron: Siege",
    description:
      "On their dying planet, the Autobots and Decepticons battle fiercely for control of the AllSpark in the Transformers universe's origin story.",

    poster_path: "/14B6I4FxCMiDoPOwzj27EcqqY6i.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/oycArCLGgtWyUz5aho7ojFZkgjN.jpg",
    maturity: 17,
    genre: "action",
    id: 46260,
    slug: "Naruto",
    title: "ナルト",
    description:
      "In another world, ninja are the ultimate power, and in the Village Hidden in the Leaves live the stealthiest ninja in the land. Twelve years earlier, the fearsome Nine-Tailed Fox terrorized the village and claimed many lives before it was subdued and its spirit sealed within the body of a baby boy. That boy, Naruto Uzumaki, has grown up to become a ninja-in-training who's more interested in pranks than in studying ninjutsu.. but Naruto is determined to become the greatest ninja ever!",
    poster_path: "/vauCEnR7CiyBDzRCeElKkCaXIYu.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/hTExot1sfn7dHZjGrk0Aiwpntxt.jpg",
    maturity: 17,
    genre: "action",
    id: 48866,
    slug: "The 100",
    title: "The 100",
    description:
      "100 years in the future, when the Earth has been abandoned due to radioactivity, the last surviving humans live on an ark orbiting the planet — but the ark won't last forever. So the repressive regime picks 100 expendable juvenile delinquents to send down to Earth to see if the planet is still habitable.",
    poster_path: "/wcaDIAG1QdXQLRaj4vC1EFdBT2.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/fPF6h8LLtZ40NRqkHfx2DvFbmkW.jpg",
    maturity: 17,
    genre: "action",
    id: 96580,
    slug: "Resident Alien",
    title: "Resident Alien",
    description:
      "Crash-landed alien Harry takes on the identity of a small-town Colorado doctor. Arriving with a secret mission, he starts off living a simple life…but things get a bit rocky when he’s roped into solving a local murder and realizes he needs to assimilate into his new world. As he does, he begins to wrestle with the moral dilemma of his mission and asking the big life questions like: “Are human beings worth saving?” and “Why do they fold their pizza before eating it?”",
    poster_path: "/bG5aqfT5lTHuSbcQofNHtH0RyyP.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/lthkKBLe1rX6iThgVFg22O02sJw.jpg",
    maturity: 17,
    genre: "action",
    id: 95479,
    slug: "Jujutsu Kaisen",
    title: "呪術廻戦",
    description:
      "With his days numbered, high schooler Yuji decides to hunt down and consume the remaining 19 fingers of a deadly curse so it can die with him.",
    poster_path: "/g1rK2nRXSidcMwNliWDIroWWGTn.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/nVRyd8hlg0ZLxBn9RaI7mUMQLnz.jpg",
    maturity: 17,
    genre: "action",
    id: 1622,
    slug: "Supernatural",

    title: "Supernatural",
    description:
      "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",

    poster_path: "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
    maturity: 17,
    genre: "action",
    id: 82856,
    slug: "The Mandalorian",

    title: "The Mandalorian",
    description:
      "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
    poster_path: "/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/gZzIQxo2ukFSdZGtlttA0wI6kax.jpg",
    maturity: 17,
    genre: "action",
    id: 34524,
    slug: "Teen Wolf",

    title: "Teen Wolf",
    description:
      "Scott McCall, a high school student living in the town of Beacon Hills has his life drastically changed when he's bitten by a werewolf, becoming one himself. He must henceforth learn to balance his problematic new identity with his day-to-day teenage life. The following characters are instrumental to his struggle: Stiles, his best friend; Allison, his love interest who comes from a family of werewolf hunters; and Derek, a mysterious werewolf with a dark past. Throughout the series, he strives to keep his loved ones safe while maintaining normal relationships with them.",

    poster_path: "/vY2vfAskJTiWsQSv6bdbNCQhPLm.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/8A2IYYRLM5rR0hYwbWJr9KLPnUu.jpg",
    maturity: 17,
    genre: "action",
    id: 4604,
    slug: "Smallville",
    title: "Smallville",
    description:
      "The origins of the world’s greatest hero–from Krypton refugee Kal-el’s arrival on Earth through his tumultuous teen years to Clark Kent’s final steps toward embracing his destiny as the Man of Steel.",
    poster_path: "/pUhJGETy2sec4vEkiqJ9eGeIywc.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
    maturity: 17,
    genre: "action",
    id: 76479,
    slug: "The Boys",

    title: "The Boys",
    description:
      "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",

    poster_path: "/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/jgb9xICHFX8wTGQ75js4uNbttQs.jpg",
    maturity: 17,
    genre: "action",
    id: 62688,
    slug: "Supergirl",

    title: "Supergirl",
    description:
      "Twenty-four-year-old Kara Zor-El, who was taken in by the Danvers family when she was 13 after being sent away from Krypton, must learn to embrace her powers after previously hiding them. The Danvers teach her to be careful with her powers, until she has to reveal them during an unexpected disaster, setting her on her journey of heroism.",

    poster_path: "/zsaiq8ZclPuneuN7loLEbsh1ANJ.jpg",
  });

  ///dramas

  firebase.firestore().collection("series").add({
    backdrop_path: "/rvbWRwVOD5NK767kclJnWl3yzMX.jpg",
    maturity: 17,
    genre: "dramas",
    id: 39793,
    slug: "Call the Midwife",
    title: "Call the Midwife",
    description:
      "Drama following the lives of a group of midwives working in the poverty-stricken East End of London during the 1950s, based on the best-selling memoirs of Jennifer Worth.",
    poster_path: "/b1p0nL00x563ACkcmGNIRP4ZnkA.jpg",
  });
  firebase.firestore().collection("series").add({
    description:
      "Set in downtown New York in 1900, 'The Knick' is centered on the Knickerbocker Hospital and the groundbreaking surgeons, nurses and staff who work there, pushing the bounds of medicine in a time of astonishingly high mortality rates and zero antibiotics.\n\nJohn Thackery is a brilliant surgeon pioneering new methods in the field, despite his secret addiction to cocaine. He leads a team of doctors including his protégé Dr. Everett Gallinger; the young Dr. Bertie Chickering Jr. and Dr. Algernon Edwards, a promising surgeon who's been recently thrust upon him. The lively cast of characters at the hospital also includes Cornelia Robertson, the daughter of its benefactor, Captain August Robertson; surly ambulance driver Tom Cleary; Lucy Elkins; a fresh-faced nurse from the country; the crooked hospital administrator Herman Barrow; and Sister Harriet, a nun who isn't afraid to speak her mind.",
    maturity: 17,
    backdrop_path: "/r5kShTnzatvkZipN424UFzD7jqf.jpg",
    genre: "dramas",
    slug: "The Knick",
    poster_path: "/oeEqDSIVOi6q0GcZj8L9Q6G7fGC.jpg",
    id: 61014,
    title: "The Knick",
  });
  firebase.firestore().collection("series").add({
    title: "Chicago Hope",
    id: 6467,
    slug: "Chicago Hope",
    maturity: 17,
    poster_path: "/x8ic33t4NurJul1oXmvKwKtWH28.jpg",
    genre: "dramas",
    backdrop_path: "/i75aWzwR06cCUwOTzS8zSWg8th8.jpg",
    description:
      "Chicago Hope is an American medical drama television series, created by David E. Kelley. It ran on CBS from September 18, 1994, to May 4, 2000. The series is set in a fictional private charity hospital in Chicago, Illinois. The show is set to return in the fall of 2013 on TVGN in reruns.",
  });
  firebase.firestore().collection("series").add({
    id: 57647,
    description:
      "As a child, Park Shi On was sent to a specialized care center, where he discovered genius capacities for his autism. Coupled with an exceptional memory and keen spatial skills, the young savant eventually entered pediatric residency, where he developed into a promising surgeon. However, his mental and emotional development seems to have stopped at 10-years-old, which makes for incredible conflicts in and out of the O.R., especially with the hotheaded surgeon Kim Do Han. Despite warm hearted and fair colleagues like Cha Yoon Seo and Han Jin Wook , it’s a fierce and competitive adult world. One cannot simply tell Shi On to “grow up.”",
    backdrop_path: "/uH24pUgaB9NWJYQxFrCqTCblHGe.jpg",
    title: "굿 닥터",
    genre: "dramas",
    poster_path: "/4pR9FCgtCj8mYFLh7tb2avCwdOy.jpg",
    slug: "Good Doctor",
    maturity: 17,
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/AekZz93QCISOYFELhxyRCSzcAit.jpg",
    maturity: 17,
    genre: "dramas",
    id: 63418,
    slug: "Code Black",
    title: "Code Black",
    description:
      "Inspired by the award-winning documentary, this medical drama is set in the busiest and most notorious ER in the nation where the extraordinary staff confront a challenged system in order to protect their ideals and the patients who need them the most.",
    poster_path: "/seVDT97dMUrmVGH6Ebvj9pv8rp5.jpg",
  });
  firebase.firestore().collection("series").add({
    description:
      "A drama about the love of people who get closer as they learn to be considerate of each other in desperate times and sacrifices made by people who throw themselves into natural disasters.",
    maturity: 17,
    id: 65143,
    genre: "dramas",

    title: "태양의 후예",
    slug: "Descendants of the Sun",
    poster_path: "/5JECa3CZfgVQFabmiZKm1L3XSXj.jpg",
    backdrop_path: "/y5Kx5ItQc1D1R4mZ5TUQ1QuSTou.jpg",
  });
  firebase.firestore().collection("series").add({
    id: 62650,
    title: "Chicago Med",
    genre: "dramas",
    poster_path: "/8mFhW6fJlapqq3cmQjxcG5h4KFa.jpg",
    slug: "Chicago Med",
    maturity: 17,
    description:
      "An emotional thrill ride through the day-to-day chaos of the city's most explosive hospital and the courageous team of doctors who hold it together. They will tackle unique new cases inspired by topical events, forging fiery relationships in the pulse-pounding pandemonium of the emergency room.",
    backdrop_path: "/sHjNS2lYyEjwjjQXTZmdyMJ29bI.jpg",
  });
  firebase.firestore().collection("series").add({
    title: "Miami Medical",

    slug: "Miami Medical",

    maturity: 17,
    poster_path: "/twgLSj9dJaiAJPVTpxG70iHhVBu.jpg",
    genre: "dramas",
    backdrop_path: null,
    description:
      "Miami Medical is a medical drama television series created by Jeffrey Lieber. It follows the professional and private lives of a team of trauma surgeons.\n\nThe series was produced by Jerry Bruckheimer Television and Warner Bros. Television. It premiered on CBS on April 2, 2010. In May 2010, CBS announced that the series had been canceled, with the final episode airing on July 2, 2010.",
  });
  firebase.firestore().collection("series").add({
    title: "Doctors",
    id: 5080,
    slug: "Doctors",

    maturity: 17,
    poster_path: "/thZKqMWevSJVTeAiedy40umvz11.jpg",
    genre: "dramas",
    backdrop_path: null,
    description:
      "Set in the fictional Midlands town of Letherbridge, defined as being close to the city of Birmingham, this soap opera follows the staff and families of a doctor's surgery.",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/lOluFMXTGaXbdwuLd003odAwfqf.jpg",
    id: 62266,
    genre: "dramas",
    original_language: "ko",
    poster_path: "/dNH6NO0akHMIqbq5EC4qnCeeuC6.jpg",
    maturity: 17,
    title: "킬미, 힐미",
    description:
      "Cha Do Hyun is a rich heir to a family company with one major problem. Due to suppressed childhood trauma, he suffers from dissociative identity disorder manifested in 7 unique personalities who are out of his control. In order to overcome this disorder in secret, he hires a first year medical resident to help him heal by killing off each personality one by one.",

    slug: "Kill Me, Heal Me",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/2fzV1ptJCbZ4xvJZrOofmjeeS5X.jpg",
    maturity: 17,
    genre: "dramas",
    id: 43097,
    slug: "Saving Hope",
    title: "Saving Hope",
    description:
      'When Charlie Harris ends up in a coma, he leaves the Hope-Zion Hospital in chaos - and his fiancée and fellow surgeon, Alex Reid, in a state of shock. As the staff of Hope-Zion races to save lives, comatose Dr. Harris wanders the halls of Hope-Zee in "spirit" form, not sure if he\'s a ghost or a figment of his own imagination.',
    poster_path: "/1OGQisCT1T5ChkzZVdFqhX4O1G.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/2tlRNzwRf65pWj1o2tSinhCLU6W.jpg",
    maturity: 17,
    genre: "dramas",
    id: 60804,
    poster_path: "/qSfjudewdGEHAva8LvlbyH0ydof.jpg",
    title: "The Night Shift",
    description:
      "The stories of the men and women who work the overnight shift at San Antonio Memorial Hospital. They are an irreverent and special breed, particularly adrenaline junkie T.C. Callahan.",
    slug: "The Night Shift",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/4cLQlQxPoRR0xdkNCgIHPYVgPvr.jpg",
    maturity: 17,
    genre: "dramas",
    id: 4588,
    slug: "ER",
    title: "ER",
    description:
      "ER explores the inner workings of an urban teaching hospital and the critical issues faced by the dedicated physicians and staff of its overburdened emergency room.",
    poster_path: "/dPj3iAXq0A5L5kwpHh32j0iccY6.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/rAw00EgDQSA89667sgpe4uawCMN.jpg",
    maturity: 17,
    genre: "dramas",
    id: 1021,
    slug: "Casualty",
    title: "Casualty",
    description:
      "Drama series about the staff and patients at Holby City Hospital's emergency department, charting the ups and downs in their personal and professional lives.",
    poster_path: "/qb3vyGwdVg37CX3nwHmgXXLjDpb.jpg",
  });
  firebase.firestore().collection("series").add({
    maturity: 17,
    genre: "dramas",
    poster_path: "/lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
    title: "House",
    id: 1408,
    description:
      "Dr. Gregory House, a drug-addicted, unconventional, misanthropic medical genius, leads a team of diagnosticians at the fictional Princeton–Plainsboro Teaching Hospital in New Jersey.",
    slug: "House",
    backdrop_path: "/h3vViR087OJlk4PedNt5JLIKOOi.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg",
    title: "Grey's Anatomy",
    genre: "dramas",
    slug: "Grey's Anatomy",
    poster_path: "/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg",
    maturity: 17,
    description:
      "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",
    id: 1416,
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/9oVp0xfKW2igxDEo5wr3JTMQBub.jpg",
    genre: "dramas",

    poster_path: "/kG3AlyUz63O8LFS2jJQdmOo7qQI.jpg",

    description:
      "A tough, brilliant senior resident guides an idealistic young doctor through his first day, pulling back the curtain on what really happens, both good and bad, in modern-day medicine.",

    id: 74016,
    maturity: 17,
    title: "The Resident",
    slug: "The Resident",
  });

  //horror

  firebase.firestore().collection("series").add({
    backdrop_path: "/pLVrN9B750ehwTFdQ6n3HRUERLd.jpg",
    genre: "horror",
    title: "The Walking Dead: World Beyond",
    poster_path: "/z31GxpVgDsFAF4paZR8PRsiP16D.jpg",
    id: 94305,
    slug: "The Walking Dead: World Beyond",
    description:
      "A heroic group of teens sheltered from the dangers of the post-apocalyptic world receive a message that inspires them to leave the safety of the only home they have ever known and embark on a cross-country journey to find the one man who can possibly save the world.",
    maturity: 17,
  });
  firebase.firestore().collection("series").add({
    poster_path: "/wf3bBKp1RgCJjyCBLfEAbZjVr31.jpg",
    description:
      "When the world is struck by a deadly pandemic that turns humans into zombies, Takashi Komuro and several of his classmates at Fujimi High School try to survive the apocalypse.",
    maturity: 17,
    title: "学園黙示録 HIGHSCHOOL OF THE DEAD",
    id: 56998,
    genre: "horror",
    slug: "Highschool of the Dead",
    backdrop_path: "/ivWNDYPxDMjc82ajeSPuyq70hu9.jpg",
  });
  firebase.firestore().collection("series").add({
    poster_path: "/o0fOZ6CCm71koH9tUKzXdRvKkIk.jpg",
    description:
      "In 2006, American federal agent Leon S. Kennedy is among the group invited to the White House to investigate an improper access of the White House's network. When the lights suddenly go out, Leon and the SWAT team are forced to take down a horde of mysterious zombies. Meanwhile, TerraSave staff member Claire Redfield encounters a mysterious image drawn by a youth in a country she visited, while providing support to refugees. Haunted by this drawing, Claire starts her own investigation.",
    maturity: 17,
    title: "RESIDENT EVIL: Infinite Darkness",
    id: 110642,
    genre: "horror",
    slug: "RESIDENT EVIL: Infinite Darkness",
    backdrop_path: "/zLf4ASzJklyxLDzcbH2IzEV2Es2.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/hKkybBfYLM9aTUCQBL8fwxC0TwF.jpg",
    genre: "horror",
    id: 42503,
    slug: "Deadman Wonderland",
    maturity: 17,
    original_language: "ja",
    title: "デッドマン・ワンダーランド",
    description:
      "Ganta is the only survivor after a mysterious man in red slaughters a classroom full of teenagers. He's framed for the carnage, sentenced to die, and locked away in the most twisted prison ever built: Deadman Wonderland. And then it gets worse.",
    poster_path: "/m12JbXsDdB35RGAC1g3ImNQT4h5.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/mz5L2zlZuMlQwVE8Yxvb2YK1wsl.jpg",
    genre: "horror",
    id: 61752,
    slug: "Hellsing Ultimate",
    maturity: 17,
    title: "ヘルシング アルティメット",
    description:
      'For over a century, the mysterious Hellsing Organization has been secretly protecting the British Empire from undead "freaks." When Sir Integra Hellsing succeeded as the head of the organization, she also inherited the ultimate weapon against these undead enemies, Alucard, a rogue vampire possessing mysterious and frightening powers.\n\nBut now, Hellsing must deal with a more dangerous threat than vampires. Millennium. An organization of Nazi vampires of a long dead era. Will it be an all out war, or an all out blood bath?',
    poster_path: "/DsCOWR27ajvzOrg2V4vENLc8li.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/mDKIEPab2Jzg1JrOdfKdzEHTTrt.jpg",
    genre: "horror",
    id: 16830,
    slug: "Hellsing",
    maturity: 17,
    title: "ヘルシング",
    description:
      "Vampires exist. It is the duty of Hellsing, an organization sponsored by the British government, to hide that frightening fact and protect the blissfully unaware populace. Along with its own personal army, Hellsing also has a few secret weapons. Alucard, an incredibly powerful vampire, has been controlled by Hellsing for years. Although he dislikes being a servant to the Hellsing family, he certainly enjoys his job as Hellsing’s vampire exterminator. Seras is a fledgling vampire and a former police woman. Although reluctant to embrace her new self, she is still a valuable member of the organization. Integra Hellsing, the current leader, is usually fully capable of fulfilling her duty, but lately, vampire activity has been on the rise. Unfortunately, the cause is more alarming than anything she could have imagined...",
    poster_path: "/xA3wsLJzj6XnvuryerPBPwoQodH.jpg",
  });
  firebase.firestore().collection("series").add({
    title: "Fear the Walking Dead",
    maturity: 17,
    genre: "horror",
    id: 62286,
    slug: "Fear the Walking Dead",
    vote_average: 7.6,
    description:
      'What did the world look like as it was transforming into the horrifying apocalypse depicted in "The Walking Dead"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.',
    poster_path: "/4UjiPdFKJGJYdxwRs2Rzg7EmWqr.jpg",
    backdrop_path: "/58PON1OrnBiX6CqEHgeWKVwrCn6.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/ptiSlEK0UhqUGQxeOlS3rn5FBSn.jpg",
    genre: "horror",
    poster_path: "/5H2XJUqkuLdhoYAxUOpa3NYLo8T.jpg",
    slug: "God Eater",
    id: 62773,
    description:
      "In the early 2050s, unknown life forms called “Oracle cells” begin their uncontrolled consumption of all life on Earth. Their ravenous appetite and remarkable adaptability earn them first dread, then awe, and finally the name “aragami”. In the face of an enemy completely immune to conventional weapons, urban civilization collapses, and each day humanity is driven further and further toward extinction. One single ray of hope remains for humanity. Following the development of “God Arcs”—living weapons which incorporate Oracle cells—their wielders are organized into an elite force.",
    maturity: 17,
    title: "ゴッドイーター",
  });
  firebase.firestore().collection("series").add({
    description:
      "Batman, Superman and Wonder Woman will lead the DC Super Heroes against their most infamous foes.",
    title: "Justice League Action",
    maturity: 17,
    backdrop_path: "/yWXBRjeKSBUTV2jBUkDVCO25oTu.jpg",
    genre: "horror",
    id: 68837,
    poster_path: "/zN6raXpRRrPAaOuDpxQRja6x9qV.jpg",
    slug: "Justice League Action",
  });
  firebase.firestore().collection("series").add({
    id: 42671,
    description:
      'The Diclonius, a mutated homo sapien that is said to be selected by God and will eventually become the destruction of mankind, possesses two horns in their heads, and has a "sixth sense" which gives it telekinetic abilities. Due to this dangerous power, they have been captured and isolated in laboratories by the government. Lucy, a young and psychotic Diclonius, manages to break free of her confines and brutally murder most of the guards in the laboratory, only to get shot in the head as she makes her escape. She survives and manages to drift along to a beach, where two teenagers named Kouta and Yuka discovers her. Having lost her memories, she was named after the only thing that she can now say, "Nyuu," and the two allow her to stay at Kouta\'s home. However, it appears that the evil "Lucy" is not dead just yet...',
    poster_path: "/1Qaei4Vst8i0DfzdqhOJJHc5JAY.jpg",
    title: "エルフェンリート",
    maturity: 17,
    backdrop_path: "/v0fs6QuCurAFsFC2i3NX39vxrms.jpg",
    genre: "horror",
    slug: "Elfen Lied",
  });
  firebase.firestore().collection("series").add({
    title: "Swamp Thing",
    genre: "horror",
    poster_path: "/dD3HcMczLC9wNvfNzx4pZVyl6q8.jpg",
    description:
      "CDC researcher Abby Arcane investigates what seems to be a deadly swamp-born virus in a small town in Louisiana but she soon discovers that the swamp holds mystical and terrifying secrets. When unexplainable and chilling horrors emerge from the murky marsh, no one is safe.",
    id: 79240,
    backdrop_path: "/5YEnPWmTMpPtFk3MxjlfO1U1xW5.jpg",
    slug: "Swamp Thing",
    maturity: 17,
  });
  firebase.firestore().collection("series").add({
    maturity: 17,
    backdrop_path: "/60CM00XRew7PeYQTwM1uB5F494K.jpg",
    id: 236,
    genre: "horror",
    poster_path: "/fi1GEdCbyWRDHpyJcB25YYK7fh4.jpg",
    slug: "The Flash",
    description:
      "When a bolt of lightening crashes through a police crime lab, a mix of electrically charged substances bathes chemist Barry Allen, transforming him into the fastest man alive--The Flash.",
    title: "The Flash",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/dGMpVVWGaqzsMqEYiKTH94MxBn.jpg",
    genre: "horror",
    id: 40351,
    slug: "Green Lantern: The Animated Series",
    maturity: 17,
    title: "Green Lantern: The Animated Series",
    description:
      "The Green Lanterns Hal and his partner Kilowog fight against the forces of the Red Lanterns.",
    poster_path: "/9XlUmYdi6j6JHKhYLnQ9wRyq6bM.jpg",
  });
  firebase.firestore().collection("series").add({
    poster_path: "/drlfSCIlMKrEeMPhi8pqY4xGxj.jpg",
    slug: "Doom Patrol",
    description:
      "The Doom Patrol’s members each suffered horrible accidents that gave them superhuman abilities — but also left them scarred and disfigured. Traumatized and downtrodden, the team found purpose through The Chief, who brought them together to investigate the weirdest phenomena in existence — and to protect Earth from what they find.",
    title: "Doom Patrol",
    maturity: 17,
    backdrop_path: "/b7unxzWSFfj7i6UVmuPixxxXFOF.jpg",
    id: 79501,
    genre: "horror",
  });
  firebase.firestore().collection("series").add({
    poster_path: "/pUhJGETy2sec4vEkiqJ9eGeIywc.jpg",
    vote_average: 8.2,
    description:
      "The origins of the world’s greatest hero–from Krypton refugee Kal-el’s arrival on Earth through his tumultuous teen years to Clark Kent’s final steps toward embracing his destiny as the Man of Steel.",
    maturity: 17,
    title: "Smallville",
    id: 4604,
    genre: "horror",
    slug: "Smallville",
    backdrop_path: "/8A2IYYRLM5rR0hYwbWJr9KLPnUu.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/mAs8HQdoxJbMuXxgoSgDoX5apJd.jpg",
    genre: "horror",
    id: 61512,
    slug: "Diabolik Lovers",
    maturity: 17,
    title: "ディアボリックラヴァーズ",
    description:
      "Based on a visual novel of the same name by Rejet and Otomate, for the female market.\n\nKomori Yui is a positive-thinking girl who nevertheless is troubled by seeing spirits and experiencing poltergeist phenomena. In her second year in high school, she transfers to a new school — a night school for entertainers and celebrities — due to her father's work. There are rumours that vampires exist among the student body, and Yui ends up living with the six sadistic Sakamaki vampire brothers.",
    poster_path: "/s47IdJi9JSvrOSr1fbswI9EUSEE.jpg",
  });
  firebase.firestore().collection("series").add({
    vote_average: 8.6,
    description:
      "When Kouichi arrives at his new school, he immediately senses something frightening in the atmosphere of his new class, something that no student wants to talk about and that seems to be related to a mysterious and silent girl.",
    slug: "Another",
    backdrop_path: "/oAfc1oNsURepm6VegBSBw1IGMF4.jpg",
    id: 42589,
    genre: "horror",
    title: "アナザー",
    maturity: 17,
    poster_path: "/cwaEn7Gg11avVtn1BZ5qaFV1aEd.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/4ZdEMS47PnUK98uYCjh1t5UOJp8.jpg",
    genre: "horror",
    id: 60866,
    slug: "iZombie",
    maturity: 17,
    title: "iZombie",
    description:
      "A medical student who becomes a zombie joins a Coroner's Office in order to gain access to the brains she must reluctantly eat so that she can maintain her humanity. But every brain she eats, she also inherits their memories and must now solve their deaths with help from the Medical examiner and a police detective.",
    poster_path: "/q4nqNwAhzVR7JuYctrWJvUWz3xR.jpg",
  });
  firebase.firestore().collection("series").add({
    description:
      "A man struggling with his faith is haunted by the sins of his past but is suddenly thrust into the role of defending humanity from the gathering forces of darkness.",
    slug: "Constantine",
    backdrop_path: "/3tq8kLes9zsPHu0zg0cz3E3GHN3.jpg",
    genre: "horror",
    poster_path: "/gQ3bA1DBKyZwkDCHJFEAT0MkKpu.jpg",
    id: 60743,
    title: "Constantine",
    maturity: 17,
  });

  //superheros

  firebase.firestore().collection("series").add({
    description:
      "After a tragic ending to her short-lived super hero stint, Jessica Jones is rebuilding her personal life and career as a detective who gets pulled into cases involving people with extraordinary abilities in New York City.",
    maturity: 17,
    slug: "Marvel's Jessica Jones",
    backdrop_path: "/g9ju2o4LioYYOyihBvf9lVX8XL.jpg",
    genre: "superheros",
    vote_count: 1422,
    title: "Marvel's Jessica Jones",

    poster_path: "/wkFdanlAaV39sSXeslImfRUj3jQ.jpg",

    id: 38472,
  });
  firebase.firestore().collection("series").add({
    description:
      "A team of young superheroes led by Nightwing (formerly Batman's first Robin) form to combat evil and other perils.",

    poster_path: "/eeHI5iBSCOxj4HGSOmFM6azBmwb.jpg",
    maturity: 17,
    backdrop_path: "/9foO1E8sliKN2dvtMOEwwQgynlW.jpg",
    slug: "Titans",
    genre: "superheros",
    id: 75450,

    title: "Titans",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/zpgrhwVXZwqoQWkCqrMKV3xBrm7.jpg",
    genre: "superheros",
    title: "Young Justice",
    poster_path: "/oL31ADgSgVdgoJPRAdWISQBIO0w.jpg",

    slug: "Young Justice",
    description:
      "Teenage superheroes strive to prove themselves as members of the Justice League.",
    id: 33217,
    maturity: 17,
  });
  firebase.firestore().collection("series").add({
    poster_path: "/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
    maturity: 17,

    title: "The Flash",

    id: 60735,
    slug: "The Flash",
    backdrop_path: "/z59kJfcElR9eHO9rJbWp4qWMuee.jpg",

    genre: "superheros",
    description:
      'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash.',
  });
  firebase.firestore().collection("series").add({
    title: "DC's Legends of Tomorrow",
    genre: "superheros",

    poster_path: "/yJ3xE11IDIe29LJsSbhzwt5Oxtd.jpg",

    description:
      "When heroes alone are not enough ... the world needs legends. Having seen the future, one he will desperately try to prevent from happening, time-traveling rogue Rip Hunter is tasked with assembling a disparate group of both heroes and villains to confront an unstoppable threat — one in which not only is the planet at stake, but all of time itself. Can this ragtag team defeat an immortal threat unlike anything they have ever known?",
    id: 62643,
    backdrop_path: "/be8fOACxsVyaX6lZLlQOWNqF0g2.jpg",
    slug: "DC's Legends of Tomorrow",

    maturity: 17,
  });
  firebase.firestore().collection("series").add({
    original_language: "en",
    poster_path: "/49XzINhH4LFsgz7cx6TOPcHUJUL.jpg",
    slug: "Marvel's The Defenders",
    maturity: 17,
    description:
      "Daredevil, Jessica Jones, Luke Cage and Iron Fist join forces to take on common enemies as a sinister conspiracy threatens New York City.",

    title: "Marvel's The Defenders",

    backdrop_path: "/7eV2vDrj1AwlTffUud66v9o0Ytq.jpg",
    genre: "superheros",
    id: 62285,
  });
  firebase.firestore().collection("series").add({
    genre: "superheros",
    slug: "Vixen",
    poster_path: "/43LYbnSlRKsZRI3cwFsFfQSTFEj.jpg",

    maturity: 17,
    id: 62125,

    description:
      "Originally from Africa, Mari McGabe's parents were killed by local greed, corruption and wanton violence.But the orphaned Marl refuses to succumb to the terrors surrounding her.\n\nInheriting her family's Tantu Totem, Mari can access the powers of animals - anything from the super-strength of a gorilla to the speed of a cheetah. As Vixen she fights valiantly to protect the world from threats like those that claimed her family.",
    backdrop_path: "/zvHRerCjZLvaOxZ9Ajtemj1w04X.jpg",
    title: "Vixen",
  });

  firebase.firestore().collection("series").add({
    maturity: 17,

    backdrop_path: "/60CM00XRew7PeYQTwM1uB5F494K.jpg",
    id: 236,
    genre: "superheros",
    original_language: "en",

    poster_path: "/fi1GEdCbyWRDHpyJcB25YYK7fh4.jpg",
    slug: "The Flash",
    description:
      "When a bolt of lightening crashes through a police crime lab, a mix of electrically charged substances bathes chemist Barry Allen, transforming him into the fastest man alive--The Flash.",

    title: "The Flash",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/18inwHlpKnK9mt02wFBJoIVKXI.jpg",
    maturity: 17,
    genre: "superheros",
    id: 69629,

    poster_path: "/nshCqszjTNuqhrB53vrSqWO18sE.jpg",
    title: "The Gifted",

    description:
      "A suburban couple's ordinary lives are rocked by the sudden discovery that their children possess mutant powers. Forced to go on the run from a hostile government, the family joins up with an underground network of mutants and must fight to survive.",

    slug: "The Gifted",
  });
  firebase.firestore().collection("series").add({
    description:
      "David Haller, AKA Legion, is a troubled young man who may be more than human. Diagnosed as schizophrenic, David has been in and out of psychiatric hospitals for years. But after a strange encounter with a fellow patient, he’s confronted with the possibility that the voices he hears and the visions he sees might be real.",
    title: "Legion",

    backdrop_path: "/r1e0lDIsezrklektX82AetUHr5m.jpg",
    vote_count: 918,
    genre: "superheros",
    slug: "Legion",

    maturity: 17,
    poster_path: "/vT0Zsbm4GWd7llNjgWEtwY0CqOv.jpg",
    id: 67195,
  });
  firebase.firestore().collection("series").add({
    original_language: "en",
    poster_path: "/drlfSCIlMKrEeMPhi8pqY4xGxj.jpg",
    maturity: 17,
    slug: "Doom Patrol",

    description:
      "The Doom Patrol’s members each suffered horrible accidents that gave them superhuman abilities — but also left them scarred and disfigured. Traumatized and downtrodden, the team found purpose through The Chief, who brought them together to investigate the weirdest phenomena in existence — and to protect Earth from what they find.",
    title: "Doom Patrol",

    backdrop_path: "/b7unxzWSFfj7i6UVmuPixxxXFOF.jpg",
    id: 79501,
    genre: "superheros",
  });
  firebase.firestore().collection("series").add({
    poster_path: "/pUhJGETy2sec4vEkiqJ9eGeIywc.jpg",

    description:
      "The origins of the world’s greatest hero–from Krypton refugee Kal-el’s arrival on Earth through his tumultuous teen years to Clark Kent’s final steps toward embracing his destiny as the Man of Steel.",

    maturity: 17,
    title: "Smallville",
    id: 4604,
    genre: "superheros",
    slug: "Smallville",

    backdrop_path: "/8A2IYYRLM5rR0hYwbWJr9KLPnUu.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/uPbpYFYXlUdTDEmfoubKNfdEZZx.jpg",
    title: "Wolverine and the X-Men",
    genre: "superheros",
    original_language: "en",
    slug: "Wolverine and the X-Men",
    poster_path: "/ky3Z2lzRayWOR9N6f48e6eSw1Si.jpg",
    maturity: 17,
    description:
      "Wolverine and the X-Men was an American cartoon series by Marvel Animation. It is the fourth animated adaptation of the X-Men characters, the other three being Pryde of the X-Men, X-Men: The Animated Series, and X-Men: Evolution.",

    id: 6549,
  });
  firebase.firestore().collection("series").add({
    poster_path: "/lBomQFW1vlm1yUYMNSbFZ45R4Ox.jpg",
    slug: "Batman: The Animated Series",
    maturity: 17,
    description:
      'Vowing to avenge the murder of his parents, Bruce Wayne devotes his life to wiping out crime in Gotham City as the masked vigilante "Batman".',

    title: "Batman: The Animated Series",

    backdrop_path: "/irSLhM5tgGtG5fsmnL2aaXyaiCT.jpg",
    genre: "superheros",
    id: 2098,
  });
  firebase.firestore().collection("series").add({
    poster_path: "/1LbPs6i1h4BKjVUwK5S9GjPCydi.jpg",

    description:
      "A much more lavish version of the popular Superman television series which had first aired forty years earlier, Lois & Clark focused more on the Man of Steel's early adult years in Metropolis. With the unknowing help of Lois Lane, Clark Kent created Superman there in Metropolis after finding work at the world-famous Daily Planet newspaper, where he meets fellow reporter Lois Lane.",

    maturity: 17,
    title: "Lois & Clark: The New Adventures of Superman",
    id: 4515,
    genre: "superheros",
    slug: "Lois & Clark: The New Adventures of Superman",

    backdrop_path: "/i37ohXuEqdcWdaCptS9FTq43pGC.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/vNnLAKmoczRlNarxyGrrw0KSOeX.jpg",
    maturity: 17,
    genre: "superheros",
    id: 1412,

    poster_path: "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",

    description:
      "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
    slug: "Arrow",
    title: "Arrow",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/xGjg5J21pmMabRT4aDd9hyts4kP.jpg",
    maturity: 17,
    genre: "superheros",
    id: 2287,
    slug: "Batman",

    title: "Batman",
    description:
      "Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing the the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including The Riddler, The Joker, Catwoman, and The Penguin.",
    poster_path: "/1ZEJuuDh0Zpi5ELM3Zev0GBhQ3R.jpg",
  });
  firebase.firestore().collection("series").add({
    title: "WandaVision",
    backdrop_path: "/57vVjteucIF3bGnZj6PmaoJRScw.jpg",
    id: 85271,

    maturity: 17,
    slug: "WandaVision",

    genre: "superheros",
    poster_path: "/glKDfE6btIRcVB5zrjspRIs4r52.jpg",

    description:
      "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
  });
  firebase.firestore().collection("series").add({
    title: "Marvel's Iron Fist",
    maturity: 17,
    description:
      "Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny.",
    backdrop_path: "/xHCfWGlxwbtMeeOnTvxUCZRGnkk.jpg",
    genre: "superheros",
    id: 62127,
    slug: "Marvel's Iron Fist",
    poster_path: "/4l6KD9HhtD6nCDEfg10Lp6C6zah.jpg",
  });

  /// Documentries

  firebase.firestore().collection("series").add({
    backdrop_path: "/wAEWZm2pSopAbqE5dQWE0ET8aR5.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 114695,
    slug: "Marvel Studios: Legends",

    title: "Marvel Studios: Legends",
    description:
      "Revisit the epic heroes, villains and moments from across the MCU in preparation for the stories still to come. Each dynamic segment feeds directly into the upcoming series — setting the stage for future events. This series weaves together the many threads that constitute the unparalleled Marvel Cinematic Universe.",

    poster_path: "/EpDuYIK81YtCUT3gH2JDpyj8Qk.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/9XhJ6rsGX2bG0CBNFWwzjtPaZig.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 87083,
    slug: "Formula 1: Drive to Survive",

    title: "Formula 1: Drive to Survive",
    description:
      "Drivers, managers and team owners live life in the fast lane -- both on and off the track -- during one cutthroat season of Formula 1 racing.",

    poster_path: "/hZZpqv9bKo9tUMmQY54HIJcgyqx.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/epQEpsbNHrEe76oSI42TOwHKOLF.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 93736,
    slug: "Age of Samurai: Battle for Japan",

    title: "Age of Samurai: Battle for Japan",
    description:
      "Dynamic reenactments and expert commentaries bring to life the tumultuous history and power struggles of a warring 16th-century feudal Japan.",

    poster_path: "/wIKQRtc2kKiBmBnkOjjvMqIDfah.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: null,
    maturity: 17,
    genre: "documentaries",
    id: 69998,
    slug: "Hugo Chávez, El Comandante",

    title: "Hugo Chávez, El Comandante",
    description:
      "The life of Hugo Chavez; from childhood, his arrival to power, confrontations, and loves to his last days as president.",

    poster_path: "/sEThDZHGrhD6UPDVnP7skTAa6mF.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/41ZBU34r8WqCBSczUzL7SMQAgX3.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 116989,
    slug: "Crime Scene: The Vanishing at the Cecil Hotel",

    title: "Crime Scene: The Vanishing at the Cecil Hotel",
    description:
      "The notorious Cecil Hotel grows in infamy when guest Elisa Lam vanishes. A dive into crime's darkest places.",

    poster_path: "/2JECBiHk8U8PIhswVd3Pthc13tG.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/xJqcoi8hi3yFCl05oULKtmfSDXi.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 3562,
    slug: "NOVA",

    title: "NOVA",
    description:
      "PBS' premier science series helps viewers of all ages explore the science behind the headlines. Along the way, NOVA demystifies science and technology, and highlights the people involved in scientific pursuits.",

    poster_path: "/giUBXYnDAaJgNqA6iE3BMVE2EHp.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/2x2UEVSLddYb2dYnT4jTWGL3B9d.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 45,
    slug: "Top Gear",
    title: "Top Gear",
    description:
      'This fast-paced and stunt-filled motor show tests whether cars, both mundane and extraordinary, live up to their manufacturers\' claims. The long-running show travels to locations around the world, performing extreme stunts and challenges to see what the featured cars are capable of doing. The current hosts are Paddy Mcguinness, Chris Harris and Andrew "Freddie" Flintoff.',
    poster_path: "/aqM6QnuhSXzjHlKbXyKUqxaGiWu.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/qqewE3aUi1js0tVvrhWT3znQppY.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 90,
    slug: "Mayday",

    title: "Mayday",
    description:
      "Revealing the dark truth that aviation safety improves one crash at a time, Mayday  investigates legendary aviation disasters to find out what went wrong and why.\n\nBased on cockpit voice recorders, accident reports and eyewitness accounts, every episode also features interviews, state-of-the-art CGI and gripping reenactments.",

    poster_path: "/dTTl7DR23zr8IlPSMh2Vcfumyo3.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/59amxr7vKdeaWfv09y8UG8yZ6v.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 115194,
    slug: "A Perfect Planet",

    title: "A Perfect Planet",
    description:
      "A unique fusion of blue chip natural history and earth science that explains how our living planet operates. This five-part series shows how the forces of nature drive, shape and support Earth’s great diversity of wildlife.",

    poster_path: "/8JJa4gduVytwpXQzFtZNibRA6S.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/h3M7lbb0OZhcmNRUREqB0sJDXpb.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 94667,
    slug: "De viaje con los Derbez",

    title: "De viaje con los Derbez",
    description: "",

    poster_path: "/o1lAdiCYmCuDb25wyBCJQMeUhVA.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/gs3CZfP8Sq7TwUEGLqU7buBa6lU.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 58474,
    slug: "Cosmos",

    title: "Cosmos",
    description:
      "Famed astrophysicist Neil deGrasse Tyson provides clarity for the vision of the cosmos as he voyages across the universe with never-before-told stories that delve into the scientific concepts of the laws of gravity and the origins of space and time.",

    poster_path: "/5o07ps0QZ0bNoRYxTn9cPdRWlUu.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/Muu3oTNLR8Yiz4SJXSGD8w67Qw.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 57861,
    slug: "Waes' Travels",

    title: "Reizen Waes",
    description:
      "Why do we always retreat to the same vacation destinations? In Travel Waes Tom Waes travels to countries that the average tourist would rather stop buying them. And while he has only one question: can I be on vacation? No quiet villages in Spain or France so, but destinations with armed guerrillas, volcanoes, cyclones or insane dictators. Tom Waes rolls from one experience to the other: the saddest hotels to the most beautiful vistas in the world of pious strip clubs to the bed of Stalin.",

    poster_path: "/7EnRQSWruGLgc0U1hvugL173uAJ.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/v3WopDdgHCoNvoBS0V8eVJdurJP.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 10029,
    slug: "Great Performances",

    title: "Great Performances",
    description:
      "The best in the performing arts from across America and around the world including a diverse programming portfolio of classical music, opera, popular song, musical theater, dance, drama, and performance documentaries.",

    poster_path: "/4WS9naGSt9ZaFgdsP2HDZkqXWDh.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/sLKhJhQ0QLBRshcqkXj8mCX9qLG.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 118556,
    slug: "Sasquatch",

    title: "Sasquatch",
    description:
      "Investigative journalist David Holthouse attempts to solve a bizarre twenty-five year old triple homicide that was said to be the work of a mythical creature.",

    poster_path: "/7vj7EFK6dqto9KpOZRki9VarZJv.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/zL8kXiImDSHFfridtcvFw5ai9NB.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 14951,
    slug: "Nature",

    title: "Nature",
    description:
      "Consistently stunning documentaries transport viewers to far-flung locations ranging from the torrid African plains to the chilly splendours of icy Antarctica. The show's primary focus is on animals and ecosystems around the world. A comic book based on the show, meant to be used an as educational tool for kids, was briefly distributed to museums and schools at no cost in the mid-2000s.",
    poster_path: "/mniuxYgwoNJpmOI2eXpm4hYK7wi.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/xysWPglQNT6HcGvz6KogX4Hhx7K.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 1966,
    slug: "Horizon",

    title: "Horizon",
    description:
      "Horizon tells amazing science stories, unravels mysteries and reveals worlds you've never seen before.",

    poster_path: "/uX8pic7asQBdnwMB9QjPvTsn1Dw.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/nM7FaiT1PHdJG9eLaUyNE7qV6iS.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 85224,
    slug: "Britain’s Most Evil Killers",

    title: "Britain’s Most Evil Killers",
    description:
      "The smiling parents, the respectable groom, the helpful official...all with evil inside. Brand new and exclusive to Pick, Britain's Most Evil Killers explores the crimes of Britain's 12 most brutal killers.",

    poster_path: "/2CKBjfdlMJt6rVdpa1PEgX3rT5N.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/hjtCNgiDAChuDNtXdy8aSGvAg7.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 1428,
    slug: "MythBusters",

    title: "MythBusters",
    description:
      "MythBusters is a science entertainment television program created and produced by Australia's Beyond Television Productions for the Discovery Channel. The show's hosts, special effects experts Adam Savage and Jamie Hyneman, use elements of the scientific method to test the validity of rumors, myths, movie scenes, adages, Internet videos, and news stories.",

    poster_path: "/9MxhqYvwx8FSb5cRWUWEDfpWSfo.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/dDoO1nKuBUB3rjrR54grbQ5CvEG.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 4384,
    slug: "Frontline",

    title: "Frontline",
    description:
      "Since it began in 1983, Frontline has been airing public-affairs documentaries that explore a wide scope of the complex human experience. Frontline's goal is to extend the impact of the documentary beyond its initial broadcast by serving as a catalyst for change.",

    poster_path: "/m4kZVMJC9P9BI7T0F5fUMWyelcA.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/eBJQvI0syaskth7jcyCKopCCaID.jpg",
    maturity: 17,
    genre: "documentaries",
    id: 111495,
    slug: "Carmel: Who Killed Maria Marta?",
    title: "Carmel: ¿Quién mató a María Marta?",
    description:
      "Documentary series on the circumstances surrounding the death of María Marta García Belsunce, one of the most controversial criminal cases in Argentina.",
    poster_path: "/snmVxrXyZ9DShBL5olPvcuWlCab.jpg",
  });

  //netflix orginal;s
  firebase.firestore().collection("series").add({
    backdrop_path: "/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg",
    genre: "originals",
    id: 88396,
    slug: "The Falcon and the Winter Soldier",
    maturity: 17,
    title: "The Falcon and the Winter Soldier",
    description:
      "Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.",
    poster_path: "/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/mZjZgY6ObiKtVuKVDrnS9VnuNlE.jpg",
    genre: "originals",
    id: 71712,
    slug: "The Good Doctor",
    maturity: 17,

    title: "The Good Doctor",
    description:
      "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives",

    poster_path: "/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/z59kJfcElR9eHO9rJbWp4qWMuee.jpg",

    genre: "originals",
    id: 60735,
    slug: "The Flash",
    maturity: 17,

    title: "The Flash",
    description:
      'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won\'t be long before the world learns what Barry Allen has become...The Flash.',

    poster_path: "/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg",

    genre: "originals",
    id: 95557,
    slug: "Invincible",
    maturity: 17,

    title: "Invincible",
    description:
      "Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.",

    poster_path: "/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/edmk8xjGBsYVIf4QtLY9WMaMcXZ.jpg",

    genre: "originals",
    id: 1416,
    slug: "Grey's Anatomy",
    maturity: 17,

    title: "Grey's Anatomy",
    description:
      "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.",

    poster_path: "/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg",
    first_air_date: "2017-01-26",
    genre: "originals",
    id: 69050,
    slug: "Riverdale",
    maturity: 17,

    title: "Riverdale",
    description:
      "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",

    poster_path: "/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/ta5oblpMlEcIPIS2YGcq9XEkWK2.jpg",

    genre: "originals",
    id: 63174,
    slug: "Lucifer",
    maturity: 17,
    title: "Lucifer",
    description:
      "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
    poster_path: "/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/uro2Khv7JxlzXtLb8tCIbRhkb9E.jpg",
    first_air_date: "2010-10-31",
    genre: "originals",
    id: 1402,
    slug: "The Walking Dead",
    maturity: 17,

    title: "The Walking Dead",
    description:
      "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",

    poster_path: "/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/57vVjteucIF3bGnZj6PmaoJRScw.jpg",
    first_air_date: "2021-01-15",
    genre: "originals",
    id: 85271,
    slug: "WandaVision",
    maturity: 17,

    title: "WandaVision",
    description:
      "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",

    poster_path: "/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/pLG4ihU1d2XkQbASQDjsFu9U7d9.jpg",
    first_air_date: "2021-03-24",
    genre: "originals",
    maturity: 17,
    id: 120168,
    slug: "Who Killed Sara?",
    title: "¿Quién mató a Sara?",
    description:
      "Hell-bent on exacting revenge and proving he was framed for his sister's murder, Álex sets out to unearth much more than the crime's real culprit.",
    poster_path: "/o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/TXaR5xmz2ohHgnpf0YPWtZPlCO.jpg",

    genre: "originals",
    id: 95057,
    slug: "Superman & Lois",
    maturity: 17,

    title: "Superman & Lois",
    description:
      "After years of facing megalomaniacal supervillains, monsters wreaking havoc on Metropolis, and alien invaders intent on wiping out the human race, The Man of Steel aka Clark Kent and Lois Lane come face to face with one of their greatest challenges ever: dealing with all the stress, pressures and complexities that come with being working parents in today's society.",
    poster_path: "/6SJppowm7cdQgLkvoTlnTUSbjr9.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/suopoADq0k8YZr4dQXcU6pToj6s.jpg",

    genre: "originals",
    id: 1399,
    slug: "Game of Thrones",
    maturity: 17,

    title: "Game of Thrones",
    description:
      "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",

    poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/6xsjdGa2nuc8by10KO6zg8GDZrp.jpg",

    genre: "originals",
    id: 79008,
    slug: "Luis Miguel: The Series",
    maturity: 17,
    title: "Luis Miguel: La Serie",
    description:
      "The series dramatizes the life story of Mexican superstar singer Luis Miguel, who has captivated audiences in Latin America and beyond for decades.",

    poster_path: "/34FaY8qpjBAVysSfrJ1l7nrAQaD.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/58PON1OrnBiX6CqEHgeWKVwrCn6.jpg",

    genre: "originals",
    id: 62286,
    slug: "Fear the Walking Dead",
    maturity: 17,

    title: "Fear the Walking Dead",
    description:
      'What did the world look like as it was transforming into the horrifying apocalypse depicted in "The Walking Dead"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.',

    poster_path: "/4UjiPdFKJGJYdxwRs2Rzg7EmWqr.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/fRYwdeNjMqC30EhofPx5PlDpdun.jpg",

    genre: "originals",
    id: 79460,
    slug: "Legacies",
    maturity: 17,

    title: "Legacies",
    description:
      "In a place where young witches, vampires, and werewolves are nurtured to be their best selves in spite of their worst impulses, Klaus Mikaelson’s daughter, 17-year-old Hope Mikaelson, Alaric Saltzman’s twins, Lizzie and Josie Saltzman, among others, come of age into heroes and villains at The Salvatore School for the Young and Gifted.",

    poster_path: "/qTZIgXrBKURBK1KrsT7fe3qwtl9.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/wgEWTYAAY7F04o4F20j0L1DGB8i.jpg",

    genre: "originals",
    id: 91605,
    maturity: 17,
    slug: "I Am...",
    title: "I Am...",
    description:
      "Each hour-long film follows a different women as they experience “moments that are emotionally raw, thought-provoking and utterly personal”.",
    poster_path: "/oogunE22HDTcTxFakKQbwqfw1qo.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/gL8myjGc2qrmqVosyGm5CWTir9A.jpg",

    genre: "originals",
    id: 77169,
    slug: "Cobra Kai",
    maturity: 17,

    title: "Cobra Kai",
    description:
      "This Karate Kid sequel series picks up 30 years after the events of the 1984 All Valley Karate Tournament and finds Johnny Lawrence on the hunt for redemption by reopening the infamous Cobra Kai karate dojo. This reignites his old rivalry with the successful Daniel LaRusso, who has been working to maintain the balance in his life without mentor Mr. Miyagi.",

    poster_path: "/obLBdhLxheKg8Li1qO11r2SwmYO.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/oUVXcoUCe0lf3jvJSRpViyebBpc.jpg",

    genre: "originals",
    id: 71694,
    slug: "Snowfall",
    maturity: 17,
    title: "Snowfall",
    description:
      "Los Angeles. 1983. A storm is coming and it's name is crack. Set against the infancy of the crack cocaine epidemic and its ultimate radical impact on the culture as we know it, the story follows numerous characters on a violent collision course.",
    popularity: 405.278,
    poster_path: "/orvFrLzqSeW5qTFpfJEbPfHRPWg.jpg",
    vote_average: 8.1,
    vote_count: 140,
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/k7T9xRyzP41wBVNyNeLmh8Ch7gD.jpg",
    genre: "originals",
    id: 18165,
    slug: "The Vampire Diaries",
    maturity: 17,
    title: "The Vampire Diaries",
    description:
      "The story of two vampire brothers obsessed with the same girl, who bears a striking resemblance to the beautiful but ruthless vampire they knew and loved in 1864.",
    poster_path: "/kLEha9zVVv8acGFKTX4gjvSR2Q0.jpg",
  });
  firebase.firestore().collection("series").add({
    backdrop_path: "/aq2yEMgRQBPfRkrO0Repo2qhUAT.jpg",
    genre: "originals",
    id: 44217,
    maturity: 17,
    slug: "Vikings",
    title: "Vikings",
    description:
      "The adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.",
    poster_path: "/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
  });

  /* films
     ============================================ */
  //top Rated
  firebase.firestore().collection("films").add({
    backdrop_path: "/xRI636TOdS1K1GBqIBRSmfZ1T5x.jpg",
    genre: "top rated",
    id: 19404,
    title: "दिलवाले दुल्हनिया ले जायेंगे",
    description:
      "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",

    slug: "Dilwale Dulhania Le Jayenge",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
    genre: "top rated",
    id: 278,

    title: "The Shawshank Redemption",
    description:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",

    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",

    slug: "The Shawshank Redemption",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
    genre: "top rated",
    id: 724089,

    title: "Gabriel's Inferno Part II",
    description:
      "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",

    poster_path: "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
    slug: "Gabriel's Inferno Part II",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    genre: "top rated",
    id: 238,

    title: "The Godfather",
    description:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",

    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",

    slug: "The Godfather",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg",
    genre: "top rated",
    id: 696374,

    title: "Gabriel's Inferno",
    description:
      "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",

    poster_path: "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",

    slug: "Gabriel's Inferno",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
    genre: "top rated",
    id: 761053,

    title: "Gabriel's Inferno Part III",
    description:
      "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",

    poster_path: "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",

    slug: "Gabriel's Inferno Part III",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
    genre: "top rated",
    id: 424,

    title: "Schindler's List",
    description:
      "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",

    poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",

    slug: "Schindler's List",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
    genre: "top rated",
    id: 615457,

    title: "Nobody",
    description:
      'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',

    poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",

    slug: "Nobody",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg",
    genre: "top rated",
    id: 240,

    title: "The Godfather: Part II",
    description:
      "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",

    poster_path: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",

    slug: "The Godfather: Part II",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    genre: "top rated",
    id: 372058,

    title: "君の名は。",
    description:
      "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",

    poster_path: "/q719jXXEzOoYaps6babgKnONONX.jpg",

    slug: "Your Name.",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
    genre: "top rated",
    id: 791373,

    title: "Zack Snyder's Justice League",
    description:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",

    poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",

    slug: "Zack Snyder's Justice League",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
    genre: "top rated",
    id: 129,

    title: "千と千尋の神隠し",
    description:
      "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    slug: "Spirited Away",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/yeJhRNtE4XW2lOoVVFO9iuDr3AL.jpg",
    genre: "top rated",
    id: 441130,

    title: "Wolfwalkers",
    description:
      "In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, a young apprentice hunter comes to Ireland with her father to wipe out the last pack. But when she saves a wild native girl, their friendship leads her to discover the world of the Wolfwalkers and transform her into the very thing her father is tasked to destroy.",

    poster_path: "/ehAKuE48okTuonq6TpsNQj8vFTC.jpg",

    slug: "Wolfwalkers",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    genre: "top rated",
    id: 496243,
    title: "기생충",
    description:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",

    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",

    slug: "Parasite",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/xMIyotorUv2Yz7zpQz2QYc8wkWB.jpg",
    genre: "top rated",
    id: 497,

    title: "The Green Mile",
    description:
      "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",

    poster_path: "/velWPhVMQeQKcxggNEU8YmIo52R.jpg",

    slug: "The Green Mile",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/1fOsyhVz5qyX2rl1qqX6KImVhTx.jpg",
    genre: "top rated",
    id: 644479,

    title: "Dedicada a mi ex",
    description:
      "The film tells the story of Ariel, a 21-year-old who decides to form a rock band to compete for a prize of ten thousand dollars in a musical band contest, this as a last option when trying to get money to save their relationship and reunite with his ex-girlfriend, which breaks due to the trip she must make to Finland for an internship. Ariel with her friend Ortega, decides to make a casting to find the other members of the band, although they do not know nothing about music, thus forming a band with members that have diverse and opposite personalities.",

    poster_path: "/riAooJrFvVhotyaOgoI0WR7okSe.jpg",

    slug: "Dedicated to my ex",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/uWVkEo9PWHu9algZsiLPi6sRU64.jpg",
    genre: "top rated",
    id: 556574,

    title: "Hamilton",
    description:
      "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",

    poster_path: "/h1B7tW0t399VDjAcWJh8m87469b.jpg",

    slug: "Hamilton",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/w7RDIgQM6bLT7JXtH4iUQd3Iwxm.jpg",
    genre: "top rated",
    id: 680,

    title: "Pulp Fiction",
    description:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",

    poster_path: "/x1QZHSq9AzreIVbsp8VgYemAjV0.jpg",

    slug: "Pulp Fiction",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    genre: "top rated",
    id: 389,

    title: "12 Angry Men",
    description:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    poster_path: "/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
    slug: "12 Angry Men",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/9guoVF7zayiiUq5ulKQpt375VIy.jpg",
    genre: "top rated",
    id: 592350,
    title: "僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング",
    description:
      "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
    poster_path: "/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
    slug: "My Hero Academia: Heroes Rising",
    maturity: 17,
  });

  //romance

  firebase.firestore().collection("films").add({
    backdrop_path: "/jw0849O7WLarbYKJkA9WpRLeGKG.jpg",
    genre: "romance",
    id: 802504,

    title: "Just Say Yes",
    description:
      "Incurable romantic Lotte finds her life upended when her plans for a picture-perfect wedding unravel -- just as her self-absorbed sister gets engaged.",

    poster_path: "/3btDwus5VN5jOWfA9strpDJWwfj.jpg",

    slug: "Just Say Yes",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg",
    genre: "romance",
    id: 613504,
    title: "After We Collided",
    description:
      "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
    poster_path: "/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
    slug: "After We Collided",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/dUbtr5cXaCyFByz41ch806Omyj9.jpg",
    genre: "romance",
    id: 796849,

    title: "彼女",
    description:
      "Rei helps the woman she's been in love with for years escape her abusive husband. While on the run, their feelings for each other catch fire.",

    poster_path: "/c7JzcVK4OZY1u7HYiFBOASkKPP5.jpg",

    slug: "Ride or Die",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/2VnghbG2qWChcE6CdZBMDtDQKCF.jpg",
    genre: "romance",
    id: 699102,

    title: "A Week Away",
    description:
      "Troubled teen Will Hawkins has a run-in with the law that puts him at an important crossroad: go to juvenile detention or attend a Christian summer camp. At first a fish-out-of-water, Will opens his heart, discovers love with a camp regular, and sense of belonging in the last place he expected to find it.",

    poster_path: "/htTS07IvYv3rv57ftzNEprefwSq.jpg",

    slug: "A Week Away",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/gzycjJWGw04DF6C7IYOA1F0cWhc.jpg",
    genre: "romance",
    id: 694256,

    title: "Sulla stessa onda",
    description:
      "A summer fling born under the Sicilian sun quickly develops into a heartbreaking love story that forces a boy and girl to grow up too quickly.",

    poster_path: "/j9O2WXJqF45ynkng4SAsZ1h0OCt.jpg",

    slug: "Caught by a Wave",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/88J6waYVTta8Qz3iX3qUeWNA5d5.jpg",
    genre: "romance",
    id: 447362,

    title: "Life in a Year",
    description:
      "A 17 year old finds out that his girlfriend is dying, so he sets out to give her an entire life, in the last year she has left.",

    poster_path: "/xNcjlHPRNoqbpaYis0Y3zX4Hq0x.jpg",

    slug: "Life in a Year",
    maturity: 17,
  });

  firebase.firestore().collection("films").add({
    backdrop_path: "/hQQTE285UQB1lLY1XiioQ77LYnC.jpg",
    genre: "romance",
    id: 572154,

    title: "青春ブタ野郎はゆめみる少女の夢を見ない",
    description:
      "In Fujisawa, Sakuta Azusagawa is in his second year of high school. Blissful days with his girlfriend and upperclassman, Mai Sakurajima, are interrupted by the appearance of his first crush, Shoko Makinohara.",

    poster_path: "/7Ai8vNEv4zEveh12JViGikoVPVV.jpg",

    slug: "Rascal Does Not Dream of a Dreaming Girl",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/pGTXJcZQIgqzFZlWy6KxlamlTHK.jpg",
    genre: "romance",
    id: 621013,

    title: "Chemical Hearts",
    description:
      "When a hopelessly romantic high school senior falls for a mysterious new classmate, it sets them both on an unexpected journey that teaches them about love, loss, and most importantly themselves.",

    poster_path: "/q1MNlZYqhoD4U7sd7pjxD6SUf4z.jpg",

    slug: "Chemical Hearts",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/997ToEZvF2Obp9zNZbY5ELVnmrW.jpg",
    genre: "romance",
    id: 537915,

    title: "After",
    description:
      "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life.",

    poster_path: "/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",

    slug: "After",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: null,
    genre: "romance",
    id: 744275,

    title: "After We Fell",
    description:
      "Just as Tessa makes the biggest decision of her life, everything changes because of revelations about her family. Tessa's life begins to come unglued. Nothing is what she thought it was. Not her friends. Not her family. The one person she should be able to rely on, Hardin, is furious when he discovers the massive secret she's been keeping.",

    poster_path: "/umy454n46930E9ak437kxT7kcXU.jpg",

    slug: "After We Fell",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/nFfXSe79XsJXkkcXZxcQDwbkBm8.jpg",
    genre: "romance",
    id: 660006,

    title: "Madame Claude",
    description:
      "Paris, the late 1960s. Madame Claude is at the head of a flourishing business dedicated to prostitution that gives her power over both the french political and criminal worlds. But the end of her empire is closer than she thinks.",

    poster_path: "/9miY5tHWmvVAft4gjqyaXyhLYHY.jpg",

    slug: "Madame Claude",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/nN4Gs3vZAOJ1D6FRtrwbU9VGYwU.jpg",
    genre: "romance",
    id: 486589,

    title: "Red Shoes And The Seven Dwarfs",
    description:
      "Princes who have been turned into Dwarfs seek the red shoes of a lady in order to break the spell, although it will not be easy.",

    poster_path: "/MBiKqTsouYqAACLYNDadsjhhC0.jpg",

    slug: "Red Shoes And The Seven Dwarfs",
    maturity: 17,
  });

  firebase
    .firestore()
    .collection("films")
    .add({
      backdrop_path: "/y7b78soqvJq4aQ8G0Zt72inSQoE.jpg",
      genre: [35, 10749],
      id: 778730,

      title: "Loco por ella",
      description:
        "After a magical night together, Adri voluntarily turns himself into the psychiatric institution where Carla lives.",

      poster_path: "/hPBJckYsL1UOsz44InZ2wYJyJTy.jpg",

      slug: "Crazy About Her",
      maturity: 17,
    });
  firebase
    .firestore()
    .collection("films")
    .add({
      backdrop_path: "/qIeFiiT0IfkcXmfHG2KvFxwsttw.jpg",
      genre: [18, 10749],
      id: 506281,

      title: "The World to Come",
      description:
        "Two women who forge a close connection despite their isolation in the mid-19th-century American frontier.",

      poster_path: "/j64CnpmbaKB90Cpprk5hM9kHyJI.jpg",

      slug: "The World to Come",
      maturity: 17,
    });
  firebase.firestore().collection("films").add({
    backdrop_path: "/1xQtvgay8rDwSaZPwyhcecqV8UD.jpg",
    genre: "romance",
    id: 582596,

    title: "The Wrong Missy",
    description:
      "A guy meets the woman of his dreams and invites her to his company's corporate retreat, but realizes he sent the invite to the wrong person.",

    poster_path: "/A2YlIrzypvhS3vTFMcDkG3xLvac.jpg",

    slug: "The Wrong Missy",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/qjhcTGnjxYJqwBGlDzZkYWmne6e.jpg",
    genre: "romance",
    id: 614409,

    title: "To All the Boys: Always and Forever",
    description:
      "Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans — with and without Peter.",

    poster_path: "/zdkJs9j6yKo9di0kjtctM01fSMv.jpg",

    slug: "To All the Boys: Always and Forever",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/yBxq43FaskaXDGKWNJQmM75WoGS.jpg",
    genre: "romance",
    id: 514921,

    title: "The Aeronauts",
    description:
      "In 1862, daredevil balloon pilot Amelia Wren teams up with pioneering meteorologist James Glaisher  to advance human knowledge of the weather and fly higher than anyone in history. While breaking records and advancing scientific discovery, their voyage to the very edge of existence helps the unlikely pair find their place in the world they have left far below them. But they face physical and emotional challenges in the thin air, as the ascent becomes a fight for survival.",

    poster_path: "/kZHnblqmTBUBgzYBIxWIz9txsEi.jpg",

    slug: "The Aeronauts",
    maturity: 17,
  });

  //action

  firebase.firestore().collection("films").add({
    backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
    genre: "action",
    id: 399566,

    title: "Godzilla vs. Kong",
    description:
      "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",

    poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",

    slug: "Godzilla vs. Kong",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
    genre: "action",
    id: 791373,

    title: "Zack Snyder's Justice League",
    description:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",

    poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",

    slug: "Zack Snyder's Justice League",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/z7HLq35df6ZpRxdMAE0qE3Ge4SJ.jpg",
    genre: "action",
    id: 615678,

    title: "Thunder Force",
    description:
      "In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city.",

    poster_path: "/279yOM4OQREL36B3SECnRxoB4MZ.jpg",

    slug: "Thunder Force",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    genre: "action",
    id: 460465,

    title: "Mortal Kombat",
    description:
      "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",

    poster_path: "/8yhtzsbBExY8mUct2GOk4LDDuGH.jpg",

    slug: "Mortal Kombat",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/5NxjLfs7Bi07bfZCRl9CCnUw7AA.jpg",
    genre: "action",
    id: 412656,

    title: "Chaos Walking",
    description:
      "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",

    poster_path: "/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg",

    slug: "Chaos Walking",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg",
    genre: "action",
    id: 527774,

    title: "Raya and the Last Dragon",
    description:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",

    poster_path: "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",

    slug: "Raya and the Last Dragon",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/9xeEGUZjgiKlI69jwIOi0hjKUIk.jpg",
    genre: "action",
    id: 664767,

    title: "Mortal Kombat Legends: Scorpion's Revenge",
    description:
      "After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.",

    poster_path: "/4VlXER3FImHeFuUjBShFamhIp9M.jpg",

    slug: "Mortal Kombat Legends: Scorpion's Revenge",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/z8TvnEVRenMSTemxYZwLGqFofgF.jpg",
    genre: "action",
    id: 458576,

    title: "Monster Hunter",
    description:
      "A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",

    poster_path: "/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",

    slug: "Monster Hunter",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/jnq4fV53Px9HvUZD2bQIxtGSwS7.jpg",
    genre: "action",
    id: 644083,

    title: "Twist",
    description:
      "A Dicken’s classic brought thrillingly up to date in the teeming heartland of modern London, where a group of street smart young hustlers plan the heist of the century for the ultimate payday.",

    poster_path: "/29dCusd9PwHrbDqzxNG35WcpZpS.jpg",

    slug: "Twist",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/gzJnMEMkHowkUndn9gCr8ghQPzN.jpg",
    genre: "action",
    id: 793723,

    title: "Sentinelle",
    description:
      "Transferred home after a traumatizing combat mission, a highly trained French soldier uses her lethal skills to hunt down the man who hurt her sister.",

    poster_path: "/fFRq98cW9lTo6di2o4lK1qUAWaN.jpg",

    slug: "Sentinelle",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg",
    genre: "action",
    id: 634528,

    title: "The Marksman",
    description:
      "Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.",

    poster_path: "/6vcDalR50RWa309vBH1NLmG2rjQ.jpg",

    slug: "The Marksman",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg",
    genre: "action",
    id: 587996,

    title: "Bajocero",
    description:
      "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",

    poster_path: "/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg",

    slug: "Below Zero",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
    genre: "action",
    id: 464052,

    title: "Wonder Woman 1984",
    description:
      "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",

    poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    slug: "Wonder Woman 1984",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg",
    genre: "action",
    id: 775996,

    title: "Outside the Wire",
    description:
      "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.",

    poster_path: "/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg",

    slug: "Outside the Wire",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg",
    genre: "action",
    id: 581387,

    title: "백두산",
    description:
      "A group of unlikely heroes from across the Korean peninsula try to save the day after a volcano erupts on the mythical and majestic Baekdu Mountain.",

    poster_path: "/zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg",

    slug: "Ashfall",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg",
    genre: "action",
    id: 560144,

    title: "Skylines",
    description:
      "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",

    poster_path: "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",

    slug: "Skylines",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",
    genre: "action",
    id: 651571,

    title: "Breach",
    description:
      "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",

    poster_path: "/13B6onhL6FzSN2KaNeQeMML05pS.jpg",
    slug: "Breach",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg",
    genre: "action",
    id: 495764,
    title:
      "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    description:
      "Harley Quinn joins forces with a singer, an assassin and a police detective to help a young girl who had a hit placed on her after she stole a rare diamond from a crime lord.",
    poster_path: "/h4VB6m0RwcicVEZvzftYZyKXs6K.jpg",

    slug:
      "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg",
    genre: "action",
    id: 604822,

    title: "急先锋",
    description:
      "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.",

    poster_path: "/mKvw1Ic9enfFlCPBNJGiejRPMUO.jpg",

    slug: "Vanguard",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
    genre: "action",
    id: 590706,

    title: "Jiu Jitsu",
    description:
      "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",

    poster_path: "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",

    slug: "Jiu Jitsu",
    maturity: 17,
  });

  //horror

  firebase.firestore().collection("films").add({
    backdrop_path: "/fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg",
    genre: "horror",
    id: 522444,

    title: "Black Water: Abyss",
    description:
      "An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.",

    poster_path: "/95S6PinQIvVe4uJAd82a2iGZ0rA.jpg",

    slug: "Black Water: Abyss",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg",
    genre: "horror",
    id: 649087,

    title: "Red Dot",
    description:
      "On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.",

    poster_path: "/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg",

    slug: "Red Dot",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/zDq2pwPyt4xwSFHKUoNN2LohDWj.jpg",
    genre: "horror",
    id: 632357,

    title: "The Unholy",
    description:
      "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",

    poster_path: "/b4gYVcl8pParX8AjkN90iQrWrWO.jpg",

    slug: "The Unholy",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/u5WUCO6irZoq27qbYYrtLUrCGDV.jpg",
    genre: "horror",
    id: 630586,

    title: "Wrong Turn",
    description:
      "Jen and a group of friends set out to hike the Appalachian Trail. Despite warnings to stick to the trail, the hikers stray off course—and cross into land inhabited by The Foundation, a hidden community of mountain dwellers who use deadly means to protect their way of life.",

    poster_path: "/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg",

    slug: "Wrong Turn",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/eqVgQwv8HfDN2tv4XWhqW5GryV4.jpg",
    genre: "horror",
    id: 607383,

    title: "Aquaslash",
    description:
      "To celebrate their graduation, the teenagers from Valley Hills High School have organized an ’80s-themed party at the old Wet Valley water park. Things turn gruesome when it's revealed that a mysterious maniac has inserted giant razor blades into one of the water slides. The water park thus becomes the backdrop for a bloodbath (literally), and everyone is a suspect...",

    poster_path: "/wB8qqLIaYDkYEnjbS5hAJiTuYU6.jpg",

    slug: "Aquaslash",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/iID0at69rWzZOIarUIFrfDOFJA.jpg",
    genre: "horror",
    id: 786300,

    title: "Tentacles",
    description:
      "A young Los Angeles couple Tara and Sam fall head over heels into a new romance, entwining their lives — until their intimacy transforms into something terrifying.",

    poster_path: "/kBKKXVbVwIP81u8Bnhguux48Sdn.jpg",

    slug: "Tentacles",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/vQJ3yBdF91tzd73G8seL5bOxfvG.jpg",
    genre: "horror",
    id: 599281,

    title: "Fear of Rain",
    description:
      "A teenage girl living with schizophrenia begins to suspect her neighbor has kidnapped a child. Her parents try desperately to help her live a normal life, without exposing their own tragic secrets, and the only person who believes her is Caleb – a boy she isn’t even sure exists.",

    poster_path: "/b2shaNA4F8zNIwoRYr33lPTiFfl.jpg",

    slug: "Fear of Rain",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/h0IMyviDhX9QsRrhquuTejmjxPC.jpg",
    genre: "horror",
    id: 675490,

    title: "The Unfamiliar",
    description:
      "A British Army doctor comes back from a war, thinking that she has PTSD only to discover that there is a more daunting malevolence at work making the life that she knew unfamiliar.",

    poster_path: "/g7Bxg2j7nbCpKo7U0j1jwU79XPY.jpg",

    slug: "The Unfamiliar",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/3GW0A72MxsSgghqpjc2O2MvO8Ec.jpg",
    genre: "horror",
    id: 714277,
    title: "La Funeraria",
    description:
      "Bernardo is an undertaker. He runs his mortuary business in the same house where he resides. In the front, he has his clients. And in the back, his dysfunctional family lives amongst coffins, wreaths, and the mischievous but nonviolent ghosts that visit on a daily basis. But when a malevolent entity enters the scene, it wreaks havoc on the already fractured household.",
    poster_path: "/1rlgIzw129hEl46bFaJZ7wpEEZZ.jpg",

    slug: "The Funeral Home",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/buop8brXQ8gGiOPrVTxZZUqE8Oa.jpg",
    genre: "horror",
    id: 723072,

    title: "Host",
    description:
      "Six friends hire a medium to hold a séance via Zoom during lockdown — but they get far more than they bargained for as things quickly go wrong. When an evil spirit starts invading their homes, they begin to realize they might not survive the night.",

    poster_path: "/h7dZpJDORYs5c56dydbrLFkEXpE.jpg",

    slug: "Host",
    maturity: 17,
  });

  firebase.firestore().collection("films").add({
    backdrop_path: "/obExOU9qDnMcxvWPumoD14oxup5.jpg",
    genre: "horror",
    id: 509635,

    title: "Alone",
    description:
      "A recently widowed traveler is kidnapped by a cold blooded killer, only to escape into the wilderness where she is forced to battle against the elements as her pursuer closes in on her.",

    poster_path: "/n9OzZmPMnVrV0cMQ7amX0DtBkQH.jpg",

    slug: "Alone",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg",
    genre: "horror",
    id: 443791,

    title: "Underwater",
    description:
      "After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.",

    poster_path: "/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg",

    slug: "Underwater",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/2gBMBfmQvHeOQQ5PiKiuxVdGs77.jpg",
    genre: "horror",
    id: 587496,

    title: "The Rental",
    description:
      "Two couples on an oceanside getaway grow suspicious that the host of their seemingly perfect rental house may be spying on them. Before long, what should have been a celebratory weekend trip turns into something far more sinister.",

    poster_path: "/3ynPnBXQVT2Y0s19fDIPlWKUlxH.jpg",

    slug: "The Rental",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/d2UxKyaJ5GgzuHaSsWinFfv3g6L.jpg",
    genre: "horror",
    id: 581392,

    title: "반도",
    description:
      "A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula.",

    poster_path: "/7S9RvfMBWSTlUZ4VbxDY7oLeenk.jpg",

    slug: "Peninsula",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/4br4B8C0SRIYcKHUgoaOlGo50MU.jpg",
    genre: "horror",
    id: 575088,

    title: "Яга. Кошмар тёмного леса",
    description:
      "The young family who moved to a new apartment on the outskirts of the city. The nanny hired by them for the newborn daughter quickly gained confidence. However, the older boy, Egor, talks about the frightening behavior of a woman, but his parents do not believe him. The surveillance cameras installed by the father for comfort only confirm everything is in order. Then one day, Egor, returning home, finds no trace of either the nanny or the little sister, and the parents are in a strange trance and do not even remember that they had a daughter. Then Egor, together with his friends, goes in search, during which it turns out that the nanny is an ancient Slavic demon, popularly known as Baba Yaga.",

    poster_path: "/8m5HTXzwewlfXhtZtLlLts53YTW.jpg",

    slug: "Baba Yaga: Terror of the Dark Forest",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/mBbA77FyzhU0Tz9tmbKG8heGmh3.jpg",
    genre: "horror",
    id: 594718,

    title: "Спутник",
    description:
      "At the height of the Cold War, a Soviet spacecraft crash lands after a mission gone awry, leaving the commander as its only survivor. After a renowned Russian psychologist is brought in to evaluate the commander’s mental state, it becomes clear that something dangerous may have come back to Earth with him…",

    poster_path: "/eAUzmhP54bE1vPXaY7FbuZREJlR.jpg",

    slug: "Sputnik",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/sCtJkYwBrJm8mygRrDGyluf1gSV.jpg",
    genre: "horror",
    id: 736509,

    title: "Intersect",
    description:
      "A group of young Miskatonic University scientists invent a time machine, only to learn that they are being manipulated by mysterious, unseen forces from another dimension.",

    poster_path: "/e6hgmD0P133bW5EH1kfhscwXN2a.jpg",

    slug: "Intersect",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: null,
    genre: "horror",
    id: 732472,

    title: "The Amityville Harvest",
    description:
      "While staying at an aging manor to research its liquor-smuggling history, Christina and her documentary video team interview their spooky host Vincent—but no one can capture his image or voice on video. After shocking dreams and bloody encounters, the crew members fall under Victor’s hypnotic spell.",

    poster_path: "/luBPZjYEIALVs5AKp95OI9aCX9M.jpg",

    slug: "The Amityville Harvest",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/ovwN1JDPvllWZaH3xtKp7txRWDj.jpg",
    genre: "horror",
    id: 715658,

    title: "The Scientist",
    description:
      "An unconventional scientist, struggling to care for his terminally-ill wife, embarks on a journey to develop a cure for her. However, his methods of treatment and tampering with human DNA, could lead to the extinction of humanity.",

    poster_path: "/hIkKM1nlzk8DThFT4vxgW1KoofL.jpg",

    slug: "The Scientist",
    maturity: 17,
  });

  // comdey
  firebase.firestore().collection("films").add({
    backdrop_path: "/z7HLq35df6ZpRxdMAE0qE3Ge4SJ.jpg",
    genre: "comedies",
    id: 615678,

    title: "Thunder Force",
    description:
      "In a world where supervillains are commonplace, two estranged childhood best friends reunite after one devises a treatment that gives them powers to protect their city.",

    poster_path: "/279yOM4OQREL36B3SECnRxoB4MZ.jpg",

    slug: "Thunder Force",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
    genre: "comedies",
    id: 587807,

    title: "Tom & Jerry",
    description:
      "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",

    poster_path: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",

    slug: "Tom & Jerry",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/cjaOSjsjV6cl3uXdJqimktT880L.jpg",
    genre: "comedies",
    id: 529203,

    title: "The Croods: A New Age",
    description:
      "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",

    poster_path: "/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",

    slug: "The Croods: A New Age",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/9Is9OrQUnKczCfsLSbsbx8YSmES.jpg",
    genre: "comedies",
    id: 797394,

    title: "Ганзель, Гретель и Агентство Магии",
    description:
      "The Secret Magic Control Agency sends its two best agents, Hansel and Gretel, to fight against the witch of the Gingerbread House.",

    poster_path: "/4ZSzEDVdxWVMVO4oZDvoodQOEfr.jpg",

    slug: "Secret Magic Control Agency",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/a9zFUuxzChmAlIybVge9IZt1hH0.jpg",
    genre: "comedies",
    id: 578908,

    title: "Bad Trip",
    description:
      "Two pals embark on a road trip full of funny pranks that pull real people into mayhem.",

    poster_path: "/A1Gy5HX3DKGaNW1Ay30NTIVJqJ6.jpg",

    slug: "Bad Trip",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/jw0849O7WLarbYKJkA9WpRLeGKG.jpg",
    genre: "comedies",
    id: 802504,

    title: "Just Say Yes",
    description:
      "Incurable romantic Lotte finds her life upended when her plans for a picture-perfect wedding unravel -- just as her self-absorbed sister gets engaged.",

    poster_path: "/3btDwus5VN5jOWfA9strpDJWwfj.jpg",

    slug: "Just Say Yes",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg",
    genre: "comedies",
    id: 508442,

    title: "Soul",
    description:
      "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",

    poster_path: "/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",

    slug: "Soul",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/eqVgQwv8HfDN2tv4XWhqW5GryV4.jpg",
    genre: "comedies",
    id: 607383,

    title: "Aquaslash",
    description:
      "To celebrate their graduation, the teenagers from Valley Hills High School have organized an ’80s-themed party at the old Wet Valley water park. Things turn gruesome when it's revealed that a mysterious maniac has inserted giant razor blades into one of the water slides. The water park thus becomes the backdrop for a bloodbath (literally), and everyone is a suspect...",

    poster_path: "/wB8qqLIaYDkYEnjbS5hAJiTuYU6.jpg",

    slug: "Aquaslash",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/1umKVgbjFG5Cho5ZKTpcvRFJjuJ.jpg",
    genre: "comedies",
    id: 609242,

    title: "El robo del siglo",
    description:
      "In 2006, a group of thieves performed what is considered one of the most famous and smart bank heists in the history of Argentina. How they robbed the Rio bank is as surprising as what happened afterwards. This is their story.",

    poster_path: "/aSGwXbaTMxUhrfXT6xyZKqoklfB.jpg",

    slug: "The Heist of the Century",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/vKzbIoHhk1z9DWYi8kyFe9Gg0HF.jpg",
    genre: "comedies",
    id: 484718,

    title: "Coming 2 America",
    description:
      "Prince Akeem Joffer is set to become King of Zamunda when he discovers he has a son he never knew about in America – a street savvy Queens native named Lavelle. Honoring his royal father's dying wish to groom this son as the crown prince, Akeem and Semmi set off to America once again.",

    poster_path: "/nWBPLkqNApY5pgrJFMiI9joSI30.jpg",

    slug: "Coming 2 America",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/qAhedRxRYWZAgZ8O8pHIl6QHdD7.jpg",
    genre: "comedies",
    id: 384018,

    title: "Fast & Furious Presents: Hobbs & Shaw",
    description:
      "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",

    poster_path: "/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",

    slug: "Fast & Furious Presents: Hobbs & Shaw",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg",
    genre: "comedies",
    id: 590223,

    title: "Love and Monsters",
    description:
      "Seven years after the Monsterpocalypse, Joel Dawson, along with the rest of humanity, has been living underground ever since giant creatures took control of the land. After reconnecting over radio with his high school girlfriend Aimee, who is now 80 miles away at a coastal colony, Joel begins to fall for her again. As Joel realizes that there’s nothing left for him underground, he decides against all logic to venture out to Aimee, despite all the dangerous monsters that stand in his way.",

    poster_path: "/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg",

    slug: "Love and Monsters",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/nq4LRhGrCZ8ucxMaLMPa3uZV6ku.jpg",
    genre: "comedies",
    id: 709629,

    title: "Guerra de Likes",
    description:
      "In order to advance her career in the dynamic world of publicity in Mexico City, Raquel tries to reunite with her high school friend Cecy who has become the queen of social media. But unlike followers, friendships do not come instantly.",

    poster_path: "/jpdWHOu6EJbYnLXLCA52h82nLEz.jpg",

    slug: "War of Likes",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/psTz3J2QXVKTQCGrPDFuC4kAOLb.jpg",
    genre: "comedies",
    id: 682254,

    title: "Scooby-Doo! The Sword and the Scoob",
    description:
      "An evil sorceress transports the gang back to the age of chivalrous knights, spell-casting wizards, and fire-breathing dragons.",

    poster_path: "/sCoG0ibohbPrnyomtzegSuBL40L.jpg",

    slug: "Scooby-Doo! The Sword and the Scoob",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/3GW0A72MxsSgghqpjc2O2MvO8Ec.jpg",
    genre: "comedies",
    id: 714277,

    title: "La Funeraria",
    description:
      "Bernardo is an undertaker. He runs his mortuary business in the same house where he resides. In the front, he has his clients. And in the back, his dysfunctional family lives amongst coffins, wreaths, and the mischievous but nonviolent ghosts that visit on a daily basis. But when a malevolent entity enters the scene, it wreaks havoc on the already fractured household.",

    poster_path: "/1rlgIzw129hEl46bFaJZ7wpEEZZ.jpg",

    slug: "The Funeral Home",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
    genre: "comedies",
    id: 512200,

    title: "Jumanji: The Next Level",
    description:
      "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",

    poster_path: "/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",

    slug: "Jumanji: The Next Level",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    genre: "comedies",
    id: 400160,

    title: "The SpongeBob Movie: Sponge on the Run",
    description:
      "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",

    poster_path: "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",

    slug: "The SpongeBob Movie: Sponge on the Run",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/y6FYAhaeFMj9Lsk8OdF2NeWQkbd.jpg",
    genre: "comedies",
    id: 615677,

    title: "We Can Be Heroes",
    description:
      "When alien invaders capture Earth's superheroes, their kids must learn to work together to save their parents - and the planet.",

    poster_path: "/1S21HpcKY6uQ9UAw68aICmrJaq6.jpg",

    slug: "We Can Be Heroes",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/eFw5YSorHidsajLTayo1noueIxI.jpg",
    genre: "comedies",
    id: 509967,

    title: "6 Underground",
    description:
      "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",

    poster_path: "/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg",

    slug: "6 Underground",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
    genre: "comedies",
    id: 531219,

    title: "Roald Dahl's The Witches",
    description:
      "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",

    poster_path: "/b1C0FuXp4wiPmHLVKq4kwtDMgK6.jpg",

    slug: "Roald Dahl's The Witches",
    maturity: 17,
  });

  //anime

  firebase.firestore().collection("films").add({
    poster_path: "/6inkRM1XGBG5vRhclCPWfMenp7N.jpg",
    slug: "A Whisker Away",
    maturity: 17,
    description:
      'Miyo "Muge" Sasaki is a peculiar second-year junior high student who has fallen in love with her classmate Kento Hinode. Muge resolutely pursues Kento every day, but he takes no notice of her. Nevertheless, while carrying a secret she can tell no one, Muge continues to pursue Kento. Muge discovers a magic mask that allows her to transform into a cat named Tarō. The magic lets Muge get close to Kento, but eventually it may also make her unable to transform back to a human.',
    backdrop_path: "/eHTZoXmB4vnDqANZXPZcdAiYQo5.jpg",
    id: 667520,
    genre: "anime",
    title: "泣きたい私は猫をかぶる",
  });

  firebase.firestore().collection("films").add({
    title: "Re:ゼロから始める異世界生活 Memory Snow",
    poster_path: "/y7XwmyE5ue9hjk65fEWpO2hGU2B.jpg",
    id: 532321,
    description:
      'Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru\'s "date course" with Emilia?',
    release_date: "2018-10-06",
    maturity: 17,
    backdrop_path: "/lvmv1kDswTljpS1ojAmVOW1ZoTn.jpg",
    slug: "Re:ZERO -Starting Life in Another World- Memory Snow",
    genre: "anime",
  });

  firebase.firestore().collection("films").add({
    poster_path: "/qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
    slug: "Weathering with You",
    maturity: 17,
    description:
      "The summer of his high school freshman year, Hodaka runs away from his remote island home to Tokyo, and quickly finds himself pushed to his financial and personal limits. The weather is unusually gloomy and rainy every day, as if taking its cue from his life. After many days of solitude, he finally finds work as a freelance writer for a mysterious occult magazine. Then, one day, Hodaka meets Hina on a busy street corner. This bright and strong-willed girl possesses a strange and wonderful ability: the power to stop the rain and clear the sky.",
    release_date: "2019-06-19",

    backdrop_path: "/9wav4lUFPyLEzkOoJiJBSjI8fMm.jpg",
    id: 568160,
    genre: "anime",
    title: "天気の子",
  });
  firebase.firestore().collection("films").add({
    backdrop_path: "/srcaBcAZVBEZqsFa9DlNTXWMHzj.jpg",
    genre: "anime",
    id: 347413,
    title: "リトルウィッチアカデミア 魔法仕掛けのパレード",
    description:
      "In Enchanted Parade, Akko, Lotte and Sucy, having gotten in trouble yet again, are forced to team up with three other troublemakers; Amanda O'Neill, Constance Braunschweig Albrechtsburger and Jasmineka Antonenko, and must make an annual witch parade a success or else face expulsion.",
    poster_path: "/7MtN5UVEv2tAVIKiCuWDTq4Wcvt.jpg",
    slug: "Little Witch Academia: The Enchanted Parade",
    maturity: 17,
  });

  firebase.firestore().collection("films").add({
    backdrop_path: "/zcCZTeOTf65fNl9hsWhENW5zCKc.jpg",
    genre: "anime",
    id: 100271,
    title: "ももへの手紙",
    poster_path: "/zDCinQ7NkgicoFtDisTZ3FYG0cL.jpg",
    maturity: 17,
    slug: "A Letter to Momo",
    description:
      "Clinging to an unfinished letter written by her recently deceased father, young Momo moves with her mother from bustling Tokyo to the remote Japanese island of Shio. Upon their arrival, she begins to explore her new habitat, meeting local children and learning their routines and customs. However, it's not long before several bizarre occurrences crop up around the previously tranquil island. Orchards are found ransacked, prized trinkets start disappearing and, worst of all, each morning after her mother leaves for work, Momo hears strange mumblings coming from the attic of their home. Annoyed by these creepy goings-on and her mother's refusal to believe them, Momo embarks on a strange and supernatural adventure to discover the source of the mischief, which leads her to a trio of troublesome imps: the flatulent lizard Kawa, the childlike Mame and their hulking ogre leader Iwa. Momo also learns that her visit to the island is in some way connected to her father's mysterious letter.",
    release_date: "2011-09-10",
  });

  firebase.firestore().collection("films").add({
    backdrop_path: "/hiBwb7IUjb4er6Ej5QGtNdImn19.jpg",
    genre: "anime",
    id: 64246,

    title: "カラフル",
    description:
      "Upon reaching the train station to death, a dejected soul is informed that he is lucky and will have another chance at life. He is placed in the body of a 14-year-old boy named Kobayashi Makoto, who has just committed suicide. Watched over by a neutral spirit named Purapura, the soul must figure out what his greatest sin and mistake in his former life was, before his time limit in Makoto's body runs out. He also has a number of other lesser duties he must complete, such as understanding what led Makoto to commit suicide in the first place and learning how to enjoy his second chance at life.",
    poster_path: "/gjZdV7RM3d4WKnDBVpGwJXfzZpw.jpg",
    release_date: "2010-08-21",
    slug: "Colorful",
    maturity: 17,
  });

  firebase.firestore().collection("films").add({
    genre: "anime",

    title: "ノーゲーム・ノーライフ ゼロ",
    poster_path: "/cCBB6BGRj5nCTaEgogDtkHfjOLK.jpg",
    maturity: 17,
    description:
      'In ancient Disboard, Riku is an angry, young warrior intent on saving humanity from the warring Exceed, the sixteen sentient species, fighting to establish the "One True God" amongst the Old Deus. In a lawless land, humanity\'s lack of magic and weak bodies have made them easy targets, leaving them on the brink of extinction. One day, hope returns to humanity when Riku finds a powerful female Ex-machina, whom he names Schwi. Exiled from her Cluster because of her research into human emotions, Schwi is convinced that humanity has only survived due to the power of these feelings. Forming an unlikely partnership in the midst of the overwhelming chaos, Riku and Schwi must now find the answers to their individual shortcomings in each other, and discover for themselves what it truly means to be human as they fight for their lives against all odds. Each with a powerful new ally in tow, it is now up to them to prevent the extinction of the human race and establish peace throughout Disboard!',
    id: 445030,
    slug: "No Game No Life: Zero",

    backdrop_path: "/b0dP4lPgK8Dg0tQEPx6z73jRURA.jpg",
  });

  firebase.firestore().collection("films").add({
    backdrop_path: "/6Nz34wS45PsHUpk1SPBjFGzbCBZ.jpg",
    genre: "anime",
    id: 257475,
    slug: "Tamako Love Story",

    maturity: 17,

    description:
      "Devoted to her family’s rice-cake–making business and the high school baton club, Tamako is a little slow when it comes to love. She’s oblivious to her childhood friend Mochizo’s affections, even though all their friends know. With graduation closing in and Mochizo leaving for Tokyo, will Tamako realise her feelings and tell him in time?",
    title: "たまこラブストーリー",
    poster_path: "/wSYz96elWg6ABuM6Aa5FAhtVvYQ.jpg",
  });

  //animation

  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg",
    genre: "animation",
    id: 527774,

    title: "Raya and the Last Dragon",
    description:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",

    poster_path: "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",

    slug: "Raya and the Last Dragon",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
    genre: "animation",
    id: 587807,

    title: "Tom & Jerry",
    description:
      "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",

    poster_path: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",

    slug: "Tom & Jerry",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/aMFl4wOPhJ7NVua6SgU9zIJvFSx.jpg",
    genre: "animation",
    id: 755812,

    title: "Miraculous World: New York, United HeroeZ",
    description:
      "During a school field trip, Ladybug and Cat Noir meet the American superheroes, whom they have to save from an akumatised super-villain. They discover that Miraculous exist in the United States too.",

    poster_path: "/zNxqXCEEBllgbVOCuHLPasNsovt.jpg",

    slug: "Miraculous World: New York, United HeroeZ",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/cjaOSjsjV6cl3uXdJqimktT880L.jpg",
    genre: "animation",
    id: 529203,

    title: "The Croods: A New Age",
    description:
      "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",

    poster_path: "/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",

    slug: "The Croods: A New Age",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg",
    genre: "animation",
    id: 508442,

    title: "Soul",
    description:
      "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",

    poster_path: "/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",

    slug: "Soul",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/7TxeZVg2evMG42p0uSbMJpWNQ8A.jpg",
    genre: "animation",
    id: 520946,

    title: "100% Wolf",
    description:
      "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",

    poster_path: "/2VrvxK4yxNCU6KVgo5TADJeBEQu.jpg",

    slug: "100% Wolf",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/psTz3J2QXVKTQCGrPDFuC4kAOLb.jpg",
    genre: "animation",
    id: 682254,

    title: "Scooby-Doo! The Sword and the Scoob",
    description:
      "An evil sorceress transports the gang back to the age of chivalrous knights, spell-casting wizards, and fire-breathing dragons.",

    poster_path: "/sCoG0ibohbPrnyomtzegSuBL40L.jpg",

    slug: "Scooby-Doo! The Sword and the Scoob",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    genre: "animation",
    id: 400160,

    title: "The SpongeBob Movie: Sponge on the Run",
    description:
      "When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal.",

    poster_path: "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",

    slug: "The SpongeBob Movie: Sponge on the Run",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/y3XMIea7mwTzxt3NFFXi5YJKeFJ.jpg",
    genre: "animation",
    id: 20982,
    original_language: "ja",
    title: "劇場版 NARUTO -ナルト- 疾風伝",
    description:
      "Demons that once almost destroyed the world, are revived by someone. To prevent the world from being destroyed, the demon has to be sealed and the only one who can do it is the shrine maiden Shion from the country of demons, who has two powers; one is sealing demons and the other is predicting the deaths of humans. This time Naruto's mission is to guard Shion, but she predicts Naruto's death. The only way to escape it, is to get away from Shion, which would leave her unguarded, then the demon, whose only goal is to kill Shion will do so, thus meaning the end of the world. Naruto decides to challenge this \"prediction of death.\"",

    poster_path: "/vDkct38sSFSWJIATlfJw0l3QOIR.jpg",

    slug: "Naruto Shippuden the Movie",
  });

  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg",
    genre: "animation",
    id: 531219,

    title: "Roald Dahl's The Witches",
    description:
      "In late 1967, a young orphaned boy goes to live with his loving grandma in the rural Alabama town of Demopolis. As the boy and his grandmother encounter some deceptively glamorous but thoroughly diabolical witches, she wisely whisks him away to a seaside resort. Regrettably, they arrive at precisely the same time that the world's Grand High Witch has gathered.",

    poster_path: "/b1C0FuXp4wiPmHLVKq4kwtDMgK6.jpg",

    slug: "Roald Dahl's The Witches",
  });

  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/vwpxy4kmQyW5aBJ3uxhQM6koU6H.jpg",
    genre: "animation",
    id: 743439,

    title: "PAW Patrol: Jet to the Rescue",
    description:
      "Get ready to zoom back to Barkingburg with the pups in this all-new TV movie! When the scheming DUKE of Flappington steals a powerful levitation gem from the royal castle, it’s up to the PAW Patrol to jet to the rescue before the town is lost forever! Then join the PAW Patrol in even more high-flying adventures where they will save a stunt pilot, one of Mayor Humdinger’s kittens, and even Skye when she breaks her wing flying to Jake’s Mountain!",

    poster_path: "/qHcn3PbjVHxBweDZxWpYH3JfugS.jpg",

    slug: "PAW Patrol: Jet to the Rescue",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/DA7gzvlBoxMNL0XmGgTZOyv67P.jpg",
    genre: "animation",
    id: 741074,

    title: "Once Upon a Snowman",
    description:
      "The previously untold origins of Olaf, the innocent and insightful, summer-loving snowman are revealed as we follow Olaf’s first steps as he comes to life and searches for his identity in the snowy mountains outside Arendelle.",

    poster_path: "/hddzYJtfYYeMDOQVcH58n8m1W3A.jpg",

    slug: "Once Upon a Snowman",
  });
  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/fZHvSNUBKSgRAduB5k0fFST1xYn.jpg",
    genre: "animation",
    id: 749618,

    title: "El camino de Xico",
    description:
      "The peace of a small town is endangered when a corporation wants to destroy the mountain that protects them. A girl named Copi and her best friend Xico, a Xoloitzcuintle dog, will go into the mountains to try to save the town.",

    poster_path: "/g8ZyfUC0THygJkVoO2J7NxsdPI5.jpg",

    slug: "Xico's Journey",
  });

  firebase.firestore().collection("films").add({
    maturity: 16,
    backdrop_path: "/bRnaz3LPBmIZpyLn8VrkgHPEd6i.jpg",
    genre: "animation",
    id: 743904,

    title: "Curious George: Go West, Go Wild",
    description:
      "While farm-sitting, George accidentally lets the farm animals escape. Ted, George and wannabe cowboy Emmett must round 'em up, accounting for every animal -- and emerging with some new skills, to boot.",

    poster_path: "/7WWOiP8F6PHjXpJrnRZfvO2XNW.jpg",

    slug: "Curious George: Go West, Go Wild",
  });
  //anime

  firebase.firestore().collection("films").add({
    backdrop_path: "/izx7Dh8GwEVQIPxsHzr8imzM5HW.jpg",
    slug: "Mary and the Witch's Flower",
    genre: "anime",

    title: "メアリと魔女の花",
    poster_path: "/lq3OJQiJ8hlCr23LAdHbeU3eqBF.jpg",
    maturity: 17,
    description:
      "Mary Smith, a young girl who lives with her great-aunt in the countryside, follows a mysterious cat into the nearby forest where she finds a strange flower and an old broom, none of which is as ordinary as it seems.",
    id: 430447,
  });
  firebase.firestore().collection("films").add({
    description:
      "The series focuses on the adventures of Arata Kasuga, a high school student, who is targeted by Lilith, a teacher at a mystical school. Given three choices in an effort to help save the breakdown phenomenon of the world by evil forces and while attempting to solve the mystery of his beloved cousin and childhood friend, Hijiri, who disappeared to a difference space.",
    backdrop_path: "/pz81SGRPxUI3OINfpf7XIdwEJgI.jpg",
    slug: "Trinity Seven 2: Heaven's Library & Crimson Lord",
    genre: "anime",
    title: "劇場版トリニティセブン -天空図書館と真紅の魔王-",
    poster_path: "/vh4f6N3VdgzmYnRK3VctwBZWdv9.jpg",
    id: 570269,
    maturity: 17,
  });

  firebase.firestore().collection("films").add({
    slug: "Given",
    description:
      "The film centers on the love relationship among the band's bassist Haruki Nakayama, drummer Akihiko Kaji, and Akihiko's roommate and ex-boyfriend Ugetsu Murata.",
    release_date: "2020-08-22",
    backdrop_path: "/u1wHUA0R48FH4WV3sGqjwx3aNZm.jpg",
    genre: "anime",
    id: 632632,
    title: "映画 ギヴン",
    poster_path: "/xKCtoYHUyX8zAg68eemnYa2orep.jpg",
    maturity: 17,
  });

  firebase.firestore().collection("films").add({
    id: 624812,
    description:
      "Yuna and Akari are two high school girls with very different views on love: Yuna dreams about romance through rose-coloured glasses, while Akari is down-to-earth and practical. Meanwhile, high school boys Kazuomi and Rio also have different views on love: Kazuomi is an airhead who can't grasp the concept of love, while Rio grabs onto any confession as an opportunity—so long as the girl looks cute. Will these four classmates end up leading a youthful romance that meets their expectations?",
    release_date: "2020-09-18",
    backdrop_path: "/s0NLzm7xlAh1IXDaOFZvXIU64tN.jpg",
    genre: "anime",
    title: "思い、思われ、ふり、ふられ",
    poster_path: "/9bn2vf6k945pZQg6Wl0H1Zxd48Y.jpg",
    slug: "Love, Be Loved, Leave, Be Left",
    maturity: 17,
  });
  firebase.firestore().collection("films").add({
    slug: "Earwig and the Witch",
    backdrop_path: "/pLgcI8ftgtqJwsYs5kGUT467rDQ.jpg",
    id: 683127,
    title: "アーヤと魔女",
    poster_path: "/86jyzdxtAX8p956rVQDKwGbrYh2.jpg",
    maturity: 17,
    description:
      "A headstrong orphan discovers a world of spells and potions while living with a selfish witch.",
    genre: "anime",
  });

  firebase.firestore().collection("films").add({
    id: 460399,
    maturity: 17,
    slug: "Love, Chunibyo & Other Delusions! Take On Me",
    title: "映画 中二病でも恋がしたい! -Take On Me-",
    genre: "anime",
    backdrop_path: "/m5DxRZhJO7aluDyHW40M8cEBZAv.jpg",
    description:
      "Yuuta and Rikka are in their third year of high school. One day in Spring, Touka declares that she will take Rikka to Italy with her, as her job has stabilized there and thinks they should migrate together as a family. Touka is also worried about Rikka not being competent enough to advance to universities in Japan. The gangs from the club suggested Yuuta, who doesn't want to be separated, to elope with Rikka!! A runaway drama throughout Japan begins.",
    poster_path: "/grlNqxlne3pRBB5kvEc2aHtrSKv.jpg",
  });

  firebase.firestore().collection("films").add({
    backdrop_path: "/6KmOIlD1Pzkl5ZPP4A75WnIUbb6.jpg",
    genre: "anime",
    id: 592867,
    title: "ドラゴンクエスト ユア・ストーリー",
    description:
      "Luca follows in his father's footsteps to rescue his mother from evil Ladja. Finding the heavenly hero who wields the Zenithian sword is his only hope.",
    poster_path: "/5R70ehKGh5V0ZYOdikxwSfoLGMt.jpg",
    slug: "Dragon Quest: Your Story",
    maturity: 17,
  });

  firebase.firestore().collection("films").add({
    genre: "anime",
    title: "この素晴らしい世界に祝福を！紅伝説",
    poster_path: "/j73LuQcA21KvkVFcroWWMN8tTJv.jpg",
    maturity: 17,
    description:
      "It is not strange that the Demon Lord's forces fear the Crimson Demons, the clan from which Megumin and Yunyun originate. Even if the Demon Lord's generals attack their village, the Crimson Demons can just easily brush them off with their supreme mastery of advanced and overpowered magic.  When Yunyun receives a seemingly serious letter regarding a potential disaster coming to her hometown, she immediately informs Kazuma Satou and the rest of his party. After a series of wacky misunderstandings, it turns out to be a mere prank by her fellow demon who wants to be an author. Even so, Megumin becomes worried about her family and sets out toward the Crimson Demons' village with the gang.  There, Kazuma and the others decide to sightsee the wonders of Megumin's birthplace. However, they soon come to realize that the nonsense threat they received might have been more than just a joke.",
    id: 532067,
    slug: "KonoSuba: God's Blessing on this Wonderful World! Legend of Crimson",
    backdrop_path: "/m5HPKCi7GdhKmxPTcOQmcLfEmZ9.jpg",
  });
  firebase.firestore().collection("films").add({
    description:
      "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    backdrop_path: "/d1sVANghKKMZNvqjW0V6y1ejvV9.jpg",
    genre: "anime",
    title: "劇場版「鬼滅の刃」無限列車編",
    id: 635302,
    poster_path: "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    slug: "Demon Slayer – Kimetsu no Yaiba – The Movie: Mugen Train",
    maturity: 17,
  });
}
