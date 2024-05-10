function myFunction()
{
    var x = Math.floor((Math.random() * 199));
    
    const locs = [   
    "Machu Picchu, Peru",
    "The Great Barrier Reef, Australia",
    "Santorini, Greece",
    "Serengeti National Park, Tanzania",
    "Kyoto, Japan",
    "Petra, Jordan",
    "Yellowstone National Park, USA",
    "Venice, Italy",
    "Bora Bora, French Polynesia",
    "Rio de Janeiro, Brazil",
    "The Maldives",
    "The Galápagos Islands, Ecuador",
    "Angkor Wat, Cambodia",
    "Marrakech, Morocco",
    "Dubrovnik, Croatia",
    "The Taj Mahal, India",
    "Reykjavik, Iceland",
    "Easter Island, Chile",
    "The Grand Canyon, USA",
    "Cape Town, South Africa",
    "Edinburgh, Scotland",
    "Banff National Park, Canada",
    "The Great Wall of China",
    "The Amazon Rainforest, Brazil",
    "Barcelona, Spain",
    "Fiji",
    "Yosemite National Park, USA",
    "Prague, Czech Republic",
    "Queenstown, New Zealand",
    "St. Petersburg, Russia",
    "Cinque Terre, Italy",
    "Torres del Paine National Park, Chile",
    "Istanbul, Turkey",
    "Vancouver, Canada",
    "Cairo, Egypt",
    "The Swiss Alps",
    "Buenos Aires, Argentina",
    "The Sahara Desert",
    "Seoul, South Korea",
    "Budapest, Hungary",
    "Ngorongoro Crater, Tanzania",
    "The Great Smoky Mountains, USA",
    "Phuket, Thailand",
    "Lisbon, Portugal",
    "Lake Louise, Canada",
    "The Acropolis of Athens, Greece",
    "Edinburgh Castle, Scotland",
    "Bryce Canyon National Park, USA",
    "Chichen Itza, Mexico",
    "Sydney Opera House, Australia",
    "Stockholm, Sweden",
    "Bali, Indonesia",
    "The Arctic Circle",
    "Dubai, UAE",
    "Salar de Uyuni, Bolivia",
    "The Vatican City",
    "The Dead Sea, Jordan/Israel",
    "Petra, Jordan",
    "Hoi An, Vietnam",
    "The Great Wall of China",
    "Mount Everest, Nepal",
    "Lake Titicaca, Peru/Bolivia",
    "The Colosseum, Italy",
    "The Alhambra, Spain",
    "The Blue Lagoon, Iceland",
    "The Palace of Versailles, France",
    "The Sahara Desert",
    "The Pyramids of Giza, Egypt",
    "The Great Mosque of Cordoba, Spain",
    "The Matterhorn, Switzerland",
    "The Cliffs of Moher, Ireland",
    "The Great Ocean Road, Australia",
    "The Panama Canal",
    "The Plitvice Lakes, Croatia",
    "The Statue of Liberty, USA",
    "The Eiffel Tower, France",
    "The Kremlin, Russia",
    "The Blue Mosque, Turkey",
    "The White Desert, Egypt",
    "The Great Zimbabwe Ruins",
    "The Serengeti Migration, Tanzania/Kenya",
    "The White Cliffs of Dover, England",
    "The Carpathian Mountains, Romania",
    "The Blue Mountains, Australia",
    "The Twelve Apostles, Australia",
    "The Namib Desert, Namibia",
    "The Neuschwanstein Castle, Germany",
    "The Okavango Delta, Botswana",
    "The Terracotta Army, China",
    "The Atacama Desert, Chile",
    "The Komodo Islands, Indonesia",
    "The Victoria Falls, Zambia/Zimbabwe",
    "The Niagara Falls, USA/Canada",
    "The Sahara Desert",
    "The Giant's Causeway, Northern Ireland",
    "The Great Sphinx of Giza, Egypt",
    "The Parthenon, Greece",
    "The Matterhorn, Switzerland",
    "The Valley of the Kings, Egypt",
    "The Colosseum, Italy",
    "The Amalfi Coast, Italy",
    "The Norwegian Fjords",
    "The Dolomites, Italy",
    "The Maldives",
    "The Canadian Rockies",
    "The Great Barrier Reef, Australia",
    "The Scottish Highlands",
    "The Red Square, Russia",
    "The Forbidden City, China",
    "The Sahara Desert",
    "The Dead Sea, Jordan/Israel",
    "The Amazon Rainforest, Brazil",
    "The Blue Hole, Belize",
    "The Bagan Temples, Myanmar",
    "The Moai Statues, Easter Island",
    "The Angkor Wat, Cambodia",
    "The Rocky Mountains, USA/Canada",
    "The Great Wall of China",
    "The Machu Picchu, Peru",
    "The Grand Canyon, USA",
    "The Victoria Falls, Zambia/Zimbabwe",
    "The Iguazu Falls, Argentina/Brazil",
    "The Atacama Desert, Chile",
    "The Torres del Paine National Park, Chile",
    "The Milford Sound, New Zealand",
    "The Uluru (Ayers Rock), Australia",
    "The Mount Kilimanjaro, Tanzania",
    "The Ha Long Bay, Vietnam",
    "The Cliffs of Moher, Ireland",
    "The Blue Lagoon, Iceland",
    "The Yosemite National Park, USA",
    "The Banff National Park, Canada",
    "The Galápagos Islands, Ecuador",
    "The Amazon Rainforest, Brazil",
    "The Serengeti National Park, Tanzania",
    "The Okavango Delta, Botswana",
    "The Kruger National Park, South Africa",
    "The Masai Mara National Reserve, Kenya",
    "The Ngorongoro Crater, Tanzania",
    "The Pantanal Wetlands, Brazil",
    "The Sundarbans, India/Bangladesh",
    "The Everglades National Park, USA",
    "The Komodo National Park, Indonesia",
    "The Yellowstone National Park, USA",
    "The Great Barrier Reef, Australia",
    "The Bwindi Impenetrable Forest, Uganda",
    "The Costa Rican Rainforest",
    "The Churchill, Manitoba (Polar Bear Capital)",
    "The Raja Ampat Islands, Indonesia",
    "The Torres del Paine National Park, Chile",
    "The Denali National Park, USA",
    "The Canadian Arctic",
    "The Faroe Islands",
    "The Lofoten Islands, Norway",
    "The Isle of Skye, Scotland",
    "The Easter Island, Chile",
    "The Torres Strait Islands, Australia",
    "The Galápagos Islands, Ecuador",
    "The Seychelles",
    "The Canary Islands, Spain",
    "The Hawaiian Islands, USA",
    "The Fiji Islands",
    "The Tahiti, French Polynesia",
    "The Samoa Islands",
    "The Cook Islands",
    "The Azores, Portugal",
    "The Maldives",
    "The Andaman and Nicobar Islands, India",
    "The Palau Islands",
    "The Solomon Islands",
    "The Marshall Islands",
    "The Federated States of Micronesia",
    "The Tonga Islands",
    "The Vanuatu Islands",
    "The Kiribati Islands",
    "The Tuvalu Islands",
    "The Nauru Islands",
    "The Pitcairn Islands",
    "The Tristan da Cunha Islands",
    "The Saint Helena Island",
    "The Christmas Island",
    "The Cocos (Keeling) Islands",
    "The Norfolk Island",
    "The British Virgin Islands",
    "The Cayman Islands",
    "The Turks and Caicos Islands",
    "The Anguilla",
    "The Montserrat",
    "The Saint Kitts and Nevis",
    "The Saint Vincent and the Grenadines",
    "The Antigua and Barbuda",
    "The Saint Lucia",
    "The Dominica",
    "The Grenada",
    "The Barbados",
    "The Saint Barthélemy",
    "The Saint Martin",
    "The Saba",
    "The Sint Eustatius",
    "The Curaçao"
    ]; 

    const place = locs[x];
    document.getElementById("name").innerHTML = place;

    console.log(place);

}
