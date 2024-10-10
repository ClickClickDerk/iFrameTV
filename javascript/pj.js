var movies = [
	"t2Trainspotting",
	"legionOfBrothers",
	"captainUnderpantsTheFirstEpicMovie",
	"despicableMe3",
	"theLayover",
	"babyDriver",
	"getOut",
	"theBookOfHenry",
	"aGhostStory",
	"goonLastOfTheEnforcers",
	"transformersTheLastKnight",
	"theBeguiled",
	"theManWithTheIronHeart",
	"theDarkTower",
	"annabelleCreation",
	"spiderManHomecoming",
	"goodMorningVietnam",
	"theInterview",
	"goodfellas",
	"thePelicanBrief",
	"darkCity",
	"theThirteenthFloor",
	"titanic",
	"apollo13",
	"goosebumps",
	"home",
	"christine",
	"napoleonDynamite",
	"theEdgeOfSeventeen",
	"badMoms",
	"denial",
	"iAmNotASerialKiller",
	"dontThinkTwice",
	"arrival",
	"anthropoid",
	"mrChurch",
	"aliceThroughTheLookingGlass",
	"independenceDayResurgence",
	"zoolander2",
	"theDressmaker",
	"snowden",
	"ordinaryWorld",
	"morgan",
	"nightcrawler",
	"theCrash",
	"inferno",
	"thisMeansWar",
	"thisIsWhereILeaveYou",
	"theSecretLifeOfWalterMitty",
	"synecdocheNewYork",
	"thePurgeElectionYear",
	"meanGirls",
	"apocalypto",
	"elf",
	"freeStateOfJones",
	"theRevenant",
	"theSecretLifeOfPets",
	"snowpiercer",
	"dieHard",
	"badBoys",
	"seedOfChucky",
	"youth",
	"conAir",
	"howToTrainYourDragon2",
	"theRundown",
	"apollo18",
	"jackRyanShadowRecruit",
	"gimmeShelter",
	"iAmSam",
	"hercules",
	"howDoYouKnow",
	"allIsBright",
	"admission",
	"theDaVinciCode",
	"weAreStillHere",
	"transformersDarkOfTheMoon",
	"theReader",
	"cars2",
	"menInBlack2",
	"menInBlack",
	"lockout",
	"theSmurfs2",
	"grease",
	"flightplan",
	"theyLive",
	"theInternship",
	"inFear",
	"gameOfDeath",
	"labyrinth",
	"lionOfTheDesert",
	"insidiousChapter2",
	"redSky",
	"groundhogDay",
	"catchMeIfYouCan",
	"americanPie",
	"theGrandBudapestHotel",
	"theMagnificentSeven",
	"valkyrie",
	"theMist",
	"theAdjustmentBureau",
	"stayAlive",
	"theMartian",
	"mrAndMrsSmith",
	"enterTheDragon",
	"standByMe",
	"drive",
	"theGirlWithTheDragonTattoo",
	"hortonHearsAWho",
	"taps",
	"kPax",
	"yearOne",
	"freeBirds",
	"sausageParty",
	"kuboAndTheTwoStrings",
	"moneyMonster",
	"theNumber23",
	"theFourthKind",
	"takeShelter",
	"chronicle",
	"gravity",
	"flatliners",
	"theProposal",
	"theDevilWearsPrada",
	"stuckInLove",
	"theBreakfastClub",
	"beastly",
	"trickRTreat",
	"theSixthSense",
	"theBlairWitchProject",
	"theStrangers",
	"theLostBoys",
	"theExorcismOfEmilyRose",
	"theDevilsRejects",
	"theCollection",
	"theAwakening",
	"rosemarysBaby",
	"letTheRightOneIn",
	"interviewWithTheVampireTheVampireChronicles",
	"houseOf1000Corpses",
	"curseOfChucky",
	"theWalk",
	"trainspotting",
	"theEast",
	"hocusPocus",
	"cloudyWithAChanceOfMeatballs",
	"casper",
	"aSeriesOfUnfortunateEvents",
	"theDouble",
	"juno",
	"inkheart",
	"funnyPeople",
	"eyesWideShut",
	"eternalSunshineOfTheSpotlessMind",
	"fightClub",
	"dallasBuyersClub",
	"requiemForADream",
	"byzantium",
	"burnt",	
	"brick",
	"bigFish",
	"anonymous",
	"acrossTheUniverse",
	"theInfiltrator",
	"savages",
	"insideMan",
	"heat",
	"americanGangster",
	"goodBlessAmerica",
	"donJon",
	"anchormanTheLegendOfRonBurgundy",
	"borat",
	"beetlejuice",
	"animalHouse",
	"vertigo",
	"theGoodTheBadAndTheUgly",
	"psycho",
	"attackTheBlock",
	"despicableMe2",
	"blazingSaddles",
	"austinPowersInGoldmember",
	"austinPowersTheSpyWhoShaggedMe",
	"youngFrankenstein",
	"casino",
	"futuramaBendersBigScore",
	"snatch",
	"austinPowersInternationalManOfMystery",
	"aliens",
	"warrior",
	"solaris",
	"lockStockAndTwoSmokingBarrels",
	"starTrek",
	"thePlaceBeyondThePines",
	"oBrotherWhereArtThou",
	"ramboFirstBloodPart2",
	"meAndEarlAndTheDyingGirl",
	"slowWest",
	"brooklynsFinest",
	"warRoom",
	"concussion",
	"theAdventuresOfRobinHood",
	"northByNorthwest",
	"snowWhiteAndTheSevenDwarfs",
	"30DaysOfNight",
	"extraterrestrial",
	"modernTimes",
	"theFundamentalsOfCaring",
	"theEqualizer",
	"demolitionMan",
	"ghostbusters",
	"everybodyWantsSome",
	"searchParty",
	"harryPotterAndTheOrderOfThePhoenix",
	"harryPotterAndTheGobletOfFire",
	"eyeInTheSky",
	"theChallengerDisaster",
	"oblivion",
	"paranoia",
	"rush",
	"kickAss2",
	"epic",
	"theLorax",
	"lesMiserables",
	"brave",
	"paraNorman",
	"redTails",
	"silentHillRevelation3D",
	"vhs",
	"endOfWatch",
	"takeMeHomeTonight",
	"likeCrazy",
	"monteCarlo",
	"jackAndJill",
	"theChangeUp",
	"haywire",
	"theGrey",
	"killerElite",
	"howToTrainYourDragon",
	"jonahHex",
	"127Hours",
	"toothFairy",
	"theBountyHunter",
	"ourFamilyWedding",
	"itsComplicated",
	"dorianGray",
	"aSeriousMan",
	"aSingleMan",
	"anEducation",
	"thePokerHouse",
	"wallE",
	"stepUp2TheStreets",
	"deathAtAFuneral",
	"surfsUp",
	"beeMovie",
	"theWaterHorse",
	"halloween",
	"pulse",
	"perfumeTheStoryOfAMurderer",
	"stepUp",
	"littleMissSunshine",
	"poseidon",
	"monsterHouse",
	"theBreakUp",
	"eragon",
	"rv",
	"warOfTheWorlds",
	"corpseBride",
	"robots",
	"lordsOfDogtown",
	"serenity",
	"aHistoryOfViolence",
	"kingKong",
	"goalTheDreamBegins",
	"aroundTheWorldIn80Days",
	"mindhunters",
	"theButterflyEffect",
	"oceansTwelve",
	"manOnFire",
	"loveActually",
	"honey",
	"myBigFatGreekWedding",
	"sweetHomeAlabama",
	"bigFatLiar",
	"chicago",
	"kateAndLeopold",
	"blow",
	"theOne",
	"theRoyalTenenbaums",
	"charliesAngels",
	"chickenRun",
	"frequency",
	"aKnightsTale",
	"kungFuPanda",
	"kungFuPanda2",
	"sinCityADameToKillFor",
	"knightOfCups",
	"rango",
	"gridlocked",
	"helloMyNameIsDoris",
	"londonHasFallen",
	"hailCaesar",
	"theForest",
	"annieHall",
	"mulhollandDrive",
	"cowboysAndAliens",
	"childsPlay3",
	"childsPlay2",
	"childsPlay",
	"childrenOfMen",
	"escapeFromNewYork",
	"theWomanInBlack",
	"tinkerTailorSoldierSpy",
	"cinderellaMan",
	"goodNightAndGoodLuck",
	"frostNixon",
	"theKarateKid1984",
	"lAConfidential",
	"network",
	"theThirdMan",
	"theIceman",
	"onceUponATimeInMexico",
	"theTimeMachine",
	"myOneAndOnly",
	"stolen",
	"thisIs40",
	"carol",
	"theRite",
	"gulliversTravels",
	"publicEnemies",
	"next",
	"theFastAndTheFuriousTokyoDrift",
	"theDeparted",
	"theVillage",
	"theLordOfTheRingsTheFellowshipOfTheRing",
	"kissOfTheDragon",
	"bridgetJonessDiary",
	"forsaken",
	"stillAlice",
	"theGodfatherPart3",
	"theGodfatherPart2",
	"race",
	"taxiDriver",
	"illSeeYouInMyDreams",
	"theAnomaly",
	"roadHard",
	"insidious",
	"payTheGhost",
	"mrHolmes",
	"400Days",
	"theTransporterRefueled",
	"minions",
	"krampus",
	"everest",
	"spotlight",
	"grandmasBoy",
	"bigStoneGap",
	"shanghai",
	"experimenter",
	"sleepingWithOtherPeople",
	"courageous",
	"piratesOfTheCaribbeanTheCurseOfTheBlackPearl",
	"spiderMan",
	"theDictator",
	"badTeacher",
	"ted2",
	"barelyLethal",
	"kidCannabis",
	"boilerRoom",
	"loneSurvivor",
	"menInBlack3",
	"chappie",
	"theRiseOfTheKrays",
	"allCreaturesBigAndSmall",
	"insideOut",
	"demoted",
	"badgeOfHonor",
	"badTurnWorse",
	"forgettingSarahMarshall",
	"theAmityvilleHorror",
	"pixels",
	"lawAbidingCitizen",
	"quantumOfSolace",
	"aliceInWonderland2010",
	"towerHeist",
	"wanderlust",
	"oldboy",
	"theInbetweeners",		
	"pearlHarbor",
	"hancock",
	"idiocracy",
	"drivingMissDaisy",
	"theToDoList",
	"27Dresses",
	"semiPro",
	"meMyselfAndIrene",
	"madMax",
	"theOutsiders",
	"theGodfather",
	"hotelTransylvania",
	"melancholia",
	"fastTimesAtRidgemontHigh",
	"12AngryMen",
	"rideAlong2",
	"theHatefulEight",
	"blackKnight",
	"selfless",
	"theHungerGamesMockingjayPart1",
	"thatAwkwardMoment",
	"10ThingsIHateAboutYou",
	"americanHistoryX",
	"aBugsLife",
	"doctorDolittle",
	"usMarshals",	
	"iKnowWhatYouDidLastSummer",
	"gattaca",
	"asGoodAsItGets",
	"theJackal",
	"volcano",
	"hellAndBack",
	"dazedAndConfused",
	"theSurvivalist",
	"the5thWave",
	"theFaculty",
	"jerryMaguire",
	"theRock",
	"theNuttyProfessor",
	"babe",
	"deadManWalking",
	"theMask",
	"disclosure",
	"speed",
	"fourWeddingsAndAFuneral",
	"sisterAct2BackInTheHabit",
	"tombstone",
	"mrsDoubtfire",
	"malice",
	"theCryingGame",
	"theLastOfTheMohicans",
	"alien",
	"alien3",
	"whiteMenCantJump",
	"farAndAway",
	"honeyIBlewUpTheKid",
	"newJackCity",
	"thePeopleUnderTheStairs",
	"fatherOfTheBride",
	"rideAlong",
	"theManFromEarth",
	"scarface",
	"theCall",
	"snowWhiteAndTheHuntsman",
	"annaKarenina",
	"theAdventuresOfTintin",
	"30MinutesOrLess",
	"howTheGrinchStoleChristmas",
	"thirteenDays",
	"thePerfectStorm",
	"bedazzled",
	"behindEnemyLines",
	"ali",
	"evolution",
	"daredevil",
	"charliesAngelsFullThrottle",
	"hulk",
	"brotherBear",
	"vanHelsing",
	"fridayNightLights",
	"beforeMidnight",
	"parker",
	"theHost",
	"theVow",
	"theSitter",
	"colombiana",
	"inTime",
	"dateNight",
	"leapYear",
	"lifeAsWeKnowIt",
	"whereTheHeartIs",
	"kingsOfTheSummer",
	"fiftyShadesOfGrey",
	"47Ronin",
	"killYourDarlings",
	"pitchBlack",
	"enemy",
	"hitch",
	"threeKings",
	"wildHogs",
	"boogieNights",
	"twelveMonkeys",
	"bottleRocket",
	"2012",
	"spectre",
	"zipper",
	"theSpongeBobMovieSpongeOutOfWater",
	"theBourneSupremacy",
	"neverLetMeGo",
	"mrTurner",
	"balto",
	"nationalTreasure",
	"weBoughtAZoo",
	"platoon",
	"cashback",
	"sleeplessInSeattle",
	"lostInTranslation",
	"rememberTheTitans",
	"dudeWheresMyCar",
	"predator",
	"runningScared",
	"weddingCrashers",
	"theDevilsAdvocate",
	"theCableGuy",
	"brazil",
	"aboutTime",
	"lucy",
	"endlessLove",
	"soulSurfer",
	"slumdogMillionaire",
	"loveAndOtherDrugs",
	"bridesmaids",
	"whiteHouseDown",
	"mcFarlandUsa",
	"focus",
	"8Mile",
	"enemyOfTheState",
	"flashGordon",
	"fearAndLoathingInLasVegas",
	"itFollows",
	"thePolarExpress",
	"battleship",
	"ladder49",
	"theThing",
	"thor",
	"theDiaryOfATeenageGirl",
	"inspectorGadget",
	"theBenefactor",	
	"life",
	"brokenFlowers",
	"aPerfectDay",
	"uncanny",
	"theVeil",
	"rockTheKasbah",
	"theCobbler",
	"lastCabToDarwin",
	"theChroniclesOfNarniaTheLionTheWitchAndTheWardrobe",
	"shortTerm12",
	"12YearsASlave",
	"trueLies",
	"daddysHome",
	"hollowMan",
	"captainPhillips",
	"underworldAwakening",
	"underworldRiseOfTheLycans",
	"underworldEvolution",
	"bare",
	"theDarkKnightRises",
	"theVisit",
	"hotelTransylvania2",
	"minorityReport",
	"straightOuttaCompton",
	"walkTheLine",
	"americanHero",
	"badRoomies",
	"trueStory",
	"mansfieldPark",
	"iRobot",
	"grandPiano",
	"drinkingBuddies",
	"zulu",
	"thePhysician",
	"theNutJob",
	"13Sins",
	"freetown",
	"the6thDay",
	"hackers",
	"airForceOne",
	"swat",
	"swordfish",
	"oneHourPhoto",
	"dejaVu",
	"brokenCity",
	"xXX",
	"iSpitOnYourGrave",
	"maniac",
	"unleashed",
	"remains",
	"theCollector",
	"antiviral",
	"starlet",
	"theSilenceOfTheLambs",
	"cubanFury",
	"theLastKingOfScotland",
	"dragonheart3TheSorcerersCurse",
	"theMummy",
	"reasonableDoubt",
	"bullet",
	"houseOfSandAndFog",
	"scaryMovie2",
	"25thHour",
	"devil",
	"theWizardOfOz",
	"rainMan",
	"erinBrockovich",
	"casablanca",
	"theCurseOfDownersGrove",
	"dope",
	"theCroods",
	"stepUp3D",
	"theBeach",
	"insidious2",
	"afternoonDelight",
	"batmanAndRobin",
	"theWolfOfWallStreet",
	"layerCake",
	"taken",
	"afterEarth",
	"roboCop3",
	"roboCop2",
	"theKingsSpeech",
	"theRaven",
	"adaptation",
	"casinoRoyale",
	"pompeii",
	"insideLlewynDavis",
	"evilDead",
	"theAddamsFamily",
	"skyfall",
	"jackass35",
	"theRightKindOfWrong",
	"frozen",
	"bolt",
	"sugar",
	"sonOfGod",
	"predestination",
	"firedUp",
	"theMuppetChristmasCarol",
	"elysium",
	"theWeddingRinger",
	"blueRuin",
	"hellboy",
	"theCrow",
	"edwardScissorhands",
	"romeoAndJuliet",
	"lawless",
	"theWayBack",
	"lifeOfBrian",
	"thePhantomOfTheOpera",
	"spiderMan3",
	"spiderMan2",
	"residentEvilApocalypse",
	"moneyTalks",
	"angelsAndDemons",
	"theKillingFields",
	"theSocialNetwork",
	"3DaysToKill",
	"theKarateKid",
	"theWickerMan",
	"magnolia",
	"vanillaSky",
	"goldenEye",
	"moulinRouge",
	"theMaskOfZorro",
	"memento",
	"actOfValor",
	"theHurtLocker",	
	"21JumpStreet",
	"thePirateFairy",
	"lifeOfPi",
	"killBillVol2",
	"aliceInWonderland",
	"pocahontas",
	"chickenLittle",
	"theBoondockSaints",
	"midnightInParis",
	"fruitvaleStation",
	"theImmigrant",
	"iAmNumberFour",
	"blackDynamite",
	"theArtist",
	"thePrestige",
	"vForVendetta",
	"fromHell",
	"babylonAD",
	"dieAnotherDay",
	"fanboys",
	"underworld",
	"aceVenturaPetDetective",
	"aceVenturaWhenNatureCalls",
	"beCool",
	"assaultOnWallStreet",
	"armageddon",
	"allAboutEve",
	"someLikeItHot",
	"ragingBull",
	"rubySparks",
	"theHouseBunny",
	"mutantChronicles",
	"moonriseKingdom",
	"scottPilgrimVsTheWorld",
	"theBoondockSaints2AllSaintsDay",
	"americanBeauty",
	"thePrincessBride",
	"sevenPsychopaths",
	"fargo",
	"moon",
	"theMachinist",
	"inglouriousBasterds",
	"looper",
	"deliveryMan",
	"dodgeballATrueUnderdogStory",
	"starshipTroopers",
	"roboCop",
	"toKillAMockingbird",
	"cinderella",
	"silverLiningsPlaybook",
	"theFifthElement",
	"trainingDay",
	"theLifeAquaticWithSteveZissou",
	"limitless",
	"totalRecall",
	"theUsualSuspects",
	"41",
	"microMen",
	"leonTheProfessional",
	"moondanceAlexander",
	"summerhood",
	"hack",
	"darkroom",
	"theWeddingPact",
	"theBraveLittleToaster",
	"stillMine",
	"anAmericanCrime",
	"beyondAReasonableDoubt",
	"afflicted",
	"theCanal",
	"forcedToFight",
	"lordOfTheFlies",
	"kids",
	"ghostTeamOne",
	"virtuosity",
	"theMule",
	"timeExpired",
	"theOmen",
	"dogSoldiers",
	"fundamental",
	"fling",
	"stoneCold",
	"copyingBeethoven",
	"bornAndRaised",
	"hellBaby",
	"nightOfTheDemons",
	"celebritySexTape",
	"aboutCherry",
	"sexLiesAndVideotape",
	"wrongCops",
	"almostHuman",
	"byDawnsEarlyLight",
	"oneWeek",
	"badIsBad",
	"heavenIsHell",
	"casperMeetsWendy",
	"ballAndChain",
	"punks",
	"theSilenceOfTheHams",
	"theMajorettes",
	"missingPieces",
	"aRageToLive",
	"childrenOfTheCorn",
	"theBurning",
	"hostelPart2",
	"algorithm",
	"aLotLikeLove",
	"rollerTown",
	"boysOfAbuGhraib",
	"theLittleShopOfHorrors",
	"frenchKiss",
	"theDevice",
	"ever",
	"terrorVision",
	"streetDreams",
	"theMiracleWorker",
	"boyWonder",
	"trailerParkJesus",
	"deadlyVoyage",
	"dirtyWars",
	"theCountOfMonteCristo",
	"super",
	"deathOfASuperhero",
	"haphead",
	"shanghaiKnights",
	"vendetta",
	"gotti"
];
var moviesI = [];

for (blah = 0; blah < movies.length; blah++) {
	moviesI.push(movies[blah]);
}

