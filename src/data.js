const data = [
	{
		id: 1,
		title: "Gewkozig zeri.",
		description:
			"Egeih rerat ji ke hesfud poj hig eniif zub mihniw ku ka cifetpi lu ku te ujiid liob.Tifwe iciota rot kejga vocu tuksihir ziow dorit gemaluho aduoce wita micograk gira mikrokila so joko jogi mi.",
		price: 343,
		coverImg: "https://unsplash.it/528/706?image=881",
		stats: { ratings: "2.1", reviewCount: 29 },
		location: "Liechtenstein",
		openSpots: 21,
		date: "07 Nov, 2018 - 26 Nov, 2018",
	},
	{
		id: 2,
		title: "Tuhriw tukaho.",
		description:
			"Intoz olde jerze feroz kuid geluomo jikofow jetave vimci tiztuveze nih tobzugi givi jiltog lerasimi fade mejte minuir.He lieri vavducse pocjebe fuoce geege fegwot ogeki ranizker ovadospo ca ce dupitooc efuvi disoeni widijo beiw simdo.",
		price: 375,
		coverImg: "https://unsplash.it/528/706?image=599",
		stats: { ratings: "3.7", reviewCount: 19 },
		location: "Somalia",
		openSpots: 33,
		date: "10 Jan, 2020 - 26 Jan, 2020",
	},
	{
		id: 3,
		title: "Gu homofju.",
		description:
			"Beahi sorhil afi widpuzsuk wajop emoikic wocet fonleibe gorro giw tota cej raaze ga gepas bibto peco lipututi.We nugop sa hi tuhgij sompo owudog hijmo etepoezi tinjur heir teno eteul dodu tifne eguime kifes im.",
		price: 297,
		coverImg: "https://unsplash.it/528/706?image=560",
		stats: { ratings: "3.0", reviewCount: 143 },
		location: "Italy",
		openSpots: 57,
		date: "09 Oct, 2019 - 12 Oct, 2019",
	},
	{
		id: 4,
		title: "Zawahfo zakdip.",
		description:
			"Bojfosej ohpi wig letnuv bimasi ki fadcojte ukze wu hifoj cid pustev rekcij aztuw wone ke ro nocgaldi.Dog ludivis eleow wim ci dazso vo pim tolfopi zuwoc ikinetiv datuvhes pizupjes kuthe tovil kiwti pedjukdi vo.",
		price: 388,
		coverImg: "https://unsplash.it/528/706?image=212",
		stats: { ratings: "5.6", reviewCount: 32 },
		location: "Guyana",
		openSpots: 52,
		date: "10 Nov, 2015 - 18 Nov, 2015",
	},
	{
		id: 5,
		title: "Lufeg coca.",
		description:
			"Fek rawtitri jibdo ekiuh vilewliv opihic lobobe mud kih vucan eli ov kura ejocensop teve til nicif suji.Ovonmof uraviho vifgu ela icuawsup fuase sinzijvu ocook je rapnajijo ropu wame bebul heakcup rohje oriol vava tovike.",
		price: 195,
		coverImg: "https://unsplash.it/528/706?image=887",
		stats: { ratings: "4.5", reviewCount: 30 },
		location: "Seychelles",
		openSpots: 47,
		date: "10 May, 2018 - 15 May, 2018",
	},
	{
		id: 6,
		title: "Riol gij idahi.",
		description:
			"Feksigpi vavzitofe hoh kude ziwij re akev wuga isukwik gib bawja zekgaovi dacuki richiki piite ejaegemen nevuzow cuvliah.Mief cewobi okkih jigi ovki ku ziku tubi tinsingib hik ki noalo hisde rejiko palke bop camcovi tedici.",
		price: 344,
		coverImg: "https://unsplash.it/528/706?image=747",
		stats: { ratings: "4.5", reviewCount: 121 },
		location: "Union of Soviet Socialist Republics",
		openSpots: 41,
		date: "16 Jan, 2019 - 24 Jan, 2019",
	},
	{
		id: 7,
		title: "Ora fus.",
		description:
			"Rij ris wamuz biwec be ot gotnob cun sim gavte su la mi jaar osrerrel ejfuv him cigipha.Mac lem werhez noz madce serzohjed pem ke mo wecidhof zurac ca horemuc sidewej avciiwi zazgujce mofeg ginnuwfi.",
		price: 163,
		coverImg: "https://unsplash.it/528/706?image=251",
		stats: { ratings: "2.8", reviewCount: 138 },
		location: "Union of Soviet Socialist Republics",
		openSpots: 56,
		date: "05 Dec, 2016 - 09 Dec, 2016",
	},
	{
		id: 8,
		title: "Locera bo novu.",
		description:
			"Fir zeki hifcaes dodi goc hoju miwde cogte cikze hi lena sapaj gali giki ijuni kojke zewi pi.Voze se iw nopsik se nifjeb kodjo gomlohe re gihnafkug daov banitic nufdehuk fo utola vomkipla lica piod.",
		price: 218,
		coverImg: "https://unsplash.it/528/706?image=750",
		stats: { ratings: "5.5", reviewCount: 70 },
		location: "Netherlands",
		openSpots: 51,
		date: "15 Nov, 2022 - 18 Nov, 2022",
	},
	{
		id: 9,
		title: "Kil odulaloc.",
		description:
			"Sow ud helcic ibuci cicowi vus romatic catuncic jikeg ticug he icbe wise al cuvjo ari dospo se.Ovpuc sej hidad bor dusicloh jichod atowe zajwo ju nu hefna tu pocah upikah gov piwtugrek giasa wemjom.",
		price: 327,
		coverImg: "https://unsplash.it/528/706?image=497",
		stats: { ratings: "4.3", reviewCount: 50 },
		location: "Cocos [Keeling] Islands",
		openSpots: 33,
		date: "05 Oct, 2018 - 13 Oct, 2018",
	},
	{
		id: 10,
		title: "Daj tafpob tadza.",
		description:
			"Kepto ugo rojutoot futito baomois pag ij posgim inije ude medvilzi orpe gaw lagpe dejes ibjaw epap foji.Ofi coiso dolbembuf zun jigud he zijebod weka wini opicohop ceuva jitozdib faltip kodip rejfa sico wevele ved.",
		price: 163,
		coverImg: "https://unsplash.it/528/706?image=362",
		stats: { ratings: "2.5", reviewCount: 155 },
		location: "Denmark",
		openSpots: 15,
		date: "11 Jul, 2015 - 12 Jul, 2015",
	},
];

export default data;
