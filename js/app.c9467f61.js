(function(e){function a(a){for(var i,t,o=a[0],m=a[1],s=a[2],l=0,c=[];l<o.length;l++)t=o[l],Object.prototype.hasOwnProperty.call(d,t)&&d[t]&&c.push(d[t][0]),d[t]=0;for(i in m)Object.prototype.hasOwnProperty.call(m,i)&&(e[i]=m[i]);u&&u(a);while(c.length)c.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,t=1;t<n.length;t++){var o=n[t];0!==d[o]&&(i=!1)}i&&(r.splice(a--,1),e=m(m.s=n[0]))}return e}var i={},t={app:0},d={app:0},r=[];function o(e){return m.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad7d4620"}[e]+".js"}function m(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,m),n.l=!0,n.exports}m.e=function(e){var a=[],n={about:1};t[e]?a.push(t[e]):0!==t[e]&&n[e]&&a.push(t[e]=new Promise((function(a,n){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"76071dba"}[e]+".css",d=m.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var s=r[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===i||l===d))return a()}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){s=c[o],l=s.getAttribute("data-href");if(l===i||l===d)return a()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=a,u.onerror=function(a){var i=a&&a.target&&a.target.src||d,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete t[e],u.parentNode.removeChild(u),n(r)},u.href=d;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){t[e]=0})));var i=d[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=d[e]=[a,n]}));a.push(i[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,m.nc&&l.setAttribute("nonce",m.nc),l.src=o(e);var c=new Error;s=function(a){l.onerror=l.onload=null,clearTimeout(u);var n=d[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+t+")",c.name="ChunkLoadError",c.type=i,c.request=t,n[1](c)}d[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(a)},m.m=e,m.c=i,m.d=function(e,a,n){m.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},m.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(e,a){if(1&a&&(e=m(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(m.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)m.d(n,i,function(a){return e[a]}.bind(null,i));return n},m.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return m.d(a,"a",a),a},m.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},m.p="/super-hero-database/",m.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";var i=n("85ec"),t=n.n(i);t.a},"0b82":function(e,a,n){},2198:function(e,a,n){},"3f04":function(e,a,n){},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/heroes"}},[e._v("Heroes")])],1),n("router-view"),e._m(0)],1)},d=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer-section"},[e._v("Designed and built by: Jaylan Snelson")])])}],r=(n("034f"),n("2877")),o={},m=Object(r["a"])(o,t,d,!1,null,null,null),s=m.exports,l=(n("d3b7"),n("8c4f")),c=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"home"},[n("div",[n("h1",[e._v("Superhero Database")]),n("h2",[e._v("Learn more about your favorite heroes and villians from all of the universes.")]),n("a",{attrs:{target:"_blank"},on:{click:function(a){return e.heroesPage()}}},[n("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[e._v("Get Started")])]),n("br"),n("br"),e._m(0)])])},u=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("a",{staticClass:"btn-github",attrs:{href:"https://github.com/jaysnel/super-hero-database",target:"_blank"}},[e._v("Source Code "),n("i",{staticClass:"fab fa-github"})])}],p=[{id:1,name:"A-Bomb"},{id:2,name:"Abe Sapien"},{id:3,name:"Abin Sur"},{id:4,name:"Abomination"},{id:5,name:"Abraxas"},{id:6,name:"Absorbing Man"},{id:7,name:"Adam Monroe"},{id:8,name:"Adam Strange"},{id:9,name:"Agent 13"},{id:10,name:"Agent Bob"},{id:11,name:"Agent Zero"},{id:12,name:"Air-Walker"},{id:13,name:"Ajax"},{id:14,name:"Alan Scott"},{id:15,name:"Alex Mercer"},{id:16,name:"Alex Woolsly"},{id:17,name:"Alfred Pennyworth"},{id:18,name:"Alien"},{id:19,name:"Allan Quatermain"},{id:20,name:"Amazo"},{id:21,name:"Ammo"},{id:22,name:"Ando Masahashi"},{id:23,name:"Angel"},{id:24,name:"Angel"},{id:25,name:"Angel Dust"},{id:26,name:"Angel Salvadore"},{id:27,name:"Angela"},{id:28,name:"Animal Man"},{id:29,name:"Annihilus"},{id:30,name:"Ant-Man"},{id:31,name:"Ant-Man II"},{id:32,name:"Anti-Monitor"},{id:33,name:"Anti-Spawn"},{id:34,name:"Anti-Venom"},{id:35,name:"Apocalypse"},{id:36,name:"Aquababy"},{id:37,name:"Aqualad"},{id:38,name:"Aquaman"},{id:39,name:"Arachne"},{id:40,name:"Archangel"},{id:41,name:"Arclight"},{id:42,name:"Ardina"},{id:43,name:"Ares"},{id:44,name:"Ariel"},{id:45,name:"Armor"},{id:46,name:"Arsenal"},{id:47,name:"Astro Boy"},{id:48,name:"Atlas"},{id:49,name:"Atlas"},{id:50,name:"Atom"},{id:51,name:"Atom"},{id:52,name:"Atom Girl"},{id:53,name:"Atom II"},{id:54,name:"Atom III"},{id:55,name:"Atom IV"},{id:56,name:"Aurora"},{id:57,name:"Azazel"},{id:58,name:"Azrael"},{id:59,name:"Aztar"},{id:60,name:"Bane"},{id:61,name:"Banshee"},{id:62,name:"Bantam"},{id:63,name:"Batgirl"},{id:64,name:"Batgirl"},{id:65,name:"Batgirl III"},{id:66,name:"Batgirl IV"},{id:67,name:"Batgirl V"},{id:68,name:"Batgirl VI"},{id:69,name:"Batman"},{id:70,name:"Batman"},{id:71,name:"Batman II"},{id:72,name:"Battlestar"},{id:73,name:"Batwoman V"},{id:74,name:"Beak"},{id:75,name:"Beast"},{id:76,name:"Beast Boy"},{id:77,name:"Beetle"},{id:78,name:"Ben 10"},{id:79,name:"Beta Ray Bill"},{id:80,name:"Beyonder"},{id:81,name:"Big Barda"},{id:82,name:"Big Daddy"},{id:83,name:"Big Man"},{id:84,name:"Bill Harken"},{id:85,name:"Billy Kincaid"},{id:86,name:"Binary"},{id:87,name:"Bionic Woman"},{id:88,name:"Bird-Brain"},{id:89,name:"Bird-Man"},{id:90,name:"Bird-Man II"},{id:91,name:"Birdman"},{id:92,name:"Bishop"},{id:93,name:"Bizarro"},{id:94,name:"Black Abbott"},{id:95,name:"Black Adam"},{id:96,name:"Black Bolt"},{id:97,name:"Black Canary"},{id:98,name:"Black Canary"},{id:99,name:"Black Cat"},{id:100,name:"Black Flash"},{id:101,name:"Black Goliath"},{id:102,name:"Black Knight III"},{id:103,name:"Black Lightning"},{id:104,name:"Black Mamba"},{id:105,name:"Black Manta"},{id:106,name:"Black Panther"},{id:107,name:"Black Widow"},{id:108,name:"Black Widow II"},{id:109,name:"Blackout"},{id:110,name:"Blackwing"},{id:111,name:"Blackwulf"},{id:112,name:"Blade"},{id:113,name:"Blaquesmith"},{id:114,name:"Bling!"},{id:115,name:"Blink"},{id:116,name:"Blizzard"},{id:117,name:"Blizzard"},{id:118,name:"Blizzard II"},{id:119,name:"Blob"},{id:120,name:"Bloodaxe"},{id:121,name:"Bloodhawk"},{id:122,name:"Bloodwraith"},{id:123,name:"Blue Beetle"},{id:124,name:"Blue Beetle"},{id:125,name:"Blue Beetle II"},{id:126,name:"Blue Beetle III"},{id:127,name:"Boba Fett"},{id:128,name:"Bolt"},{id:129,name:"Bomb Queen"},{id:130,name:"Boom-Boom"},{id:131,name:"Boomer"},{id:132,name:"Booster Gold"},{id:133,name:"Box"},{id:134,name:"Box III"},{id:135,name:"Box IV"},{id:136,name:"Brainiac"},{id:137,name:"Brainiac 5"},{id:138,name:"Brother Voodoo"},{id:139,name:"Brundlefly"},{id:140,name:"Buffy"},{id:141,name:"Bullseye"},{id:142,name:"Bumblebee"},{id:143,name:"Bumbleboy"},{id:144,name:"Bushido"},{id:145,name:"Cable"},{id:146,name:"Callisto"},{id:147,name:"Cameron Hicks"},{id:148,name:"Cannonball"},{id:149,name:"Captain America"},{id:150,name:"Captain Atom"},{id:151,name:"Captain Britain"},{id:152,name:"Captain Cold"},{id:153,name:"Captain Epic"},{id:154,name:"Captain Hindsight"},{id:155,name:"Captain Mar-vell"},{id:156,name:"Captain Marvel"},{id:157,name:"Captain Marvel"},{id:158,name:"Captain Marvel II"},{id:159,name:"Captain Midnight"},{id:160,name:"Captain Planet"},{id:161,name:"Captain Universe"},{id:162,name:"Carnage"},{id:163,name:"Cat"},{id:164,name:"Cat II"},{id:165,name:"Catwoman"},{id:166,name:"Cecilia Reyes"},{id:167,name:"Century"},{id:168,name:"Cerebra"},{id:169,name:"Chamber"},{id:170,name:"Chameleon"},{id:171,name:"Changeling"},{id:172,name:"Cheetah"},{id:173,name:"Cheetah II"},{id:174,name:"Cheetah III"},{id:175,name:"Chromos"},{id:176,name:"Chuck Norris"},{id:177,name:"Citizen Steel"},{id:178,name:"Claire Bennet"},{id:179,name:"Clea"},{id:180,name:"Cloak"},{id:181,name:"Clock King"},{id:182,name:"Cogliostro"},{id:183,name:"Colin Wagner"},{id:184,name:"Colossal Boy"},{id:185,name:"Colossus"},{id:186,name:"Copycat"},{id:187,name:"Corsair"},{id:188,name:"Cottonmouth"},{id:189,name:"Crimson Crusader"},{id:190,name:"Crimson Dynamo"},{id:191,name:"Crystal"},{id:192,name:"Curse"},{id:193,name:"Cy-Gor"},{id:194,name:"Cyborg"},{id:195,name:"Cyborg Superman"},{id:196,name:"Cyclops"},{id:197,name:"Cypher"},{id:198,name:"Dagger"},{id:199,name:"Danny Cooper"},{id:200,name:"Daphne Powell"},{id:201,name:"Daredevil"},{id:202,name:"Darkhawk"},{id:203,name:"Darkman"},{id:204,name:"Darkseid"},{id:205,name:"Darkside"},{id:206,name:"Darkstar"},{id:207,name:"Darth Maul"},{id:208,name:"Darth Vader"},{id:209,name:"Dash"},{id:210,name:"Data"},{id:211,name:"Dazzler"},{id:212,name:"Deadman"},{id:213,name:"Deadpool"},{id:214,name:"Deadshot"},{id:215,name:"Deathlok"},{id:216,name:"Deathstroke"},{id:217,name:"Demogoblin"},{id:218,name:"Destroyer"},{id:219,name:"Diamondback"},{id:220,name:"DL Hawkins"},{id:221,name:"Doc Samson"},{id:222,name:"Doctor Doom"},{id:223,name:"Doctor Doom II"},{id:224,name:"Doctor Fate"},{id:225,name:"Doctor Octopus"},{id:226,name:"Doctor Strange"},{id:227,name:"Domino"},{id:228,name:"Donatello"},{id:229,name:"Donna Troy"},{id:230,name:"Doomsday"},{id:231,name:"Doppelganger"},{id:232,name:"Dormammu"},{id:233,name:"Dr Manhattan"},{id:234,name:"Drax the Destroyer"},{id:235,name:"Ego"},{id:236,name:"Elastigirl"},{id:237,name:"Electro"},{id:238,name:"Elektra"},{id:239,name:"Elle Bishop"},{id:240,name:"Elongated Man"},{id:241,name:"Emma Frost"},{id:242,name:"Enchantress"},{id:243,name:"Energy"},{id:244,name:"ERG-1"},{id:245,name:"Ethan Hunt"},{id:246,name:"Etrigan"},{id:247,name:"Evil Deadpool"},{id:248,name:"Evilhawk"},{id:249,name:"Exodus"},{id:250,name:"Fabian Cortez"},{id:251,name:"Falcon"},{id:252,name:"Fallen One II"},{id:253,name:"Faora"},{id:254,name:"Feral"},{id:255,name:"Fighting Spirit"},{id:256,name:"Fin Fang Foom"},{id:257,name:"Firebird"},{id:258,name:"Firelord"},{id:259,name:"Firestar"},{id:260,name:"Firestorm"},{id:261,name:"Firestorm"},{id:262,name:"Fixer"},{id:263,name:"Flash"},{id:264,name:"Flash Gordon"},{id:265,name:"Flash II"},{id:266,name:"Flash III"},{id:267,name:"Flash IV"},{id:268,name:"Forge"},{id:269,name:"Franklin Richards"},{id:270,name:"Franklin Storm"},{id:271,name:"Frenzy"},{id:272,name:"Frigga"},{id:273,name:"Galactus"},{id:274,name:"Gambit"},{id:275,name:"Gamora"},{id:276,name:"Garbage Man"},{id:277,name:"Gary Bell"},{id:278,name:"General Zod"},{id:279,name:"Genesis"},{id:280,name:"Ghost Rider"},{id:281,name:"Ghost Rider II"},{id:282,name:"Giant-Man"},{id:283,name:"Giant-Man II"},{id:284,name:"Giganta"},{id:285,name:"Gladiator"},{id:286,name:"Goblin Queen"},{id:287,name:"Godzilla"},{id:288,name:"Gog"},{id:289,name:"Goku"},{id:290,name:"Goliath"},{id:291,name:"Goliath"},{id:292,name:"Goliath"},{id:293,name:"Goliath IV"},{id:294,name:"Gorilla Grodd"},{id:295,name:"Granny Goodness"},{id:296,name:"Gravity"},{id:297,name:"Greedo"},{id:298,name:"Green Arrow"},{id:299,name:"Green Goblin"},{id:300,name:"Green Goblin II"},{id:301,name:"Green Goblin III"},{id:302,name:"Green Goblin IV"},{id:303,name:"Groot"},{id:304,name:"Guardian"},{id:305,name:"Guy Gardner"},{id:306,name:"Hal Jordan"},{id:307,name:"Han Solo"},{id:308,name:"Hancock"},{id:309,name:"Harley Quinn"},{id:310,name:"Harry Potter"},{id:311,name:"Havok"},{id:312,name:"Hawk"},{id:313,name:"Hawkeye"},{id:314,name:"Hawkeye II"},{id:315,name:"Hawkgirl"},{id:316,name:"Hawkman"},{id:317,name:"Hawkwoman"},{id:318,name:"Hawkwoman II"},{id:319,name:"Hawkwoman III"},{id:320,name:"Heat Wave"},{id:321,name:"Hela"},{id:322,name:"Hellboy"},{id:323,name:"Hellcat"},{id:324,name:"Hellstorm"},{id:325,name:"Hercules"},{id:326,name:"Hiro Nakamura"},{id:327,name:"Hit-Girl"},{id:328,name:"Hobgoblin"},{id:329,name:"Hollow"},{id:330,name:"Hope Summers"},{id:331,name:"Howard the Duck"},{id:332,name:"Hulk"},{id:333,name:"Human Torch"},{id:334,name:"Huntress"},{id:335,name:"Husk"},{id:336,name:"Hybrid"},{id:337,name:"Hydro-Man"},{id:338,name:"Hyperion"},{id:339,name:"Iceman"},{id:340,name:"Impulse"},{id:341,name:"Indiana Jones"},{id:342,name:"Indigo"},{id:343,name:"Ink"},{id:344,name:"Invisible Woman"},{id:345,name:"Iron Fist"},{id:346,name:"Iron Man"},{id:347,name:"Iron Monger"},{id:348,name:"Isis"},{id:349,name:"Jack Bauer"},{id:350,name:"Jack of Hearts"},{id:351,name:"Jack-Jack"},{id:352,name:"James Bond"},{id:353,name:"James T. Kirk"},{id:354,name:"Jar Jar Binks"},{id:355,name:"Jason Bourne"},{id:356,name:"Jean Grey"},{id:357,name:"Jean-Luc Picard"},{id:358,name:"Jennifer Kale"},{id:359,name:"Jesse Quick"},{id:360,name:"Jessica Cruz"},{id:361,name:"Jessica Jones"},{id:362,name:"Jessica Sanders"},{id:363,name:"Jigsaw"},{id:364,name:"Jim Powell"},{id:365,name:"JJ Powell"},{id:366,name:"Johann Krauss"},{id:367,name:"John Constantine"},{id:368,name:"John Stewart"},{id:369,name:"John Wraith"},{id:370,name:"Joker"},{id:371,name:"Jolt"},{id:372,name:"Jubilee"},{id:373,name:"Judge Dredd"},{id:374,name:"Juggernaut"},{id:375,name:"Junkpile"},{id:376,name:"Justice"},{id:377,name:"Jyn Erso"},{id:378,name:"K-2SO"},{id:379,name:"Kang"},{id:380,name:"Kathryn Janeway"},{id:381,name:"Katniss Everdeen"},{id:382,name:"Kevin 11"},{id:383,name:"Kick-Ass"},{id:384,name:"Kid Flash"},{id:385,name:"Kid Flash II"},{id:386,name:"Killer Croc"},{id:387,name:"Killer Frost"},{id:388,name:"Kilowog"},{id:389,name:"King Kong"},{id:390,name:"King Shark"},{id:391,name:"Kingpin"},{id:392,name:"Klaw"},{id:393,name:"Kool-Aid Man"},{id:394,name:"Kraven II"},{id:395,name:"Kraven the Hunter"},{id:396,name:"Krypto"},{id:397,name:"Kyle Rayner"},{id:398,name:"Kylo Ren"},{id:399,name:"Lady Bullseye"},{id:400,name:"Lady Deathstrike"},{id:401,name:"Leader"},{id:402,name:"Leech"},{id:403,name:"Legion"},{id:404,name:"Leonardo"},{id:405,name:"Lex Luthor"},{id:406,name:"Light Lass"},{id:407,name:"Lightning Lad"},{id:408,name:"Lightning Lord"},{id:409,name:"Living Brain"},{id:410,name:"Living Tribunal"},{id:411,name:"Liz Sherman"},{id:412,name:"Lizard"},{id:413,name:"Lobo"},{id:414,name:"Loki"},{id:415,name:"Longshot"},{id:416,name:"Luke Cage"},{id:417,name:"Luke Campbell"},{id:418,name:"Luke Skywalker"},{id:419,name:"Luna"},{id:420,name:"Lyja"},{id:421,name:"Mach-IV"},{id:422,name:"Machine Man"},{id:423,name:"Magneto"},{id:424,name:"Magog"},{id:425,name:"Magus"},{id:426,name:"Man of Miracles"},{id:427,name:"Man-Bat"},{id:428,name:"Man-Thing"},{id:429,name:"Man-Wolf"},{id:430,name:"Mandarin"},{id:431,name:"Mantis"},{id:432,name:"Martian Manhunter"},{id:433,name:"Marvel Girl"},{id:434,name:"Master Brood"},{id:435,name:"Master Chief"},{id:436,name:"Match"},{id:437,name:"Matt Parkman"},{id:438,name:"Maverick"},{id:439,name:"Maxima"},{id:440,name:"Maya Herrera"},{id:441,name:"Medusa"},{id:442,name:"Meltdown"},{id:443,name:"Mephisto"},{id:444,name:"Mera"},{id:445,name:"Metallo"},{id:446,name:"Metamorpho"},{id:447,name:"Meteorite"},{id:448,name:"Metron"},{id:449,name:"Micah Sanders"},{id:450,name:"Michelangelo"},{id:451,name:"Micro Lad"},{id:452,name:"Mimic"},{id:453,name:"Minna Murray"},{id:454,name:"Misfit"},{id:455,name:"Miss Martian"},{id:456,name:"Mister Fantastic"},{id:457,name:"Mister Freeze"},{id:458,name:"Mister Knife"},{id:459,name:"Mister Mxyzptlk"},{id:460,name:"Mister Sinister"},{id:461,name:"Mister Zsasz"},{id:462,name:"Mockingbird"},{id:463,name:"MODOK"},{id:464,name:"Mogo"},{id:465,name:"Mohinder Suresh"},{id:466,name:"Moloch"},{id:467,name:"Molten Man"},{id:468,name:"Monarch"},{id:469,name:"Monica Dawson"},{id:470,name:"Moon Knight"},{id:471,name:"Moonstone"},{id:472,name:"Morlun"},{id:473,name:"Morph"},{id:474,name:"Moses Magnum"},{id:475,name:"Mr Immortal"},{id:476,name:"Mr Incredible"},{id:477,name:"Ms Marvel II"},{id:478,name:"Multiple Man"},{id:479,name:"Mysterio"},{id:480,name:"Mystique"},{id:481,name:"Namor"},{id:482,name:"Namor"},{id:483,name:"Namora"},{id:484,name:"Namorita"},{id:485,name:"Naruto Uzumaki"},{id:486,name:"Nathan Petrelli"},{id:487,name:"Nebula"},{id:488,name:"Negasonic Teenage Warhead"},{id:489,name:"Nick Fury"},{id:490,name:"Nightcrawler"},{id:491,name:"Nightwing"},{id:492,name:"Niki Sanders"},{id:493,name:"Nina Theroux"},{id:494,name:"Nite Owl II"},{id:495,name:"Northstar"},{id:496,name:"Nova"},{id:497,name:"Nova"},{id:498,name:"Odin"},{id:499,name:"Offspring"},{id:500,name:"Omega Red"},{id:501,name:"Omniscient"},{id:502,name:"One Punch Man"},{id:503,name:"One-Above-All"},{id:504,name:"Onslaught"},{id:505,name:"Oracle"},{id:506,name:"Osiris"},{id:507,name:"Overtkill"},{id:508,name:"Ozymandias"},{id:509,name:"Parademon"},{id:510,name:"Paul Blart"},{id:511,name:"Penance"},{id:512,name:"Penance I"},{id:513,name:"Penance II"},{id:514,name:"Penguin"},{id:515,name:"Phantom"},{id:516,name:"Phantom Girl"},{id:517,name:"Phoenix"},{id:518,name:"Plantman"},{id:519,name:"Plastic Lad"},{id:520,name:"Plastic Man"},{id:521,name:"Plastique"},{id:522,name:"Poison Ivy"},{id:523,name:"Polaris"},{id:524,name:"Power Girl"},{id:525,name:"Power Man"},{id:526,name:"Predator"},{id:527,name:"Professor X"},{id:528,name:"Professor Zoom"},{id:529,name:"Psylocke"},{id:530,name:"Punisher"},{id:531,name:"Purple Man"},{id:532,name:"Pyro"},{id:533,name:"Q"},{id:534,name:"Quantum"},{id:535,name:"Question"},{id:536,name:"Quicksilver"},{id:537,name:"Quill"},{id:538,name:"Ra's Al Ghul"},{id:539,name:"Rachel Pirzad"},{id:540,name:"Rambo"},{id:541,name:"Raphael"},{id:542,name:"Raven"},{id:543,name:"Ray"},{id:544,name:"Razor-Fist II"},{id:545,name:"Red Arrow"},{id:546,name:"Red Hood"},{id:547,name:"Red Hulk"},{id:548,name:"Red Mist"},{id:549,name:"Red Robin"},{id:550,name:"Red Skull"},{id:551,name:"Red Tornado"},{id:552,name:"Redeemer II"},{id:553,name:"Redeemer III"},{id:554,name:"Renata Soliz"},{id:555,name:"Rey"},{id:556,name:"Rhino"},{id:557,name:"Rick Flag"},{id:558,name:"Riddler"},{id:559,name:"Rip Hunter"},{id:560,name:"Ripcord"},{id:561,name:"Robin"},{id:562,name:"Robin II"},{id:563,name:"Robin III"},{id:564,name:"Robin V"},{id:565,name:"Robin VI"},{id:566,name:"Rocket Raccoon"},{id:567,name:"Rogue"},{id:568,name:"Ronin"},{id:569,name:"Rorschach"},{id:570,name:"Sabretooth"},{id:571,name:"Sage"},{id:572,name:"Sandman"},{id:573,name:"Sasquatch"},{id:574,name:"Sauron"},{id:575,name:"Savage Dragon"},{id:576,name:"Scarecrow"},{id:577,name:"Scarlet Spider"},{id:578,name:"Scarlet Spider II"},{id:579,name:"Scarlet Witch"},{id:580,name:"Scorpia"},{id:581,name:"Scorpion"},{id:582,name:"Sebastian Shaw"},{id:583,name:"Sentry"},{id:584,name:"Shadow King"},{id:585,name:"Shadow Lass"},{id:586,name:"Shadowcat"},{id:587,name:"Shang-Chi"},{id:588,name:"Shatterstar"},{id:589,name:"She-Hulk"},{id:590,name:"She-Thing"},{id:591,name:"Shocker"},{id:592,name:"Shriek"},{id:593,name:"Shrinking Violet"},{id:594,name:"Sif"},{id:595,name:"Silk"},{id:596,name:"Silk Spectre"},{id:597,name:"Silk Spectre II"},{id:598,name:"Silver Surfer"},{id:599,name:"Silverclaw"},{id:600,name:"Simon Baz"},{id:601,name:"Sinestro"},{id:602,name:"Siren"},{id:603,name:"Siren II"},{id:604,name:"Siryn"},{id:605,name:"Skaar"},{id:606,name:"Snake-Eyes"},{id:607,name:"Snowbird"},{id:608,name:"Sobek"},{id:609,name:"Solomon Grundy"},{id:610,name:"Songbird"},{id:611,name:"Space Ghost"},{id:612,name:"Spawn"},{id:613,name:"Spectre"},{id:614,name:"Speedball"},{id:615,name:"Speedy"},{id:616,name:"Speedy"},{id:617,name:"Spider-Carnage"},{id:618,name:"Spider-Girl"},{id:619,name:"Spider-Gwen"},{id:620,name:"Spider-Man"},{id:621,name:"Spider-Man"},{id:622,name:"Spider-Man"},{id:623,name:"Spider-Woman"},{id:624,name:"Spider-Woman II"},{id:625,name:"Spider-Woman III"},{id:626,name:"Spider-Woman IV"},{id:627,name:"Spock"},{id:628,name:"Spyke"},{id:629,name:"Stacy X"},{id:630,name:"Star-Lord"},{id:631,name:"Stardust"},{id:632,name:"Starfire"},{id:633,name:"Stargirl"},{id:634,name:"Static"},{id:635,name:"Steel"},{id:636,name:"Stephanie Powell"},{id:637,name:"Steppenwolf"},{id:638,name:"Storm"},{id:639,name:"Stormtrooper"},{id:640,name:"Sunspot"},{id:641,name:"Superboy"},{id:642,name:"Superboy-Prime"},{id:643,name:"Supergirl"},{id:644,name:"Superman"},{id:645,name:"Swamp Thing"},{id:646,name:"Swarm"},{id:647,name:"Sylar"},{id:648,name:"Synch"},{id:649,name:"T-1000"},{id:650,name:"T-800"},{id:651,name:"T-850"},{id:652,name:"T-X"},{id:653,name:"Taskmaster"},{id:654,name:"Tempest"},{id:655,name:"Thanos"},{id:656,name:"The Cape"},{id:657,name:"The Comedian"},{id:658,name:"Thing"},{id:659,name:"Thor"},{id:660,name:"Thor Girl"},{id:661,name:"Thunderbird"},{id:662,name:"Thunderbird II"},{id:663,name:"Thunderbird III"},{id:664,name:"Thunderstrike"},{id:665,name:"Thundra"},{id:666,name:"Tiger Shark"},{id:667,name:"Tigra"},{id:668,name:"Tinkerer"},{id:669,name:"Titan"},{id:670,name:"Toad"},{id:671,name:"Toxin"},{id:672,name:"Toxin"},{id:673,name:"Tracy Strauss"},{id:674,name:"Trickster"},{id:675,name:"Trigon"},{id:676,name:"Triplicate Girl"},{id:677,name:"Triton"},{id:678,name:"Two-Face"},{id:679,name:"Ultragirl"},{id:680,name:"Ultron"},{id:681,name:"Utgard-Loki"},{id:682,name:"Vagabond"},{id:683,name:"Valerie Hart"},{id:684,name:"Valkyrie"},{id:685,name:"Vanisher"},{id:686,name:"Vegeta"},{id:687,name:"Venom"},{id:688,name:"Venom II"},{id:689,name:"Venom III"},{id:690,name:"Venompool"},{id:691,name:"Vertigo II"},{id:692,name:"Vibe"},{id:693,name:"Vindicator"},{id:694,name:"Vindicator"},{id:695,name:"Violator"},{id:696,name:"Violet Parr"},{id:697,name:"Vision"},{id:698,name:"Vision II"},{id:699,name:"Vixen"},{id:700,name:"Vulcan"},{id:701,name:"Vulture"},{id:702,name:"Walrus"},{id:703,name:"War Machine"},{id:704,name:"Warbird"},{id:705,name:"Warlock"},{id:706,name:"Warp"},{id:707,name:"Warpath"},{id:708,name:"Wasp"},{id:709,name:"Watcher"},{id:710,name:"Weapon XI"},{id:711,name:"White Canary"},{id:712,name:"White Queen"},{id:713,name:"Wildfire"},{id:714,name:"Winter Soldier"},{id:715,name:"Wiz Kid"},{id:716,name:"Wolfsbane"},{id:717,name:"Wolverine"},{id:718,name:"Wonder Girl"},{id:719,name:"Wonder Man"},{id:720,name:"Wonder Woman"},{id:721,name:"Wondra"},{id:722,name:"Wyatt Wingfoot"},{id:723,name:"X-23"},{id:724,name:"X-Man"},{id:725,name:"Yellow Claw"},{id:726,name:"Yellowjacket"},{id:727,name:"Yellowjacket II"},{id:728,name:"Ymir"},{id:729,name:"Yoda"},{id:730,name:"Zatanna"},{id:731,name:"Zoom"}],h={name:"Home",data:function(){return{Heroes:null,listOfAllHeroes:p}},components:{},methods:{heroesPage:function(){this.$router.push({path:"/heroes/"})}},mounted:function(){console.log(this.listOfAllHeroes)}},g=h,b=(n("e232"),Object(r["a"])(g,c,u,!1,null,"50147f5b",null)),f=b.exports,v=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"text-center hero-outer-container"},[n("div",{staticClass:"user-search"},[n("h3",[e._v("Search:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userSearch,expression:"userSearch"}],attrs:{type:"text"},domProps:{value:e.userSearch},on:{input:function(a){a.target.composing||(e.userSearch=a.target.value)}}})]),n("div",{staticClass:"hero-container-inner container text-center"},e._l(e.filteredList,(function(a){return n("div",{key:a.id},[n("h4",[e._v(e._s(a.name))]),n("a",{attrs:{target:"_blank"},on:{click:function(n){return e.heroPage(a.id)}}},[n("button",{staticClass:"btn btn-info",attrs:{type:"button"}},[e._v("View Info")])])])})),0)])},y=[],C=(n("4de4"),n("caad"),n("b0c0"),n("a9e3"),n("2532"),n("bc3a")),_=n.n(C),I={name:"Heroes",data:function(){return{Heroes:p,heroName:null,heroId:null,userSearch:""}},components:{},methods:{heroPage:function(e){this.$router.push({path:"/hero/".concat(Number(e))})},getHeroInfo:function(){var e="10222460762972255",a="https://www.superheroapi.com/api.php/"+e+"/"+n()+"/image";function n(){return Math.floor(100*Math.random()+1)}_.a.get(a).then((function(e){console.log(e.data)}))}},computed:{filteredList:function(){var e=this.Heroes,a=[],n=this.userSearch;return""===n?e:(e.filter((function(e){e.name.toLowerCase().includes(n.toLowerCase())&&a.push(e)})),a)}},mounted:function(){this.getHeroInfo()}},S=I,k=(n("638a"),Object(r["a"])(S,v,y,!1,null,"d521d3d4",null)),H=k.exports,B=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"text-center hero-outside-container"},[n("div",{staticClass:"top-name-image"},[n("h1",[e._v(e._s(e.HeroInfo.name))]),n("img",{attrs:{src:e.HeroInfo.image.url}}),n("br")]),n("div",{staticClass:"hero-body"},[n("HeroAppearance",{staticClass:"hero-appearance",attrs:{eyeColor:e.HeroInfo.appearance["eye-color"],gender:e.HeroInfo.appearance.gender,hairColor:e.HeroInfo.appearance["hair-color"],height:e.HeroInfo.appearance.height[0],race:e.HeroInfo.appearance.race,weight:e.HeroInfo.appearance.weight[0]}}),n("HeroBiography",{staticClass:"hero-biography",attrs:{aliases:e.HeroInfo.biography.aliases,alignment:e.HeroInfo.biography.alignment,alterEgos:e.HeroInfo.biography["alter-egos"],firstAppearance:e.HeroInfo.biography["first-appearance"],fullName:e.HeroInfo.biography["full-name"],gender:e.HeroInfo.appearance.gender,placeOfBirth:e.HeroInfo.biography["place-of-birth"],publisher:e.HeroInfo.biography.publisher}}),n("HeroConnections",{staticClass:"hero-connections",attrs:{groupAffiliation:e.HeroInfo.connections["group-affiliation"],relatives:e.HeroInfo.connections.relatives}}),n("HeroPowerstats",{staticClass:"hero-powerstats",attrs:{combat:e.HeroInfo.powerstats.combat,durability:e.HeroInfo.powerstats.durability,intelligence:e.HeroInfo.powerstats.intelligence,power:e.HeroInfo.powerstats.power,speed:e.HeroInfo.powerstats.speed,strength:e.HeroInfo.powerstats.strength}}),n("HeroWork",{staticClass:"hero-work",attrs:{base:e.HeroInfo.work.base,occupation:e.HeroInfo.work.occupation}})],1),n("div",{staticClass:"text-center back-to-heroes"},[n("div",[n("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(a){return e.backToHeroesPage()}}},[e._v("Back To Heroes")])])])])},M=[],w=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"hero-appearance-body"},[n("h2",[e._v("Appearance")]),n("button",{staticClass:"btn btn-info",attrs:{type:"button","data-toggle":"modal","data-target":"#HeroAppearance"}},[e._v(" Learn More ")]),n("div",{staticClass:"modal fade",attrs:{id:"HeroAppearance",tabindex:"-1",role:"dialog","aria-labelledby":"HeroAppearanceTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[e._m(0),n("div",{staticClass:"modal-body"},[n("p",[n("span",[e._v("Eye Color:")]),e._v(" "+e._s(e.eyeColor))]),n("p",[n("span",[e._v("Gender:")]),e._v(" "+e._s(e.gender))]),n("p",[n("span",[e._v("Hair Color:")]),e._v(" "+e._s(e.hairColor))]),n("p",[n("span",[e._v("Height:")]),e._v(" "+e._s(e.height))]),n("p",[n("span",[e._v("Race:")]),e._v(" "+e._s(e.race))]),n("p",[n("span",[e._v("Weight:")]),e._v(" "+e._s(e.weight))])]),e._m(1)])])])])},A=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[e._v("Appearance")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")])])}],P={name:"HeroAppearance",props:{eyeColor:String,gender:String,hairColor:String,height:String,race:String,weight:String}},G=P,T=(n("bf52"),Object(r["a"])(G,w,A,!1,null,"43753456",null)),D=T.exports,E=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"hero-biography-body"},[n("h2",[e._v("Biography")]),n("button",{staticClass:"btn btn-info",attrs:{type:"button","data-toggle":"modal","data-target":"#HeroBiography"}},[e._v(" Learn More ")]),n("div",{staticClass:"modal fade",attrs:{id:"HeroBiography",tabindex:"-2",role:"dialog","aria-labelledby":"HeroBiographyTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[e._m(0),n("div",{staticClass:"modal-body"},[n("p",[n("span",[e._v("Aliases:")]),e._v(" "+e._s(e.aliases))]),n("p",[n("span",[e._v("Alignment:")]),e._v(" "+e._s(e.alignment))]),n("p",[n("span",[e._v("Alter-Egos")]),e._v(":"+e._s(e.alterEgos))]),n("p",[n("span",[e._v("First Appearance:")]),e._v(" "+e._s(e.firstAppearance))]),n("p",[n("span",[e._v("Full Name:")]),e._v(" "+e._s(e.fullName))]),n("p",[n("span",[e._v("Gender:")]),e._v(" "+e._s(e.gender))]),n("p",[n("span",[e._v("Place Of Birth:")]),e._v(" "+e._s(e.placeOfBirth))]),n("p",[n("span",[e._v("Publisher:")]),e._v(" "+e._s(e.publisher))])]),e._m(1)])])])])},L=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"HeroBiography"}},[e._v("Biography")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")])])}],x={name:"HeroBiography",props:{aliases:Array,alignment:String,alterEgos:String,firstAppearance:String,fullName:String,gender:String,placeOfBirth:String,publisher:String}},W=x,O=(n("61cb"),Object(r["a"])(W,E,L,!1,null,"1b04e464",null)),R=O.exports,F=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"hero-connections-body"},[n("h2",[e._v("Personal Connections")]),n("button",{staticClass:"btn btn-info",attrs:{type:"button","data-toggle":"modal","data-target":"#HeroConnections"}},[e._v(" Learn More ")]),n("div",{staticClass:"modal fade",attrs:{id:"HeroConnections",tabindex:"-1",role:"dialog","aria-labelledby":"HeroConnectionsTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[e._m(0),n("div",{staticClass:"modal-body"},[n("p",[n("span",[e._v("Group Affiliation:")]),e._v(" "+e._s(e.groupAffiliation))]),n("p",[n("span",[e._v("Relatives:")]),e._v(" "+e._s(e.relatives))])]),e._m(1)])])])])},J=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"HeroConnections"}},[e._v("Personal Connections")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")])])}],V={name:"HeroConnections",props:{groupAffiliation:String,relatives:String}},K=V,N=(n("b877"),Object(r["a"])(K,F,J,!1,null,"76e2ce02",null)),z=N.exports,$=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"hero-powerstats-body"},[n("h2",[e._v("Powerstats")]),n("button",{staticClass:"btn btn-info",attrs:{type:"button","data-toggle":"modal","data-target":"#powerstats"}},[e._v(" Learn More ")]),n("div",{staticClass:"modal fade",attrs:{id:"powerstats",tabindex:"-1",role:"dialog","aria-labelledby":"powerstatsTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[e._m(0),n("div",{staticClass:"modal-body"},[n("p",[n("span",[e._v("Combat:")]),e._v(" "+e._s(e.combat))]),n("p",[n("span",[e._v("Durability:")]),e._v(" "+e._s(e.durability))]),n("p",[n("span",[e._v("Intelligence:")]),e._v(" "+e._s(e.intelligence))]),n("p",[n("span",[e._v("Power:")]),e._v(" "+e._s(e.power))]),n("p",[n("span",[e._v("Speed:")]),e._v(" "+e._s(e.speed))]),n("p",[n("span",[e._v("Strength:")]),e._v(" "+e._s(e.strength))])]),e._m(1)])])])])},j=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[e._v("Powerstats")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")])])}],Q={name:"HeroPowerstats",props:{combat:String,durability:String,intelligence:String,power:String,speed:String,strength:String}},q=Q,U=(n("d3eb"),Object(r["a"])(q,$,j,!1,null,"ed59c61a",null)),X=U.exports,Z=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"hero-work-body"},[n("h2",[e._v("Civillian Work")]),n("button",{staticClass:"btn btn-info",attrs:{type:"button","data-toggle":"modal","data-target":"#HeroWork"}},[e._v(" Learn More ")]),n("div",{staticClass:"modal fade",attrs:{id:"HeroWork",tabindex:"-1",role:"dialog","aria-labelledby":"HeroWorkTitle","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[n("div",{staticClass:"modal-content"},[e._m(0),n("div",{staticClass:"modal-body"},[n("p",[n("span",[e._v("Home Base:")]),e._v(" "+e._s(e.base))]),n("p",[n("span",[e._v("Occupation:")]),e._v(" "+e._s(e.occupation))])]),e._m(1)])])])])},Y=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[e._v("Civillian Work")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Close")])])}],ee={name:"HeroWork",props:{base:String,occupation:String}},ae=ee,ne=(n("5b06"),Object(r["a"])(ae,Z,Y,!1,null,"6b5a2221",null)),ie=ne.exports,te={name:"Hero",data:function(){return{Heroes:p,HeroId:this.$route.params.id,HeroInfo:null}},components:{HeroAppearance:D,HeroBiography:R,HeroConnections:z,HeroPowerstats:X,HeroWork:ie},methods:{getHeroName:function(){var e=this,a="10222460762972255",n=this.HeroId,i="https://www.superheroapi.com/api.php/"+a+"/"+n;_.a.get(i).then((function(a){"null"==a.data.appearance.race&&(a.data.appearance.race="-"),e.HeroInfo=a.data,console.log(e.HeroInfo)}))},backToHeroesPage:function(){this.$router.push({path:"/heroes"})}},mounted:function(){this.getHeroName()}},de=te,re=(n("f546"),Object(r["a"])(de,B,M,!1,null,"622cd2ea",null)),oe=re.exports;i["a"].use(l["a"]);var me=[{path:"/",name:"Home",component:f},{path:"/heroes",name:"Heroes",component:H},{path:"/hero",name:"Hero",component:oe,children:[{path:":id",meta:{label:"Hero Details"},name:"Hero",component:oe}]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],se=new l["a"]({routes:me}),le=se;n("4989"),n("ab8b");i["a"].config.productionTip=!1,window.axios=_.a,new i["a"]({router:le,render:function(e){return e(s)}}).$mount("#app")},"5b06":function(e,a,n){"use strict";var i=n("0b82"),t=n.n(i);t.a},"61cb":function(e,a,n){"use strict";var i=n("937f"),t=n.n(i);t.a},"638a":function(e,a,n){"use strict";var i=n("3f04"),t=n.n(i);t.a},"6dfc":function(e,a,n){},"85ec":function(e,a,n){},9253:function(e,a,n){},"937f":function(e,a,n){},"9e04":function(e,a,n){},b877:function(e,a,n){"use strict";var i=n("9253"),t=n.n(i);t.a},bf52:function(e,a,n){"use strict";var i=n("eb6a"),t=n.n(i);t.a},d3eb:function(e,a,n){"use strict";var i=n("9e04"),t=n.n(i);t.a},e232:function(e,a,n){"use strict";var i=n("6dfc"),t=n.n(i);t.a},eb6a:function(e,a,n){},f546:function(e,a,n){"use strict";var i=n("2198"),t=n.n(i);t.a}});
//# sourceMappingURL=app.c9467f61.js.map