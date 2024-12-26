// to add a category add IN ORDER to linkslist a "best-category",
// then in the categoryNomineeList and getGameDetails add case linkslist[newnumber]

export const linkslist = [
  'game-of-the-year',
  'best-narrative',
  'best-art-direction',
  'best-gameplay',
  'best-story',
  'games-for-impact',
  'best-action-game',
  'best-action-adventure',
  'best-role-playing',
  'best-sim-strategy',
  'best-indie',
  'best-music',
  'best-journey',
];

// to add a game add it to the list below and to getGameData to give it a proper image

export const gamesList = [
  'gorogoa',
  'hifi',
  'hogwartslegacy',
  'chainedechoes',
  'goldenidol',
  'blasphemous2',
  'bramble',
  'mariorabbids',
  'neonwhite',
  'tacticsogre',
  'lostinrandom',
];

export const categoryNomineeList = (gameSlug) => {
  if (gameSlug === 'all') {
    return gamesList;
  }
  switch (gameSlug) {
    case linkslist[0]:
      return [
        'hifi',
        'hogwartslegacy',
        'chainedechoes',
        'goldenidol',
        'blasphemous2',
        'mariorabbids',
        'neonwhite',
      ];
    case linkslist[1]:
      return ['hifi', 'chainedechoes', 'goldenidol', 'bramble'];
    case linkslist[2]:
      return [
        'gorogoa',
        'hifi',
        'hogwartslegacy',
        'blasphemous2',
        'bramble',
        'neonwhite',
        'lostinrandom',
      ];
    case linkslist[3]:
      return [
        'hifi',
        'hogwartslegacy',
        'blasphemous2',
        'neonwhite',
        'lostinrandom',
      ];
    case linkslist[4]:
      return [
        'hifi',
        'hogwartslegacy',
        'chainedechoes',
        'goldenidol',
        'bramble',
      ];
    case linkslist[5]:
      return ['gorogoa', 'hifi', 'bramble', 'neonwhite'];
    case linkslist[6]:
      return ['gorogoa', 'hifi', 'hogwartslegacy', 'blasphemous2', 'neonwhite'];
    case linkslist[7]:
      return ['hogwartslegacy', 'bramble', 'lostinrandom'];
    case linkslist[8]:
      return [
        'hogwartslegacy',
        'chainedechoes',
        'mariorabbids',
        'tacticsogre',
        'lostinrandom',
      ];
    case linkslist[9]:
      return [
        'gorogoa',
        'chainedechoes',
        'goldenidol',
        'mariorabbids',
        'tacticsogre',
      ];
    case linkslist[10]:
      return ['gorogoa', 'chainedechoes', 'goldenidol', 'bramble', 'neonwhite'];
    case linkslist[11]:
      return ['hifi', 'chainedechoes', 'bramble', 'mariorabbids', 'neonwhite'];
    case linkslist[12]:
      return [
        'hifi',
        'hogwartslegacy',
        'chainedechoes',
        'goldenidol',
        'bramble',
      ];
    default:
      return [];
  }
};

