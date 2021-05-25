// declaring variables

let img;
let clsblue;
let person;
let revie;
let nam;
let jo;
let prev;
let next;
let id;
let person_ht;

// initializing variables

img = document.querySelector("img[alt='person']");
clsblue = document.querySelector(".blue");
person = document.querySelector("#person");
revie = document.querySelector("#review");
nam = document.querySelector("#name");
jo = document.querySelector("#job");
prev = document.querySelector("#previous");
next = document.querySelector("#next");
person_ht = `${person.clientHeight}px`;

// setting image size same as container (width & height same) & clsblue size same as image

img.style.width = person_ht;
img.style.height = person_ht;
clsblue.style.width = person_ht;
clsblue.style.height = person_ht;

// data

let data = [
  {
    name: "Shinchan",
    job: "5 Year Old Boy",
    review:
      "Shinchan is my favourite cartoon character of all time. He is very best. No one can beat him. He is very cute. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/shinchan.png"); //for running at server
      } else {
        return "../Images/shinchan.png"; //for running locally
      }
    },
  },
  {
    name: "Doraemon",
    job: "Future Robot",
    review:
      "Doraemon is my favourite cartoon character of all time. He is very best. No one can beat him. He is very cute. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/doraemon.png"); //for running at server
      } else {
        return "../Images/doraemon.png"; //for running locally
      }
    },
  },
  {
    name: "Perman",
    job: "Superman",
    review:
      "Perman is my favourite cartoon character of all time. He is very best. No one can beat him. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/perman.png"); //for running at server
      } else {
        return "../Images/perman.png"; //for running locally
      }
    },
  },
  {
    name: "Kochikame",
    job: "Police Officer",
    review:
      "Kochikame is my favourite cartoon character of all time. He is very best. No one can beat him. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/kochikame.png"); //for running at server
      } else {
        return "../Images/kochikame.png"; //for running locally
      }
    },
  },
  {
    name: "Chhota Bheem",
    job: "SuperBoy",
    review:
      "Chhota Bheem is my favourite cartoon character of all time. He is very best. No one can beat him. He is very powerful. Watch him at Pogo TV. He is very popular. He is from India.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/bheem.png"); //for running at server
      } else {
        return "../Images/bheem.png"; //for running locally
      }
    },
  },
  {
    name: "Ninja Hattori",
    job: "Ninja",
    review:
      "Ninja Hattori is my favourite cartoon character of all time. He is very best. No one can beat him. Watch him at Sonic. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/hattori.png"); //for running at server
      } else {
        return "../Images/hattori.png"; //for running locally
      }
    },
  },
  {
    name: "Kiteretsu",
    job: "Inventor",
    review:
      "Kiteretsu is my favourite cartoon character of all time. He is very best. No one can beat him. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/kiteretsu.png"); //for running at server
      } else {
        return "../Images/kiteretsu.png"; //for running locally
      }
    },
  },
];

// put data in html

function put(number) {
  nam.textContent = data[number].name;
  jo.textContent = data[number].job;
  revie.textContent = data[number].review;
  img.src = data[number].image();
  id = number;
}

// load random character on DOMContentLoaded

window.addEventListener("DOMContentLoaded", () => {
  put(Math.floor(Math.random() * data.length)); // random no. b/w 0 & (data.length-1) including both of them
});

// previous & next function

prev.addEventListener("click", () => {
  if (id !== 0) {
    put(id - 1);
  } else {
    put(data.length - 1);
  }
});

next.addEventListener("click", () => {
  if (id != data.length - 1) {
    put(id + 1);
  } else {
    put(0);
  }
});
