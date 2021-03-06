const fs = require('fs');

let codes = {
  'PATRICK50AVAILABLE': {
    status: 'available',
    personId: null,
    extraPersonId: null,
  },
  'PATRICK50USED2': {
    status: 'used',
    personId: 0,
    extraPersonId: 1
  },
  'PATRICK50USED': {
    status: 'used',
    personId: 2,
    extraPersonId: null
  }
}

let persons = [
  {
    firstName: 'Patrick',
    lastName: 'Leclair',
    company: 'Fast Solutions',
    position: 'CEO',
    location: 'Antwerp',
  },
  {
    firstName: 'Mimi',
    lastName: 'Sunca',
    company: 'Pupu Mumu',
    position: 'CFO',
    location: 'Bruxelles',
  },
  {
    firstName: 'Haules',
    lastName: 'Baules',
    company: 'Haha Production',
    position: 'Janitor',
    location: 'Vaslui',
  }
]

const adminCodes = [
  {
    "id": 0,
    "lastName": "Adams",
    "firstName": "Peter",
    "email": "peter.adams@avantgarden.be",
    "Type": 1,
    "Code": "PATRICK50NAAXF"
  },
  {
    "id": 1,
    "lastName": "Arts",
    "firstName": "Joeri",
    "email": "joeri.arts@telenet.be",
    "Type": 1,
    "Code": "PATRICK50IHLTD"
  },
  {
    "id": 2,
    "lastName": "Aznar",
    "firstName": "Jean",
    "email": "jean.aznar@grupoazahar.com",
    "Type": 1,
    "Code": "PATRICK50KSGVA"
  },
  {
    "id": 3,
    "lastName": "Ballet",
    "firstName": "Sidney",
    "email": "sidney@outlook.be",
    "Type": 1,
    "Code": "PATRICK50PFUOQ"
  },
  {
    "id": 4,
    "lastName": "Bambi",
    "firstName": "Tsasa",
    "email": "tsasa@camerichbenelux.be",
    "Type": 1,
    "Code": "PATRICK50QXGPH"
  },
  {
    "id": 5,
    "lastName": "Becue",
    "firstName": "Paul",
    "email": "becue.swinnen@telenet.be",
    "Type": 1,
    "Code": "PATRICK50OWNHT"
  },
  {
    "id": 6,
    "lastName": "Bene",
    "firstName": "Thomas",
    "email": "",
    "Type": 1,
    "Code": "PATRICK50LWFHE"
  },
  {
    "id": 7,
    "lastName": "Bergmans",
    "firstName": "Jan",
    "email": "Janberghmans@resporepair.be",
    "Type": 1,
    "Code": "PATRICK50XXHZS"
  },
  {
    "id": 8,
    "lastName": "Bertels",
    "firstName": "Roger",
    "email": "bertels.roger@telenet.be",
    "Type": 1,
    "Code": "PATRICK50QJJEW"
  },
  {
    "id": 9,
    "lastName": "Boets",
    "firstName": "Jan",
    "email": "jnboets@gmail.com",
    "Type": 1,
    "Code": "PATRICK50ESUJV"
  },
  {
    "id": 10,
    "lastName": "Bogaert",
    "firstName": "Tannicka",
    "email": "tannicka@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50PSZLJ"
  },
  {
    "id": 11,
    "lastName": "Bollen",
    "firstName": "Micha�l",
    "email": "michael.bollen@laurius.be",
    "Type": 1,
    "Code": "PATRICK50RYQZK"
  },
  {
    "id": 12,
    "lastName": "Bomhals",
    "firstName": "Ben",
    "email": "buildsupport@telenet.be",
    "Type": 1,
    "Code": "PATRICK50OHDBK"
  },
  {
    "id": 13,
    "lastName": "Borgmans",
    "firstName": "Roger",
    "email": "roger.borgmans@borg-bouw.be",
    "Type": 1,
    "Code": "PATRICK50KQMFC"
  },
  {
    "id": 14,
    "lastName": "Bossuyt",
    "firstName": "Kristof",
    "email": "kristofbossuyt@icloud.com",
    "Type": 1,
    "Code": "PATRICK50OCGWF"
  },
  {
    "id": 15,
    "lastName": "Bout",
    "firstName": "Guy",
    "email": "guy.bout@telenet.be",
    "Type": 1,
    "Code": "PATRICK50XLWYV"
  },
  {
    "id": 16,
    "lastName": "Bouwland",
    "firstName": "Wim",
    "email": "wim.bouwland@abati.be",
    "Type": 1,
    "Code": "PATRICK50WTQFP"
  },
  {
    "id": 17,
    "lastName": "Bracke",
    "firstName": "Erwin",
    "email": "erwinbracke@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50NVXKM"
  },
  {
    "id": 18,
    "lastName": "Brockmans",
    "firstName": "Hans",
    "email": "hans.brockmans@skynet.be",
    "Type": 1,
    "Code": "PATRICK50QHJSF"
  },
  {
    "id": 19,
    "lastName": "Bruggeman",
    "firstName": "Benny",
    "email": "bennybruggeman@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50IBHNG"
  },
  {
    "id": 20,
    "lastName": "Buyck",
    "firstName": "Bart",
    "email": "info@beta-management.be",
    "Type": 1,
    "Code": "PATRICK50NPQMZ"
  },
  {
    "id": 21,
    "lastName": "Buyens",
    "firstName": "John",
    "email": "john.buyens@telenet.be",
    "Type": 1,
    "Code": "PATRICK50AOYVJ"
  },
  {
    "id": 22,
    "lastName": "Callens",
    "firstName": "Philip",
    "email": "p.callens@callens.be",
    "Type": 1,
    "Code": "PATRICK50GLKRO"
  },
  {
    "id": 23,
    "lastName": "Canutescu",
    "firstName": "Adrian",
    "email": "acanutescu@yahoo.com",
    "Type": 1,
    "Code": "PATRICK50ZKFYG"
  },
  {
    "id": 24,
    "lastName": "Ceusters",
    "firstName": "Ingrid",
    "email": "ingrid.ceusters@ceusters.be",
    "Type": 1,
    "Code": "PATRICK50EPHTI"
  },
  {
    "id": 25,
    "lastName": "Clippeleyr",
    "firstName": "Walter",
    "email": "walterclippeleyr@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50KQYCG"
  },
  {
    "id": 26,
    "lastName": "Coelmont",
    "firstName": "Dirk",
    "email": "dirkcoelmont@yahoo.com",
    "Type": 1,
    "Code": "PATRICK50IHUYI"
  },
  {
    "id": 27,
    "lastName": "Corluy",
    "firstName": "Bert",
    "email": "bert.corluy@gmail.com",
    "Type": 1,
    "Code": "PATRICK50AMUJO"
  },
  {
    "id": 28,
    "lastName": "Cottyn",
    "firstName": "Marc",
    "email": "marc.cottyn@cottyn.eu",
    "Type": 1,
    "Code": "PATRICK50AEUEH"
  },
  {
    "id": 29,
    "lastName": "Cristea",
    "firstName": "Radu",
    "email": "raducristea@romco-ml.ro",
    "Type": 1,
    "Code": "PATRICK50TQJRU"
  },
  {
    "id": 30,
    "lastName": "Daem",
    "firstName": "Peter",
    "email": "daem_peter@gmail.com",
    "Type": 1,
    "Code": "PATRICK50LGVUZ"
  },
  {
    "id": 31,
    "lastName": "De Baets",
    "firstName": "Riet",
    "email": "riet.debaets@telenet.be",
    "Type": 1,
    "Code": "PATRICK50WUOCI"
  },
  {
    "id": 32,
    "lastName": "De Blauwe",
    "firstName": "Didier",
    "email": "d.deblauwe@aureliusbvba.be",
    "Type": 1,
    "Code": "PATRICK50APKNN"
  },
  {
    "id": 33,
    "lastName": "De Bock",
    "firstName": "Chris",
    "email": "chris@fidimco.be",
    "Type": 1,
    "Code": "PATRICK50FMGKV"
  },
  {
    "id": 34,
    "lastName": "De Braekeleer",
    "firstName": "Karen",
    "email": "kdebraekeleer@klaw.be",
    "Type": 1,
    "Code": "PATRICK50SENJC"
  },
  {
    "id": 35,
    "lastName": "De Clerck",
    "firstName": "Jan",
    "email": "jan.declerck@alinso.eu",
    "Type": 1,
    "Code": "PATRICK50WEKAR"
  },
  {
    "id": 36,
    "lastName": "De Cock",
    "firstName": "Guido",
    "email": "g.m.r.de.cock@gmail.com",
    "Type": 1,
    "Code": "PATRICK50HWLWU"
  },
  {
    "id": 37,
    "lastName": "De Graef",
    "firstName": "Anouk",
    "email": "adegraef@verwal.net",
    "Type": 1,
    "Code": "PATRICK50REVYF"
  },
  {
    "id": 38,
    "lastName": "de Halleux",
    "firstName": "Marco",
    "email": "marcoleen@myonline.be",
    "Type": 1,
    "Code": "PATRICK50SIJQI"
  },
  {
    "id": 39,
    "lastName": "de Jaeger",
    "firstName": "Dominik",
    "email": "dominik.de.jaeger@gmail.com",
    "Type": 1,
    "Code": "PATRICK50IAESO"
  },
  {
    "id": 40,
    "lastName": "De Meyer",
    "firstName": "Koen",
    "email": "koen.demeyer@vwred.be",
    "Type": 1,
    "Code": "PATRICK50DOYGG"
  },
  {
    "id": 41,
    "lastName": "De Muynck",
    "firstName": "Ivo",
    "email": "ivo.de.muynck@activo.be",
    "Type": 1,
    "Code": "PATRICK50EAARS"
  },
  {
    "id": 42,
    "lastName": "De Poortere",
    "firstName": "Rudi",
    "email": "Rudi.de.poortere@gmail.com",
    "Type": 1,
    "Code": "PATRICK50OVWEP"
  },
  {
    "id": 43,
    "lastName": "De Ridder",
    "firstName": "Annick",
    "email": "annick.deridder@vlaamsparlement.be",
    "Type": 1,
    "Code": "PATRICK50HHXIV"
  },
  {
    "id": 44,
    "lastName": "de Vooght",
    "firstName": "Rik",
    "email": "rik@rdva.be",
    "Type": 1,
    "Code": "PATRICK50EVAPV"
  },
  {
    "id": 45,
    "lastName": "De Vos",
    "firstName": "Lode",
    "email": "devoslouis@gmail.com",
    "Type": 1,
    "Code": "PATRICK50BVCAA"
  },
  {
    "id": 46,
    "lastName": "De Wever",
    "firstName": "Bart",
    "email": "bart.dewever@n-va.be",
    "Type": 1,
    "Code": "PATRICK50RCOTW"
  },
  {
    "id": 47,
    "lastName": "De Wit",
    "firstName": "Roland",
    "email": "rolandd@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50ZPSOD"
  },
  {
    "id": 48,
    "lastName": "De Witte",
    "firstName": "Kristof",
    "email": "Kristof.de.witte@telenet.be",
    "Type": 1,
    "Code": "PATRICK50XAWLG"
  },
  {
    "id": 49,
    "lastName": "De Wolf",
    "firstName": "Jo",
    "email": "jo.dewolf@montea.com",
    "Type": 1,
    "Code": "PATRICK50FSYNB"
  },
  {
    "id": 50,
    "lastName": "De Zaeger",
    "firstName": "Piet",
    "email": "piet.dezaeger@n-va.be",
    "Type": 1,
    "Code": "PATRICK50GCWUU"
  },
  {
    "id": 51,
    "lastName": "Degeest",
    "firstName": "Jan",
    "email": "Beaufort_Beaufort@yahoo.com",
    "Type": 1,
    "Code": "PATRICK50ZDPKF"
  },
  {
    "id": 52,
    "lastName": "Demoor",
    "firstName": "Guy",
    "email": "ir.arch.guy.demoor@skynet.be",
    "Type": 1,
    "Code": "PATRICK50RRXLY"
  },
  {
    "id": 53,
    "lastName": "Derde",
    "firstName": "Edwin",
    "email": "edwin.derde@telenet.be",
    "Type": 1,
    "Code": "PATRICK50YDHFQ"
  },
  {
    "id": 54,
    "lastName": "Desplentere",
    "firstName": "Stefan",
    "email": "sd@belgavision.be",
    "Type": 1,
    "Code": "PATRICK50LYQDC"
  },
  {
    "id": 55,
    "lastName": "Devroey",
    "firstName": "Bart",
    "email": "bdevroey@herpain.be",
    "Type": 1,
    "Code": "PATRICK50ZJSUY"
  },
  {
    "id": 56,
    "lastName": "Drabbe",
    "firstName": "Karl",
    "email": "karldrabbe@gmail.com",
    "Type": 1,
    "Code": "PATRICK50ATLHS"
  },
  {
    "id": 57,
    "lastName": "Du Bois",
    "firstName": "Herman",
    "email": "herman.du.bois@quares.be",
    "Type": 1,
    "Code": "PATRICK50WMQEG"
  },
  {
    "id": 58,
    "lastName": "Duchateau",
    "firstName": "Fons",
    "email": "fons.duchateau@n-va.be",
    "Type": 1,
    "Code": "PATRICK50MUGSJ"
  },
  {
    "id": 59,
    "lastName": "Duchesne",
    "firstName": "Kris",
    "email": "k.duchesne@izen.be",
    "Type": 1,
    "Code": "PATRICK50IUUQR"
  },
  {
    "id": 60,
    "lastName": "Eeman",
    "firstName": "Joost",
    "email": "joost@notariseeman.be",
    "Type": 1,
    "Code": "PATRICK50HDQDG"
  },
  {
    "id": 61,
    "lastName": "Engels",
    "firstName": "Catherine",
    "email": "engels.cath@gmail.com",
    "Type": 1,
    "Code": "PATRICK50SKQBU"
  },
  {
    "id": 62,
    "lastName": "Engels",
    "firstName": "Guillaume",
    "email": "Guillaume@anshowbis.be",
    "Type": 1,
    "Code": "PATRICK50YIPHL"
  },
  {
    "id": 63,
    "lastName": "Engels",
    "firstName": "Mathieu",
    "email": "Mathieu_engels@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50USUUE"
  },
  {
    "id": 64,
    "lastName": "Everaet",
    "firstName": "Koen",
    "email": "koen.everaet@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50GRKHR"
  },
  {
    "id": 65,
    "lastName": "Famil",
    "firstName": "Luc",
    "email": "famil@skynet.be",
    "Type": 1,
    "Code": "PATRICK50HAEWW"
  },
  {
    "id": 66,
    "lastName": "Feyaerts",
    "firstName": "Luc",
    "email": "luc.feyaerts@asoreco.com",
    "Type": 1,
    "Code": "PATRICK50MLDFH"
  },
  {
    "id": 67,
    "lastName": "Flieger",
    "firstName": "Arthur",
    "email": "flieger@fliegerlaw.com",
    "Type": 1,
    "Code": "PATRICK50QLQDK"
  },
  {
    "id": 68,
    "lastName": "Foets",
    "firstName": "Hugo",
    "email": "hugo@rocketbelgie.be",
    "Type": 1,
    "Code": "PATRICK50FYYKW"
  },
  {
    "id": 69,
    "lastName": "Georges",
    "firstName": "Julian",
    "email": "",
    "Type": 1,
    "Code": "PATRICK50VFBGJ"
  },
  {
    "id": 70,
    "lastName": "Gerard",
    "firstName": "Paul",
    "email": "pauger@myonline.be",
    "Type": 1,
    "Code": "PATRICK50PYSGC"
  },
  {
    "id": 71,
    "lastName": "Geudens",
    "firstName": "Philippe",
    "email": "info@oreon-properties.be",
    "Type": 1,
    "Code": "PATRICK50IZUWZ"
  },
  {
    "id": 72,
    "lastName": "Geuten",
    "firstName": "Sylvie",
    "email": "Sylvie.Carpentier@mitiska.com",
    "Type": 1,
    "Code": "PATRICK50OVXXW"
  },
  {
    "id": 73,
    "lastName": "Goossenaerts",
    "firstName": "Jorden",
    "email": "j.goossenaerts@conixrdbm.com",
    "Type": 1,
    "Code": "PATRICK50WAQCW"
  },
  {
    "id": 74,
    "lastName": "Goossens",
    "firstName": "Wim",
    "email": "wgoossens@telenet.be",
    "Type": 1,
    "Code": "PATRICK50NJGQJ"
  },
  {
    "id": 75,
    "lastName": "Gosselin",
    "firstName": "Eddy",
    "email": "eddy.gosselin@skynet.be",
    "Type": 1,
    "Code": "PATRICK50FUCGP"
  },
  {
    "id": 76,
    "lastName": "Hellemans",
    "firstName": "Chris",
    "email": "chris.hellemans@dixys.com",
    "Type": 1,
    "Code": "PATRICK50EJGER"
  },
  {
    "id": 77,
    "lastName": "Hens",
    "firstName": "Tim",
    "email": "timhens@skynet.be",
    "Type": 1,
    "Code": "PATRICK50BFBUC"
  },
  {
    "id": 78,
    "lastName": "Heylen",
    "firstName": "Philippe",
    "email": "philip.heylen@stad.antwerpen.be",
    "Type": 1,
    "Code": "PATRICK50AOZRV"
  },
  {
    "id": 79,
    "lastName": "Jacobs",
    "firstName": "Jason",
    "email": "jacobs@realis.be",
    "Type": 1,
    "Code": "PATRICK50WXHFV"
  },
  {
    "id": 80,
    "lastName": "Janssens",
    "firstName": "Michael",
    "email": "janssensmichael@gmail.com",
    "Type": 1,
    "Code": "PATRICK50PBTMN"
  },
  {
    "id": 81,
    "lastName": "Joos",
    "firstName": "Johan",
    "email": "johanjoos@eversheds.be",
    "Type": 1,
    "Code": "PATRICK50DTYBW"
  },
  {
    "id": 82,
    "lastName": "Judo",
    "firstName": "Frank",
    "email": "f.judo@hotmail.be",
    "Type": 1,
    "Code": "PATRICK50ABSNR"
  },
  {
    "id": 83,
    "lastName": "Kennis",
    "firstName": "Bavo",
    "email": "bavo@kennis.be",
    "Type": 1,
    "Code": "PATRICK50FEUJW"
  },
  {
    "id": 84,
    "lastName": "Kennis",
    "firstName": "Koen",
    "email": "koen.kennis@antwerpen.be",
    "Type": 1,
    "Code": "PATRICK50YEWGN"
  },
  {
    "id": 85,
    "lastName": "Keppens",
    "firstName": "Filip",
    "email": "filip.keppens@gmail.com",
    "Type": 1,
    "Code": "PATRICK50WJEIO"
  },
  {
    "id": 86,
    "lastName": "Klaps",
    "firstName": "Johan",
    "email": "johan.klaps@stad.antwerpen.be",
    "Type": 1,
    "Code": "PATRICK50UIZYL"
  },
  {
    "id": 87,
    "lastName": "Krikor",
    "firstName": "Monique",
    "email": "monique.krikor@portima.be",
    "Type": 1,
    "Code": "PATRICK50NWQSM"
  },
  {
    "id": 88,
    "lastName": "Lacatus",
    "firstName": "Radu",
    "email": "radulacatus0203@gmail.com",
    "Type": 1,
    "Code": "PATRICK50PTOSO"
  },
  {
    "id": 89,
    "lastName": "Laenens",
    "firstName": "Marco",
    "email": "marco.laenens@ocmw.antwerpen.be",
    "Type": 1,
    "Code": "PATRICK50RZOHU"
  },
  {
    "id": 90,
    "lastName": "Lambrechts",
    "firstName": "Patrick",
    "email": "patrick@gem-corporation.be",
    "Type": 1,
    "Code": "PATRICK50GYVSU"
  },
  {
    "id": 91,
    "lastName": "Lambrino",
    "firstName": "Sorin",
    "email": "lambrino@gmail.com",
    "Type": 1,
    "Code": "PATRICK50YNHNF"
  },
  {
    "id": 92,
    "lastName": "Landweer",
    "firstName": "Jeremy",
    "email": "Jeremie@dkz-group.be",
    "Type": 1,
    "Code": "PATRICK50UVWYW"
  },
  {
    "id": 93,
    "lastName": "Le Moine",
    "firstName": "Marcel",
    "email": "info@patramarc.be",
    "Type": 1,
    "Code": "PATRICK50BUMOZ"
  },
  {
    "id": 94,
    "lastName": "Leclair",
    "firstName": "Christel",
    "email": "g.c@telenet.be",
    "Type": 1,
    "Code": "PATRICK50LPKRW"
  },
  {
    "id": 95,
    "lastName": "Leclair",
    "firstName": "Jacques",
    "email": "",
    "Type": 1,
    "Code": "PATRICK50TJUZH"
  },
  {
    "id": 96,
    "lastName": "Lemmens",
    "firstName": "Luk",
    "email": "Llemmens@provincieantwerpen.be",
    "Type": 1,
    "Code": "PATRICK50PJNQO"
  },
  {
    "id": 97,
    "lastName": "Lemmens",
    "firstName": "Vicky",
    "email": "vicky_lemmens@icloud.com",
    "Type": 1,
    "Code": "PATRICK50CMLZV"
  },
  {
    "id": 98,
    "lastName": "Lenders",
    "firstName": "Fred",
    "email": "f.lenders@lendersadvocaten.be",
    "Type": 1,
    "Code": "PATRICK50CWQUN"
  },
  {
    "id": 99,
    "lastName": "Lenders",
    "firstName": "Manu",
    "email": "manu.lenders@abml.be",
    "Type": 1,
    "Code": "PATRICK50WEEDX"
  },
  {
    "id": 100,
    "lastName": "L�onard",
    "firstName": "Cato",
    "email": "catoleonard@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50AIGYX"
  },
  {
    "id": 101,
    "lastName": "Liekens",
    "firstName": "Ivo",
    "email": "liekens.ivo@gmail.com",
    "Type": 1,
    "Code": "PATRICK50OBSIZ"
  },
  {
    "id": 102,
    "lastName": "Liokouras",
    "firstName": "Dimitrios",
    "email": "dimitris.liokouras@gmail.com",
    "Type": 1,
    "Code": "PATRICK50HQULT"
  },
  {
    "id": 103,
    "lastName": "Lociuro",
    "firstName": "Bruno",
    "email": "lob@viessmann.com",
    "Type": 1,
    "Code": "PATRICK50VVEDN"
  },
  {
    "id": 104,
    "lastName": "Logist",
    "firstName": "Luk",
    "email": "luk.logist@avantgarden.be",
    "Type": 1,
    "Code": "PATRICK50LZNLH"
  },
  {
    "id": 105,
    "lastName": "Lokere",
    "firstName": "Ivan",
    "email": "Ivan.lokere@telenet.be",
    "Type": 1,
    "Code": "PATRICK50MUWJI"
  },
  {
    "id": 106,
    "lastName": "Mallien",
    "firstName": "Pascal",
    "email": "pascal.mallien@bakernet.com",
    "Type": 1,
    "Code": "PATRICK50CMFYD"
  },
  {
    "id": 107,
    "lastName": "Malzeva",
    "firstName": "Nata",
    "email": "",
    "Type": 1,
    "Code": "PATRICK50LXPJG"
  },
  {
    "id": 108,
    "lastName": "Martens",
    "firstName": "Carl",
    "email": "carl@carlmartens.be",
    "Type": 1,
    "Code": "PATRICK50HPRQV"
  },
  {
    "id": 109,
    "lastName": "Materne",
    "firstName": "Olivier",
    "email": "omaterne@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50KLSLF"
  },
  {
    "id": 110,
    "lastName": "Mayeres",
    "firstName": "Anouk",
    "email": "anouk.mayeres@gmail.com",
    "Type": 1,
    "Code": "PATRICK50JSBCG"
  },
  {
    "id": 111,
    "lastName": "Mertens",
    "firstName": "Gert",
    "email": "gm@mertensvastgoed.be",
    "Type": 1,
    "Code": "PATRICK50GUHRE"
  },
  {
    "id": 112,
    "lastName": "Mertens",
    "firstName": "Guy",
    "email": "guy.mertens@guymertens.com",
    "Type": 1,
    "Code": "PATRICK50HEUPS"
  },
  {
    "id": 113,
    "lastName": "Messiaen",
    "firstName": "Lieven",
    "email": "lieven@juloconsult.com",
    "Type": 1,
    "Code": "PATRICK50GUCYP"
  },
  {
    "id": 114,
    "lastName": "Meylemans",
    "firstName": "Anthony",
    "email": "anthony-meylemans@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50GBCJS"
  },
  {
    "id": 115,
    "lastName": "Meylemans",
    "firstName": "Peter",
    "email": "petermeylemans@msn.com",
    "Type": 1,
    "Code": "PATRICK50TVTET"
  },
  {
    "id": 116,
    "lastName": "Middelkoop",
    "firstName": "Mieke",
    "email": "mlmiddelkoop@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50FCDXS"
  },
  {
    "id": 117,
    "lastName": "Mortelmans",
    "firstName": "Xavier",
    "email": "mortelmansxavier@gmail.com",
    "Type": 1,
    "Code": "PATRICK50FFDRY"
  },
  {
    "id": 118,
    "lastName": "Mullier",
    "firstName": "Eva",
    "email": "",
    "Type": 1,
    "Code": "PATRICK50ESNSP"
  },
  {
    "id": 119,
    "lastName": "Neyens",
    "firstName": "Tom",
    "email": "tom.neyens@proximedia.be",
    "Type": 1,
    "Code": "PATRICK50EXDSQ"
  },
  {
    "id": 120,
    "lastName": "Noels",
    "firstName": "Heidi",
    "email": "heidi.noels1@telenet.be",
    "Type": 1,
    "Code": "PATRICK50YAFSJ"
  },
  {
    "id": 121,
    "lastName": "Ooms",
    "firstName": "Hans",
    "email": "h.ooms@telenet.be",
    "Type": 1,
    "Code": "PATRICK50XMHVJ"
  },
  {
    "id": 122,
    "lastName": "Paepen",
    "firstName": "Pieter",
    "email": "pieter.paepen@cbre.com",
    "Type": 1,
    "Code": "PATRICK50GJSUI"
  },
  {
    "id": 123,
    "lastName": "Panneels",
    "firstName": "Yves",
    "email": "yves@panneels.com",
    "Type": 1,
    "Code": "PATRICK50QNPYA"
  },
  {
    "id": 124,
    "lastName": "Pilate",
    "firstName": "Bob",
    "email": "bobpilate@gmail.com",
    "Type": 1,
    "Code": "PATRICK50AABDR"
  },
  {
    "id": 125,
    "lastName": "Pilate",
    "firstName": "Martine",
    "email": "martine.Pilate@stad.Antwerpen.be",
    "Type": 1,
    "Code": "PATRICK50CFNIM"
  },
  {
    "id": 126,
    "lastName": "Pockele-Dillis",
    "firstName": "Roland",
    "email": "rpd@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50NMYKK"
  },
  {
    "id": 127,
    "lastName": "Posedaru",
    "firstName": "Bogdan",
    "email": "bogdan.posedaru@gmail.com",
    "Type": 1,
    "Code": "PATRICK50QEONM"
  },
  {
    "id": 128,
    "lastName": "Poulissen",
    "firstName": "Chris",
    "email": "cpo@np-bridging.com",
    "Type": 1,
    "Code": "PATRICK50VGXVO"
  },
  {
    "id": 129,
    "lastName": "Poulissen",
    "firstName": "Greetje",
    "email": "greetje.p@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50BWZOZ"
  },
  {
    "id": 130,
    "lastName": "Rapsaet",
    "firstName": "Pauline",
    "email": "",
    "Type": 1,
    "Code": "PATRICK50TOYNA"
  },
  {
    "id": 131,
    "lastName": "Renders",
    "firstName": "Gina",
    "email": "ginarenders@gmail.com",
    "Type": 1,
    "Code": "PATRICK50QHYUG"
  },
  {
    "id": 132,
    "lastName": "Riberas",
    "firstName": "David",
    "email": "daribers@gmail.com",
    "Type": 1,
    "Code": "PATRICK50JTVFQ"
  },
  {
    "id": 133,
    "lastName": "Robberechts",
    "firstName": "Charlotte",
    "email": "robberechtscharlotte@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50ZZWNX"
  },
  {
    "id": 134,
    "lastName": "Roefs",
    "firstName": "Vanessa",
    "email": "vanessaroefs@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50IWKZT"
  },
  {
    "id": 135,
    "lastName": "Roelandt",
    "firstName": "Konstantijn",
    "email": "k.roelandt@lawstone.be",
    "Type": 1,
    "Code": "PATRICK50TSFVL"
  },
  {
    "id": 136,
    "lastName": "Roels",
    "firstName": "Marc",
    "email": "marc.roels@vastgoedexpertises.eu",
    "Type": 1,
    "Code": "PATRICK50RPVYD"
  },
  {
    "id": 137,
    "lastName": "Rottiers",
    "firstName": "Manou",
    "email": "manou@styleathome.be",
    "Type": 1,
    "Code": "PATRICK50TBBZO"
  },
  {
    "id": 138,
    "lastName": "Sax",
    "firstName": "Jan",
    "email": "jjjvdm@telenet.be",
    "Type": 1,
    "Code": "PATRICK50VKQJX"
  },
  {
    "id": 139,
    "lastName": "Scherens",
    "firstName": "Jacky",
    "email": "jacky.scherens@sacsius.be",
    "Type": 1,
    "Code": "PATRICK50ZUYGT"
  },
  {
    "id": 140,
    "lastName": "Schiemsky",
    "firstName": "Frederik",
    "email": "info@ia-interieurarchitecten.be",
    "Type": 1,
    "Code": "PATRICK50DFLPS"
  },
  {
    "id": 141,
    "lastName": "Schillemans",
    "firstName": "Jan",
    "email": "sky70307@skynet.be",
    "Type": 1,
    "Code": "PATRICK50HYIRF"
  },
  {
    "id": 142,
    "lastName": "Schiltz",
    "firstName": "Willem-Frederik",
    "email": "wfschiltz@mac.com",
    "Type": 1,
    "Code": "PATRICK50OWVSF"
  },
  {
    "id": 143,
    "lastName": "Schulpen",
    "firstName": "Karel",
    "email": "karel.schulpen@arcaslaw.be",
    "Type": 1,
    "Code": "PATRICK50FBVZB"
  },
  {
    "id": 144,
    "lastName": "Smekens",
    "firstName": "Joery",
    "email": "joery@groepsmekens.be",
    "Type": 1,
    "Code": "PATRICK50KJMSU"
  },
  {
    "id": 145,
    "lastName": "Smekens",
    "firstName": "Thierry",
    "email": "thierry@groepsmekens.be",
    "Type": 1,
    "Code": "PATRICK50TTKNI"
  },
  {
    "id": 146,
    "lastName": "Smets",
    "firstName": "Jeroen",
    "email": "jeroenjozefsmets@gmail.com",
    "Type": 1,
    "Code": "PATRICK50ZADLN"
  },
  {
    "id": 147,
    "lastName": "Smolders",
    "firstName": "Frank",
    "email": "fs@urbanestates.be",
    "Type": 1,
    "Code": "PATRICK50WNDEF"
  },
  {
    "id": 148,
    "lastName": "Spedale",
    "firstName": "Enza",
    "email": "enza.spedale@esv-consulting.com",
    "Type": 1,
    "Code": "PATRICK50WDRCK"
  },
  {
    "id": 149,
    "lastName": "Standaert",
    "firstName": "Geert",
    "email": "stag@viessmann.com",
    "Type": 1,
    "Code": "PATRICK50UTCHG"
  },
  {
    "id": 150,
    "lastName": "Stoef",
    "firstName": "Rebecca",
    "email": "rebeccastouf@gmail.com",
    "Type": 1,
    "Code": "PATRICK50NGIDJ"
  },
  {
    "id": 151,
    "lastName": "Stuer",
    "firstName": "Luc",
    "email": "stuer.luc@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50SPUOK"
  },
  {
    "id": 152,
    "lastName": "Ulrix",
    "firstName": "Rudi",
    "email": "rudi_ulrix@yahoo.com",
    "Type": 1,
    "Code": "PATRICK50QFUVO"
  },
  {
    "id": 153,
    "lastName": "Utica",
    "firstName": "Florin",
    "email": "uticafj@yahoo.com",
    "Type": 1,
    "Code": "PATRICK50WEETV"
  },
  {
    "id": 154,
    "lastName": "Valibalouch",
    "firstName": "Reza",
    "email": "r.valibalouch@lange-wapper.be",
    "Type": 1,
    "Code": "PATRICK50CEMWM"
  },
  {
    "id": 155,
    "lastName": "Van Bulck",
    "firstName": "Dirk",
    "email": "dirk@vanbulckvg.be",
    "Type": 1,
    "Code": "PATRICK50QUFLH"
  },
  {
    "id": 156,
    "lastName": "Van Campenhout",
    "firstName": "Ludo",
    "email": "ludo.vancampenhout@stad.antwerpen.be",
    "Type": 1,
    "Code": "PATRICK50XRHRU"
  },
  {
    "id": 157,
    "lastName": "Van Dam",
    "firstName": "Frank",
    "email": "technischstudiebureel@proximus.be",
    "Type": 1,
    "Code": "PATRICK50LZIRW"
  },
  {
    "id": 158,
    "lastName": "Van de Cloot",
    "firstName": "Ivan",
    "email": "Ivan.VandeCloot@itinerainstitute.org",
    "Type": 1,
    "Code": "PATRICK50UXJHF"
  },
  {
    "id": 159,
    "lastName": "Van de Velde",
    "firstName": "Rob",
    "email": "rob.vandevelde@n-va.be",
    "Type": 1,
    "Code": "PATRICK50XAJXX"
  },
  {
    "id": 160,
    "lastName": "Van der Paal",
    "firstName": "Erik",
    "email": "erik@vanderpaal.be",
    "Type": 1,
    "Code": "PATRICK50UYYBZ"
  },
  {
    "id": 161,
    "lastName": "Van Der Snickt",
    "firstName": "Jan",
    "email": "Jan.VanderSnickt@cottyn.eu",
    "Type": 1,
    "Code": "PATRICK50XOHCF"
  },
  {
    "id": 162,
    "lastName": "Van Dessel",
    "firstName": "Bruno",
    "email": "bruno@admgroup.be",
    "Type": 1,
    "Code": "PATRICK50GBJPG"
  },
  {
    "id": 163,
    "lastName": "Van Eerd",
    "firstName": "Marc",
    "email": "mve@vaneerdvastgoed.com",
    "Type": 1,
    "Code": "PATRICK50OVLPP"
  },
  {
    "id": 164,
    "lastName": "Van Gogh",
    "firstName": "Bruno",
    "email": "bruno@vangoghenco.be",
    "Type": 1,
    "Code": "PATRICK50LUXOV"
  },
  {
    "id": 165,
    "lastName": "Van Grieken",
    "firstName": "Jurgen",
    "email": "jurgen.vangrieken@comacon.be",
    "Type": 1,
    "Code": "PATRICK50TGJAP"
  },
  {
    "id": 166,
    "lastName": "Van Hamme",
    "firstName": "Tom",
    "email": "tom.vanhamme@vhbprojects.be",
    "Type": 1,
    "Code": "PATRICK50YIPXS"
  },
  {
    "id": 167,
    "lastName": "Van Hoecke",
    "firstName": "Frank",
    "email": "fvh@verelst.be",
    "Type": 1,
    "Code": "PATRICK50SFJSB"
  },
  {
    "id": 168,
    "lastName": "Van Immerseel",
    "firstName": "Inge",
    "email": "inge@why5research.com",
    "Type": 1,
    "Code": "PATRICK50ONRQB"
  },
  {
    "id": 169,
    "lastName": "Van Look",
    "firstName": "Diane",
    "email": "dianevanlook@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50XNXHX"
  },
  {
    "id": 170,
    "lastName": "Van Meerbeeck",
    "firstName": "Ren�",
    "email": "rene.vanmeerbeeck@stadsbader.com",
    "Type": 1,
    "Code": "PATRICK50HVLQX"
  },
  {
    "id": 171,
    "lastName": "Van Moerkercke",
    "firstName": "Max",
    "email": "maxence.vanmoerkercke@groupverbaet.be",
    "Type": 1,
    "Code": "PATRICK50YZGOF"
  },
  {
    "id": 172,
    "lastName": "Van Oorschot",
    "firstName": "Koen",
    "email": "",
    "Type": 1,
    "Code": "PATRICK50LJWGK"
  },
  {
    "id": 173,
    "lastName": "Van Osta",
    "firstName": "Martine",
    "email": "Martine@intercontex.eu",
    "Type": 1,
    "Code": "PATRICK50XDXGR"
  },
  {
    "id": 174,
    "lastName": "Van Overloop",
    "firstName": "Eric",
    "email": "evo@tac.be",
    "Type": 1,
    "Code": "PATRICK50STDJI"
  },
  {
    "id": 175,
    "lastName": "Van Riel",
    "firstName": "Joris",
    "email": "jvr@asarte.be",
    "Type": 1,
    "Code": "PATRICK50JKMAJ"
  },
  {
    "id": 176,
    "lastName": "Van Tillo",
    "firstName": "Joris",
    "email": "",
    "Type": 1,
    "Code": "PATRICK50MSDCL"
  },
  {
    "id": 177,
    "lastName": "Vandenbulcke",
    "firstName": "Luk",
    "email": "luka.bvba@gmail.com",
    "Type": 1,
    "Code": "PATRICK50DYDXX"
  },
  {
    "id": 178,
    "lastName": "Vanduffel",
    "firstName": "Dirk",
    "email": "dirk@nunc-contemporary.be",
    "Type": 1,
    "Code": "PATRICK50HYCLH"
  },
  {
    "id": 179,
    "lastName": "Vanhees",
    "firstName": "Marc",
    "email": "Marc.Vanhees@Democo.be",
    "Type": 1,
    "Code": "PATRICK50LPCYR"
  },
  {
    "id": 180,
    "lastName": "Vanhoof",
    "firstName": "Marc",
    "email": "m.vanhoof@btsnv.be",
    "Type": 1,
    "Code": "PATRICK50NIFGA"
  },
  {
    "id": 181,
    "lastName": "Vanmaldeghem",
    "firstName": "Peter",
    "email": "PVM@realis.be",
    "Type": 1,
    "Code": "PATRICK50GVALC"
  },
  {
    "id": 182,
    "lastName": "Vanoppen",
    "firstName": "Gert",
    "email": "info@gertvanoppen.be",
    "Type": 1,
    "Code": "PATRICK50VNMWD"
  },
  {
    "id": 183,
    "lastName": "Vekemans",
    "firstName": "Ludovis",
    "email": "ludovic@for2projects.be",
    "Type": 1,
    "Code": "PATRICK50BINHV"
  },
  {
    "id": 184,
    "lastName": "Verbaet",
    "firstName": "Philippe",
    "email": "philippe@verbaet.eu",
    "Type": 1,
    "Code": "PATRICK50EIPKF"
  },
  {
    "id": 185,
    "lastName": "Verheijen",
    "firstName": "Luc",
    "email": "luc.verheijen@optifisk.be",
    "Type": 1,
    "Code": "PATRICK50FNGEC"
  },
  {
    "id": 186,
    "lastName": "Verhoeven",
    "firstName": "Philippe",
    "email": "verhoeven_philippe@hotmail.com",
    "Type": 1,
    "Code": "PATRICK50SDSGR"
  },
  {
    "id": 187,
    "lastName": "Vermeulen",
    "firstName": "Brecht",
    "email": "brecht.vermeulen@skynet.be",
    "Type": 1,
    "Code": "PATRICK50XFNNL"
  },
  {
    "id": 188,
    "lastName": "Vermeulen",
    "firstName": "Gunter",
    "email": "gunter@mavconsult.be",
    "Type": 1,
    "Code": "PATRICK50IFMYH"
  },
  {
    "id": 189,
    "lastName": "Vermeulen",
    "firstName": "Stefaan",
    "email": "s.vermeulen@climatesolutions.be",
    "Type": 1,
    "Code": "PATRICK50MIIPZ"
  },
  {
    "id": 190,
    "lastName": "Versmissen",
    "firstName": "Frans",
    "email": "frans.versmissen@skynet.be",
    "Type": 1,
    "Code": "PATRICK50RUPKC"
  },
  {
    "id": 191,
    "lastName": "Volders",
    "firstName": "Bart",
    "email": "bart.volders@arcaslaw.be",
    "Type": 1,
    "Code": "PATRICK50OIMOO"
  },
  {
    "id": 192,
    "lastName": "Warson",
    "firstName": "Gert",
    "email": "warson@dwl-law.be",
    "Type": 1,
    "Code": "PATRICK50SMMLU"
  },
  {
    "id": 193,
    "lastName": "Weyn",
    "firstName": "Kris",
    "email": "Kris.weyn@ab.eiffage.be",
    "Type": 1,
    "Code": "PATRICK50AWHBQ"
  },
  {
    "id": 194,
    "lastName": "Wiercx",
    "firstName": "Wim",
    "email": "Wim.WIERCX@belgacom.be",
    "Type": 1,
    "Code": "PATRICK50KYXIT"
  },
  {
    "id": 195,
    "lastName": "Andrei",
    "firstName": "Alina",
    "email": "alina@eurofors.com",
    "Type": 2,
    "Code": "PATRICK50PIQQV"
  },
  {
    "id": 196,
    "lastName": "Bontinck",
    "firstName": "John",
    "email": "bontinck.john@gmail.com",
    "Type": 2,
    "Code": "PATRICK50ZESHV"
  },
  {
    "id": 197,
    "lastName": "Boutefeu",
    "firstName": "Robert",
    "email": "robert@r-boutefeu.com",
    "Type": 2,
    "Code": "PATRICK50ZSEMC"
  },
  {
    "id": 198,
    "lastName": "De Braekeleer",
    "firstName": "Francis",
    "email": "fdb@belant.be",
    "Type": 2,
    "Code": "PATRICK50UWGUY"
  },
  {
    "id": 199,
    "lastName": "de Glas",
    "firstName": "Christine",
    "email": "christine.deglas@montea.com",
    "Type": 2,
    "Code": "PATRICK50QEXUQ"
  },
  {
    "id": 200,
    "lastName": "de Salle",
    "firstName": "Christian",
    "email": "sales@intersat.be",
    "Type": 2,
    "Code": "PATRICK50CWETD"
  },
  {
    "id": 201,
    "lastName": "Desmyter",
    "firstName": "Anneleen",
    "email": "anneleen.desmyter@quares.be",
    "Type": 2,
    "Code": "PATRICK50TQZGN"
  },
  {
    "id": 202,
    "lastName": "Foblets",
    "firstName": "Jan",
    "email": "jan@foblets.be",
    "Type": 2,
    "Code": "PATRICK50ZIOPM"
  },
  {
    "id": 203,
    "lastName": "Gillijns",
    "firstName": "Guy",
    "email": "guy.gillijns@telenet.be",
    "Type": 2,
    "Code": "PATRICK50UGFER"
  },
  {
    "id": 204,
    "lastName": "Hayen",
    "firstName": "Ann",
    "email": "ann.hayen@hayen-paris.com",
    "Type": 2,
    "Code": "PATRICK50QQQPC"
  },
  {
    "id": 205,
    "lastName": "Karmanovas",
    "firstName": "Tomas",
    "email": "tkarmanovas@gmail.com",
    "Type": 2,
    "Code": "PATRICK50ZJKBL"
  },
  {
    "id": 206,
    "lastName": "Looyens",
    "firstName": "Michel",
    "email": "mlooyens@cokecce.com",
    "Type": 2,
    "Code": "PATRICK50JFNQO"
  },
  {
    "id": 207,
    "lastName": "Lybaert",
    "firstName": "Hendrik",
    "email": "hendrik.lybaert@outlook.com",
    "Type": 2,
    "Code": "PATRICK50YBQQR"
  },
  {
    "id": 208,
    "lastName": "O",
    "firstName": "Dimitri",
    "email": "dimitri.o@hotmail.be",
    "Type": 2,
    "Code": "PATRICK50DBLNB"
  },
  {
    "id": 209,
    "lastName": "O",
    "firstName": "Patrick",
    "email": "patrick.o@advalvas.be",
    "Type": 2,
    "Code": "PATRICK50RQVZW"
  },
  {
    "id": 210,
    "lastName": "Rengle",
    "firstName": "Jo",
    "email": "rengle@bbf.be",
    "Type": 2,
    "Code": "PATRICK50ETMNS"
  },
  {
    "id": 211,
    "lastName": "Turtelboom",
    "firstName": "Annemie",
    "email": "annemie.turtelboom@gmail.com",
    "Type": 2,
    "Code": "PATRICK50AYALX"
  },
  {
    "id": 212,
    "lastName": "Van Liefferinghe",
    "firstName": "Philippe",
    "email": "philippe.vanliefferinge@telenet.be",
    "Type": 2,
    "Code": "PATRICK50EMNSY"
  },
  {
    "id": 213,
    "lastName": "Verhavert",
    "firstName": "Bart",
    "email": "bart.verhavert@il-d.be",
    "Type": 2,
    "Code": "PATRICK50TDIMT"
  }
]

