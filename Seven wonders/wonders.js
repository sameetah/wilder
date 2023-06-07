const wonders = document.querySelectorAll(
  ".wonders1, .wonders2,.wonders3, .wonders4,.wonders5, .wonders6,.wonders7"
);
const image = document.querySelector(".background-image");
const popup = document.querySelector(".popup");
const link = document.querySelector(".close");
const info = document.querySelector(".popup p");

const popupFunc = () => {
  image.classList.toggle("active");
  popup.classList.remove("popup");
  popup.classList.add("popup-after");
};

wonders.forEach((wonder, index) => {
  wonder.addEventListener("click", function () {
    popupFunc();
    if (index === 0) {
      info.innerText =
        "Chichen Itza Location: The ancient city of Chichen Itza is located in the state of Yucatan, eastern Mexico. Right in the middle of Merida Yucatan and the famous city of Cancún Quintana Roo, Chichen Itza is settled. The exact coordinates (in case you wonder) are 20.6843° N, 88.5678° W.";
    } else if (index === 1) {
      info.innerText =
        "Machu Picchu, also spelled Machupijchu, site of ancient Inca ruins located about 50 miles (80 km) northwest of Cuzco, Peru, in the Cordillera de Vilcabamba of the Andes Mountains. It is perched above the Urubamba River valley in a narrow saddle between two sharp peaks—Machu Picchu (“Old Peak”) and Huayna Picchu (“New Peak”)—at an elevation of 7,710 feet (2,350 metres). One of the few major pre-Columbian ruins found nearly intact, Machu Picchu was designated a UNESCO World Heritage site in 1983.";
    } else if (index === 2) {
      info.innerText =
        "Christ the Redeemer, Portuguese Cristo Redentor, colossal statue of Jesus Christ at the summit of Mount Corcovado, Rio de Janeiro, southeastern Brazil. Celebrated in traditional and popular songs, Corcovado towers over Rio de Janeiro, Brazil’s principal port city. The statue of Christ the Redeemer was completed in 1931 and stands 98 feet (30 metres) tall, its horizontally outstretched arms spanning 92 feet (28 metres). The statue has become emblematic of both the city of Rio de Janeiro and the whole nation of Brazil.";
    } else if (index === 3) {
      info.innerText =
        "Flavian emperor Vespasian had this amphitheatre that could accommodate 65,000 spectators built in the year 72 CE. Construction of the Colosseum took eight years and was financed with plunder taken from Jerusalem. The Colosseum, also called the Amphitheatrum Flavium, was opened by emperor Titus with games and festivities that lasted 100 days and cost the lives of 5,000 animals.";
    } else if (index === 4) {
      info.innerText =
        "It is also known as the Great Pyramid of Khufu or the Great Pyramid of the pharaoh Cheops as was called by Greeks; who listed this pyramid as the first wonder of the world. It is the only one of the seven ancient wonders still remaining to our days and one of the most famous tourist attractions in the modern world.";
    } else if (index === 5) {
      info.innerText =
        "The Great Wall of China exists as one of the greatest spectacles in the world, with a history of over 2,300 years. The longest wall in the world was constructed over generations by the emperors of China to protect their territory. The vision was to safeguard the land from northern nomadic intruders. For millennia, long before China was tied into one country, during the Warring States period, such walls helped in securing the borders.";
    } else {
      info.innerText =
        "An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.";
    }
  });
});

link.addEventListener("click", function (event) {
  event.preventDefault();

 
  if (image.classList.contains('active')) {
    image.classList.toggle('active');
  }
  popup.classList.remove("popup-after");
  popup.classList.add("popup");
});