function run(filter) {
	filter;// zZero(), zeroZ();
	var next = document.getElementById("posterCon").innerHTML = "";//clears for sort;
	for (index = 0; index < movies.length; index++) { 
		var poster = document.createElement("img");
		poster.setAttribute("id", movies[index]);
		poster.setAttribute("class", "poster");
		poster.setAttribute("alt", movies[index] + "");
		poster.setAttribute("title", movies[index] + "");
		poster.setAttribute("src", "fullMovies/" + movies[index] + ".jpg");
		posterCon.appendChild(poster);
	}
	movieSrc();

	t2Trainspotting.setAttribute("class", "poster 2017 r drama");
	legionOfBrothers.setAttribute("class", "poster 2017 pg13 documentary war");
	captainUnderpantsTheFirstEpicMovie.setAttribute("class", "poster 2017 pg animation action comedy");
	despicableMe3.setAttribute("class", "poster 2017 pg animation action adventure");
	theLayover.setAttribute("class", "poster 2017 r comedy");
	babyDriver.setAttribute("class", "poster 2017 r action crime music");
	getOut.setAttribute("class", "poster 2017 r horror mystery");
	theBookOfHenry.setAttribute("class", "poster 2017 pg13 crime drama thriller");
	aGhostStory.setAttribute("class", "poster 2017 r drama fantasy romance");
	goonLastOfTheEnforcers.setAttribute("class", "poster 2017 r comedy sport");
	transformersTheLastKnight.setAttribute("class", "poster 2017 pg13 action adventure sciFi");
	theBeguiled.setAttribute("class", "poster 2017 r drama");
	theManWithTheIronHeart.setAttribute("class", "poster 2017 r action biography thriller");
	theDarkTower.setAttribute("class", "poster 2017 pg13 action adventure fantasy");
	annabelleCreation.setAttribute("class", "poster 2017 r horror mystery thriller");
	spiderManHomecoming.setAttribute("class", "poster 2017 pg13 action adventure sciFi");
	goodMorningVietnam.setAttribute("class", "poster 1987 r biography comedy drama");
	theInterview.setAttribute("class", "poster 2014 r comedy");
	goodfellas.setAttribute("class", "poster 1990 r biography crime drama");
	thePelicanBrief.setAttribute("class", "poster 1993 pg13 crime drama mystery");
	darkCity.setAttribute("class", "poster 1998 r mystery sciFi thriller");
	theThirteenthFloor.setAttribute("class", "poster 1999 r mystery sciFi thriller");
	titanic.setAttribute("class", "poster 1997 pg13 drama romance");
	apollo13.setAttribute("class", "poster 1995 pg adventure drama history");
	goosebumps.setAttribute("class", "poster 2015 pg adventure comedy family");
	home.setAttribute("class", "poster 2015 pg animation adventure comedy");
	christine.setAttribute("class", "poster 2016 r biography drama");
	napoleonDynamite.setAttribute("class", "poster 2004 pg comedy");
	theEdgeOfSeventeen.setAttribute("class", "poster 2016 r comedy drama");
	badMoms.setAttribute("class", "poster 2016 pg13 drama romance");
	denial.setAttribute("class", "poster 2016 pg13 biography drama");
	iAmNotASerialKiller.setAttribute("class", "poster 2016 notRated drama horror thriller");
	dontThinkTwice.setAttribute("class", "poster 2016 r comedy drama");
	arrival.setAttribute("class", "poster 2016 pg13 drama mystery sciFi");
	anthropoid.setAttribute("class", "poster 2016 r biography history thriller");
	mrChurch.setAttribute("class", "poster 2016 pg13 comedy drama");
	aliceThroughTheLookingGlass.setAttribute("class", "poster 2016 pg adventure family fantasy");
	independenceDayResurgence.setAttribute("class", "poster 2016 pg13 action adventure sciFi");
	zoolander2.setAttribute("class", "poster 2016 pg13 comedy");
	theDressmaker.setAttribute("class", "poster 2015 r comedy drama");
	snowden.setAttribute("class", "poster 2016 r biography drama thriller");
	ordinaryWorld.setAttribute("class", "poster 2016 notRated comedy drama music");
	morgan.setAttribute("class", "poster 2016 r horror mystery sciFi");
	nightcrawler.setAttribute("class", "poster 2014 r crime drama thriller");
	theCrash.setAttribute("class", "poster 2017 r crime thriller");
	inferno.setAttribute("class", "poster 2016 pg13 action adventure crime");
	thisMeansWar.setAttribute("class", "poster 2012 pg13 action comedy romance");
	thisIsWhereILeaveYou.setAttribute("class", "poster 2014 r comedy drama");
	theSecretLifeOfWalterMitty.setAttribute("class", "poster 2013 pg adventure comedy drama");
	synecdocheNewYork.setAttribute("class", "poster 2008 r comedy drama");
	thePurgeElectionYear.setAttribute("class", "poster 2016 r action horror sciFi");
	meanGirls.setAttribute("class", "poster 2004 pg13 comedy");
	apocalypto.setAttribute("class", "poster 2006 r action adventure drama");
	elf.setAttribute("class", "poster 2003 pg comedy family fantasy");
	freeStateOfJones.setAttribute("class", "poster 2016 r action biography drama");
	theRevenant.setAttribute("class", "poster 2015 r adventure drama thriller");
	theSecretLifeOfPets.setAttribute("class", "poster 2016 pg animation comedy");
	snowpiercer.setAttribute("class", "poster 2013 r action drama sciFi");
	dieHard.setAttribute("class", "poster 1988 r action thriller");
	badBoys.setAttribute("class", "poster 1995 r action comedy crime");
	seedOfChucky.setAttribute("class", "poster 2004 r comedy fantasy horror");
	youth.setAttribute("class", "poster 2015 r comedy drama music");
	conAir.setAttribute("class", "poster 1997 r action crime thriller");
	howToTrainYourDragon2.setAttribute("class", "poster 2014 pg animation action adventure");
	theRundown.setAttribute("class", "poster 2003 pg13 action adventure comedy");
	apollo18.setAttribute("class", "poster 2011 pg13 horror mystery sciFi");
	jackRyanShadowRecruit.setAttribute("class", "poster 2014 pg13 action drama thriller");
	gimmeShelter.setAttribute("class", "poster 2013 pg13 drama");
	iAmSam.setAttribute("class", "poster 2001 pg13 drama");
	hercules.setAttribute("class", "poster 2014 pg13 action adventure");
	howDoYouKnow.setAttribute("class", "poster 2010 pg13 comedy drama romance");
	allIsBright.setAttribute("class", "poster 2013 r comedy drama");
	admission.setAttribute("class", "poster 2013 pg13 comedy drama romance");
	theDaVinciCode.setAttribute("class", "poster 2006 pg13 mystery thriller");
	weAreStillHere.setAttribute("class", "poster 2015 notRated horror");
	transformersDarkOfTheMoon.setAttribute("class", "poster 2011 pg13 action");
	theReader.setAttribute("class", "poster 2008 r drama romance");
	cars2.setAttribute("class", "poster 2011 g animation adventure comedy");
	menInBlack2.setAttribute("class", "poster 2002 pg13 action adventure comedy");
	menInBlack.setAttribute("class", "poster 1997 pg13 adventure comedy family");
	lockout.setAttribute("class", "poster 2012 pg13 action adventure sciFi");
	theSmurfs2.setAttribute("class", "poster 2013 pg animation adventure comedy");
	grease.setAttribute("class", "poster 1978 pg13 musical romance");
	flightplan.setAttribute("class", "poster 2005 pg13 drama mystery thriller");
	theyLive.setAttribute("class", "poster 1988 r action horror sciFi");
	theInternship.setAttribute("class", "poster 2013 pg13 comedy");
	inFear.setAttribute("class", "poster 2013 r horror mystery thriller");
	gameOfDeath.setAttribute("class", "poster 1978 r action crime drama");
	labyrinth.setAttribute("class", "poster 1986 pg adventure family fantasy");
	lionOfTheDesert.setAttribute("class", "poster 1980 pg biography drama history");
	insidiousChapter2.setAttribute("class", "poster 2013 pg13 horror thriller");
	redSky.setAttribute("class", "poster 2014 pg13 action thriller");
	groundhogDay.setAttribute("class", "poster 1993 pg comedy fantasy romance");
	catchMeIfYouCan.setAttribute("class", "poster 2002 pg13 biography crime drama");
	americanPie.setAttribute("class", "poster 1999 r comedy");
	theGrandBudapestHotel.setAttribute("class", "poster 2014 r adventure comedy drama");
	theMagnificentSeven.setAttribute("class", "poster 2016 pg13 action adventure western");
	valkyrie.setAttribute("class", "poster 2008 pg13 drama history thriller");
	theMist.setAttribute("class", "poster 2007 r horror");
	theAdjustmentBureau.setAttribute("class", "poster 2011 pg13 romance sciFi thriller");
	stayAlive.setAttribute("class", "poster 2006 pg13 horror thriller");
	theMartian.setAttribute("class", "poster 2015 pg13 adventure drama sciFi");
	mrAndMrsSmith.setAttribute("class", "poster 2005 pg13 action comedy crime");
	enterTheDragon.setAttribute("class", "poster 1973 r action crime drama");
	standByMe.setAttribute("class", "poster 1986 r adventure drama");
	drive.setAttribute("class", "poster 2011 r crime drama");
	theGirlWithTheDragonTattoo.setAttribute("class", "poster 2011 r crime drama mystery");
	hortonHearsAWho.setAttribute("class", "poster 2008 g animation adventure comedy");
	taps.setAttribute("class", "poster 1981 pg drama");
	kPax.setAttribute("class", "poster 2001 pg13 drama mystery sciFi");
	yearOne.setAttribute("class", "poster 2009 pg13 adventure comedy");
	freeBirds.setAttribute("class", "poster 2013 pg animation adventure comedy");
	sausageParty.setAttribute("class", "poster 2016 r animation adventure comedy");
	kuboAndTheTwoStrings.setAttribute("class", "poster 2016 pg animation adventure family");
	moneyMonster.setAttribute("class", "poster 2016 pg13 crime drama thriller");
	theNumber23.setAttribute("class", "poster 2007 r mystery thriller");
	theFourthKind.setAttribute("class", "poster 2009 pg13 mystery sciFi thriller");
	takeShelter.setAttribute("class", "poster 2011 r drama thriller");
	chronicle.setAttribute("class", "poster 2012 pg13 drama mystery sciFi");
	gravity.setAttribute("class", "poster 2013 pg13 adventure drama sciFi");
	flatliners.setAttribute("class", "poster 1990 r drama horror sciFi");
	theProposal.setAttribute("class", "poster 2009 pg13 comedy drama romance");
	theDevilWearsPrada.setAttribute("class", "poster 2006 pg13 comedy drama");
	stuckInLove.setAttribute("class", "poster 2012 r comedy drama romance");
	theBreakfastClub.setAttribute("class", "poster 1985 r comedy drama");
	beastly.setAttribute("class", "poster 2011 pg13 drama fantasy romance");
	trickRTreat.setAttribute("class", "poster 2007 r horror thriller");
	theSixthSense.setAttribute("class", "poster 1999 pg13 drama mystery thriller");
	theBlairWitchProject.setAttribute("class", "poster 1999 r horror");
	theStrangers.setAttribute("class", "poster 2008 r horror mystery thriller");
	theLostBoys.setAttribute("class", "poster 1987 r comedy fantasy horror");
	theExorcismOfEmilyRose.setAttribute("class", "poster 2005 pg13 drama horror thriller");
	theDevilsRejects.setAttribute("class", "poster 2005 r crime horror");
	theCollection.setAttribute("class", "poster 2012 r horror");
	theAwakening.setAttribute("class", "poster 2011 r horror thriller");
	rosemarysBaby.setAttribute("class", "poster 1968 r drama horror");
	letTheRightOneIn.setAttribute("class", "poster 2008 r drama horror");
	interviewWithTheVampireTheVampireChronicles.setAttribute("class", "poster 1994 r drama fantasy horror");
	houseOf1000Corpses.setAttribute("class", "poster 2003 r horror");
	curseOfChucky.setAttribute("class", "poster 2013 r horror thriller");
	theWalk.setAttribute("class", "poster 2015 pg adventure biography drama");
	trainspotting.setAttribute("class", "poster 1996 r drama");
	theEast.setAttribute("class", "poster 2013 pg13 adventure crime drama");
	hocusPocus.setAttribute("class", "poster 1993 pg comedy family fantasy");
	cloudyWithAChanceOfMeatballs.setAttribute("class", "poster 2009 pg animation comedy family");
	casper.setAttribute("class", "poster 1995 pg animation comedy family");
	aSeriesOfUnfortunateEvents.setAttribute("class", "poster 2004 pg adventure comedy family");
	theDouble.setAttribute("class", "poster 2013 r comedy drama thriller");
	juno.setAttribute("class", "poster 2007 pg13 comedy drama");
	inkheart.setAttribute("class", "poster 2008 pg adventure family fantasy");
	funnyPeople.setAttribute("class", "poster 2009 r comedy drama");
	eyesWideShut.setAttribute("class", "poster 1999 r drama mystery thriller");
	eternalSunshineOfTheSpotlessMind.setAttribute("class", "poster 2004 r drama fantasy romance");
	fightClub.setAttribute("class", "poster 1999 r drama");
	dallasBuyersClub.setAttribute("class", "poster 2013 r biography drama");
	requiemForADream.setAttribute("class", "poster 2000 r drama");
	byzantium.setAttribute("class", "poster 2012 r drama fantasy horror");
	burnt.setAttribute("class", "poster 2015 r comedy drama");
	brick.setAttribute("class", "poster 2005 r action crime drama");
	bigFish.setAttribute("class", "poster 2003 pg13 adventure drama fantasy");
	anonymous.setAttribute("class", "poster 2011 pg13 drama history thriller");
	acrossTheUniverse.setAttribute("class", "poster 2007 pg13 drama fantasy musical");
	insideMan.setAttribute("class", "poster 2006 r crime drama mystery");
	heat.setAttribute("class", "poster 1995 r action crime drama");
	americanGangster.setAttribute("class", "poster 2007 r biography crime drama");
	goodBlessAmerica.setAttribute("class", "poster 2011 r comedy crime");
	donJon.setAttribute("class", "poster 2013 r comedy drama romance");
	anchormanTheLegendOfRonBurgundy.setAttribute("class", "poster 2004 pg13 comedy");
	borat.setAttribute("class", "poster 2006 r comedy");
	beetlejuice.setAttribute("class", "poster 1988 pg13 comedy fantasy");
	animalHouse.setAttribute("class", "poster 1978 r comedy");
	vertigo.setAttribute("class", "poster 1958 pg mystery romance thriller");
	theGoodTheBadAndTheUgly.setAttribute("class", "poster 1966 notRated western");
	psycho.setAttribute("class", "poster 1960 r horror mystery thriller");
	attackTheBlock.setAttribute("class", "poster 2011 r action comedy sciFi");
	despicableMe2.setAttribute("class", "poster 2013 pg animation adventure comedy");
	blazingSaddles.setAttribute("class", "poster 1974 r comedy western");
	austinPowersInGoldmember.setAttribute("class", "poster 2002 pg13 action comedy crime");
	austinPowersTheSpyWhoShaggedMe.setAttribute("class", "poster 1999 pg13 action adventure comedy");
	youngFrankenstein.setAttribute("class", "poster 1974 pg comedy");
	casino.setAttribute("class", "poster 1995 r biography crime drama");
	futuramaBendersBigScore.setAttribute("class", "poster 2007 notRated animation comedy romance");
	snatch.setAttribute("class", "poster 2000 r comedy crime");
	austinPowersInternationalManOfMystery.setAttribute("class", "poster 1997 pg13 comedy crime");
	aliens.setAttribute("class", "poster 1986 r adventure sciFi thriller");
	warrior.setAttribute("class", "poster 2011 pg13 drama sport");
	solaris.setAttribute("class", "poster 2002 pg13 drama mystery romance");
	lockStockAndTwoSmokingBarrels.setAttribute("class", "poster 1998 r comedy crime");
	starTrek.setAttribute("class", "poster 2009 pg13 action adventure sciFi");
	thePlaceBeyondThePines.setAttribute("class", "poster 2012 r crime drama thriller");
	oBrotherWhereArtThou.setAttribute("class", "poster 2000 pg13 adventure comedy crime");
	ramboFirstBloodPart2.setAttribute("class", "poster 1985 r action adventure thriller");
	meAndEarlAndTheDyingGirl.setAttribute("class", "poster 2015 pg13 comedy drama");
	slowWest.setAttribute("class", "poster 2015 r western");
	brooklynsFinest.setAttribute("class", "poster 2009 r crime drama thriller");
	warRoom.setAttribute("class", "poster 2015 pg drama");
	concussion.setAttribute("class", "poster 2015 pg13 biography drama sport");
	theAdventuresOfRobinHood.setAttribute("class", "poster 1938 pg action adventure");
	northByNorthwest.setAttribute("class", "poster 1959 pg action adventure crime");
	snowWhiteAndTheSevenDwarfs.setAttribute("class", "poster 1937 g animation family fantasy");
	document.getElementById("30DaysOfNight").setAttribute("class", "poster 2007 r horror");
	extraterrestrial.setAttribute("class", "poster 2014 notRated horror sciFi");
	modernTimes.setAttribute("class", "poster 1936 g comedy drama");
	theFundamentalsOfCaring.setAttribute("class", "poster 2016 r comedy drama");
	theEqualizer.setAttribute("class", "poster 2014 r action crime thriller");
	demolitionMan.setAttribute("class", "poster 1993 r action crime sciFi");
	ghostbusters.setAttribute("class", "poster 1984 pg adventure comedy fantasy");
	everybodyWantsSome.setAttribute("class", "poster 2016 r comedy");
	searchParty.setAttribute("class", "poster 2014 r comedy");
	harryPotterAndTheOrderOfThePhoenix.setAttribute("class", "poster 2007 pg13 adventure family fantasy");
	harryPotterAndTheGobletOfFire.setAttribute("class", "poster 2005 pg13 adventure family fantasy");
	eyeInTheSky.setAttribute("class", "poster 2015 r drama thriller war");
	theChallengerDisaster.setAttribute("class", "poster 2013 notRated drama");
	oblivion.setAttribute("class", "poster 2013 pg13 action adventure mystery");
	paranoia.setAttribute("class", "poster 2013 pg13 drama thriller");
	rush.setAttribute("class", "poster 2013 r action biography drama");
	kickAss2.setAttribute("class", "poster 2013 r action comedy crime");
	epic.setAttribute("class", "poster 2013 pg animation adventure family");
	theLorax.setAttribute("class", "poster 2012 pg animation comedy family");
	lesMiserables.setAttribute("class", "poster 2012 pg13 drama musical romance");
	brave.setAttribute("class", "poster 2012 pg animation adventure comedy");
	paraNorman.setAttribute("class", "poster 2012 pg animation adventure comedy");
	redTails.setAttribute("class", "poster 2012 pg13 action adventure drama");
	silentHillRevelation3D.setAttribute("class", "poster 2012 r adventure drama horror");
	vhs.setAttribute("class", "poster 2012 r fantasy horror");
	endOfWatch.setAttribute("class", "poster 2012 r crime drama thriller");
	takeMeHomeTonight.setAttribute("class", "poster 2011 r comedy drama romance");
	likeCrazy.setAttribute("class", "poster 2011 pg13 drama romance");
	monteCarlo.setAttribute("class", "poster 2011 pg adventure comedy family");
	jackAndJill.setAttribute("class", "poster 2011 pg comedy");
	theChangeUp.setAttribute("class", "poster 2011 r comedy fantasy");
	haywire.setAttribute("class", "poster 2011 r action thriller");
	theGrey.setAttribute("class", "poster 2010 r action adventure drama");
	killerElite.setAttribute("class", "poster 2010 r action crime thriller");
	howToTrainYourDragon.setAttribute("class", "poster 2010 pg animation adventure family");
	jonahHex.setAttribute("class", "poster 2010 pg13 action drama fantasy");
	document.getElementById("127Hours").setAttribute("class", "poster 2010 r adventure biography drama");
	toothFairy.setAttribute("class", "poster 2010 pg comedy family fantasy");
	theBountyHunter.setAttribute("class", "poster 2010 pg13 action comedy romance");
	ourFamilyWedding.setAttribute("class", "poster 2010 pg13 comedy romance");
	itsComplicated.setAttribute("class", "poster 2009 r comedy drama romance");
	dorianGray.setAttribute("class", "poster 2009 r drama fantasy thriller");
	aSeriousMan.setAttribute("class", "poster 2009 r comedy drama");
	aSingleMan.setAttribute("class", "poster 2009 r drama");
	anEducation.setAttribute("class", "poster 2009 pg13 drama");
	thePokerHouse.setAttribute("class", "poster 2008 r drama");
	wallE.setAttribute("class", "poster 2008 g animation adventure family");
	stepUp2TheStreets.setAttribute("class", "poster 2008 pg13 drama music musical");
	deathAtAFuneral.setAttribute("class", "poster 2007 r comedy");
	surfsUp.setAttribute("class", "poster 2007 pg animation comedy family");
	beeMovie.setAttribute("class", "poster 2007 pg animation adventure comedy");
	theWaterHorse.setAttribute("class", "poster 2007 pg adventure family fantasy");
	halloween.setAttribute("class", "poster 2007 r horror");
	pulse.setAttribute("class", "poster 2006 pg13 drama horror sciFi");
	perfumeTheStoryOfAMurderer.setAttribute("class", "poster 2006 r crime drama fantasy");
	stepUp.setAttribute("class", "poster 2006 pg13 crime drama music");
	littleMissSunshine.setAttribute("class", "poster 2006 r comedy drama");
	poseidon.setAttribute("class", "poster 2006 pg13 action adventure drama");
	monsterHouse.setAttribute("class", "poster 2006 pg animation comedy family");
	theBreakUp.setAttribute("class", "poster 2006 pg13 comedy drama romance");
	eragon.setAttribute("class", "poster 2006 pg action adventure family");
	rv.setAttribute("class", "poster 2006 pg adventure comedy family");
	warOfTheWorlds.setAttribute("class", "poster 2005 pg13 adventure sciFi thriller");
	corpseBride.setAttribute("class", "poster 2005 pg animation drama family");
	robots.setAttribute("class", "poster 2005 pg animation adventure comedy");
	lordsOfDogtown.setAttribute("class", "poster 2005 pg13 biography drama sport");
	serenity.setAttribute("class", "poster 2005 pg13 action adventure sciFi");
	aHistoryOfViolence.setAttribute("class", "poster 2005 r crime drama thriller");
	kingKong.setAttribute("class", "poster 2005 pg13 action adventure drama");
	goalTheDreamBegins.setAttribute("class", "poster 2005 pg13 drama romance sport");
	aroundTheWorldIn80Days.setAttribute("class", "poster 2004 pg action adventure comedy");
	mindhunters.setAttribute("class", "poster 2004 r crime mystery thriller");
	theButterflyEffect.setAttribute("class", "poster 2004 r sciFi thriller");
	oceansTwelve.setAttribute("class", "poster 2004 pg13 crime thriller");
	manOnFire.setAttribute("class", "poster 2004 r action crime drama");
	loveActually.setAttribute("class", "poster 2003 r comedy drama romance");
	honey.setAttribute("class", "poster 2003 pg13 drama music romance");
	myBigFatGreekWedding.setAttribute("class", "poster 2002 pg comedy family romance");
	sweetHomeAlabama.setAttribute("class", "poster 2002 pg13 comedy romance");
	bigFatLiar.setAttribute("class", "poster 2002 pg adventure comedy family");
	chicago.setAttribute("class", "poster 2002 pg13 comedy crime musical");
	kateAndLeopold.setAttribute("class", "poster 2001 pg13 comedy fantasy romance");
	blow.setAttribute("class", "poster 2001 r biography crime drama");
	theOne.setAttribute("class", "poster 2001 pg13 action sciFi thriller");
	theRoyalTenenbaums.setAttribute("class", "poster 2001 r comedy drama");
	charliesAngels.setAttribute("class", "poster 2000 pg13 action adventure comedy");
	chickenRun.setAttribute("class", "poster 2000 g animation adventure comedy");
	frequency.setAttribute("class", "poster 2000 pg13 crime drama mystery");
	aKnightsTale.setAttribute("class", "poster 2001 action adventure romance");
	kungFuPanda.setAttribute("class", "poster 2008 pg animation action adventure");
	kungFuPanda2.setAttribute("class", "poster 2011 pg animation action adventure");
	sinCityADameToKillFor.setAttribute("class", "poster 2014 r action crime thriller");
	knightOfCups.setAttribute("class", "poster 2015 r drama romance");
	rango.setAttribute("class", "poster 2011 pg animation adventure comedy");
	gridlocked.setAttribute("class", "poster 2015 r action");
	helloMyNameIsDoris.setAttribute("class", "poster 2015 r comedy drama romance");
	londonHasFallen.setAttribute("class", "poster 2016 r action crime drama");
	hailCaesar.setAttribute("class", "poster 2016 pg13 comedy mystery");
	theForest.setAttribute("class", "poster 2016 pg13 horror mystery thriller");
	annieHall.setAttribute("class", "poster 1977 pg comedy romance");
	mulhollandDrive.setAttribute("class", "poster 2001 r drama mystery thriller");
	cowboysAndAliens.setAttribute("class", "poster 2011 pg13 action sciFi thriller");
	childsPlay3.setAttribute("class", "poster 1991 r fantasy horror");
	childsPlay2.setAttribute("class", "poster 1990 r fantasy horror");
	childsPlay.setAttribute("class", "poster 1988 r fantasy horror");
	childrenOfMen.setAttribute("class", "poster 2006 r drama sciFi thriller");
	escapeFromNewYork.setAttribute("class", "poster 1981 r action sciFi");
	theWomanInBlack.setAttribute("class", "poster 2012 pg13 drama fantasy horror");
	tinkerTailorSoldierSpy.setAttribute("class", "poster 2011 r drama mystery thriller");
	cinderellaMan.setAttribute("class", "poster 2005 pg13 biography drama sport");
	goodNightAndGoodLuck.setAttribute("class", "poster 2005 pg biography drama history");
	frostNixon.setAttribute("class", "poster 2008 r drama history");
	theKarateKid1984.setAttribute("class", "poster 1984 pg action drama family");
	lAConfidential.setAttribute("class", "poster 1997 r crime drama mystery");
	network.setAttribute("class", "poster 1976 r drama");
	theThirdMan.setAttribute("class", "poster 1949 notRated filmNoir mystery thriller");
	theIceman.setAttribute("class", "poster 2012 r biography crime drama");
	onceUponATimeInMexico.setAttribute("class", "poster 2003 r action crime thriller");
	theTimeMachine.setAttribute("class", "poster 2012 r comedy crime thriller");
	myOneAndOnly.setAttribute("class", "poster 2009 pg13 adventure biography comedy");
	stolen.setAttribute("class", "poster 2012 r action crime drama");
	thisIs40.setAttribute("class", "poster 2012 r comedy");
	carol.setAttribute("class", "poster 2015 r drama romance");
	theRite.setAttribute("class", "poster 2011 pg13 drama horror mystery");
	gulliversTravels.setAttribute("class", "poster 2010 pg adventure comedy family");
	publicEnemies.setAttribute("class", "poster 2009 r biography crime drama");
	document.getElementById("next").setAttribute("class", "poster 2007 pg13 action sciFi thriller");
	theFastAndTheFuriousTokyoDrift.setAttribute("class", "poster 2006 pg13 action crime thriller");
	theDeparted.setAttribute("class", "poster 2006 r crime drama thriller");
	theVillage.setAttribute("class", "poster 2004 pg13 drama mystery romance");
	theLordOfTheRingsTheFellowshipOfTheRing.setAttribute("class", "poster 2001 pg13 adventure drama fantasy");
	kissOfTheDragon.setAttribute("class", "poster 2001 r action crime drama");
	bridgetJonessDiary.setAttribute("class", "poster 2001 r comedy drama romance");
	forsaken.setAttribute("class", "poster 2015 r drama western");
	stillAlice.setAttribute("class", "poster 2014 pg13 drama");
	theGodfatherPart3.setAttribute("class", "poster 1990 r crime drama");
	theGodfatherPart2.setAttribute("class", "poster 1974 r crime drama");
	race.setAttribute("class", "poster 2016 pg13 biography drama sport");
	taxiDriver.setAttribute("class", "poster 1976 r crime drama");
	illSeeYouInMyDreams.setAttribute("class", "poster 2015 pg13 comedy drama");
	theAnomaly.setAttribute("class", "poster 2014 notRated action sciFi thriller");
	roadHard.setAttribute("class", "poster 2015 notRated comedy");
	insidious.setAttribute("class", "poster 2010 pg13 fantasy horror mystery");
	payTheGhost.setAttribute("class", "poster 2015 notRated drama mystery thriller");
	mrHolmes.setAttribute("class", "poster 2015 pg drama mystery");
	document.getElementById("400Days").setAttribute("class", "poster 2015 notRated mystery sciFi thriller");
	theTransporterRefueled.setAttribute("class", "poster 2015 pg13 action crime thriller");
	minions.setAttribute("class", "poster 2015 pg animation comedy family");
	krampus.setAttribute("class", "poster 2015 pg13 comedy fantasy horror");
	everest.setAttribute("class", "poster 2015 pg13 adventure biography drama");
	spotlight.setAttribute("class", "poster 2015 r biography drama history");
	grandmasBoy.setAttribute("class", "poster 2006 r comedy");
	bigStoneGap.setAttribute("class", "poster 2014 pg13 comedy romance");
	shanghai.setAttribute("class", "poster 2010 r drama mystery romance");
	experimenter.setAttribute("class", "poster 2015 pg13 biography drama history");
	sleepingWithOtherPeople.setAttribute("class", "poster 2015 r comedy drama romance");
	courageous.setAttribute("class", "poster 2011 pg13 drama");
	piratesOfTheCaribbeanTheCurseOfTheBlackPearl.setAttribute("class", "poster 2003 pg13 action adventure fantasy");
	spiderMan.setAttribute("class", "poster 2002 pg13 action adventure");
	theDictator.setAttribute("class", "poster 2012 r comedy romance");
	badTeacher.setAttribute("class", "poster 2011 r comedy");
	ted2.setAttribute("class", "poster 2015 r comedy");
	barelyLethal.setAttribute("class", "poster 2015 pg13 action adventure comedy");
	kidCannabis.setAttribute("class", "poster 2014 notRated biography comedy crime");
	boilerRoom.setAttribute("class", "poster 2000 r crime drama thriller");
	loneSurvivor.setAttribute("class", "poster 2013 r action biography drama");
	menInBlack3.setAttribute("class", "poster 2012 pg13 action comedy sciFi");
	chappie.setAttribute("class", "poster 2015 r action crime sciFi");
	theRiseOfTheKrays.setAttribute("class", "poster 2015 r crime drama");
	allCreaturesBigAndSmall.setAttribute("class", "poster 2015 g animation adventure comedy");
	insideOut.setAttribute("class", "poster 2015 pg animation adventure comedy");
	demoted.setAttribute("class", "poster 2011 r comedy");
	badgeOfHonor.setAttribute("class", "poster 2015 notRated crime drama thriller");
	badTurnWorse.setAttribute("class", "poster 2013 notRated crime drama thriller");
	forgettingSarahMarshall.setAttribute("class", "poster 2008 r comedy drama romance");
	theAmityvilleHorror.setAttribute("class", "poster 2005 r drama horror mystery");
	pixels.setAttribute("class", "poster 2015 pg13 animation action comedy");
	lawAbidingCitizen.setAttribute("class", "poster 2009 r crime drama thriller");
	quantumOfSolace.setAttribute("class", "poster 2008 pg13 action adventure");
	aliceInWonderland2010.setAttribute("class", "poster 2010 pg adventure family fantasy");
	towerHeist.setAttribute("class", "poster 2011 pg13 action comedy crime");
	wanderlust.setAttribute("class", "poster 2012 r comedy");
	oldboy.setAttribute("class", "poster 2013 r action drama mystery");
	theInbetweeners.setAttribute("class", "poster 2011 r comedy");
	pearlHarbor.setAttribute("class", "poster 2001 pg13 action drama history");
	hancock.setAttribute("class", "poster 2008 pg13 action fantasy");
	idiocracy.setAttribute("class", "poster 2006 r adventure comedy sciFi");
	drivingMissDaisy.setAttribute("class", "poster 1989 pg comedy drama family");
	theToDoList.setAttribute("class", "poster 2006 r comedy");
	document.getElementById("27Dresses").setAttribute("class", "poster 2008 pg13 comedy romance");
	semiPro.setAttribute("class", "poster 2008 r comedy sport");
	meMyselfAndIrene.setAttribute("class", "poster 2000 r comedy");
	madMax.setAttribute("class", "poster 1979 r action adventure sciFi");
	theOutsiders.setAttribute("class", "poster 1983 pg13 crime drama");
	theGodfather.setAttribute("class", "poster 1972 r crime drama");
	hotelTransylvania.setAttribute("class", "poster 2012 pg animation comedy family");
	melancholia.setAttribute("class", "poster 2011 r drama sciFi");
	fastTimesAtRidgemontHigh.setAttribute("class", "poster 1982 r comedy drama");
	document.getElementById("12AngryMen").setAttribute("class", "poster 1957 notRated crime drama");
	rideAlong2.setAttribute("class", "poster 2016 pg13 action comedy");
	theHatefulEight.setAttribute("class", "poster 2015 r crime drama mystery");
	blackKnight.setAttribute("class", "poster 2001 pg13 adventure comedy fantasy");
	selfless.setAttribute("class", "poster 2015 pg13 action mystery sciFi");
	theHungerGamesMockingjayPart1.setAttribute("class", "poster 2014 pg13 adventure sciFi thriller");
	thatAwkwardMoment.setAttribute("class", "poster 2014 r comedy romance");
	document.getElementById("10ThingsIHateAboutYou").setAttribute("class", "poster 1999 pg13 comedy drama romance");
	americanHistoryX.setAttribute("class", "poster 1998 r crime drama");
	aBugsLife.setAttribute("class", "poster 1998 g animation adventure comedy");
	doctorDolittle.setAttribute("class", "poster 1998 pg13 comedy family fantasy");
	usMarshals.setAttribute("class", "poster 1998 pg13 action crime thriller");
	iKnowWhatYouDidLastSummer.setAttribute("class", "poster 1997 r horror mystery");
	gattaca.setAttribute("class", "poster 1997 pg13 drama sciFi thriller");
	asGoodAsItGets.setAttribute("class", "poster 1997 pg13 comedy drama romance");
	theJackal.setAttribute("class", "poster 1997 r action adventure crime");
	volcano.setAttribute("class", "poster 1997 pg13 action drama sciFi");
	hellAndBack.setAttribute("class", "poster 2015 r animation adventure comedy");
	dazedAndConfused.setAttribute("class", "poster 1993 r comedy");
	theSurvivalist.setAttribute("class", "poster 2015 notRated drama sciFi thriller");
	the5thWave.setAttribute("class", "poster 2016 pg13 action adventure sciFi");
	theFaculty.setAttribute("class", "poster 1998 r horror mystery sciFi");
	jerryMaguire.setAttribute("class", "poster 1996 r comedy drama romance");
	theRock.setAttribute("class", "poster 1996 r action adventure thriller");
	theNuttyProfessor.setAttribute("class", "poster 1996 pg13 comedy romance sciFi");
	babe.setAttribute("class", "poster 1995 g comedy drama family");
	deadManWalking.setAttribute("class", "poster 1995 r crime drama");
	theMask.setAttribute("class", "poster 1994 pg13 action comedy crime");
	disclosure.setAttribute("class", "poster 1994 r drama thriller");
	speed.setAttribute("class", "poster 1994 r action crime thriller");
	fourWeddingsAndAFuneral.setAttribute("class", "poster 1994 r comedy drama romance");
	sisterAct2BackInTheHabit.setAttribute("class", "poster 1993 pg comedy music");
	tombstone.setAttribute("class", "poster 1993 r action biography drama");
	mrsDoubtfire.setAttribute("class", "poster 1993 pg13 comedy drama family");
	malice.setAttribute("class", "poster 1993 r crime mystery thriller");
	theCryingGame.setAttribute("class", "poster 1992 r crime drama romance");
	theLastOfTheMohicans.setAttribute("class", "poster 1992 r action adventure drama");
	alien.setAttribute("class", "poster 1979 r horror sciFi");
	alien3.setAttribute("class", "poster 1992 r horror sciFi");
	whiteMenCantJump.setAttribute("class", "poster 1992 r comedy drama sport");
	farAndAway.setAttribute("class", "poster 1992 pg13 adventure drama romance");
	honeyIBlewUpTheKid.setAttribute("class", "poster 1992 pg adventure comedy family");
	newJackCity.setAttribute("class", "poster 1991 r action crime drama");
	thePeopleUnderTheStairs.setAttribute("class", "poster 1991 r comedy horror mystery");
	fatherOfTheBride.setAttribute("class", "poster 1991 pg comedy");
	rideAlong.setAttribute("class", "poster 2014 pg13 action comedy crime");
	theManFromEarth.setAttribute("class", "poster 2007 notRated drama sciFi");
	scarface.setAttribute("class", "poster 1983 r crime drama");
	theCall.setAttribute("class", "poster 2013 r crime thriller");
	snowWhiteAndTheHuntsman.setAttribute("class", "poster 2012 pg13 action adventure drama");
	annaKarenina.setAttribute("class", "poster 2012 r drama romance");
	theAdventuresOfTintin.setAttribute("class", "poster 2011 r action comedy crime");
	document.getElementById("30MinutesOrLess").setAttribute("class", "poster 2011 r action comedy crime");
	howTheGrinchStoleChristmas.setAttribute("class", "poster 2000 pg comedy family fantasy");
	thirteenDays.setAttribute("class", "poster 2000 pg13 drama history thriller");
	thePerfectStorm.setAttribute("class", "poster 2000 pg13 action adventure drama");
	bedazzled.setAttribute("class", "poster 2000 pg13 comedy fantasy romance");
	behindEnemyLines.setAttribute("class", "poster 2001 pg13 action war drama");
	ali.setAttribute("class", "poster 2001 r biography drama sport");
	evolution.setAttribute("class", "poster 2001 pg13 comedy sciFi");
	daredevil.setAttribute("class", "poster 2003 pg13 action crime thriller");
	charliesAngelsFullThrottle.setAttribute("class", "poster 2003 pg13 action adventure comedy");
	hulk.setAttribute("class", "poster 2003 pg13 action sciFi");
	brotherBear.setAttribute("class", "poster 2003 g animation adventure family");
	vanHelsing.setAttribute("class", "poster 2004 pg13 action adventure fantasy");
	fridayNightLights.setAttribute("class", "poster 2004 pg13 action drama sport");
	beforeMidnight.setAttribute("class", "poster 2013 r drama romance");
	parker.setAttribute("class", "poster 2013 pg13 action adventure romance");
	theHost.setAttribute("class", "poster 2013 pg13 action adventure romance");
	theVow.setAttribute("class", "poster 2012 pg13 drama romance");
	theSitter.setAttribute("class", "poster 2011 r comedy");
	colombiana.setAttribute("class", "poster 2011 pg13 action crime drama");
	inTime.setAttribute("class", "poster 2011 pg13 action sciFi thriller");
	dateNight.setAttribute("class", "poster 2010 pg13 comedy crime romance");
	leapYear.setAttribute("class", "poster 2010 pg comedy romance");
	lifeAsWeKnowIt.setAttribute("class", "poster 2010 pg13 comedy drama romance");
	whereTheHeartIs.setAttribute("class", "poster 2000 pg13 comedy drama romance");
	kingsOfTheSummer.setAttribute("class", "poster 2013 r adventure comedy drama");
	fiftyShadesOfGrey.setAttribute("class", "poster 2015 r drama romance");
	document.getElementById("47Ronin").setAttribute("class", "poster 2013 pg13 action adventure drama");
	killYourDarlings.setAttribute("class", "poster 2013 r biography drama romance");
	pitchBlack.setAttribute("class", "poster 2000 r horror sciFi");
	enemy.setAttribute("class", "poster 2013 r mystery thriller");
	hitch.setAttribute("class", "poster 2005 pg13 comedy romance");
	threeKings.setAttribute("class", "poster 1999 r action adventure comedy");
	wildHogs.setAttribute("class", "poster 2007 pg13 action adventure comedy");
	boogieNights.setAttribute("class", "poster 1997 r drama");
	twelveMonkeys.setAttribute("class", "poster 1995 r mystery sciFi thriller");
	bottleRocket.setAttribute("class", "poster 1996 r comedy crime drama");
	document.getElementById("2012").setAttribute("class", "poster 2009 pg13 action adventure sciFi");
	spectre.setAttribute("class", "poster 2015 pg13 action adventure thriller");
	zipper.setAttribute("class", "poster 2015 r drama thriller");
	theSpongeBobMovieSpongeOutOfWater.setAttribute("class", "poster 2015 pg animation adventure comedy");
	theBourneSupremacy.setAttribute("class", "poster 2004 pg13 action thriller");
	neverLetMeGo.setAttribute("class", "poster 2010 r drama romance sciFi");
	mrTurner.setAttribute("class", "poster 2014 r biography drama history");
	balto.setAttribute("class", "poster 1995 g animation adventure drama");
	weBoughtAZoo.setAttribute("class", "poster 2011 pg comedy drama family");
	platoon.setAttribute("class", "poster 1986 r drama war");
	cashback.setAttribute("class", "poster 2006 r comedy drama romance");
	sleeplessInSeattle.setAttribute("class", "poster 1993 pg comedy drama romance");
	lostInTranslation.setAttribute("class", "poster 2003 r drama romance");
	rememberTheTitans.setAttribute("class", "poster 2000 pg biography drama sport");
	dudeWheresMyCar.setAttribute("class", "poster 2000 pg13 comedy mystery");
	predator.setAttribute("class", "poster 1987 r action horror sciFi");
	runningScared.setAttribute("class", "poster 2006 r action crime drama");
	weddingCrashers.setAttribute("class", "poster 2005 r comedy romance");
	theDevilsAdvocate.setAttribute("class", "poster 1997 r drama mystery thriller");
	theCableGuy.setAttribute("class", "poster 1996 pg13 comedy thriller");
	brazil.setAttribute("class", "poster 1985 r drama sciFi");
	aboutTime.setAttribute("class", "poster 2013 r drama fantasy romance");
	lucy.setAttribute("class", "poster 2014 r action sciFi thriller");
	endlessLove.setAttribute("class", "poster 2014 pg13 drama romance");
	soulSurfer.setAttribute("class", "poster 2011 pg biography drama sport");
	slumdogMillionaire.setAttribute("class", "poster 2008 r drama romance");
	loveAndOtherDrugs.setAttribute("class", "poster 2010 r comedy drama romance");
	bridesmaids.setAttribute("class", "poster 2011 r comedy romance");
	whiteHouseDown.setAttribute("class", "poster 2013 pg13 action drama thriller");
	mcFarlandUsa.setAttribute("class", "poster 2015 pg biography drama sport");
	document.getElementById("focus").setAttribute("class", "poster 2015 r comedy crime drama");
	document.getElementById("8Mile").setAttribute("class", "poster 2002 r drama music");
	enemyOfTheState.setAttribute("class", "poster 1998 r action crime drama");
	flashGordon.setAttribute("class", "poster 1980 pg action adventure sciFi");
	fearAndLoathingInLasVegas.setAttribute("class", "poster 1998 r comedy");
	itFollows.setAttribute("class", "poster 2014 r fantasy horror mystery");
	thePolarExpress.setAttribute("class", "poster 2004 g animation adventure family");
	battleship.setAttribute("class", "poster 2012 pg13 action adventure sciFi");
	ladder49.setAttribute("class", "poster 2004 pg13 action drama thriller");
	theThing.setAttribute("class", "poster 1982 horror sciFi");
	thor.setAttribute("class", "poster 2011 pg13 action adventure fantasy");
	theDiaryOfATeenageGirl.setAttribute("class", "poster 2015 r drama romance");
	inspectorGadget.setAttribute("class", "poster 1999 pg action adventure comedy");
	theBenefactor.setAttribute("class", "poster 2016 notRated drama");
	life.setAttribute("class", "poster 2015 r biography drama");
	brokenFlowers.setAttribute("class", "poster 2005 r comedy drama mystery");
	aPerfectDay.setAttribute("class", "poster 2016 r drama");
	uncanny.setAttribute("class", "poster 2015 notRated drama sciFi thriller");
	theVeil.setAttribute("class", "poster 2016 r horror mystery");
	rockTheKasbah.setAttribute("class", "poster 2015 r comedy music war");
	theCobbler.setAttribute("class", "poster 2014 pg13 comedy drama fantasy");
	lastCabToDarwin.setAttribute("class", "poster 2015 notRated comedy drama romance");
	theChroniclesOfNarniaTheLionTheWitchAndTheWardrobe.setAttribute("class", "poster 2005 pg adventure family fantasy");
	shortTerm12.setAttribute("class", "poster 2013 r drama");
	document.getElementById("12YearsASlave").setAttribute("class", "poster 2013 r biography drama history");
	trueLies.setAttribute("class", "poster 1994 r action comedy thriller");
	daddysHome.setAttribute("class", "poster 2015 pg13 comedy");
	hollowMan.setAttribute("class", "poster 2000 r sciFi thriller");
	captainPhillips.setAttribute("class", "poster 2013 pg13 biography drama thriller");
	underworldAwakening.setAttribute("class", "poster 2012 r action fantasy horror");
	underworldRiseOfTheLycans.setAttribute("class", "poster 2009 r action adventure fantasy");
	underworldEvolution.setAttribute("class", "poster 2006 r action fantasy sciFi");
	bare.setAttribute("class", "poster 2015 notRated drama romance");
	theDarkKnightRises.setAttribute("class", "poster 2012 pg13 action thriller");
	theVisit.setAttribute("class", "poster 2015 pg13 horror thriller");
	hotelTransylvania2.setAttribute("class", "poster 2015 pg animation comedy family");
	minorityReport.setAttribute("class", "poster 2002 pg13 action mystery sciFi");
	straightOuttaCompton.setAttribute("class", "poster 2015 r biography drama history");
	walkTheLine.setAttribute("class", "poster 2005 pg13 biography drama music");
	americanHero.setAttribute("class", "poster 2015 notRated action comedy sciFi");
	badRoomies.setAttribute("class", "poster 2015 notRated comedy");
	trueStory.setAttribute("class", "poster 2015 r crime drama mystery");
	mansfieldPark.setAttribute("class", "poster 1999 pg13 comedy drama romance");
	iRobot.setAttribute("class", "poster 2004 pg13 action my sciFi");
	grandPiano.setAttribute("class", "poster 2013 r music mystery thriller");
	drinkingBuddies.setAttribute("class", "poster 2013 r comedy drama romance");
	zulu.setAttribute("class", "poster 2013 r crime drama thriller");
	thePhysician.setAttribute("class", "poster 2013 r adventure drama history");
	theNutJob.setAttribute("class", "poster 2014 pg animation adventure comedy");
	document.getElementById("13Sins").setAttribute("class", "poster 2014 r horror thriller");
	freetown.setAttribute("class", "poster 2015 pg13 action drama thriller");
	the6thDay.setAttribute("class", "poster 2000 pg13 action mystery sciFi");
	hackers.setAttribute("class", "poster 1995 pg13 comedy crime drama");
	airForceOne.setAttribute("class", "poster 1997 r action adventure drama");
	swat.setAttribute("class", "poster 2003 pg13 action crime thriller");
	swordfish.setAttribute("class", "poster 2001 r action crime thriller");
	oneHourPhoto.setAttribute("class", "poster 2002 r drama thriller");
	dejaVu.setAttribute("class", "poster 2006 pg13 action sciFi thriller");
	brokenCity.setAttribute("class", "poster 2013 r crime drama thriller");
	xXX.setAttribute("class", "poster 2002 pg13 action adventure");
	iSpitOnYourGrave.setAttribute("class", "poster 2010 r crime horror");
	maniac.setAttribute("class", "poster 2001 r drama");
	unleashed.setAttribute("class", "poster 2005 r action crime drama");
	remains.setAttribute("class", "poster 2011 notRated action drama horror");
	theCollector.setAttribute("class", "poster 2009 r horror thriller");
	antiviral.setAttribute("class", "poster 2012 notRated horror sciFi thriller");
	starlet.setAttribute("class", "poster 2012 notRated drama");
	theSilenceOfTheLambs.setAttribute("class", "poster 1991 r crime drama thriller");
	cubanFury.setAttribute("class", "poster 2014 r comedy romance sport");
	theLastKingOfScotland.setAttribute("class", "poster 2006 r biography drama history");
	dragonheart3TheSorcerersCurse.setAttribute("class", "poster 2015 pg13 adventure fantasy");
	theMummy.setAttribute("class", "poster 1999 pg13 action adventure fantasy");
	reasonableDoubt.setAttribute("class", "poster 2014 r crime thriller");
	bullet.setAttribute("class", "poster 2014 notRated action crime thriller");
	houseOfSandAndFog.setAttribute("class", "poster 2003 r drama");
	scaryMovie2.setAttribute("class", "poster 2001 r comedy fantasy");
	document.getElementById("25thHour").setAttribute("class", "poster 2002 r drama");
	devil.setAttribute("class", "poster 2010 pg13 drama fantasy horror");
	theWizardOfOz.setAttribute("class", "poster 1939 pg adventure family fantasy");
	rainMan.setAttribute("class", "poster 1988 r drama");
	erinBrockovich.setAttribute("class", "poster 2000 r biography drama");
	casablanca.setAttribute("class", "poster 1942 pg drama romance war");
	theCurseOfDownersGrove.setAttribute("class", "poster 2015 notRated drama horror mystery");
	dope.setAttribute("class", "poster 2015 r comedy crime drama");
	theCroods.setAttribute("class", "poster 2013 pg animation adventure comedy");
	stepUp3D.setAttribute("class", "poster 2010 pg13 drama music romance");
	theBeach.setAttribute("class", "poster 2000 r adventure drama thriller");
	insidious2.setAttribute("class", "poster 2013 pg13 fantasy horror thriller");
	afternoonDelight.setAttribute("class", "poster 2013 r comedy drama");
	batmanAndRobin.setAttribute("class", "poster 1997 pg13 action fantasy sciFi");
	theWolfOfWallStreet.setAttribute("class", "poster 2013 r biography comedy crime");
	layerCake.setAttribute("class", "poster 2004 r crime drama thriller");
	taken.setAttribute("class", "poster 2008 pg13 action thriller");
	afterEarth.setAttribute("class", "poster 2013 pg13 action adventure sciFi");
	roboCop3.setAttribute("class", "poster 1993 pg13 action crime drama");
	roboCop2.setAttribute("class", "poster 1990 r action sciFi");
	theKingsSpeech.setAttribute("class", "poster 2010 r biography drama history");
	theRaven.setAttribute("class", "poster 2012 r crime mystery thriller");
	adaptation.setAttribute("class", "poster 2002 r comedy drama");
	casinoRoyale.setAttribute("class", "poster 2006 pg13 action adventure thriller");
	pompeii.setAttribute("class", "poster 2014 pg13 action adventure drama");
	insideLlewynDavis.setAttribute("class", "poster 2013 r drama music");
	evilDead.setAttribute("class", "poster 2013 r fantasy horror");
	theAddamsFamily.setAttribute("class", "poster 1991 pg13 comedy fantasy");
	skyfall.setAttribute("class", "poster 2012 pg13 action adventure thriller");
	jackass35.setAttribute("class", "poster 2011 r documentary comedy");
	theRightKindOfWrong.setAttribute("class", "poster 2013 r comedy romance");
	frozen.setAttribute("class", "poster 2010 r drama thriller");
	bolt.setAttribute("class", "poster 2008 pg animation adventure comedy");
	sugar.setAttribute("class", "poster 2013 notRated drama");
	sonOfGod.setAttribute("class", "poster 2014 pg13 comedy drama fantasy");
	predestination.setAttribute("class", "poster 2014 r drama mystery sciFi");
	firedUp.setAttribute("class", "poster 2009 pg13 comedy");
	theMuppetChristmasCarol.setAttribute("class", "poster 1992 g comedy drama family");
	elysium.setAttribute("class", "poster 2013 r action drama sciFi");
	theWeddingRinger.setAttribute("class", "poster 2015 r comedy");
	blueRuin.setAttribute("class", "poster 2013 r crime drama thriller");
	hellboy.setAttribute("class", "poster 2004 pg13 action fantasy horror");
	theCrow.setAttribute("class", "poster 1994 r action drama fantasy");
	edwardScissorhands.setAttribute("class", "poster 1990 pg13 drama fantasy romance");
	romeoAndJuliet.setAttribute("class", "poster 2013 pg13 drama romance");
	lawless.setAttribute("class", "poster 2012 r crime drama");
	theWayBack.setAttribute("class", "poster 2010 pg13 adventure drama history");
	lifeOfBrian.setAttribute("class", "poster 1979 r comedy");
	thePhantomOfTheOpera.setAttribute("class", "poster 2004 pg13 drama musical romance");
	spiderMan3.setAttribute("class", "poster 2007 pg13 action adventure");
	spiderMan2.setAttribute("class", "poster 2004 pg13 action adventure fantasy");
	residentEvilApocalypse.setAttribute("class", "poster 2004 r action horror sciFi");
	moneyTalks.setAttribute("class", "poster 1997 r action comedy crime");
	angelsAndDemons.setAttribute("class", "poster 2009 pg13 mystery thriller");
	theKillingFields.setAttribute("class", "poster 1984 r drama history war");
	theSocialNetwork.setAttribute("class", "poster 2010 pg13 biography drama");
	document.getElementById("3DaysToKill").setAttribute("class", "poster 2014 pg13 action drama thriller");
	theKarateKid.setAttribute("class", "poster 2010 pg action drama family");
	theWickerMan.setAttribute("class", "poster 1973 r horror musical mystery");
	magnolia.setAttribute("class", "poster 1999 r drama");
	vanillaSky.setAttribute("class", "poster 2001 r fantasy mystery romance");
	goldenEye.setAttribute("class", "poster 1995 pg13 action adventure sciFi");
	moulinRouge.setAttribute("class", "poster 2001 pg13 drama musical romance");
	theMaskOfZorro.setAttribute("class", "poster 1998 pg13 action adventure comedy");
	memento.setAttribute("class", "poster 2000 r mystery thriller");
	actOfValor.setAttribute("class", "poster 2012 r action thriller war");
	theHurtLocker.setAttribute("class", "poster 2008 r drama history thriller");
	document.getElementById("21JumpStreet").setAttribute("class", "poster 2012 r action comedy crime");
	thePirateFairy.setAttribute("class", "poster 2014 g animation adventure fantasy");
	lifeOfPi.setAttribute("class", "poster 2012 pg adventure drama fantasy");
	killBillVol2.setAttribute("class", "poster 2004 r action crime thriller");
	aliceInWonderland.setAttribute("class", "poster 1951 g animation adventure family");
	pocahontas.setAttribute("class", "poster 1995 g animation adventure drama");
	chickenLittle.setAttribute("class", "poster 2005 g animation adventure comedy");
	theBoondockSaints.setAttribute("class", "poster 1999 r action crime thriller");
	midnightInParis.setAttribute("class", "poster 2011 pg13 comedy fantasy romance");
	fruitvaleStation.setAttribute("class", "poster 2013 r biography drama romance");
	theImmigrant.setAttribute("class", "poster 2013 r drama romance");
	iAmNumberFour.setAttribute("class", "poster 2011 action adventure sciFi");
	blackDynamite.setAttribute("class", "poster 2009 r action comedy");
	theArtist.setAttribute("class", "poster 2011 pg13 comedy drama romance");
	thePrestige.setAttribute("class", "poster 2006 pg13 drama mystery sciFi");
	vForVendetta.setAttribute("class", "poster 2005 r action drama thriller");
	fromHell.setAttribute("class", "poster 2001 r mystery thriller");
	babylonAD.setAttribute("class", "poster 2008 pg13 action adventure sciFi");
	dieAnotherDay.setAttribute("class", "poster 2002 pg13 action adventure thriller");
	fanboys.setAttribute("class", "poster 2009 pg13 adventure comedy drama");
	underworld.setAttribute("class", "poster 2003 r action fantasy");
	aceVenturaPetDetective.setAttribute("class", "poster 1994 pg13 comedy");
	aceVenturaWhenNatureCalls.setAttribute("class", "poster 1995 pg13 adventure comedy");
	beCool.setAttribute("class", "poster 2005 pg13 comedy crime music");
	assaultOnWallStreet.setAttribute("class", "poster 2013 r action drama thriller");
	armageddon.setAttribute("class", "poster 1998 action adventure sciFi");
	allAboutEve.setAttribute("class", "poster 1950 g drama");
	someLikeItHot.setAttribute("class", "poster 1959 notRated comedy romance");
	ragingBull.setAttribute("class", "poster 1980 r biography drama sport");
	rubySparks.setAttribute("class", "poster 2012 r comedy drama fantasy");
	theHouseBunny.setAttribute("class", "poster 2008 pg13 comedy romance");
	mutantChronicles.setAttribute("class", "poster 2008 r action adventure sciFi");
	moonriseKingdom.setAttribute("class", "poster 2012 pg13 adventure comedy drama");
	scottPilgrimVsTheWorld.setAttribute("class", "poster 2010 pg13 action comedy fantasy");
	theBoondockSaints2AllSaintsDay.setAttribute("class", "poster 2009 r action comedy crime");
	americanBeauty.setAttribute("class", "poster 1999 r drama romance");
	thePrincessBride.setAttribute("class", "poster 1987 pg adventure comedy family");
	sevenPsychopaths.setAttribute("class", "poster 2012 r comedy crime");
	fargo.setAttribute("class", "poster 1996 r crime drama thriller");
	moon.setAttribute("class", "poster 2009 r drama sciFi");
	theMachinist.setAttribute("class", "poster 2004 r drama thriller");
	inglouriousBasterds.setAttribute("class", "poster 2009 r adventure drama war");
	looper.setAttribute("class", "poster 2012 r action crime drama");
	deliveryMan.setAttribute("class", "poster 2013 pg13 comedy drama");
	dodgeballATrueUnderdogStory.setAttribute("class", "poster 2004 pg13 comedy sport");
	starshipTroopers.setAttribute("class", "poster 1997 r action sciFi");
	roboCop.setAttribute("class", "poster 2014 pg13 action sciFi thriller");
	toKillAMockingbird.setAttribute("class", "poster 1962 notRated crime drama");
	cinderella.setAttribute("class", "poster 1950 g animation family fantasy");
	silverLiningsPlaybook.setAttribute("class", "poster 2012 r comedy drama romance");
	theFifthElement.setAttribute("class", "poster 1997 pg13 action adventure sciFi");
	trainingDay.setAttribute("class", "poster 2001 r crime drama thriller");
	theLifeAquaticWithSteveZissou.setAttribute("class", "poster 2004 r adventure comedy drama");
	limitless.setAttribute("class", "poster 2011 pg13 mystery sciFi thriller");
	totalRecall.setAttribute("class", "poster 1990 r action sciFi");
	theUsualSuspects.setAttribute("class", "poster 1995 r crime drama mystery");
	document.getElementById("41").setAttribute("class", "poster 2012 notRated drama sciFi");
	microMen.setAttribute("class", "poster 2009 notRated biography drama");
	leonTheProfessional.setAttribute("class", "poster 1994 r crime drama thriller");
	moondanceAlexander.setAttribute("class", "poster 2007 g drama family");
	summerhood.setAttribute("class", "poster 2008 notRated comedy drama romance");
	hack.setAttribute("class", "poster 2007 r comedy horror");
	darkroom.setAttribute("class", "poster 2013 r thriller");
	theWeddingPact.setAttribute("class", "poster 2014 notRated comedy romance");
	theBraveLittleToaster.setAttribute("class", "poster 1987 notRated animation adventure comedy");
	stillMine.setAttribute("class", "poster 2012 pg13 drama");
	anAmericanCrime.setAttribute("class", "poster 2007 r biography crime drama");
	beyondAReasonableDoubt.setAttribute("class", "poster 2009 pg13 crime drama mystery");
	afflicted.setAttribute("class", "poster 2013 r horror mystery thriller");
	theCanal.setAttribute("class", "poster 2014 notRated horror mystery thriller");
	forcedToFight.setAttribute("class", "poster 2011 notRated action");
	lordOfTheFlies.setAttribute("class", "poster 1990 r adventure drama thriller");
	kids.setAttribute("class", "poster 1995 notRated drama");
	ghostTeamOne.setAttribute("class", "poster 2013 r comedy horror");
	virtuosity.setAttribute("class", "poster 1995 r action crime sciFi");
	theMule.setAttribute("class", "poster 2014 notRated comedy crime drama");
	timeExpired.setAttribute("class", "poster 2011 notRated comedy");
	theOmen.setAttribute("class", "poster 1976 r fantasy horror mystery");
	dogSoldiers.setAttribute("class", "poster 2002 r action fantasy horror");
	fundamental.setAttribute("class", "poster 2012 notRated horror thriller");
	fling.setAttribute("class", "poster 2008 r drama romance thriller");
	stoneCold.setAttribute("class", "poster 1991 r action crime drama");
	copyingBeethoven.setAttribute("class", "poster 2006 pg13 biography drama music");
	bornAndRaised.setAttribute("class", "poster 2012 notRated drama");
	hellBaby.setAttribute("class", "poster 2013 r comedy horror");
	nightOfTheDemons.setAttribute("class", "poster 1988 r horror");
	celebritySexTape.setAttribute("class", "poster 2012 notRated comedy");
	aboutCherry.setAttribute("class", "poster 2012 r drama");
	sexLiesAndVideotape.setAttribute("class", "poster 1989 r drama");
	wrongCops.setAttribute("class", "poster 2013 notRated comedy crime");
	almostHuman.setAttribute("class", "poster 2013 notRated horror sciFi thriller");
	byDawnsEarlyLight.setAttribute("class", "poster 1990 pg13 drama thriller action");
	oneWeek.setAttribute("class", "poster 2008 notRated adventure drama");
	badIsBad.setAttribute("class", "poster 2011 notRated drama thriller");
	heavenIsHell.setAttribute("class", "poster 2014 notRated action comedy fantasy");
	casperMeetsWendy.setAttribute("class", "poster 1998 pg adventure comedy family");
	ballAndChain.setAttribute("class", "poster 2004 pg13 comedy drama romance");
	punks.setAttribute("class", "poster 1999 pg comedy sciFi");
	theSilenceOfTheHams.setAttribute("class", "poster 1994 r comedy thriller");
	theMajorettes.setAttribute("class", "poster 1987 r action crime horror");
	missingPieces.setAttribute("class", "poster 2012 notRated drama");
	aRageToLive.setAttribute("class", "poster 1965 notRated drama");
	childrenOfTheCorn.setAttribute("class", "poster 1984 r horror");
	theBurning.setAttribute("class", "poster 1981 r horror");
	hostelPart2.setAttribute("class", "poster 2007 r horror");
	algorithm.setAttribute("class", "poster 2014 notRated crime drama thriller");
	aLotLikeLove.setAttribute("class", "poster 2005 pg13 comedy drama romance");
	rollerTown.setAttribute("class", "poster 2011 notRated comedy");
	boysOfAbuGhraib.setAttribute("class", "poster 2014 r drama thriller war");
	theLittleShopOfHorrors.setAttribute("class", "poster 1960 notRated comedy horror");
	frenchKiss.setAttribute("class", "poster 1995 pg13 comedy drama romance");
	theDevice.setAttribute("class", "poster 2014 notRated horror sciFi thriller");
	ever.setAttribute("class", "poster 2014 notRated drama romance");
	terrorVision.setAttribute("class", "poster 1986 r comedy horror sciFi");
	streetDreams.setAttribute("class", "poster 2009 r drama");
	theMiracleWorker.setAttribute("class", "poster 2000 pg drama");
	boyWonder.setAttribute("class", "poster 2010 r action crime drama");
	trailerParkJesus.setAttribute("class", "poster 2012 notRated comedy romance");
	deadlyVoyage.setAttribute("class", "poster 1996 r drama horror mystery");
	dirtyWars.setAttribute("class", "poster 2013 notRated documentary crime drama");
	theCountOfMonteCristo.setAttribute("class", "poster 2012 r drama fantasy horror");
	document.getElementById("super").setAttribute("class", "poster 2002 pg13 action adventure drama");
	deathOfASuperhero.setAttribute("class", "poster 2011 notRated animation drama");
	haphead.setAttribute("class", "poster 2015 notRated sciFi");
	shanghaiKnights.setAttribute("class", "poster 2003 pg13 action adventure comedy");
	vendetta.setAttribute("class", "poster 2013 notRated action thriller");
	gotti.setAttribute("class", "poster 1996 r biography crime drama");
	for (p = 0; p < movies.length; p++) {
		var xyz = document.getElementById(movies[p])
		var xyz1 = xyz.className;
		xyz.title = xyz.title + xyz1.substr(6);
	}
};