export const getGameDetails = (categorySlug: string) => {
  switch (categorySlug) {
    case linkslist[0]:
      return {
        title: 'Game of the year',
        // videourl: 'https://www.youtube.com/embed/h4w-YxhxxkY',
        description: `Recognizing a game that delivers the absolute best experience across all creative and technical fields.`,
        winner: {
          title: 'Chained Echoes',
          shorttitle: 'chainedechoes',
          description: `
           This is a must play for whoever is a fan of the old style jrpg. <br/>
           I got initially pushed back by the "rpgmaker" feel of the characters, but the interface and movements are fluid and new, nothing clunky nor boring. What really shines for this game is how they brought a lot of quality of life improvements that old jrpg suffered, like grinding or speed of animations p.e.<br/>
           The crafting system is something i could critique, but the music and THE STORY, THE FUCKING STORY just make me shut up and advice this game like if it was a masterpiece. I loved the pixel art, and the writing. <br/><br/>
           The combat gameplay is challanging but not frustrating. It's not like you fight tons of random mobs that you beat by smashing X, it's more like every fight needs attention a little bit of resource management, and they give the right amount of encounters.
           <br/><br/>
           Tens across the board
           `,
        },
      };
    case linkslist[1]:
      return {
        title: 'Best Narrative',
        // videourl: 'https://www.youtube.com/embed/RxsU3-nYwGQ',
        description:
          'For outstanding stoprerytelling and narrative development in a game.',
        winner: {
          title: 'The Case of the Golden Idol',
          shorttitle: 'goldenidol',
          description: `<br/>
            I really want to like point and click games, but I always feel lost in the huge environments and options they provide to solve the mysteries. <br/><br/>
            Also I'm not a huge reader. <br/><br/>
  
  The Case of the Golden Idol caught my attention from the first chapter since it was a one-screen scenario where you could guess what happened without going around for hours asking all the people about their daily lives. <br/>
  
  Moving onto the next chapters you can find up to 4 screens and things might become a little difficult, but not overwhelming.<br/>
   I'm sad I couldn't understand properly one riddle of the 11th (last) chapter, but for the most part my not-so-smart brain could go through all the cases and it was so satisfying! <br/><br/>
  
  Also, music is not something I would put on my spotify list, but it's a loop music and never got me frustrated so a 10 for this.
  `,
        },
      };
    case linkslist[2]:
      return {
        title: 'Best Art Direction',
        // videourl: 'https://www.youtube.com/embed/KVuZbi_V1XE',
        description:
          'For outstanding creative and/or technical achievement in artistic design and animation.',
        winner: {
          title: 'Blasphemous 2',
          shorttitle: 'blasphemous2',
          description: `
           Giving this to blasphemous while having hi-fi rush there... hurts, but I have a soft spot for pixel art. <br/><br/>
           It's a dark souls game but in 2d and very platformey. <br/>
           The art is what sells the game most for me, like in the first game.<br/>
            There are so many good concepts and designs and they're so well executed with this fantastic pixel art style. The music is incredibly fitting too. <br/>
            It has backtracking (mostly if you want to get all colletcibles), but it is not too tiresome. Enemies are somewhat too easy to defeat except for some difficulty spike, but what are very enjoyable are the boss fights and the platform parts. <br/>
           You can unlock also some upgrades that make your life easier (teleports etc.) that might have been added sooner, but I guess it's part of the difficulty of the game. 
          `,
        },
      };
    case linkslist[3]:
      return {
        title: 'Best Gameplay',
        // videourl: 'https://www.youtube.com/embed/dD3psAvCmOw',
        description:
          'Recognizing a game that stands out for playability, enjoyability of its gameplay and have-a-good-time-ity.',
        winner: {
          title: 'Neon White',
          shorttitle: 'neonwhite',
          description: ` 
          The game is a shot of adrenaline and dopamine all the way during the levels. <br/><br/>
          It's like pistol whip meets attack on titans. <br/><br/>
          It's really nice that you can restart the level immediatly without any loading and keep the movement going. <br/>
          It's one of the most entertaining games I've played. I am not a speedrunner but I imagine that this is the wet dream game of any speedrunner
<br/><br/>
On the other hand...
<br/><br/>
The art, drawings, color palette and music are nice and fit well with the game. <br/>
The writing is.. something. The main story is dubbed at least, and luckily they let you fast forward it in case you're like me that has somewhat low patience with cringe writing. <br/>
I couldn't bear the story so at the end I decided to skip it and enjoy the best part of the game which is the gameplay
          `,
        },
      };
    case linkslist[4]:
      return {
        title: 'Best Story',
        // videourl: 'https://www.youtube.com/embed/h4w-YxhxxkY',
        description:
          'For bringing an emotional and immersive story, carefully written with quality and outstanding content. ',
        winner: {
          title: 'Chained Echoes',
          shorttitle: 'chainedechoes',
          description: `
             This is a must play for whoever is a fan of the old style jrpg. <br/>
             I got initially pushed back by the "rpgmaker" feel of the characters, but the interface and movements are fluid and new, nothing clunky nor boring. What really shines for this game is how they brought a lot of quality of life improvements that old jrpg suffered, like grinding or speed of animations p.e.<br/>
             The crafting system is something i could critique, but the music and THE STORY, THE FUCKING STORY just make me shut up and advice this game like if it was a masterpiece. I loved the pixel art, and the writing. <br/><br/>
             The combat gameplay is challanging but not frustrating. It's not like you fight tons of random mobs that you beat by smashing X, it's more like every fight needs attention a little bit of resource management, and they give the right amount of encounters.
             <br/><br/>
             Tens across the board
             `,
        },
      };
    case linkslist[5]:
      return {
        title: 'Games for Impact',
        // videourl: 'https://www.youtube.com/embed/lj2cQuRMLvY',
        description:
          'For a thought-provoking game that can have a pro-social meaning or message or that just leaves you with jaw dropping moments.',
        winner: {
          title: 'Goorogoa',
          shorttitle: 'gorogoa',
          description: `
          Such nice artwork and ideas. I've been stuck sometimes in the puzzles since I'm not the brightest, and honestly the game pushes you to do try random stuff to go ahead.<br/> Still, it's awesome. It has a storyline I didn't get but it doesn't matter to me, the 1 - 2 hours game is still a joy for the eyes to play.
          `,
        },
      };
    case linkslist[6]:
      return {
        title: 'Best action game',
        // videourl: 'https://www.youtube.com/embed/2AkRnBUCWJI',
        description:
          'For the best game in the action genre focused primarily on combat.',
        winner: {
          title: 'Neon White',
          shorttitle: 'neonwhite',
          description: ` 
            The game is a shot of adrenaline and dopamine all the way during the levels. <br/><br/>
            It's like pistol whip meets attack on titans. <br/><br/>
            It's really nice that you can restart the level immediatly without any loading and keep the movement going. <br/>
            It's one of the most entertaining games I've played. I am not a speedrunner but I imagine that this is the wet dream game of any speedrunner
  <br/><br/>
  On the other hand...
  <br/><br/>
  The art, drawings, color palette and music are nice and fit well with the game. <br/>
  The writing is.. something. The main story is dubbed at least, and luckily they let you fast forward it in case you're like me that has somewhat low patience with cringe writing. <br/>
  I couldn't bear the story so at the end I decided to skip it and enjoy the best part of the game which is the gameplay
            `,
        },
      };
    case linkslist[7]:
      return {
        title: 'Best Action / Adventure',
        // videourl: 'https://www.youtube.com/embed/VHLjHr__g4I',
        description:
          'For the best action/adventure game, combining combat with traversal puzzle solving.',
        winner: {
          title: 'Hogwarts Legacy',
          shorttitle: 'hogwartslegacy',
          description: `
          The game is like my teenage dream of a videogame about the harry potter world come true. <br/> 
          I wish I played this game when I was super hyped many years ago, because it uses all the references that you can think about and presents them to you throughout your adventure effortlessy. <br/>
          You see fantastic animals, you see enchantments and spells, you see magical items and places that you already saw in the movie or read on the books. <br/><br/>
          The gameplay is super smooth and well constructed, you can run around the castle or fly on a broomstick exploring the, somewhat repetitive sometimes, open world. <br/>
          You fight the enemies with your favorite spells and solve different puzzles with the correct spells that you learned at school. Also trans inclusivity in the game so that the TERF can go *** herself. <br/><br/>
          The story is okay, nothing extraordinary but how it is presented is just delightful, all the places you see and the buildings you explore have an amount of detail that is incredible.
<br/><br/>
The walls of the castle have so many illustrations and details that show the effort to make this world 100% believable and real. 
          `,
        },
      };
    case linkslist[8]:
      return {
        title: 'Best Role Playing',
        // videourl: 'https://www.youtube.com/embed/5hTJraZbjO0',
        description:
          'Recognizing a game that delivers the absolute best experience across all creative and technical fields.',
        winner: {
          title: 'Chained Echoes',
          shorttitle: 'chainedechoes',
          description: `
             This is a must play for whoever is a fan of the old style jrpg. <br/>
             I got initially pushed back by the "rpgmaker" feel of the characters, but the interface and movements are fluid and new, nothing clunky nor boring. What really shines for this game is how they brought a lot of quality of life improvements that old jrpg suffered, like grinding or speed of animations p.e.<br/>
             The crafting system is something i could critique, but the music and THE STORY, THE FUCKING STORY just make me shut up and advice this game like if it was a masterpiece. I loved the pixel art, and the writing. <br/><br/>
             The combat gameplay is challanging but not frustrating. It's not like you fight tons of random mobs that you beat by smashing X, it's more like every fight needs attention a little bit of resource management, and they give the right amount of encounters.
             <br/><br/>
             Tens across the board
             `,
        },
      };
    case linkslist[9]:
      return {
        title: 'Best sim / strategy / puzzles',
        // videourl: 'https://www.youtube.com/embed/i-7bXJGYyQw',
        description:
          'Best game focused on real time or turn-based simulation or strategy/puzzles gameplay.',
        winner: {
          title: 'Mario + Rabbids: Sparks of Hope',
          shorttitle: 'mariorabbids',
          description: `After more than 20 hours of gameplay spread throughout one year I did it. <br/> <br/>
          It's a turn based tile strategy games, much like a FFT but with a very modern gameplay.  <br/>
          You have a lot of characters to pick for your battles and even if you might consider some more useful than others, or maybe some character might serve the same purpose than other characters in battle, they give you a lot of variety for the battles to come.  <br/> <br/>
          Every character have different special abilities and talent trees that can upgrade some stats or move. Also you can equip different abilities thanks to the little spark that you find around the world. The story isn't noticeable, like every other mario games, but the music, the art and the mood for the whole game is outstanding.  <br/> <br/>
          The story is filled with some small puzzles that get you to the boss fights. If you're into sidequesting there are a lot of optional battles and puzzles that you can do. A really piece of art for the strategy games lovers.
          `,
        },
      };
    case linkslist[10]:
      return {
        title: 'Best Indie',
        description: 'For the best game created by a independent studio.',
        // videourl: 'https://www.youtube.com/embed/dCyn_PTDXJI',
        winner: {
          title: 'Stray',
          shorttitle: 'goldenidol',
          description: `<br/>
          I really want to like point and click games, but I always feel lost in the huge environments and options they provide to solve the mysteries. <br/><br/>
          Also I'm not a huge reader. <br/><br/>

The Case of the Golden Idol caught my attention from the first chapter since it was a one-screen scenario where you could guess what happened without going around for hours asking all the people about their daily lives. <br/>

Moving onto the next chapters you can find up to 4 screens and things might become a little difficult, but not overwhelming.<br/>
 I'm sad I couldn't understand properly one riddle of the 11th (last) chapter, but for the most part my not-so-smart brain could go through all the cases and it was so satisfying! <br/><br/>

Also, music is not something I would put on my spotify list, but it's a loop music and never got me frustrated so a 10 for this.
`,
        },
      };
    case linkslist[11]:
      return {
        title: 'Best Music',
        // videourl: 'https://www.youtube.com/embed/Z8S_Eg1L1FI',
        description:
          'For outstanding music, inclusive of score, original song and/or licensed soundtrack.',
        winner: {
          title: 'Hi-Fi RUSH',
          shorttitle: 'hifi',
          description: `
            The game is such a breath of fresh air in the videogame market. <br/>
            A colorful anime-like action rythm video game that sparks humor joy and fun everytime you play it.<br/>
             The combat is fun and is quite forgiving, to the point that sometimes it feels just like smashing buttons on rythm, but that's part of the fun. <br/><br/>
             The story is ok but the dialogs are hilarious and funny. And you have a cat on your side all the time, so points to that. <br/>
             <br/>
             It's 8-10 hours long and it's just the right amount of time, since it might become a little too repetitive, so i'm glad for it. Art is a 10.
  
            `,
        },
      };
    case linkslist[12]:
      return {
        title: 'Best Journey',
        description: 'For a game that brought you on a special journey.',
        // videourl: 'https://www.youtube.com/embed/tQqckYVc5Ls',
        winner: {
          title: 'Bramble: The Mountain King',
          shorttitle: 'bramble',
          description: `
            Incredible atmosphere, clunky  gameplay <br/> <br/>

I have a positive opinion about this game, but I'm sad that I must admit that I also found many flaws gameplay-wise. <br/> <br/>

The game thrives on the atmosphere it provides. It's one of those games that stands up mostly for the art department, since the graphics, the characters modelings, the lights and the level design is incredible.  <br/>
There's a huge contrast between "kids' fairytale" atmosphere and content and "Nordic folklore inspired horror gore".  <br/>
 The music goes well with the environment thus creating an incredible atmosphere. 
What is really dull is the gameplay: puzzles so easy that aren't puzzles, clunky jumps/holds, slow movement/interactions. disappointing aim with controller. Jumping off a cliff and landing on the edge of a rock just to watch your kid fall down and die was really frustrating. Also the writing could have been a little more inspired, idk maybe rhymed or more poetic. 
 <br/> <br/>
Still, with some patience you can still enjoy this visual masterpiece, not perfect but really good!
 <br/> <br/>
--- > 
 <br/> <br/>
I wasn't thinking to put this game in the lillaredux, but after almost two months I keep coming back to it and think of how impactful were some parts of it. This could be Little Nightmare: Nordic fables.  <br/>
It has the same vibes of LN, you're an innocent kid that has to face a lot of atrocities and gruesome monstrosities from the nordic folklore. The contrast here in this game is even more pushed, bringing up very distinct emotions that make this game unforgettable. <br/>
 Yes, it could be more fluid in the gameplay or the screenplay be a little more developed, but listening to Blomstertid after you escape from your worst nightmare is something so powerful and unique that brings this game here.
`,
        },
      };
    default:
      return {
        title: 'Wat',
        videourl: 'https://www.youtube.com/embed/h4w-YxhxxkY',
        description:
          "There's no category created for this one, I'm sorry! Maybe I just haven't found a proper game to put in this category!",
        winner: {
          title: 'Spoilerino',
          description: 'No descriptionino patatino',
        },
      };
  }
};