const oldCodes = [
  {
    "id": 0,
    "code": "PATRICK50NAAXF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 1,
    "code": "PATRICK50IHLTD",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 2,
    "code": "PATRICK50KSGVA",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 3,
    "code": "PATRICK50PFUOQ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 4,
    "code": "PATRICK50QXGPH",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 5,
    "code": "PATRICK50OWNHT",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 6,
    "code": "PATRICK50LWFHE",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 7,
    "code": "PATRICK50XXHZS",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 8,
    "code": "PATRICK50QJJEW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 9,
    "code": "PATRICK50ESUJV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 10,
    "code": "PATRICK50PSZLJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 11,
    "code": "PATRICK50RYQZK",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 12,
    "code": "PATRICK50OHDBK",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 13,
    "code": "PATRICK50KQMFC",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 14,
    "code": "PATRICK50OCGWF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 15,
    "code": "PATRICK50XLWYV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 16,
    "code": "PATRICK50WTQFP",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 17,
    "code": "PATRICK50NVXKM",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 18,
    "code": "PATRICK50QHJSF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 19,
    "code": "PATRICK50IBHNG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 20,
    "code": "PATRICK50NPQMZ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 21,
    "code": "PATRICK50AOYVJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 22,
    "code": "PATRICK50GLKRO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 23,
    "code": "PATRICK50ZKFYG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 24,
    "code": "PATRICK50EPHTI",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 25,
    "code": "PATRICK50KQYCG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 26,
    "code": "PATRICK50IHUYI",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 27,
    "code": "PATRICK50AMUJO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 28,
    "code": "PATRICK50AEUEH",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 29,
    "code": "PATRICK50TQJRU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 30,
    "code": "PATRICK50LGVUZ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 31,
    "code": "PATRICK50WUOCI",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 32,
    "code": "PATRICK50APKNN",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 33,
    "code": "PATRICK50FMGKV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 34,
    "code": "PATRICK50SENJC",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 35,
    "code": "PATRICK50WEKAR",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 36,
    "code": "PATRICK50HWLWU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 37,
    "code": "PATRICK50REVYF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 38,
    "code": "PATRICK50SIJQI",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 39,
    "code": "PATRICK50IAESO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 40,
    "code": "PATRICK50DOYGG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 41,
    "code": "PATRICK50EAARS",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 42,
    "code": "PATRICK50OVWEP",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 43,
    "code": "PATRICK50HHXIV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 44,
    "code": "PATRICK50EVAPV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 45,
    "code": "PATRICK50BVCAA",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 46,
    "code": "PATRICK50RCOTW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 47,
    "code": "PATRICK50ZPSOD",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 48,
    "code": "PATRICK50XAWLG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 49,
    "code": "PATRICK50FSYNB",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 50,
    "code": "PATRICK50GCWUU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 51,
    "code": "PATRICK50ZDPKF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 52,
    "code": "PATRICK50RRXLY",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 53,
    "code": "PATRICK50YDHFQ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 54,
    "code": "PATRICK50LYQDC",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 55,
    "code": "PATRICK50ZJSUY",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 56,
    "code": "PATRICK50ATLHS",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 57,
    "code": "PATRICK50WMQEG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 58,
    "code": "PATRICK50MUGSJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 59,
    "code": "PATRICK50IUUQR",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 60,
    "code": "PATRICK50HDQDG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 61,
    "code": "PATRICK50SKQBU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 62,
    "code": "PATRICK50YIPHL",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 63,
    "code": "PATRICK50USUUE",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 64,
    "code": "PATRICK50GRKHR",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 65,
    "code": "PATRICK50HAEWW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 66,
    "code": "PATRICK50MLDFH",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 67,
    "code": "PATRICK50QLQDK",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 68,
    "code": "PATRICK50FYYKW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 69,
    "code": "PATRICK50VFBGJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 70,
    "code": "PATRICK50PYSGC",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 71,
    "code": "PATRICK50IZUWZ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 72,
    "code": "PATRICK50OVXXW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 73,
    "code": "PATRICK50WAQCW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 74,
    "code": "PATRICK50NJGQJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 75,
    "code": "PATRICK50FUCGP",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 76,
    "code": "PATRICK50EJGER",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 77,
    "code": "PATRICK50BFBUC",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 78,
    "code": "PATRICK50AOZRV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 79,
    "code": "PATRICK50WXHFV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 80,
    "code": "PATRICK50PBTMN",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 81,
    "code": "PATRICK50DTYBW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 82,
    "code": "PATRICK50ABSNR",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 83,
    "code": "PATRICK50FEUJW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 84,
    "code": "PATRICK50YEWGN",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 85,
    "code": "PATRICK50WJEIO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 86,
    "code": "PATRICK50UIZYL",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 87,
    "code": "PATRICK50NWQSM",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 88,
    "code": "PATRICK50PTOSO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 89,
    "code": "PATRICK50RZOHU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 90,
    "code": "PATRICK50GYVSU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 91,
    "code": "PATRICK50YNHNF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 92,
    "code": "PATRICK50UVWYW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 93,
    "code": "PATRICK50BUMOZ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 94,
    "code": "PATRICK50LPKRW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 95,
    "code": "PATRICK50TJUZH",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 96,
    "code": "PATRICK50PJNQO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 97,
    "code": "PATRICK50CMLZV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 98,
    "code": "PATRICK50CWQUN",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 99,
    "code": "PATRICK50WEEDX",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 100,
    "code": "PATRICK50AIGYX",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 101,
    "code": "PATRICK50OBSIZ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 102,
    "code": "PATRICK50HQULT",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 103,
    "code": "PATRICK50VVEDN",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 104,
    "code": "PATRICK50LZNLH",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 105,
    "code": "PATRICK50MUWJI",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 106,
    "code": "PATRICK50CMFYD",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 107,
    "code": "PATRICK50LXPJG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 108,
    "code": "PATRICK50HPRQV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 109,
    "code": "PATRICK50KLSLF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 110,
    "code": "PATRICK50JSBCG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 111,
    "code": "PATRICK50GUHRE",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 112,
    "code": "PATRICK50HEUPS",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 113,
    "code": "PATRICK50GUCYP",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 114,
    "code": "PATRICK50GBCJS",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 115,
    "code": "PATRICK50TVTET",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 116,
    "code": "PATRICK50FCDXS",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 117,
    "code": "PATRICK50FFDRY",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 118,
    "code": "PATRICK50ESNSP",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 119,
    "code": "PATRICK50EXDSQ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 120,
    "code": "PATRICK50YAFSJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 121,
    "code": "PATRICK50XMHVJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 122,
    "code": "PATRICK50GJSUI",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 123,
    "code": "PATRICK50QNPYA",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 124,
    "code": "PATRICK50AABDR",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 125,
    "code": "PATRICK50CFNIM",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 126,
    "code": "PATRICK50NMYKK",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 127,
    "code": "PATRICK50QEONM",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 128,
    "code": "PATRICK50VGXVO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 129,
    "code": "PATRICK50BWZOZ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 130,
    "code": "PATRICK50TOYNA",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 131,
    "code": "PATRICK50QHYUG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 132,
    "code": "PATRICK50JTVFQ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 133,
    "code": "PATRICK50ZZWNX",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 134,
    "code": "PATRICK50IWKZT",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 135,
    "code": "PATRICK50TSFVL",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 136,
    "code": "PATRICK50RPVYD",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 137,
    "code": "PATRICK50TBBZO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 138,
    "code": "PATRICK50VKQJX",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 139,
    "code": "PATRICK50ZUYGT",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 140,
    "code": "PATRICK50DFLPS",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 141,
    "code": "PATRICK50HYIRF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 142,
    "code": "PATRICK50OWVSF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 143,
    "code": "PATRICK50FBVZB",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 144,
    "code": "PATRICK50KJMSU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 145,
    "code": "PATRICK50TTKNI",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 146,
    "code": "PATRICK50ZADLN",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 147,
    "code": "PATRICK50WNDEF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 148,
    "code": "PATRICK50WDRCK",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 149,
    "code": "PATRICK50UTCHG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 150,
    "code": "PATRICK50NGIDJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 151,
    "code": "PATRICK50SPUOK",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 152,
    "code": "PATRICK50QFUVO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 153,
    "code": "PATRICK50WEETV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 154,
    "code": "PATRICK50CEMWM",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 155,
    "code": "PATRICK50QUFLH",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 156,
    "code": "PATRICK50XRHRU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 157,
    "code": "PATRICK50LZIRW",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 158,
    "code": "PATRICK50UXJHF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 159,
    "code": "PATRICK50XAJXX",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 160,
    "code": "PATRICK50UYYBZ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 161,
    "code": "PATRICK50XOHCF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 162,
    "code": "PATRICK50GBJPG",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 163,
    "code": "PATRICK50OVLPP",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 164,
    "code": "PATRICK50LUXOV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 165,
    "code": "PATRICK50TGJAP",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 166,
    "code": "PATRICK50YIPXS",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 167,
    "code": "PATRICK50SFJSB",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 168,
    "code": "PATRICK50ONRQB",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 169,
    "code": "PATRICK50XNXHX",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 170,
    "code": "PATRICK50HVLQX",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 171,
    "code": "PATRICK50YZGOF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 172,
    "code": "PATRICK50LJWGK",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 173,
    "code": "PATRICK50XDXGR",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 174,
    "code": "PATRICK50STDJI",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 175,
    "code": "PATRICK50JKMAJ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 176,
    "code": "PATRICK50MSDCL",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 177,
    "code": "PATRICK50DYDXX",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 178,
    "code": "PATRICK50HYCLH",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 179,
    "code": "PATRICK50LPCYR",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 180,
    "code": "PATRICK50NIFGA",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 181,
    "code": "PATRICK50GVALC",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 182,
    "code": "PATRICK50VNMWD",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 183,
    "code": "PATRICK50BINHV",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 184,
    "code": "PATRICK50EIPKF",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 185,
    "code": "PATRICK50FNGEC",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 186,
    "code": "PATRICK50SDSGR",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 187,
    "code": "PATRICK50XFNNL",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 188,
    "code": "PATRICK50IFMYH",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 189,
    "code": "PATRICK50MIIPZ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 190,
    "code": "PATRICK50RUPKC",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 191,
    "code": "PATRICK50OIMOO",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 192,
    "code": "PATRICK50SMMLU",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 193,
    "code": "PATRICK50AWHBQ",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 194,
    "code": "PATRICK50KYXIT",
    "type": 1,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 195,
    "code": "PATRICK50PIQQV",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 196,
    "code": "PATRICK50ZESHV",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 197,
    "code": "PATRICK50ZSEMC",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 198,
    "code": "PATRICK50UWGUY",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 199,
    "code": "PATRICK50QEXUQ",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 200,
    "code": "PATRICK50CWETD",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 201,
    "code": "PATRICK50TQZGN",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 202,
    "code": "PATRICK50ZIOPM",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 203,
    "code": "PATRICK50UGFER",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 204,
    "code": "PATRICK50QQQPC",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 205,
    "code": "PATRICK50ZJKBL",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 206,
    "code": "PATRICK50JFNQO",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 207,
    "code": "PATRICK50YBQQR",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 208,
    "code": "PATRICK50DBLNB",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 209,
    "code": "PATRICK50RQVZW",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 210,
    "code": "PATRICK50ETMNS",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 211,
    "code": "PATRICK50AYALX",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 212,
    "code": "PATRICK50EMNSY",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  },
  {
    "id": 213,
    "code": "PATRICK50TDIMT",
    "type": 2,
    "status": "available",
    "personId": null,
    "extraPersonId": null,
    "lastName": null
  }
]

adminCodes.map((adminCode, index) => {
    if (adminCode.id === oldCodes[index].id) {
      oldCodes[index].asocciation = {
        firstName: adminCode.firstName,
        lastName: adminCode.lastName,
        email: adminCode.email
      }
    } else {
      console.log(`for id=${adminCode.id}, ids differ`)
    }
  })

fs.writeFile('newCodes.json', JSON.stringify(oldCodes, null, '\t'));

module.exports = {
    codes,
    persons
  }