var con = document.createElement("div");
con.setAttribute("id", "con");
con.setAttribute("class", "con");
document.body.appendChild(con);

var headerCon = document.createElement("div");
headerCon.setAttribute("id", "headerCon");
headerCon.setAttribute("class", "headerCon");
con.appendChild(headerCon);

var leftHeaderCon = document.createElement("div");
leftHeaderCon.setAttribute("id", "leftHeaderCon");
leftHeaderCon.setAttribute("class", "leftHeaderCon");
headerCon.appendChild(leftHeaderCon);

var logoCon = document.createElement("div");
logoCon.setAttribute("id", "logoCon");
logoCon.setAttribute("class", "logoCon");
leftHeaderCon.appendChild(logoCon);

var logoP = document.createElement("p");
logoP.setAttribute("id", "logoP");
logoP.setAttribute("class", "logoP");
logoP.setAttribute("onclick", "location.reload(true)");
logoP.setAttribute("title", "Thank you for using iframetv.com!")
var logoT = document.createTextNode("iFrame T.V.");
logoP.appendChild(logoT);
logoCon.appendChild(logoP);

var threeJSOC = document.createElement("div");
threeJSOC.setAttribute("id", "threeJSOC");
threeJSOC.setAttribute("class", "threeJSOC");
//threeJSOC.setAttribute("onclick", "openEntertainment()");
leftHeaderCon.appendChild(threeJSOC);