export const getGameData = (gameName) => {
  switch (gameName) {
    case 'gorogoa':
      return {
        image: '/assets/gorogoa.png',
        name: 'Gorogoa',
        styles: '',
        shortName: 'gorogoa',
      };
    case 'hifi':
      return {
        image: '/assets/hifi.png',
        name: 'Hi-Fi RUSH',
        styles: '',
        shortName: 'hifi',
      };
    case 'goldenidol':
      return {
        image: '/assets/goldenidol.png',
        name: 'The Case of the Golden Idol',
        styles: '',
        shortName: 'goldenidol',
      };
    case 'blasphemous2':
      return {
        image: '/assets/blasphemous2.png',
        name: 'Blasphemous 2',
        styles: '',
        shortName: 'blasphemous2',
      };
    case 'bramble':
      return {
        image: '/assets/bramble.png',
        name: 'Bramble: The Mountain King',
        styles: '',
        shortName: 'bramble',
      };
    case 'mariorabbids':
      return {
        image: '/assets/mariorabbids.png',
        name: 'Mario + Rabbids: Sparks of Hope',
        styles: '',
        shortName: 'mariorabbids',
      };
    case 'neonwhite':
      return {
        image: '/assets/neonwhite.png',
        name: 'Neon White',
        styles: '',
        shortName: 'neonwhite',
      };
    case 'tacticsogre':
      return {
        image: '/assets/tacticsogre.png',
        name: 'Tactics Ogre: Reborn',
        styles: '',
        shortName: 'tacticsogre',
      };
    case 'lostinrandom':
      return {
        image: '/assets/lostinrandom.png',
        name: 'Lost in Random',
        styles: '',
        shortName: 'lostinrandom',
      };
    case 'chainedechoes':
      return {
        image: '/assets/chainedechoes.png',
        name: 'Chained Echoes',
        styles: '',
        shortName: 'chainedechoes',
      };
    default:
      return {
        image: '/assets/alice.jpg',
        name: gameName,
        styles: '',
        shortName: 'gamenotfound',
      };
      break;
  }
};

export const buildGameData = (gameNames: String[]) => {
  const gameData = gameNames.map((name) => {
    return getGameData(name);
  });
  return gameData;
};