var rightHeaderCon = document.createElement("div");
rightHeaderCon.setAttribute("id", "rightHeaderCon");
rightHeaderCon.setAttribute("class", "rightHeaderCon");
headerCon.appendChild(rightHeaderCon);

var searchB = document.createElement("div");
searchB.setAttribute("id", "searchB");
searchB.setAttribute("class", "searchB");
searchB.setAttribute("onclick", "xSearch()");
rightHeaderCon.appendChild(searchB);

var iSearch = document.createElement("i");
iSearch.setAttribute("class", "fa fa-search");
searchB.appendChild(iSearch);

var search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("id", "search");
search.setAttribute("class", "search");
search.setAttribute("value", "Movie Title");
search.setAttribute("onclick", "clearSearch()");
search.setAttribute("onkeyup", "xSearch()");
rightHeaderCon.appendChild(search);

/*var entertainmentCount = 0;
function openEntertainment() {
	if (!entertainmentCount) {
		var entertainmentCon = document.createElement("div");
		entertainmentCon.setAttribute("id", "entertainmentCon");
		entertainmentCon.setAttribute("class", "entertainmentCon");
		leftHeaderCon.appendChild(entertainmentCon);

		var movieLink = document.createElement("a");
		movieLink.setAttribute("href", "http://www.piratejunkies.com");
		entertainmentCon.appendChild(movieLink);

		var moviesDiv = document.createElement("div");
		moviesDiv.setAttribute("id", "moviesDiv");
		moviesDiv.setAttribute("class", "moviesDiv entertainmentDiv");
		movieLink.appendChild(moviesDiv);

		var moviesDivP = document.createElement("p");
		moviesDivP.setAttribute("id", "moviesDivP");
		moviesDivP.setAttribute("class", "moviesDivP");
		var movieDivT = document.createTextNode("Movies");
		moviesDivP.appendChild(movieDivT);
		moviesDiv.appendChild(moviesDivP);

		var tvDiv = document.createElement("div");
		tvDiv.setAttribute("id", "tvDiv");
		tvDiv.setAttribute("class", "tvDiv entertainmentDiv");
		tvDiv.setAttribute("onclick", "tv()");
		entertainmentCon.appendChild(tvDiv);

		var tvLink = document.createElement("a");
		tvLink.setAttribute("href", "tv.html");
		entertainmentCon.appendChild(tvLink);
		tvLink.appendChild(tvDiv);

		var tvDivP = document.createElement("p");
		tvDivP.setAttribute("id", "tvDivP");
		tvDivP.setAttribute("class", "tvDivP");
		var movieDivT = document.createTextNode("T.V. Series");
		tvDivP.appendChild(movieDivT);
		tvDiv.appendChild(tvDivP);

		var documentaryDiv = document.createElement("div");
		documentaryDiv.setAttribute("id", "documentaryDiv");
		documentaryDiv.setAttribute("class", "documentaryDiv entertainmentDiv");

		var docuLink = document.createElement("a");
		docuLink.setAttribute("href", "documentaries.html");
		entertainmentCon.appendChild(docuLink);
		docuLink.appendChild(documentaryDiv);

		var documentaryDivP = document.createElement("p");
		documentaryDivP.setAttribute("id", "documentaryDivP");
		documentaryDivP.setAttribute("class", "documentaryDivP");
		var documentaryDivT = document.createTextNode("Documentaries");
		documentaryDivP.appendChild(documentaryDivT);
		documentaryDiv.appendChild(documentaryDivP);
		entertainmentCount++;
	} else {
		var getEntertainmentCon = document.getElementById("entertainmentCon");
		leftHeaderCon.removeChild(getEntertainmentCon);
		entertainmentCount--;
	}
};*/

var filters = document.createElement("div");
filters.setAttribute("id", "filters");
filters.setAttribute("class", "filters");
headerCon.appendChild(filters);

function clearSearch() {
	if (search.value === "Movie Title") {
		search.value = "";
		search.style.font = "normal 28px sansSerif";
		search.style.color = "white";
	}
};

function xSearch() {
	var searchText = search.value;
	var space = searchText.replace(/\s/g, '');
	var exclamation = space.replace(/\u0021/g, '');
	var dubQuot = exclamation.replace(/\u0022/g, '');
	var number = dubQuot.replace(/\u0023/g, '');
	var dollar = number.replace(/\u0024/g, '');
	var percent = dollar.replace(/\u0025/g, '');
	var ampersand = percent.replace(/\u0026/g, 'and');
	var sinQuot = ampersand.replace(/\u0027/g, '');
	var openingParen = sinQuot.replace(/\u0028/g, '');
	var closingParen = openingParen.replace(/\u0029/g, '');
	var asterisk = closingParen.replace(/\u002A/g, '');
	var plus = asterisk.replace(/\u002B/g, '');
	var comma = plus.replace(/\u002C/g, '');
	var minus = comma.replace(/\u002D/g, '');
	var period = minus.replace(/\u002E/g, '');
	var slash = period.replace(/\u002F/g, '');
	var colon = slash.replace(/\u003A/g, '');
	var semicolon = colon.replace(/\u003B/g, '');
	var lessThan = semicolon.replace(/\u003C/g, '');
	var equal = lessThan.replace(/\u003D/g, '');
	var greaterThan = equal.replace(/\u003E/g, '');
	var question = greaterThan.replace(/\u003F/g, '');
	var at = question.replace(/\u0040/g, 'at');
	var opening = at.replace(/\u005B/g, '');
	var opbackslashening = opening.replace(/\u005C/g, '');
	var closing = opbackslashening.replace(/\u005D/g, '');
	var caret = closing.replace(/\u005E/g, '');
	var underscore = caret.replace(/\u005F/g, '');
	var grave = underscore.replace(/\u0060/g, '');
	var equivalency = grave.replace(/\u007E/g, '');
	var eAcute = equivalency.replace(/\u00E9/g, 'e');
	var division = eAcute.replace(/\u00F7/g, '');
	var enDash = division.replace(/\u2013/g, '');
	var emDash = enDash.replace(/\u2014/g, '');
	var lSQuot = emDash.replace(/\u2018/g, '');
	var rSQuot = lSQuot.replace(/\u2019/g, '');
	var sLowQuot = rSQuot.replace(/\u201A/g, '');
	var lDQuot = sLowQuot.replace(/\u201C/g, '');
	var rDQuot = lDQuot.replace(/\u201D/g, '');
	var dLowQuot = rDQuot.replace(/\u201E/g, '');
	var bullet = dLowQuot.replace(/\u2022/g, '');
	/*var roman2 =  bullet.replace(/II/g, '2');
	var roman3 =  roman2.replace(/III/g, '3');
	var roman4 =  roman3.replace(/IV/g, '4');
	var roman5 =  roman4.replace(/V/g, '5');
	var roman6 =  roman5.replace(/VI/g, '6');
	var roman7 =  roman6.replace(/VII/g, '7');
	var roman8 =  roman7.replace(/VIII/g, '8');
	var roman9 =  roman8.replace(/IX/g, '9');
	var roman10 =  roman9.replace(/X/g, '10');*/
	var lowerText = bullet.toLowerCase();

	var iPoster = document.getElementsByClassName("poster");
	for (cM = 0; cM < movies.length; cM++) {
		iPoster[cM].style.width = "0px";
		iPoster[cM].style.height = "0px";
		iPoster[cM].style.position = "fixed";
		iPoster[cM].style.zIndex = "0";
	}
	var getSL = lowerText.length;
	for (movI = 0; movI < movies.length; movI++) {
		var badCode = movies[movI];
		var newB = badCode.toLowerCase();
		var movieString = newB.substr(0, getSL);
		if (lowerText == movieString) {
			var xBadCode = document.getElementById(badCode);
			xBadCode.style.width = "181px";
			xBadCode.style.height = "274px";
			xBadCode.style.position = "relative";
			xBadCode.style.zIndex = "2";
			xBadCode.style.float = "left";
		}
	}
};

var frameCon = document.createElement("div");
frameCon.setAttribute("id", "frameCon");
frameCon.setAttribute("class", "frameCon");
document.body.appendChild(frameCon);

var posterCon = document.createElement("div");
posterCon.setAttribute("id", "posterCon");
posterCon.setAttribute("class", "posterCon");
con.appendChild(posterCon);

var socialCon = document.createElement("div");
socialCon.setAttribute("id", "socialCon");
socialCon.setAttribute("class", "socialCon");
document.body.appendChild(socialCon);

var socialIcon = document.createElement("i");
socialIcon.setAttribute("id", "socialIcon");
socialIcon.setAttribute("class", "fa fa-group");
socialIcon.setAttribute("title", "Follow Us");
socialCon.setAttribute("onclick", "socialDrop()");
socialCon.appendChild(socialIcon);

var navCon = document.createElement("div");
navCon.setAttribute("id", "navCon");
navCon.setAttribute("class", "navCon");

var socialCount = 0;
function socialDrop() {
	if (!socialCount) {
		socialCon.appendChild(navCon);

		var facebook = document.createElement("img");
		facebook.setAttribute("id", "facebook");
		facebook.setAttribute("class", "facebook socialL");
		facebook.setAttribute("src", "images/facebook.png");
		facebook.setAttribute("title", "Facebook");

		var facebookLink = document.createElement("a");
		facebookLink.setAttribute("href", "https://www.facebook.com/Pirate-Junkies-Inc-1559581224291414/");
		facebookLink.appendChild(facebook);
		navCon.appendChild(facebookLink);

		var google = document.createElement("img");
		google.setAttribute("id", "google");
		google.setAttribute("class", "google socialL");
		google.setAttribute("src", "images/googleplus.png");
		google.setAttribute("title", "Google+");

		var googleLink = document.createElement("a");
		googleLink.setAttribute("href", "https://plus.google.com/u/0/116937947344817976294/posts");
		googleLink.appendChild(google);
		navCon.appendChild(googleLink);

		var twitter = document.createElement("img");
		twitter.setAttribute("id", "twitter");
		twitter.setAttribute("class", "twitter socialL");
		twitter.setAttribute("src", "images/twitter.png");
		twitter.setAttribute("title", "Twitter");

		var twitterLink = document.createElement("a");
		twitterLink.setAttribute("href", "https://twitter.com/piratejunkies");
		twitterLink.appendChild(twitter);
		navCon.appendChild(twitterLink);

		var reddit = document.createElement("img");
		reddit.setAttribute("src", "images/redditBlack.jpg");
		reddit.setAttribute("alt", "submit to reddit");
		reddit.setAttribute("class", "reddit socialL");
		reddit.setAttribute("title", "Reddit");

		var redditLink = document.createElement("a");
		redditLink.setAttribute("href", "https://www.reddit.com/r/Fullmoviesonvimeo/");
		redditLink.appendChild(reddit);
		navCon.appendChild(redditLink);

		socialIcon.style.color = "#00C3FF";

		socialCount++;
	} else {
		//var getNavCon = document.getElementById("navCon");
		socialCon.removeChild(navCon);

		socialIcon.style.color = "white";

		socialCount--;
	}
};

var sortByDiv = document.createElement("div");
sortByDiv.setAttribute("id", "sortByDiv");
sortByDiv.setAttribute("class", "sortByDiv");
filters.insertBefore(sortByDiv, genreTitle);

var movieCount = movies.length +  " movies";

var sortTitle = document.createElement("p");
sortTitle.setAttribute("id", "sortTitle");
sortTitle.setAttribute("class", "sortTitle subFilterTitles");
var sortTT = document.createTextNode("Sort by " + movieCount);
sortTitle.appendChild(sortTT);
sortByDiv.appendChild(sortTitle);

var recUPI = false;
var zeroZI = false;
var zZeroI = false;
var rMovieI = false;

function sortOnclick() {
	if (!recUPI) {
		var i = document.getElementById("rUButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left, #CC6DFC, #00C3FF 80%)";
   		i.style.background = "-o-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "-moz-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "linear-gradient(to right, #CC6DFC, #00C3FF 80%)";
    	i.style.color = "white";
    	i.style.opacity = "0.9";
    	i.style.textShadow = "0px 0px 24px black";
  		i.style.boxShadow = "-2px -2px 24px #CF19B9, 2px 2px 34px #1900FF";
	}
	if (zeroZI) {
		var i = document.getElementById("zeroZButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left top, #CC6DFC 40%, #1900FF)";
   		i.style.background = "-o-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "-moz-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "linear-gradient(to bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.color = "yellow";
    	i.style.opacity = "1";
    	i.style.textShadow = "0px 0px 16px black";
    	i.style.borderBottom = "1px solid #00C3FF";
    	i.style.borderRight = "1px solid #00C3FF";
  		i.style.boxShadow = "0 0 10px #fff, 0 0 20px #fff, -2px -2px 24px #CF19B9, -4px -4px 40px #CF19B9, 2px 2px 24px #1900FF, 4px 4px 40px #1900FF";
	} else {
		var i = document.getElementById("zeroZButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left, #CC6DFC, #00C3FF 80%)";
   		i.style.background = "-o-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "-moz-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "linear-gradient(to right, #CC6DFC, #00C3FF 80%)";
    	i.style.color = "white";
    	i.style.opacity = "0.9";
  		i.style.boxShadow = "-2px -2px 24px #CF19B9, 2px 2px 34px #1900FF";
	}
	if (zZeroI) {
		var i = document.getElementById("zZeroButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left top, #CC6DFC 40%, #1900FF)";
   		i.style.background = "-o-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "-moz-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "linear-gradient(to bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.color = "yellow";
    	i.style.opacity = "1";
    	i.style.textShadow = "0px 0px 16px black";
    	i.style.borderBottom = "1px solid #00C3FF";
    	i.style.borderRight = "1px solid #00C3FF";
  		i.style.boxShadow = "0 0 10px #fff, 0 0 20px #fff, -2px -2px 24px #CF19B9, -4px -4px 40px #CF19B9, 2px 2px 24px #1900FF, 4px 4px 40px #1900FF";
	} else {
		var i = document.getElementById("zZeroButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left, #CC6DFC, #00C3FF 80%)";
   		i.style.background = "-o-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "-moz-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "linear-gradient(to right, #CC6DFC, #00C3FF 80%)";
    	i.style.color = "white";
    	i.style.opacity = "0.9";
  		i.style.boxShadow = "-2px -2px 24px #CF19B9, 2px 2px 34px #1900FF";
	}
	if (rMovieI) {
		var i = document.getElementById("rMovieButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left top, #CC6DFC 40%, #1900FF)";
   		i.style.background = "-o-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "-moz-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "linear-gradient(to bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.color = "yellow";
    	i.style.opacity = "1";
    	i.style.textShadow = "0px 0px 16px black";
    	i.style.borderBottom = "1px solid #00C3FF";
    	i.style.borderRight = "1px solid #00C3FF";
  		i.style.boxShadow = "0 0 10px #fff, 0 0 20px #fff, -2px -2px 24px #CF19B9, -4px -4px 40px #CF19B9, 2px 2px 24px #1900FF, 4px 4px 40px #1900FF";
	} else {
		var i = document.getElementById("rMovieButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left, #CC6DFC, #00C3FF 80%)";
   		i.style.background = "-o-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "-moz-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "linear-gradient(to right, #CC6DFC, #00C3FF 80%)";
    	i.style.color = "white";
    	i.style.opacity = "0.9";
  		i.style.boxShadow = "-2px -2px 24px #CF19B9, 2px 2px 34px #1900FF";
	}
};

function recUp() {
	location.reload();
};

var rUButton = document.createElement("div");
rUButton.setAttribute("id", "rUButton");
rUButton.setAttribute("class", "rUButton sort");
rUButton.setAttribute("onclick", "recUp()");
sortByDiv.appendChild(rUButton);

var rUButtonP = document.createElement("p");
rUButtonP.setAttribute("id", "rUButtonP");
rUButtonP.setAttribute("class", "rUButtonP");
var rUButtonText = document.createTextNode("Recently Uploaded");
rUButtonP.appendChild(rUButtonText);
rUButton.appendChild(rUButtonP);

function zeroZ() {
	var xSome = movies.sort();
	run(xSome);
	recUPI = false;
	zeroZI = true;
	zZeroI = false;
	rMovieI = false;
};

var zeroZButton = document.createElement("div");
zeroZButton.setAttribute("id", "zeroZButton");
zeroZButton.setAttribute("class", "zeroZButton sort");
zeroZButton.setAttribute("onclick", "zeroZ(), sortOnclick()");
sortByDiv.appendChild(zeroZButton);

var zeroZButtonP = document.createElement("p");
zeroZButtonP.setAttribute("id", "zeroZButtonP");
zeroZButtonP.setAttribute("class", "zeroZButtonP");
var zeroZButtonText = document.createTextNode("0 to Z");
zeroZButtonP.appendChild(zeroZButtonText);
zeroZButton.appendChild(zeroZButtonP);

function zZero() {
	var xSome = movies.sort();
	sr = xSome.reverse();
	run(sr);
	recUPI = false;
	zeroZI = false;
	zZeroI = true;
	rMovieI = false;
};

var zZeroButton = document.createElement("div");
zZeroButton.setAttribute("id", "zZeroButton");
zZeroButton.setAttribute("class", "zZeroButton sort");
zZeroButton.setAttribute("onclick", "zZero(), sortOnclick()");
sortByDiv.appendChild(zZeroButton);

var zZeroButtonP = document.createElement("p");
zZeroButtonP.setAttribute("id", "zZeroButtonP");
zZeroButtonP.setAttribute("class", "zZeroButtonP");
var zZeroButtonText = document.createTextNode("Z to 0");
zZeroButtonP.appendChild(zZeroButtonText);
zZeroButton.appendChild(zZeroButtonP);

var rMovieY = false;

function rMovieCheck() {
	if (!rMovieY) {
		rMovie();
	}
}

function rMovie() {
	var aSome = document.getElementsByClassName("poster");
	for (xj8 = 0; xj8 < movies.length; xj8++) {
		aSome[xj8].style.width = "0px";
		aSome[xj8].style.height = "0px";
		aSome[xj8].style.position = "fixed";
		aSome[xj8].style.zIndex = "0";
	}
	var bSome = Math.round(Math.random() * movies.length);
	var showRandom = document.getElementsByClassName("poster");
	showRandom[bSome].style.position = "relative";
	showRandom[bSome].style.width = "181px"; 
    showRandom[bSome].style.height = "274px";
	showRandom[bSome].style.zIndex = "1";
	var pos = 0;
	if (!rMovieY) {
    	var id = setInterval(frame, 2);
	}
    function frame() {
    	if (pos == 120) {
        	clearInterval(id);
        	rMovieY = false;
    	} else {
        	pos++; 
        	showRandom[bSome].style.width = 181 + pos + 'px'; 
        	showRandom[bSome].style.height = 274 + pos + 'px'; 
        	rMovieY = true;
    	}
  	};

	recUPI = false;
	zeroZI = false;
	zZeroI = false;
	rMovieI = true;
};

var rMovieButton = document.createElement("div");
rMovieButton.setAttribute("id", "rMovieButton");
rMovieButton.setAttribute("class", "rMovieButton sort");
rMovieButton.setAttribute("onclick", "rMovieCheck(), sortOnclick()");
sortByDiv.appendChild(rMovieButton);

var rMovieButtonP = document.createElement("p");
rMovieButtonP.setAttribute("id", "rMovieButtonP");
rMovieButtonP.setAttribute("class", "rMovieButtonP");
var rMovieButtonText = document.createTextNode("Random Movie");
rMovieButtonP.appendChild(rMovieButtonText);
rMovieButton.appendChild(rMovieButtonP);

var genreTitle = document.createElement("p");
genreTitle.setAttribute("id", "genreTitle");
genreTitle.setAttribute("class", "genreTitle subFilterTitles");
var genreTT = document.createTextNode("Genre Filter");
genreTitle.appendChild(genreTT);
filters.appendChild(genreTitle);

var genreDiv = document.createElement("div");
genreDiv.setAttribute("id", "genreDiv");
genreDiv.setAttribute("class", "genreDiv scrollFilter");
filters.appendChild(genreDiv);

var genre = [
	"action",
	"adventure",
	"animation",
	"biography",
	"comedy",
	"crime",
	"documentary",
	"drama",
	"family",
	"fantasy",
	"film-noir",
	"history",
	"horror",
	"music",
	"musical",
	"mystery",
	"romance",
	"sci-fi",
	"sport",
	"thriller",
	"war",
	"western"
]

for (g = 0; g < genre.length; g++) {
	var gCon = document.createElement("div");
	gCon.setAttribute("id", "gCon" + g);
	gCon.setAttribute("class", "gCon filterLinks"); 
	genreDiv.appendChild(gCon);

	var box = document.createElement("input");
	box.setAttribute("id", "box" + g);
	box.setAttribute("class", "box checkbox");
	box.setAttribute("type", "checkbox");
	box.setAttribute("onclick", "genreCheck()");
	gCon.appendChild(box);

	var genreP = document.createElement("p");
	genreP.setAttribute("id", "genreP" + g);
	genreP.setAttribute("class", "genreP filterText");
	var genreText = document.createTextNode(genre[g] + "");
	genreP.appendChild(genreText);
	gCon.appendChild(genreP);
}

var actionI = document.getElementsByClassName("action");
var adventureI = document.getElementsByClassName("adventure");
var animationI = document.getElementsByClassName("animation");
var biographyI = document.getElementsByClassName("biography");
var comedyI = document.getElementsByClassName("comedy");
var crimeI = document.getElementsByClassName("crime");
var documentaryI = document.getElementsByClassName("documentary");
var dramaI = document.getElementsByClassName("drama");
var familyI = document.getElementsByClassName("family");
var fantasyI = document.getElementsByClassName("fantasy");
var filmNoirI = document.getElementsByClassName("filmNoir");
var historyI = document.getElementsByClassName("history");
var horrorI = document.getElementsByClassName("horror");
var musicI = document.getElementsByClassName("music");
var musicalI = document.getElementsByClassName("musical");
var mysteryI = document.getElementsByClassName("mystery");
var romanceI = document.getElementsByClassName("romance");
var sciFiI = document.getElementsByClassName("sciFi");
var sportI = document.getElementsByClassName("sport");
var thrillerI = document.getElementsByClassName("thriller");
var warI = document.getElementsByClassName("war");
var westernI = document.getElementsByClassName("western");

function genreCheck() {
	var actionBox = document.getElementById("box0");
	var adventureBox = document.getElementById("box1");
	var animationBox = document.getElementById("box2");
	var biographyBox = document.getElementById("box3");
	var comedyBox = document.getElementById("box4");
	var crimeBox = document.getElementById("box5");
	var documentaryBox = document.getElementById("box6");
	var dramaBox = document.getElementById("box7");
	var familyBox = document.getElementById("box8");
	var fantasyBox = document.getElementById("box9");
	var filmNoirBox = document.getElementById("box10");
	var historyBox = document.getElementById("box11");
	var horrorBox = document.getElementById("box12");
	var musicBox = document.getElementById("box13");
	var musicalBox = document.getElementById("box14");
	var mysteryBox = document.getElementById("box15");
	var romanceBox = document.getElementById("box16");
	var sciFiBox = document.getElementById("box17");
	var sportBox = document.getElementById("box18");
	var thrillerBox = document.getElementById("box19");
	var warBox = document.getElementById("box20");
	var westernBox = document.getElementById("box21");

	var a = document.getElementsByClassName("poster");
	if(!box.checked) {
		for (x0 = 0; x0 < movies.length; x0++) {
			a[x0].style.width = "181px";
			a[x0].style.height = "274px";
			a[x0].style.position = "relative";
			a[x0].style.zIndex = "2";
			a[x0].style.float = "left";
		}
	}
	if (actionBox.checked) {
		for (g0 = 0; g0 < movies.length; g0++) {
			a[g0].style.width = "0px";
			a[g0].style.height = "0px";
			a[g0].style.position = "fixed";
			a[g0].style.zIndex = "0";
		}
		for (x1 = 0; x1 < movies.length; x1++) {
			actionI[x1].style.width = "181px";
			actionI[x1].style.height = "274px";
			actionI[x1].style.position = "relative";
			actionI[x1].style.zIndex = "2";
			actionI[x1].style.float = "left";
		}
	}
	if (adventureBox.checked) {
		for (g1 = 0; g1 < movies.length; g1++) {
			a[g1].style.width = "0px";
			a[g1].style.height = "0px";
			a[g1].style.position = "fixed";
			a[g1].style.zIndex = "0";
		}
		for (x2 = 0; x2 < movies.length; x2++) {
			adventureI[x2].style.width = "181px";
			adventureI[x2].style.height = "274px";
			adventureI[x2].style.position = "relative";
			adventureI[x2].style.zIndex = "2";
			adventureI[x2].style.float = "left";
		}
	}
	if (animationBox.checked) {
		for (g2 = 0; g2 < movies.length; g2++) {
			a[g2].style.width = "0px";
			a[g2].style.height = "0px";
			a[g2].style.position = "fixed";
			a[g2].style.zIndex = "0";
		}
		for (x3 = 0; x3 < movies.length; x3++) {
			animationI[x3].style.width = "181px";
			animationI[x3].style.height = "274px";
			animationI[x3].style.position = "relative";
			animationI[x3].style.zIndex = "2";
			animationI[x3].style.float = "left";
		}
	}
	if (biographyBox.checked) {
		for (g3 = 0; g3 < movies.length; g3++) {
			a[g3].style.width = "0px";
			a[g3].style.height = "0px";
			a[g3].style.position = "fixed";
			a[g3].style.zIndex = "0";
		}
		for (x4 = 0; x4 < movies.length; x4++) {
			biographyI[x4].style.width = "181px";
			biographyI[x4].style.height = "274px";
			biographyI[x4].style.position = "relative";
			biographyI[x4].style.zIndex = "2";
			biographyI[x4].style.float = "left";
		}
	}
	if (comedyBox.checked) {
		for (g4 = 0; g4 < movies.length; g4++) {
			a[g4].style.width = "0px";
			a[g4].style.height = "0px";
			a[g4].style.position = "fixed";
			a[g4].style.zIndex = "0";
		}
		for (x5 = 0; x5 < movies.length; x5++) {
			comedyI[x5].style.width = "181px";
			comedyI[x5].style.height = "274px";
			comedyI[x5].style.position = "relative";
			comedyI[x5].style.zIndex = "2";
			comedyI[x5].style.float = "left";
		}
	}
	if (crimeBox.checked) {
		for (g5 = 0; g5 < movies.length; g5++) {
			a[g5].style.width = "0px";
			a[g5].style.height = "0px";
			a[g5].style.position = "fixed";
			a[g5].style.zIndex = "0";
		}
		for (x6 = 0; x6 < movies.length; x6++) {
			crimeI[x6].style.width = "181px";
			crimeI[x6].style.height = "274px";
			crimeI[x6].style.position = "relative";
			crimeI[x6].style.zIndex = "2";
			crimeI[x6].style.float = "left";
		}
	}
	if (documentaryBox.checked) {
		for (g6 = 0; g6 < movies.length; g6++) {
			a[g6].style.width = "0px";
			a[g6].style.height = "0px";
			a[g6].style.position = "fixed";
			a[g6].style.zIndex = "0";
		}
		for (x7 = 0; x7 < movies.length; x7++) {
			documentaryI[x7].style.width = "181px";
			documentaryI[x7].style.height = "274px";
			documentaryI[x7].style.position = "relative";
			documentaryI[x7].style.zIndex = "2";
			documentaryI[x7].style.float = "left";
		}
	}
	if (dramaBox.checked) {
		for (g7 = 0; g7 < movies.length; g7++) {
			a[g7].style.width = "0px";
			a[g7].style.height = "0px";
			a[g7].style.position = "fixed";
			a[g7].style.zIndex = "0";
		}
		for (x8 = 0; x8 < movies.length; x8++) {
			dramaI[x8].style.width = "181px";
			dramaI[x8].style.height = "274px";
			dramaI[x8].style.position = "relative";
			dramaI[x8].style.zIndex = "2";
			dramaI[x8].style.float = "left";
		}
	}
	if (familyBox.checked) {
		for (g8 = 0; g8 < movies.length; g8++) {
			a[g8].style.width = "0px";
			a[g8].style.height = "0px";
			a[g8].style.position = "fixed";
			a[g8].style.zIndex = "0";
		}
		for (x9 = 0; x9 < movies.length; x9++) {
			familyI[x9].style.width = "181px";
			familyI[x9].style.height = "274px";
			familyI[x9].style.position = "relative";
			familyI[x9].style.zIndex = "2";
			familyI[x9].style.float = "left";
		}
	}
	if (fantasyBox.checked) {
		for (g9 = 0; g9 < movies.length; g9++) {
			a[g9].style.width = "0px";
			a[g9].style.height = "0px";
			a[g9].style.position = "fixed";
			a[g9].style.zIndex = "0";
		}
		for (x10 = 0; x10 < movies.length; x10++) {
			fantasyI[x10].style.width = "181px";
			fantasyI[x10].style.height = "274px";
			fantasyI[x10].style.position = "relative";
			fantasyI[x10].style.zIndex = "2";
			fantasyI[x10].style.float = "left";
		}
	}
	if (filmNoirBox.checked) {
		for (g10 = 0; g10 < movies.length; g10++) {
			a[g10].style.width = "0px";
			a[g10].style.height = "0px";
			a[g10].style.position = "fixed";
			a[g10].style.zIndex = "0";
		}
		for (x11 = 0; x11 < movies.length; x11++) {
			filmNoirI[x11].style.width = "181px";
			filmNoirI[x11].style.height = "274px";
			filmNoirI[x11].style.position = "relative";
			filmNoirI[x11].style.zIndex = "2";
			filmNoirI[x11].style.float = "left";
		}
	}
	if (historyBox.checked) {
		for (g11 = 0; g11 < movies.length; g11++) {
			a[g11].style.width = "0px";
			a[g11].style.height = "0px";
			a[g11].style.position = "fixed";
			a[g11].style.zIndex = "0";
		}
		for (x12 = 0; x12 < movies.length; x12++) {
			historyI[x12].style.width = "181px";
			historyI[x12].style.height = "274px";
			historyI[x12].style.position = "relative";
			historyI[x12].style.zIndex = "2";
			historyI[x12].style.float = "left";
		}
	}
	if (horrorBox.checked) {
		for (g12 = 0; g12 < movies.length; g12++) {
			a[g12].style.width = "0px";
			a[g12].style.height = "0px";
			a[g12].style.position = "fixed";
			a[g12].style.zIndex = "0";
		}
		for (x13 = 0; x13 < movies.length; x13++) {
			horrorI[x13].style.width = "181px";
			horrorI[x13].style.height = "274px";
			horrorI[x13].style.position = "relative";
			horrorI[x13].style.zIndex = "2";
			horrorI[x13].style.float = "left";
		}
	}
	if (musicBox.checked) {
		for (g13 = 0; g13 < movies.length; g13++) {
			a[g13].style.width = "0px";
			a[g13].style.height = "0px";
			a[g13].style.position = "fixed";
			a[g13].style.zIndex = "0";
		}
		for (x14 = 0; x14 < movies.length; x14++) {
			musicI[x14].style.width = "181px";
			musicI[x14].style.height = "274px";
			musicI[x14].style.position = "relative";
			musicI[x14].style.zIndex = "2";
			musicI[x14].style.float = "left";
		}
	}
	if (musicalBox.checked) {
		for (g14 = 0; g14 < movies.length; g14++) {
			a[g14].style.width = "0px";
			a[g14].style.height = "0px";
			a[g14].style.position = "fixed";
			a[g14].style.zIndex = "0";
		}
		for (x15 = 0; x15 < movies.length; x15++) {
			musicalI[x15].style.width = "181px";
			musicalI[x15].style.height = "274px";
			musicalI[x15].style.position = "relative";
			musicalI[x15].style.zIndex = "2";
			musicalI[x15].style.float = "left";
		}
	}
	if (mysteryBox.checked) {
		for (g15 = 0; g15 < movies.length; g15++) {
			a[g15].style.width = "0px";
			a[g15].style.height = "0px";
			a[g15].style.position = "fixed";
			a[g15].style.zIndex = "0";
		}
		for (x16 = 0; x16 < movies.length; x16++) {
			mysteryI[x16].style.width = "181px";
			mysteryI[x16].style.height = "274px";
			mysteryI[x16].style.position = "relative";
			mysteryI[x16].style.zIndex = "2";
			mysteryI[x16].style.float = "left";
		}
	}
	if (romanceBox.checked) {
		for (g16 = 0; g16 < movies.length; g16++) {
			a[g16].style.width = "0px";
			a[g16].style.height = "0px";
			a[g16].style.position = "fixed";
			a[g16].style.zIndex = "0";
		}
		for (x17 = 0; x17 < movies.length; x17++) {
			romanceI[x17].style.width = "181px";
			romanceI[x17].style.height = "274px";
			romanceI[x17].style.position = "relative";
			romanceI[x17].style.zIndex = "2";
			romanceI[x17].style.float = "left";
		}
	}
	if (sciFiBox.checked) {
		for (g17 = 0; g17 < movies.length; g17++) {
			a[g17].style.width = "0px";
			a[g17].style.height = "0px";
			a[g17].style.position = "fixed";
			a[g17].style.zIndex = "0";
		}
		for (x18 = 0; x18 < movies.length; x18++) {
			sciFiI[x18].style.width = "181px";
			sciFiI[x18].style.height = "274px";
			sciFiI[x18].style.position = "relative";
			sciFiI[x18].style.zIndex = "2";
			sciFiI[x18].style.float = "left";
		}
	}
	if (sportBox.checked) {
		for (g18 = 0; g18 < movies.length; g18++) {
			a[g18].style.width = "0px";
			a[g18].style.height = "0px";
			a[g18].style.position = "fixed";
			a[g18].style.zIndex = "0";
		}
		for (x19 = 0; x19 < movies.length; x19++) {
			sportI[x19].style.width = "181px";
			sportI[x19].style.height = "274px";
			sportI[x19].style.position = "relative";
			sportI[x19].style.zIndex = "2";
			sportI[x19].style.float = "left";
		}
	}
	if (thrillerBox.checked) {
		for (g19 = 0; g19 < movies.length; g19++) {
			a[g19].style.width = "0px";
			a[g19].style.height = "0px";
			a[g19].style.position = "fixed";
			a[g19].style.zIndex = "0";
		}
		for (x20 = 0; x20 < movies.length; x20++) {
			thrillerI[x20].style.width = "181px";
			thrillerI[x20].style.height = "274px";
			thrillerI[x20].style.position = "relative";
			thrillerI[x20].style.zIndex = "2";
			thrillerI[x20].style.float = "left";
		}
	}
	if (warBox.checked) {
		for (g20 = 0; g20 < movies.length; g20++) {
			a[g20].style.width = "0px";
			a[g20].style.height = "0px";
			a[g20].style.position = "fixed";
			a[g20].style.zIndex = "0";
		}
		for (x21 = 0; x21 < movies.length; x21++) {
			warI[x21].style.width = "181px";
			warI[x21].style.height = "274px";
			warI[x21].style.position = "relative";
			warI[x21].style.zIndex = "2";
			warI[x21].style.float = "left";
		}
	}
	if (westernBox.checked) {
		for (g21 = 0; g21 < movies.length; g21++) {
			a[g21].style.width = "0px";
			a[g21].style.height = "0px";
			a[g21].style.position = "fixed";
			a[g21].style.zIndex = "0";
		}
		for (x22 = 0; x22 < movies.length; x22++) {
			westernI[x22].style.width = "181px";
			westernI[x22].style.height = "274px";
			westernI[x22].style.position = "relative";
			westernI[x22].style.zIndex = "2";
			westernI[x22].style.float = "left";
		}
	}

	var actionIC = 0;
	var adventureIC = 0;
	var animationIC = 0;
	var biographyIC = 0;
	var comedyIC = 0;
	var crimeIC = 0;
	var documentaryIC = 0;
	var dramaIC = 0;
	var familyIC = 0;
	var fantasyIC = 0;
	var filmNoirIC = 0;
	var historyIC = 0;
	var horrorIC = 0;
	var musicIC = 0;
	var musicalIC = 0;
	var mysteryIC = 0;
	var romanceIC = 0;
	var sciFiIC = 0;
	var sportIC = 0;
	var thrillerIC = 0;
	var warIC = 0;
	var westernIC = 0;

	for (gCount = 0; gCount < movies.length; gCount++) {
		if (actionI[gCount]) {
			actionIC++;
		}
		document.getElementById("genreP0").innerHTML = "action" +  "(" + actionIC + ")";
		if (adventureI[gCount]) {
			adventureIC++;
		}
		document.getElementById("genreP1").innerHTML = "adventure" + "(" + adventureIC + ")";
		if (animationI[gCount]) {
			animationIC++;
		}
		document.getElementById("genreP2").innerHTML = "animation" + "(" + animationIC + ")";
		if (biographyI[gCount]) {
			biographyIC++;
		}
		document.getElementById("genreP3").innerHTML = "biography" + "(" + biographyIC + ")";
		if (comedyI[gCount]) {
			comedyIC++;
		}
		document.getElementById("genreP4").innerHTML = "comedy" + "(" + comedyIC + ")";
		if (crimeI[gCount]) {
			crimeIC++;
		}
		document.getElementById("genreP5").innerHTML = "crime" + "(" + crimeIC + ")";
		if (documentaryI[gCount]) {
			documentaryIC++;
		}
		document.getElementById("genreP6").innerHTML = "documentary" + "(" + documentaryIC + ")";
		if (dramaI[gCount]) {
			dramaIC++;
		}
		document.getElementById("genreP7").innerHTML = "drama" + "(" + dramaIC + ")";
		if (familyI[gCount]) {
			familyIC++;
		}
		document.getElementById("genreP8").innerHTML = "family" + "(" + familyIC + ")";
		if (fantasyI[gCount]) {
			fantasyIC++;
		}
		document.getElementById("genreP9").innerHTML = "fantasy" + "(" + fantasyIC + ")";
		if (filmNoirI[gCount]) {
			filmNoirIC++;
		}
		document.getElementById("genreP10").innerHTML = "Film-Noir" + "(" + filmNoirIC + ")";
		if (historyI[gCount]) {
			historyIC++;
		}
		document.getElementById("genreP11").innerHTML = "history" + "(" + historyIC + ")";
		if (horrorI[gCount]) {
			horrorIC++;
		}
		document.getElementById("genreP12").innerHTML = "horror" + "(" + horrorIC + ")";
		if (musicI[gCount]) {
			musicIC++;
		}
		document.getElementById("genreP13").innerHTML = "music" + "(" + musicIC + ")";
		if (musicalI[gCount]) {
			musicalIC++;
		}
		document.getElementById("genreP14").innerHTML = "musical" + "(" + musicalIC + ")";
		if (mysteryI[gCount]) {
			mysteryIC++;
		}
		document.getElementById("genreP15").innerHTML = "mystery" + "(" + mysteryIC + ")";
		if (romanceI[gCount]) {
			romanceIC++;
		}
		document.getElementById("genreP16").innerHTML = "romance" + "(" + romanceIC + ")";
		if (sciFiI[gCount]) {
			sciFiIC++;
		}
		document.getElementById("genreP17").innerHTML = "Sci-Fi" + "(" + sciFiIC + ")";
		if (sportI[gCount]) {
			sportIC++;
		}
		document.getElementById("genreP18").innerHTML = "sport" + "(" + sportIC + ")";
		if (thrillerI[gCount]) {
			thrillerIC++;
		}
		document.getElementById("genreP19").innerHTML = "thriller" + "(" + thrillerIC + ")";
		if (warI[gCount]) {
			warIC++;
		}
		document.getElementById("genreP20").innerHTML = "war" + "(" + warIC + ")";
		if (westernI[gCount]) {
			westernIC++;
		}
		document.getElementById("genreP21").innerHTML = "western" + "(" + westernIC + ")";
	}
};

var yearTitle = document.createElement("p");
yearTitle.setAttribute("id", "yearTitle");
yearTitle.setAttribute("class", "yearTitle subFilterTitles");
var yearTT = document.createTextNode("Year Filter");
yearTitle.appendChild(yearTT);
filters.appendChild(yearTitle);

var yearDiv = document.createElement("div");
yearDiv.setAttribute("id", "yearDiv");
yearDiv.setAttribute("class", "yearDiv scrollFilter");
filters.appendChild(yearDiv);

var year = [
	"2017-2010",
	"2009-2000",
	"1999-1990",
	"1989-1980",
	"1979-1970",
	"1969-1960",
	"1959-1950",
	"1949-1940",
	"1939-1930"
]

for (y = 0; y < year.length; y++) {
	var yCon = document.createElement("div");
	yCon.setAttribute("id", "yCon" + y);
	yCon.setAttribute("class", "yCon filterLinks"); 
	yearDiv.appendChild(yCon);

	var yBox = document.createElement("input");
	yBox.setAttribute("id", "yBox" + y);
	yBox.setAttribute("class", "yBox checkbox");
	yBox.setAttribute("onclick", "yearCheck()");
	yBox.setAttribute("type", "checkbox");
	yCon.appendChild(yBox);

	var yearP = document.createElement("p");
	yearP.setAttribute("id", "yearP" + y);
	yearP.setAttribute("class", "yearP filterText");
	var yearText = document.createTextNode(year[y] + "");
	yearP.appendChild(yearText);
	yCon.appendChild(yearP);
}

var y2017 = document.getElementsByClassName("2017");
var y2016 = document.getElementsByClassName("2016");
var y2015 = document.getElementsByClassName("2015");
var y2014 = document.getElementsByClassName("2014");
var y2013 = document.getElementsByClassName("2013");
var y2012 = document.getElementsByClassName("2012");
var y2011 = document.getElementsByClassName("2011");
var y2010 = document.getElementsByClassName("2010");
var y2009 = document.getElementsByClassName("2009");
var y2008 = document.getElementsByClassName("2008");
var y2007 = document.getElementsByClassName("2007");
var y2006 = document.getElementsByClassName("2006");
var y2005 = document.getElementsByClassName("2005");
var y2004 = document.getElementsByClassName("2004");
var y2003 = document.getElementsByClassName("2003");
var y2002 = document.getElementsByClassName("2002");
var y2001 = document.getElementsByClassName("2001");
var y2000 = document.getElementsByClassName("2000");
var y1999 = document.getElementsByClassName("1999");
var y1998 = document.getElementsByClassName("1998");
var y1997 = document.getElementsByClassName("1997");
var y1996 = document.getElementsByClassName("1996");
var y1995 = document.getElementsByClassName("1995");
var y1994 = document.getElementsByClassName("1994");
var y1993 = document.getElementsByClassName("1993");
var y1992 = document.getElementsByClassName("1992");
var y1991 = document.getElementsByClassName("1991");
var y1990 = document.getElementsByClassName("1990");
var y1989 = document.getElementsByClassName("1989");
var y1988 = document.getElementsByClassName("1988");
var y1987 = document.getElementsByClassName("1987");
var y1986 = document.getElementsByClassName("1986");
var y1985 = document.getElementsByClassName("1985");
var y1984 = document.getElementsByClassName("1984");
var y1983 = document.getElementsByClassName("1983");
var y1982 = document.getElementsByClassName("1982");
var y1981 = document.getElementsByClassName("1981");
var y1980 = document.getElementsByClassName("1980");
var y1979 = document.getElementsByClassName("1979");
var y1978 = document.getElementsByClassName("1978");
var y1977 = document.getElementsByClassName("1977");
var y1976 = document.getElementsByClassName("1976");
var y1975 = document.getElementsByClassName("1975");
var y1974 = document.getElementsByClassName("1974");
var y1973 = document.getElementsByClassName("1973");
var y1972 = document.getElementsByClassName("1972");
var y1971 = document.getElementsByClassName("1971");
var y1970 = document.getElementsByClassName("1970");
var y1969 = document.getElementsByClassName("1969");
var y1968 = document.getElementsByClassName("1968");
var y1967 = document.getElementsByClassName("1967");
var y1966 = document.getElementsByClassName("1966");
var y1965 = document.getElementsByClassName("1965");
var y1964 = document.getElementsByClassName("1964");
var y1963 = document.getElementsByClassName("1963");
var y1962 = document.getElementsByClassName("1962");
var y1961 = document.getElementsByClassName("1961");
var y1960 = document.getElementsByClassName("1960");
var y1959 = document.getElementsByClassName("1959");
var y1958 = document.getElementsByClassName("1958");
var y1957 = document.getElementsByClassName("1957");
var y1956 = document.getElementsByClassName("1956");
var y1955 = document.getElementsByClassName("1955");
var y1954 = document.getElementsByClassName("1954");
var y1953 = document.getElementsByClassName("1953");
var y1952 = document.getElementsByClassName("1952");
var y1951 = document.getElementsByClassName("1951");
var y1950 = document.getElementsByClassName("1950");
var y1949 = document.getElementsByClassName("1949");
var y1948 = document.getElementsByClassName("1948");
var y1947 = document.getElementsByClassName("1947");
var y1946 = document.getElementsByClassName("1946");
var y1945 = document.getElementsByClassName("1945");
var y1944 = document.getElementsByClassName("1944");
var y1943 = document.getElementsByClassName("1943");
var y1942 = document.getElementsByClassName("1942");
var y1941 = document.getElementsByClassName("1941");
var y1940 = document.getElementsByClassName("1940");
var y1939 = document.getElementsByClassName("1939");
var y1938 = document.getElementsByClassName("1938");
var y1937 = document.getElementsByClassName("1937");
var y1936 = document.getElementsByClassName("1936");
var y1935 = document.getElementsByClassName("1935");
var y1934 = document.getElementsByClassName("1934");	
var y1933 = document.getElementsByClassName("1933");
var y1932 = document.getElementsByClassName("1932");
var y1931 = document.getElementsByClassName("1931");
var y1930 = document.getElementsByClassName("1930");

function yearCheck() {
	var b2010 = document.getElementById("yBox0");
	var b2000 = document.getElementById("yBox1");
	var b1990 = document.getElementById("yBox2");
	var b1980 = document.getElementById("yBox3");
	var b1970 = document.getElementById("yBox4");
	var b1960 = document.getElementById("yBox5");
	var b1950 = document.getElementById("yBox6");
	var b1940 = document.getElementById("yBox7");
	var b1930 = document.getElementById("yBox8");

	var y10C = 0;
	var y00C = 0;
	var y90C = 0;
	var y80C = 0;
	var y70C = 0;
	var y60C = 0;
	var y50C = 0;
	var y40C = 0;
	var y30C = 0;

	for (yCount = 0; yCount < movies.length; yCount++) {
		if (y2017[yCount]) {
			y10C++;
		}
		if (y2016[yCount]) {
			y10C++;
		}
		if (y2015[yCount]) {
			y10C++;
		}
		if (y2014[yCount]) {
			y10C++;
		}
		if (y2013[yCount]) {
			y10C++;
		}
		if (y2012[yCount]) {
			y10C++;
		}
		if (y2011[yCount]) {
			y10C++;
		}
		if (y2010[yCount]) {
			y10C++;
		}
		document.getElementById("yearP0").innerHTML = "2017-2010" +  "(" + y10C + ")";
		if (y2009[yCount]) {
			y00C++;
		}
		if (y2008[yCount]) {
			y00C++;
		}
		if (y2007[yCount]) {
			y00C++;
		}
		if (y2006[yCount]) {
			y00C++;
		}
		if (y2005[yCount]) {
			y00C++;
		}
		if (y2004[yCount]) {
			y00C++;
		}
		if (y2003[yCount]) {
			y00C++;
		}
		if (y2002[yCount]) {
			y00C++;
		}
		if (y2001[yCount]) {
			y00C++;
		}
		if (y2000[yCount]) {
			y00C++;
		}
		document.getElementById("yearP1").innerHTML = "2009-2000" +  "(" + y00C + ")";
		if (y1999[yCount]) {
			y90C++;
		}
		if (y1998[yCount]) {
			y90C++;
		}
		if (y1997[yCount]) {
			y90C++;
		}
		if (y1996[yCount]) {
			y90C++;
		}
		if (y1995[yCount]) {
			y90C++;
		}
		if (y1994[yCount]) {
			y90C++;
		}
		if (y1993[yCount]) {
			y90C++;
		}
		if (y1992[yCount]) {
			y90C++;
		}
		if (y1991[yCount]) {
			y90C++;
		}
		if (y1990[yCount]) {
			y90C++;
		}
		document.getElementById("yearP2").innerHTML = "1999-1990" +  "(" + y90C + ")";
		if (y1989[yCount]) {
			y80C++;
		}
		if (y1988[yCount]) {
			y80C++;
		}
		if (y1987[yCount]) {
			y80C++;
		}
		if (y1986[yCount]) {
			y80C++;
		}
		if (y1985[yCount]) {
			y80C++;
		}
		if (y1984[yCount]) {
			y80C++;
		}
		if (y1983[yCount]) {
			y80C++;
		}
		if (y1982[yCount]) {
			y80C++;
		}
		if (y1981[yCount]) {
			y80C++;
		}
		if (y1980[yCount]) {
			y80C++;
		}
		document.getElementById("yearP3").innerHTML = "1989-1980" +  "(" + y80C + ")";
		if (y1979[yCount]) {
			y70C++;
		}
		if (y1978[yCount]) {
			y70C++;
		}
		if (y1977[yCount]) {
			y70C++;
		}
		if (y1976[yCount]) {
			y70C++;
		}
		if (y1975[yCount]) {
			y70C++;
		}
		if (y1974[yCount]) {
			y70C++;
		}
		if (y1973[yCount]) {
			y70C++;
		}
		if (y1972[yCount]) {
			y70C++;
		}
		if (y1971[yCount]) {
			y70C++;
		}
		if (y1970[yCount]) {
			y70C++;
		}
		document.getElementById("yearP4").innerHTML = "1979-1970" +  "(" + y70C + ")";
		if (y1969[yCount]) {
			y60C++;
		}
		if (y1968[yCount]) {
			y60C++;
		}
		if (y1967[yCount]) {
			y60C++;
		}
		if (y1966[yCount]) {
			y60C++;
		}
		if (y1965[yCount]) {
			y60C++;
		}
		if (y1964[yCount]) {
			y60C++;
		}
		if (y1963[yCount]) {
			y60C++;
		}
		if (y1962[yCount]) {
			y60C++;
		}
		if (y1961[yCount]) {
			y60C++;
		}
		if (y1960[yCount]) {
			y60C++;
		}
		document.getElementById("yearP5").innerHTML = "1969-1960" +  "(" + y60C + ")";
		if (y1959[yCount]) {
			y50C++;
		}
		if (y1958[yCount]) {
			y50C++;
		}
		if (y1957[yCount]) {
			y50C++;
		}
		if (y1956[yCount]) {
			y50C++;
		}
		if (y1955[yCount]) {
			y50C++;
		}
		if (y1954[yCount]) {
			y50C++;
		}
		if (y1953[yCount]) {
			y50C++;
		}
		if (y1952[yCount]) {
			y50C++;
		}
		if (y1951[yCount]) {
			y50C++;
		}
		if (y1950[yCount]) {
			y50C++;
		}
		document.getElementById("yearP6").innerHTML = "1959-1950" +  "(" + y50C + ")";
		if (y1949[yCount]) {
			y40C++;
		}
		if (y1948[yCount]) {
			y40C++;
		}
		if (y1947[yCount]) {
			y40C++;
		}
		if (y1946[yCount]) {
			y40C++;
		}
		if (y1945[yCount]) {
			y40C++;
		}
		if (y1944[yCount]) {
			y40C++;
		}
		if (y1943[yCount]) {
			y40C++;
		}
		if (y1942[yCount]) {
			y40C++;
		}
		if (y1941[yCount]) {
			y40C++;
		}
		if (y1940[yCount]) {
			y40C++;
		}
		document.getElementById("yearP7").innerHTML = "1949-1940" +  "(" + y40C + ")";
		if (y1939[yCount]) {
			y30C++;
		}
		if (y1938[yCount]) {
			y30C++;
		}
		if (y1937[yCount]) {
			y30C++;
		}
		if (y1936[yCount]) {
			y30C++;
		}
		if (y1935[yCount]) {
			y30C++;
		}
		if (y1934[yCount]) {
			y30C++;
		}
		if (y1933[yCount]) {
			y30C++;
		}
		if (y1932[yCount]) {
			y30C++;
		}
		if (y1931[yCount]) {
			y30C++;
		}
		if (y1930[yCount]) {
			y30C++;
		}
		document.getElementById("yearP8").innerHTML = "1939-1930" +  "(" + y30C + ")";
	}

	var a = document.getElementsByClassName("poster");

	if(!yBox.checked) {
		for (x0 = 0; x0 < movies.length; x0++) {
			a[x0].style.width = "181px";
			a[x0].style.height = "274px";
			a[x0].style.position = "relative";
			a[x0].style.zIndex = "2";
			a[x0].style.float = "left";
		}
	}
	if (b2010.checked) {
		for (y10 = 0; y10 < movies.length; y10++) {
			a[y10].style.width = "0px";
			a[y10].style.height = "0px";
			a[y10].style.position = "fixed";
			a[y10].style.zIndex = "0";
		}
		for (i10 = 0; i10 < y10C; i10++) {
			if (y2017[i10]) {
				y2017[i10].style.width = "181px";
				y2017[i10].style.height = "274px";
				y2017[i10].style.position = "relative";
				y2017[i10].style.zIndex = "2";
				y2017[i10].style.float = "left";
			}
			if (y2016[i10]) {
				y2016[i10].style.width = "181px";
				y2016[i10].style.height = "274px";
				y2016[i10].style.position = "relative";
				y2016[i10].style.zIndex = "2";
				y2016[i10].style.float = "left";
			}
			if (y2015[i10]) {
				y2015[i10].style.width = "181px";
				y2015[i10].style.height = "274px";
				y2015[i10].style.position = "relative";
				y2015[i10].style.zIndex = "2";
				y2015[i10].style.float = "left";
			}
			if (y2014[i10]) {
				y2014[i10].style.width = "181px";
				y2014[i10].style.height = "274px";
				y2014[i10].style.position = "relative";
				y2014[i10].style.zIndex = "2";
				y2014[i10].style.float = "left";
			}
			if (y2013[i10]) {
				y2013[i10].style.width = "181px";
				y2013[i10].style.height = "274px";
				y2013[i10].style.position = "relative";
				y2013[i10].style.zIndex = "2";
				y2013[i10].style.float = "left";
			}
			if (y2012[i10]) {
				y2012[i10].style.width = "181px";
				y2012[i10].style.height = "274px";
				y2012[i10].style.position = "relative";
				y2012[i10].style.zIndex = "2";
				y2012[i10].style.float = "left";
			}
			if (y2011[i10]) {
				y2011[i10].style.width = "181px";
				y2011[i10].style.height = "274px";
				y2011[i10].style.position = "relative";
				y2011[i10].style.zIndex = "2";
				y2011[i10].style.float = "left";
			}
			if (y2010[i10]) {
				y2010[i10].style.width = "181px";
				y2010[i10].style.height = "274px";
				y2010[i10].style.position = "relative";
				y2010[i10].style.zIndex = "2";
				y2010[i10].style.float = "left";
			}
		}
	}
	if (b2000.checked) {
		for (y00 = 0; y00 < movies.length; y00++) {
			a[y00].style.width = "0px";
			a[y00].style.height = "0px";
			a[y00].style.position = "fixed";
			a[y00].style.zIndex = "0";
		}
		for (i00 = 0; i00 < y00C; i00++) {
			if (y2009[i00]) {
				y2009[i00].style.width = "181px";
				y2009[i00].style.height = "274px";
				y2009[i00].style.position = "relative";
				y2009[i00].style.zIndex = "2";
				y2009[i00].style.float = "left";
			}
			if (y2008[i00]) {
				y2008[i00].style.width = "181px";
				y2008[i00].style.height = "274px";
				y2008[i00].style.position = "relative";
				y2008[i00].style.zIndex = "2";
				y2008[i00].style.float = "left";
			}
			if (y2007[i00]) {
				y2007[i00].style.width = "181px";
				y2007[i00].style.height = "274px";
				y2007[i00].style.position = "relative";
				y2007[i00].style.zIndex = "2";
				y2007[i00].style.float = "left";
			}
			if (y2006[i00]) {
				y2006[i00].style.width = "181px";
				y2006[i00].style.height = "274px";
				y2006[i00].style.position = "relative";
				y2006[i00].style.zIndex = "2";
				y2006[i00].style.float = "left";
			}
			if (y2005[i00]) {
				y2005[i00].style.width = "181px";
				y2005[i00].style.height = "274px";
				y2005[i00].style.position = "relative";
				y2005[i00].style.zIndex = "2";
				y2005[i00].style.float = "left";
			}
			if (y2004[i00]) {
				y2004[i00].style.width = "181px";
				y2004[i00].style.height = "274px";
				y2004[i00].style.position = "relative";
				y2004[i00].style.zIndex = "2";
				y2004[i00].style.float = "left";
			}
			if (y2003[i00]) {
				y2003[i00].style.width = "181px";
				y2003[i00].style.height = "274px";
				y2003[i00].style.position = "relative";
				y2003[i00].style.zIndex = "2";
				y2003[i00].style.float = "left";
			}
			if (y2002[i00]) {
				y2002[i00].style.width = "181px";
				y2002[i00].style.height = "274px";
				y2002[i00].style.position = "relative";
				y2002[i00].style.zIndex = "2";
				y2002[i00].style.float = "left";
			}
			if (y2001[i00]) {
				y2001[i00].style.width = "181px";
				y2001[i00].style.height = "274px";
				y2001[i00].style.position = "relative";
				y2001[i00].style.zIndex = "2";
				y2001[i00].style.float = "left";
			}
			if (y2000[i00]) {
				y2000[i00].style.width = "181px";
				y2000[i00].style.height = "274px";
				y2000[i00].style.position = "relative";
				y2000[i00].style.zIndex = "2";
				y2000[i00].style.float = "left";
			}
		}
	}
	if (b1990.checked) {
		for (y90 = 0; y90 < movies.length; y90++) {
			a[y90].style.width = "0px";
			a[y90].style.height = "0px";
			a[y90].style.position = "fixed";
			a[y90].style.zIndex = "0";
		}
		for (i90 = 0; i90 < y90C; i90++) {
			if (y1999[i90]) {
				y1999[i90].style.width = "181px";
				y1999[i90].style.height = "274px";
				y1999[i90].style.position = "relative";
				y1999[i90].style.zIndex = "2";
				y1999[i90].style.float = "left";
			}
			if (y1998[i90]) {
				y1998[i90].style.width = "181px";
				y1998[i90].style.height = "274px";
				y1998[i90].style.position = "relative";
				y1998[i90].style.zIndex = "2";
				y1998[i90].style.float = "left";
			}
			if (y1997[i90]) {
				y1997[i90].style.width = "181px";
				y1997[i90].style.height = "274px";
				y1997[i90].style.position = "relative";
				y1997[i90].style.zIndex = "2";
				y1997[i90].style.float = "left";
			}
			if (y1996[i90]) {
				y1996[i90].style.width = "181px";
				y1996[i90].style.height = "274px";
				y1996[i90].style.position = "relative";
				y1996[i90].style.zIndex = "2";
				y1996[i90].style.float = "left";
			}
			if (y1995[i90]) {
				y1995[i90].style.width = "181px";
				y1995[i90].style.height = "274px";
				y1995[i90].style.position = "relative";
				y1995[i90].style.zIndex = "2";
				y1995[i90].style.float = "left";
			}
			if (y1994[i90]) {
				y1994[i90].style.width = "181px";
				y1994[i90].style.height = "274px";
				y1994[i90].style.position = "relative";
				y1994[i90].style.zIndex = "2";
				y1994[i90].style.float = "left";
			}
			if (y1993[i90]) {
				y1993[i90].style.width = "181px";
				y1993[i90].style.height = "274px";
				y1993[i90].style.position = "relative";
				y1993[i90].style.zIndex = "2";
				y1993[i90].style.float = "left";
			}
			if (y1992[i90]) {
				y1992[i90].style.width = "181px";
				y1992[i90].style.height = "274px";
				y1992[i90].style.position = "relative";
				y1992[i90].style.zIndex = "2";
				y1992[i90].style.float = "left";
			}
			if (y1991[i90]) {
				y1991[i90].style.width = "181px";
				y1991[i90].style.height = "274px";
				y1991[i90].style.position = "relative";
				y1991[i90].style.zIndex = "2";
				y1991[i90].style.float = "left";
			}
			if (y1990[i90]) {
				y1990[i90].style.width = "181px";
				y1990[i90].style.height = "274px";
				y1990[i90].style.position = "relative";
				y1990[i90].style.zIndex = "2";
				y1990[i90].style.float = "left";
			}
		}
	}
	if (b1980.checked) {
		for (y80 = 0; y80 < movies.length; y80++) {
			a[y80].style.width = "0px";
			a[y80].style.height = "0px";
			a[y80].style.position = "fixed";
			a[y80].style.zIndex = "0";
		}
		for (i80 = 0; i80 < y80C; i80++) {
			if (y1989[i80]) {
				y1989[i80].style.width = "181px";
				y1989[i80].style.height = "274px";
				y1989[i80].style.position = "relative";
				y1989[i80].style.zIndex = "2";
				y1989[i80].style.float = "left";
			}
			if (y1988[i80]) {
				y1988[i80].style.width = "181px";
				y1988[i80].style.height = "274px";
				y1988[i80].style.position = "relative";
				y1988[i80].style.zIndex = "2";
				y1988[i80].style.float = "left";
			}
			if (y1987[i80]) {
				y1987[i80].style.width = "181px";
				y1987[i80].style.height = "274px";
				y1987[i80].style.position = "relative";
				y1987[i80].style.zIndex = "2";
				y1987[i80].style.float = "left";
			}
			if (y1986[i80]) {
				y1986[i80].style.width = "181px";
				y1986[i80].style.height = "274px";
				y1986[i80].style.position = "relative";
				y1986[i80].style.zIndex = "2";
				y1986[i80].style.float = "left";
			}
			if (y1985[i80]) {
				y1985[i80].style.width = "181px";
				y1985[i80].style.height = "274px";
				y1985[i80].style.position = "relative";
				y1985[i80].style.zIndex = "2";
				y1985[i80].style.float = "left";
			}
			if (y1984[i80]) {
				y1984[i80].style.width = "181px";
				y1984[i80].style.height = "274px";
				y1984[i80].style.position = "relative";
				y1984[i80].style.zIndex = "2";
				y1984[i80].style.float = "left";
			}
			if (y1983[i80]) {
				y1983[i80].style.width = "181px";
				y1983[i80].style.height = "274px";
				y1983[i80].style.position = "relative";
				y1983[i80].style.zIndex = "2";
				y1983[i80].style.float = "left";
			}
			if (y1982[i80]) {
				y1982[i80].style.width = "181px";
				y1982[i80].style.height = "274px";
				y1982[i80].style.position = "relative";
				y1982[i80].style.zIndex = "2";
				y1982[i80].style.float = "left";
			}
			if (y1981[i80]) {
				y1981[i80].style.width = "181px";
				y1981[i80].style.height = "274px";
				y1981[i80].style.position = "relative";
				y1981[i80].style.zIndex = "2";
				y1981[i80].style.float = "left";
			}
			if (y1980[i80]) {
				y1980[i80].style.width = "181px";
				y1980[i80].style.height = "274px";
				y1980[i80].style.position = "relative";
				y1980[i80].style.zIndex = "2";
				y1980[i80].style.float = "left";
			}
		}
	}
	if (b1970.checked) {
		for (y70 = 0; y70 < movies.length; y70++) {
			a[y70].style.width = "0px";
			a[y70].style.height = "0px";
			a[y70].style.position = "fixed";
			a[y70].style.zIndex = "0";
		}
		for (i70 = 0; i70 < y70C; i70++) {
			if (y1979[i70]) {
				y1979[i70].style.width = "181px";
				y1979[i70].style.height = "274px";
				y1979[i70].style.position = "relative";
				y1979[i70].style.zIndex = "2";
				y1979[i70].style.float = "left";
			}
			if (y1978[i70]) {
				y1978[i70].style.width = "181px";
				y1978[i70].style.height = "274px";
				y1978[i70].style.position = "relative";
				y1978[i70].style.zIndex = "2";
				y1978[i70].style.float = "left";
			}
			if (y1977[i70]) {
				y1977[i70].style.width = "181px";
				y1977[i70].style.height = "274px";
				y1977[i70].style.position = "relative";
				y1977[i70].style.zIndex = "2";
				y1977[i70].style.float = "left";
			}
			if (y1976[i70]) {
				y1976[i70].style.width = "181px";
				y1976[i70].style.height = "274px";
				y1976[i70].style.position = "relative";
				y1976[i70].style.zIndex = "2";
				y1976[i70].style.float = "left";
			}
			if (y1975[i70]) {
				y1975[i70].style.width = "181px";
				y1975[i70].style.height = "274px";
				y1975[i70].style.position = "relative";
				y1975[i70].style.zIndex = "2";
				y1975[i70].style.float = "left";
			}
			if (y1974[i70]) {
				y1974[i70].style.width = "181px";
				y1974[i70].style.height = "274px";
				y1974[i70].style.position = "relative";
				y1974[i70].style.zIndex = "2";
				y1974[i70].style.float = "left";
			}
			if (y1973[i70]) {
				y1973[i70].style.width = "181px";
				y1973[i70].style.height = "274px";
				y1973[i70].style.position = "relative";
				y1973[i70].style.zIndex = "2";
				y1973[i70].style.float = "left";
			}
			if (y1972[i70]) {
				y1972[i70].style.width = "181px";
				y1972[i70].style.height = "274px";
				y1972[i70].style.position = "relative";
				y1972[i70].style.zIndex = "2";
				y1972[i70].style.float = "left";
			}
			if (y1971[i70]) {
				y1971[i70].style.width = "181px";
				y1971[i70].style.height = "274px";
				y1971[i70].style.position = "relative";
				y1971[i70].style.zIndex = "2";
				y1971[i70].style.float = "left";
			}
			if (y1970[i70]) {
				y1970[i70].style.width = "181px";
				y1970[i70].style.height = "274px";
				y1970[i70].style.position = "relative";
				y1970[i70].style.zIndex = "2";
				y1970[i70].style.float = "left";
			}
		}
	}
	if (b1960.checked) {
		for (y60 = 0; y60 < movies.length; y60++) {
			a[y60].style.width = "0px";
			a[y60].style.height = "0px";
			a[y60].style.position = "fixed";
			a[y60].style.zIndex = "0";
		}
		for (i60 = 0; i60 < y60C; i60++) {
			if (y1969[i60]) {
				y1969[i60].style.width = "181px";
				y1969[i60].style.height = "274px";
				y1969[i60].style.position = "relative";
				y1969[i60].style.zIndex = "2";
				y1969[i60].style.float = "left";
			}
			if (y1968[i60]) {
				y1968[i60].style.width = "181px";
				y1968[i60].style.height = "274px";
				y1968[i60].style.position = "relative";
				y1968[i60].style.zIndex = "2";
				y1968[i60].style.float = "left";
			}
			if (y1967[i60]) {
				y1967[i60].style.width = "181px";
				y1967[i60].style.height = "274px";
				y1967[i60].style.position = "relative";
				y1967[i60].style.zIndex = "2";
				y1967[i60].style.float = "left";
			}
			if (y1966[i60]) {
				y1966[i60].style.width = "181px";
				y1966[i60].style.height = "274px";
				y1966[i60].style.position = "relative";
				y1966[i60].style.zIndex = "2";
				y1966[i60].style.float = "left";
			}
			if (y1965[i60]) {
				y1965[i60].style.width = "181px";
				y1965[i60].style.height = "274px";
				y1965[i60].style.position = "relative";
				y1965[i60].style.zIndex = "2";
				y1965[i60].style.float = "left";
			}
			if (y1964[i60]) {
				y1964[i60].style.width = "181px";
				y1964[i60].style.height = "274px";
				y1964[i60].style.position = "relative";
				y1964[i60].style.zIndex = "2";
				y1964[i60].style.float = "left";
			}
			if (y1963[i60]) {
				y1963[i60].style.width = "181px";
				y1963[i60].style.height = "274px";
				y1963[i60].style.position = "relative";
				y1963[i60].style.zIndex = "2";
				y1963[i60].style.float = "left";
			}
			if (y1962[i60]) {
				y1962[i60].style.width = "181px";
				y1962[i60].style.height = "274px";
				y1962[i60].style.position = "relative";
				y1962[i60].style.zIndex = "2";
				y1962[i60].style.float = "left";
			}
			if (y1961[i60]) {
				y1961[i60].style.width = "181px";
				y1961[i60].style.height = "274px";
				y1961[i60].style.position = "relative";
				y1961[i60].style.zIndex = "2";
				y1961[i60].style.float = "left";
			}
			if (y1960[i60]) {
				y1960[i60].style.width = "181px";
				y1960[i60].style.height = "274px";
				y1960[i60].style.position = "relative";
				y1960[i60].style.zIndex = "2";
				y1960[i60].style.float = "left";
			}
		}
	}
	if (b1950.checked) {
		for (y50 = 0; y50 < movies.length; y50++) {
			a[y50].style.width = "0px";
			a[y50].style.height = "0px";
			a[y50].style.position = "fixed";
			a[y50].style.zIndex = "0";
		}
		for (i50 = 0; i50 < y50C; i50++) {
			if (y1959[i50]) {
				y1959[i50].style.width = "181px";
				y1959[i50].style.height = "274px";
				y1959[i50].style.position = "relative";
				y1959[i50].style.zIndex = "2";
				y1959[i50].style.float = "left";
			}
			if (y1958[i50]) {
				y1958[i50].style.width = "181px";
				y1958[i50].style.height = "274px";
				y1958[i50].style.position = "relative";
				y1958[i50].style.zIndex = "2";
				y1958[i50].style.float = "left";
			}
			if (y1957[i50]) {
				y1957[i50].style.width = "181px";
				y1957[i50].style.height = "274px";
				y1957[i50].style.position = "relative";
				y1957[i50].style.zIndex = "2";
				y1957[i50].style.float = "left";
			}
			if (y1956[i50]) {
				y1956[i50].style.width = "181px";
				y1956[i50].style.height = "274px";
				y1956[i50].style.position = "relative";
				y1956[i50].style.zIndex = "2";
				y1956[i50].style.float = "left";
			}
			if (y1955[i50]) {
				y1955[i50].style.width = "181px";
				y1955[i50].style.height = "274px";
				y1955[i50].style.position = "relative";
				y1955[i50].style.zIndex = "2";
				y1955[i50].style.float = "left";
			}
			if (y1954[i50]) {
				y1954[i50].style.width = "181px";
				y1954[i50].style.height = "274px";
				y1954[i50].style.position = "relative";
				y1954[i50].style.zIndex = "2";
				y1954[i50].style.float = "left";
			}
			if (y1953[i50]) {
				y1953[i50].style.width = "181px";
				y1953[i50].style.height = "274px";
				y1953[i50].style.position = "relative";
				y1953[i50].style.zIndex = "2";
				y1953[i50].style.float = "left";
			}
			if (y1952[i50]) {
				y1952[i50].style.width = "181px";
				y1952[i50].style.height = "274px";
				y1952[i50].style.position = "relative";
				y1952[i50].style.zIndex = "2";
				y1952[i50].style.float = "left";
			}
			if (y1951[i50]) {
				y1951[i50].style.width = "181px";
				y1951[i50].style.height = "274px";
				y1951[i50].style.position = "relative";
				y1951[i50].style.zIndex = "2";
				y1951[i50].style.float = "left";
			}
			if (y1950[i50]) {
				y1950[i50].style.width = "181px";
				y1950[i50].style.height = "274px";
				y1950[i50].style.position = "relative";
				y1950[i50].style.zIndex = "2";
				y1950[i50].style.float = "left";
			}
		}
	}
	if (b1940.checked) {
		for (y40 = 0; y40 < movies.length; y40++) {
			a[y40].style.width = "0px";
			a[y40].style.height = "0px";
			a[y40].style.position = "fixed";
			a[y40].style.zIndex = "0";
		}
		for (i40 = 0; i40 < y40C; i40++) {
			if (y1949[i40]) {
				y1949[i40].style.width = "181px";
				y1949[i40].style.height = "274px";
				y1949[i40].style.position = "relative";
				y1949[i40].style.zIndex = "2";
				y1949[i40].style.float = "left";
			}
			if (y1948[i40]) {
				y1948[i40].style.width = "181px";
				y1948[i40].style.height = "274px";
				y1948[i40].style.position = "relative";
				y1948[i40].style.zIndex = "2";
				y1948[i40].style.float = "left";
			}
			if (y1947[i40]) {
				y1947[i40].style.width = "181px";
				y1947[i40].style.height = "274px";
				y1947[i40].style.position = "relative";
				y1947[i40].style.zIndex = "2";
				y1947[i40].style.float = "left";
			}
			if (y1946[i40]) {
				y1946[i40].style.width = "181px";
				y1946[i40].style.height = "274px";
				y1946[i40].style.position = "relative";
				y1946[i40].style.zIndex = "2";
				y1946[i40].style.float = "left";
			}
			if (y1945[i40]) {
				y1945[i40].style.width = "181px";
				y1945[i40].style.height = "274px";
				y1945[i40].style.position = "relative";
				y1945[i40].style.zIndex = "2";
				y1945[i40].style.float = "left";
			}
			if (y1944[i40]) {
				y1944[i40].style.width = "181px";
				y1944[i40].style.height = "274px";
				y1944[i40].style.position = "relative";
				y1944[i40].style.zIndex = "2";
				y1944[i40].style.float = "left";
			}
			if (y1943[i40]) {
				y1943[i40].style.width = "181px";
				y1943[i40].style.height = "274px";
				y1943[i40].style.position = "relative";
				y1943[i40].style.zIndex = "2";
				y1943[i40].style.float = "left";
			}
			if (y1942[i40]) {
				y1942[i40].style.width = "181px";
				y1942[i40].style.height = "274px";
				y1942[i40].style.position = "relative";
				y1942[i40].style.zIndex = "2";
				y1942[i40].style.float = "left";
			}
			if (y1941[i40]) {
				y1941[i40].style.width = "181px";
				y1941[i40].style.height = "274px";
				y1941[i40].style.position = "relative";
				y1941[i40].style.zIndex = "2";
				y1941[i40].style.float = "left";
			}
			if (y1940[i40]) {
				y1940[i40].style.width = "181px";
				y1940[i40].style.height = "274px";
				y1940[i40].style.position = "relative";
				y1940[i40].style.zIndex = "2";
				y1940[i40].style.float = "left";
			}
		}
	}
	if (b1930.checked) {
		for (y30 = 0; y30 < movies.length; y30++) {
			a[y30].style.width = "0px";
			a[y30].style.height = "0px";
			a[y30].style.position = "fixed";
			a[y30].style.zIndex = "0";
		}
		for (i30 = 0; i30 < y40C; i30++) {
			if (y1939[i30]) {
				y1939[i30].style.width = "181px";
				y1939[i30].style.height = "274px";
				y1939[i30].style.position = "relative";
				y1939[i30].style.zIndex = "2";
				y1939[i30].style.float = "left";
			}
			if (y1938[i30]) {
				y1938[i30].style.width = "181px";
				y1938[i30].style.height = "274px";
				y1938[i30].style.position = "relative";
				y1938[i30].style.zIndex = "2";
				y1938[i30].style.float = "left";
			}
			if (y1937[i30]) {
				y1937[i30].style.width = "181px";
				y1937[i30].style.height = "274px";
				y1937[i30].style.position = "relative";
				y1937[i30].style.zIndex = "2";
				y1937[i30].style.float = "left";
			}
			if (y1936[i30]) {
				y1936[i30].style.width = "181px";
				y1936[i30].style.height = "274px";
				y1936[i30].style.position = "relative";
				y1936[i30].style.zIndex = "2";
				y1936[i30].style.float = "left";
			}
			if (y1935[i30]) {
				y1935[i30].style.width = "181px";
				y1935[i30].style.height = "274px";
				y1935[i30].style.position = "relative";
				y1935[i30].style.zIndex = "2";
				y1935[i30].style.float = "left";
			}
			if (y1934[i30]) {
				y1934[i30].style.width = "181px";
				y1934[i30].style.height = "274px";
				y1934[i30].style.position = "relative";
				y1934[i30].style.zIndex = "2";
				y1934[i30].style.float = "left";
			}
			if (y1933[i30]) {
				y1933[i30].style.width = "181px";
				y1933[i30].style.height = "274px";
				y1933[i30].style.position = "relative";
				y1933[i30].style.zIndex = "2";
				y1933[i30].style.float = "left";
			}
			if (y1932[i30]) {
				y1932[i30].style.width = "181px";
				y1932[i30].style.height = "274px";
				y1932[i30].style.position = "relative";
				y1932[i30].style.zIndex = "2";
				y1932[i30].style.float = "left";
			}
			if (y1931[i30]) {
				y1931[i30].style.width = "181px";
				y1931[i30].style.height = "274px";
				y1931[i30].style.position = "relative";
				y1931[i30].style.zIndex = "2";
				y1931[i30].style.float = "left";
			}
			if (y1930[i30]) {
				y1930[i30].style.width = "181px";
				y1930[i30].style.height = "274px";
				y1930[i30].style.position = "relative";
				y1930[i30].style.zIndex = "2";
				y1930[i30].style.float = "left";
			}
		}
	}
};

var paypalCon = document.createElement("div");
paypalCon.setAttribute("class", "paypalCon");
paypalCon.setAttribute("id", "paypalCon");
con.appendChild(paypalCon);

var paypalForm = document.createElement("form");
paypalForm.setAttribute("action", "https://www.paypal.com/cgi-bin/webscr");
paypalForm.setAttribute("method", "post");
paypalForm.setAttribute("target", "_top");
paypalCon.appendChild(paypalForm);

var ppInput1 = document.createElement("input");
ppInput1.setAttribute("type", "hidden");
ppInput1.setAttribute("name", "cmd");
ppInput1.setAttribute("value", "_s-xclick");
paypalForm.appendChild(ppInput1);

var ppInput2 = document.createElement("input");
ppInput2.setAttribute("type", "hidden");
ppInput2.setAttribute("name", "hosted_button_id");
ppInput2.setAttribute("value", "FGX6GYWWLL7RJ");
paypalForm.appendChild(ppInput2);

var ppInput3 = document.createElement("input");
ppInput3.setAttribute("type", "image");
ppInput3.setAttribute("src", "https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif");
ppInput3.setAttribute("border", "0");
ppInput3.setAttribute("name", "submit");
ppInput3.setAttribute("alt", "PayPal - The safer, easier way to pay online!");
paypalForm.appendChild(ppInput3);

var ppImg = document.createElement("img");
ppImg.setAttribute("alt", "");
ppImg.setAttribute("border", "0");
ppImg.setAttribute("src", "https://www.paypalobjects.com/en_US/i/scr/pixel.gif");
ppImg.setAttribute("width", "1");
ppImg.setAttribute("height", "1");
paypalForm.appendChild(ppImg);

function closeDoThis() {
	document.getElementById('frameCon').innerHTML = '';
	document.title = "iframetv.com";
	var showCon = document.getElementById("con");
	showCon.style.visibility = "visible";
	genreCheck();
	yearCheck();
	clearInterval(crawlMovie);
};

function play(movie, id) {
	movieOpen = 1;
	var hideCon = document.getElementById("con");
	hideCon.style.visibility = "hidden";
	var frame = document.createElement("iframe");
	frame.setAttribute("id", "frame");
	frame.setAttribute("class", "frame");
	frame.setAttribute("src", movie);
	frame.setAttribute("allowFullScreen", true);
	frameCon.appendChild(frame);

	var close = document.createElement("input");
	close.setAttribute("id", "close");
	close.setAttribute("class", "close");
	close.setAttribute("type", "button");
	close.setAttribute("value", "X");
	close.setAttribute("title", "Close");
	close.setAttribute("onclick", "closeDoThis()");
	frameCon.appendChild(close);

	document.title = id;

	function movieSize() {
		var wW = document.documentElement.clientWidth;
		var wH = document.documentElement.clientHeight;

		frame.setAttribute("width", wW + "px");
		frame.setAttribute("height", wH + "px");
		document.getElementById("close").style.left = wW - 53 + "px";
	};
	movieSize();
	crawlMovie = setInterval(movieSize, 100);
};

var sortByDivC = sortByDiv.children.length;
function windowSize() {
	var wW = document.documentElement.clientWidth;
	var wH = document.documentElement.clientHeight;
	//alert(wW);

	socialIcon.style.top = wH - 70 + "px";
	socialIcon.style.left = wW - 90 + "px";
	navCon.style.top = wH - 325 + "px";
	navCon.style.left = wW - 80 + "px";
	paypalCon.style.top = wH - 25 + "px";

	if (wW < 423) {
		search.style.width = "235px";
		rightHeaderCon.removeChild(searchB);
		search.style.marginRight = "7px";
		search.style.borderRight = "3px solid #00C3FF";
		logoP.style.fontSize = "30px";
		logoCon.style.width = "150px";
	} else {
		search.style.width = "340px";
		rightHeaderCon.appendChild(searchB);
		search.style.marginRight = "0";
		search.style.borderRight = "none";
		logoP.style.fontSize = "48px";
		logoCon.style.width = "270px";
	}

	if (wW < 440) {
		posterCon.style.paddingTop = "165px";
	} else if (wW < 921) {
		rightHeaderCon.style.clear = "both";
		posterCon.style.paddingTop = "150px";
	} else {
		rightHeaderCon.style.clear = "none";
		posterCon.style.paddingTop = "95px";
	}

	if (wW < 575) {
		headerCon.removeChild(filters);
		posterCon.style.marginLeft = "auto";
		posterCon.style.marginRight = "auto";
		//posterCon.style.width = "300px";
		leftHeaderCon.style.left = "0px";
	} else {
		headerCon.appendChild(filters);
		posterCon.style.marginLeft = "165px";
		posterCon.style.marginRight = "";
		//posterCon.style.width = "auto";
		leftHeaderCon.style.left = "160px";
	}

	if (wH < 816) {
		genreDiv.style.height = "150px";
		yearDiv.style.height = "150px";
		filters.removeChild(sortByDiv);
	} else {
		genreDiv.style.height = "250px";
		yearDiv.style.height = "250px";
		filters.insertBefore(sortByDiv, genreTitle);
	}
};

var moviesJS = document.createElement("script");
moviesJS.setAttribute("async", "true");
moviesJS.setAttribute("src", "javascript/movies.js");
document.head.appendChild(moviesJS);

var docsJS = document.createElement("script");
docsJS.setAttribute("async", "true");
docsJS.setAttribute("src", "javascript/docs.js");
document.head.appendChild(docsJS);

/*VVVVV threeJS VVVVV*/

var scene = new THREE.Scene();
//var aspect = window.innerWidth / window.innerHeight;
var aspect = 1;
var camera = new THREE.PerspectiveCamera( 50, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( 70, 70 );
leftHeaderCon.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 0.3, 64, 1 );
var material = new THREE.MeshNormalMaterial();

var ai = new THREE.Mesh( geometry, material );
			
var bi = new THREE.Mesh( geometry, material );

var ci = new THREE.Mesh( geometry, material );
			
var di = new THREE.Mesh( geometry, material );

var ei = new THREE.Mesh( geometry, material );
			
var fi = new THREE.Mesh( geometry, material );

var gi = new THREE.Mesh( geometry, material );
			
var hi = new THREE.Mesh( geometry, material );

var ii = new THREE.Mesh( geometry, material );
			
var ji = new THREE.Mesh( geometry, material );
			
var ki = new THREE.Mesh( geometry, material );
			
var li = new THREE.Mesh( geometry, material );

var mi = new THREE.Mesh( geometry, material );
			
var ni = new THREE.Mesh( geometry, material );

var oi = new THREE.Mesh( geometry, material );
			
var pi = new THREE.Mesh( geometry, material );

var qi = new THREE.Mesh( geometry, material );

var ri = new THREE.Mesh( geometry, material );

var si = new THREE.Mesh( geometry, material );

var ti = new THREE.Mesh( geometry, material );

var ui = new THREE.Mesh( geometry, material );

var vi = new THREE.Mesh( geometry, material );

var wi = new THREE.Mesh( geometry, material );

var xi = new THREE.Mesh( geometry, material );

var yi = new THREE.Mesh( geometry, material );

var zi = new THREE.Mesh( geometry, material );

var i0i = new THREE.Mesh( geometry, material );

var i1i = new THREE.Mesh( geometry, material );

var i2i = new THREE.Mesh( geometry, material );

var i3i = new THREE.Mesh( geometry, material );

var i4i = new THREE.Mesh( geometry, material );

var i5i = new THREE.Mesh( geometry, material );

var i6i = new THREE.Mesh( geometry, material );

var i7i = new THREE.Mesh( geometry, material );

var i8i = new THREE.Mesh( geometry, material );

var i9i = new THREE.Mesh( geometry, material );
scene.add( ai,bi,ci,di,ei,fi,gi,hi,ii,ji,ki,li,mi,ni,oi,pi,qi,ri,si,ti,ui,vi,wi,xi,yi,zi,i0i,i1i,i2i,i3i,i4i,i5i,i6i,i7i,i8i,i9i );

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 75;

var render = function () {
  	requestAnimationFrame( render );
  	ai.rotation.x += 0.031;
  	ai.rotation.y += 0.031;
  	ai.rotation.z += 0.04;
  	bi.rotation.x -= 0.0315;
  	bi.rotation.y -= 0.0315;
  	bi.rotation.z -= 0.04;
  	ci.rotation.x += 0.032;
  	ci.rotation.y += 0.032;
  	ci.rotation.z += 0.04;
  	di.rotation.x -= 0.0325;
  	di.rotation.y -= 0.0325;
  	di.rotation.z -= 0.04;
  	ei.rotation.x += 0.033;
    ei.rotation.y += 0.033;
  	ei.rotation.z += 0.04;
  	fi.rotation.x -= 0.0335;
  	fi.rotation.y -= 0.0335;
  	fi.rotation.z -= 0.04;
  	gi.rotation.x += 0.034;
  	gi.rotation.y += 0.034;
  	gi.rotation.z += 0.04;
  	hi.rotation.x -= 0.0345;
  	hi.rotation.y -= 0.0345;
  	hi.rotation.z -= 0.04;
  	ii.rotation.x += 0.035;
  	ii.rotation.y += 0.035;
  	ii.rotation.z += 0.04;
  	ji.rotation.x -= 0.0355;
  	ji.rotation.y -= 0.0355;
  	ji.rotation.z -= 0.04;
  	ki.rotation.x += 0.036;
  	ki.rotation.y += 0.036;
  	ki.rotation.z += 0.04;
  	li.rotation.x -= 0.0365;
  	li.rotation.y -= 0.0365;
  	li.rotation.z -= 0.04;
  	mi.rotation.x += 0.037;
  	mi.rotation.y += 0.037;
  	mi.rotation.z += 0.04;
  	ni.rotation.x -= 0.0375;
  	ni.rotation.y -= 0.0375;
  	ni.rotation.z -= 0.04;
  	oi.rotation.x += 0.038;
  	oi.rotation.y += 0.038;
  	oi.rotation.z += 0.04;
  	//p.rotation.x -= 0.0385;Not sure why but im getting a error for p, I cant find any other var named p./n
  	//p.rotation.y -= 0.0385;This works fine in a stand alone html file and is normally full screen./n
  	//p.rotation.z -= 0.04;I even turned this into a desktop moving wallpaper thats available on steam http://steamcommunity.com/sharedfiles/filedetails/?id=864856362.
  	qi.rotation.x += 0.039;
  	qi.rotation.y += 0.039;
  	qi.rotation.z += 0.04;
  	ri.rotation.x -= 0.0395;
  	ri.rotation.y -= 0.0395;
  	ri.rotation.z -= 0.04;
  	si.rotation.x += 0.040;
  	si.rotation.y += 0.040;
  	si.rotation.z += 0.04;
  	ti.rotation.x -= 0.0405;
  	ti.rotation.y -= 0.0405;
  	ti.rotation.z -= 0.04;
  	ui.rotation.x += 0.041;
  	ui.rotation.y += 0.041;
  	ui.rotation.z += 0.04;
  	vi.rotation.x -= 0.0415;
  	vi.rotation.y -= 0.0415;
  	vi.rotation.z -= 0.04;
  	wi.rotation.x += 0.042;
  	wi.rotation.y += 0.042;
  	wi.rotation.z += 0.04;
  	xi.rotation.x -= 0.0425;
  	xi.rotation.y -= 0.0425;
  	xi.rotation.z -= 0.04;
  	yi.rotation.x += 0.043;
  	yi.rotation.y += 0.043;
  	yi.rotation.z += 0.04;
  	zi.rotation.x -= 0.0435;
  	zi.rotation.y -= 0.0435;
  	zi.rotation.z -= 0.04;
  	i0i.rotation.x += 0.044;
  	i0i.rotation.y += 0.044;
  	i0i.rotation.z += 0.04;
  	i1i.rotation.x -= 0.0445;
  	i1i.rotation.y -= 0.0445;
  	i1i.rotation.z -= 0.04;
  	i2i.rotation.x += 0.045;
  	i2i.rotation.y += 0.045;
  	i2i.rotation.z += 0.04;
  	i3i.rotation.x -= 0.0455;
  	i3i.rotation.y -= 0.0455;
  	i3i.rotation.z -= 0.04;
  	i4i.rotation.x += 0.046;
  	i4i.rotation.y += 0.046;
  	i4i.rotation.z += 0.04;
  	i5i.rotation.x -= 0.0465;
  	i5i.rotation.y -= 0.0465;
  	i5i.rotation.z -= 0.04;
  	i6i.rotation.x += 0.047;
  	i6i.rotation.y += 0.047;
  	i6i.rotation.z += 0.04;
  	i7i.rotation.x -= 0.0475;
  	i7i.rotation.y -= 0.0475;
  	i7i.rotation.z -= 0.04;
  	i8i.rotation.x += 0.048;
  	i8i.rotation.y += 0.048;
  	i8i.rotation.z += 0.04;
  	i9i.rotation.x -= 0.0485;
  	i9i.rotation.y -= 0.0485;
  	i9i.rotation.z -= 0.04;
  	renderer.render( scene, camera );
};

render();
