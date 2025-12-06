
// ! virat

let virat = document.querySelector('.playcard img');
virat.addEventListener('mouseover', function () {
    virat.style.transform = "scale(1.1)";
    virat.style.boxShadow = "2px 3px 35px orange"
    virat.style.transition = "all 0.3s ease-in-out";
});
virat.addEventListener('mouseout', function () {
    virat.style.transform = "scale(1)";
    virat.style.boxShadow = "2px 3px 7px black";
});

let kohli = document.querySelector('.playcard');

let Viratbutton = document.getElementById('Viratbutton');
Viratbutton.addEventListener('click', function () {
    kohli.style.position = "relative";
    kohli.style.width = "100%";
    kohli.style.height = "auto";
    kohli.style.zIndex = "10";
    Viratbutton.innerText = "Minimize";

})

Viratbutton.addEventListener('dblclick', function () {
    kohli.style.width = "400px";
    kohli.style.height = "400px";
    kohli.style.position = "static";
    kohli.style.zIndex = "1";
    Viratbutton.innerText = "read more";

})

// ! rohit

let Rohit = document.querySelector('.playcard img#Rohit');
Rohit.addEventListener('mouseover', function () {
    Rohit.style.transform = "scale(1.1)";
    Rohit.style.boxShadow = "2px 3px 35px orange";
    Rohit.style.transition = "all 0.3s ease-in-out";
});
Rohit.addEventListener('mouseout', function () {
    Rohit.style.transform = "scale(1)";
    Rohit.style.boxShadow = "2px 3px 7px black";
})

let Rohitbutton = document.getElementById('Rohitbutton');
let playcard2 = document.querySelector('#playcard2');
Rohitbutton.addEventListener('click', function () {
    playcard2.style.position = "relative";
    playcard2.style.width = "100%";
    playcard2.style.height = "auto";
    playcard2.style.zIndex = "10";
    Rohitbutton.innerText = "Minimize";
});

Rohitbutton.addEventListener('dblclick', function () {
    playcard2.style.width = "400px";
    playcard2.style.height = "400px";
    playcard2.style.position = "static";
    playcard2.style.zIndex = "1";
    Rohitbutton.innerText = "read more";
});

// ! dhoni

let Dhoni = document.querySelector('.playcard img#Dhoni');
Dhoni.addEventListener('mouseover', function () {
    Dhoni.style.transform = "scale(1.1)";
    Dhoni.style.boxShadow = "2px 3px 35px orange";
    Dhoni.style.transition = "all 0.3s ease-in-out";
});
Dhoni.addEventListener('mouseout', function () {
    Dhoni.style.transform = "scale(1)";
    Dhoni.style.boxShadow = "2px 3px 7px black";
})




let Dhonibutton = document.getElementById('Dhonibutton');
let playcard3 = document.querySelector('#playcard3');

Dhonibutton.addEventListener('click', function () {
    playcard3.style.position = "relative";
    playcard3.style.width = "100%";
    playcard3.style.height = "auto";
    playcard3.style.zIndex = "10";
    Dhonibutton.innerText = "Minimize";
});

Dhonibutton.addEventListener('dblclick', function () {
    playcard3.style.width = "400px";
    playcard3.style.height = "400px";
    playcard3.style.position = "static";
    playcard3.style.zIndex = "1";
    Dhonibutton.innerText = "read more";
});

// ! jadeja

let Jadeja = document.querySelector('.playcard img#Jadeja');
Jadeja.addEventListener('mouseover', function () {
    Jadeja.style.transform = "scale(1.1)";
    Jadeja.style.boxShadow = "2px 3px 35px orange";
    Jadeja.style.transition = "all 0.3s ease-in-out";
});
Jadeja.addEventListener('mouseout', function () {
    Jadeja.style.transform = "scale(1)";
    Jadeja.style.boxShadow = "2px 3px 7px black";
})
let Jadejabutton = document.getElementById('Jadejabutton');
let playcard4 = document.querySelector('#playcard4');
Jadejabutton.addEventListener('click', function () {
    playcard4.style.position = "relative";
    playcard4.style.width = "100%";
    playcard4.style.height = "auto";
    playcard4.style.zIndex = "10";
    Jadejabutton.innerText = "Minimize";
});

Jadejabutton.addEventListener('dblclick', function () {
    playcard4.style.width = "400px";
    playcard4.style.height = "400px";
    playcard4.style.position = "static";
    playcard4.style.zIndex = "1";
    Jadejabutton.innerText = "read more";
});

// ! bumrah

let Bumrah = document.querySelector('.playcard img#Bumrah');
Bumrah.addEventListener('mouseover', function () {
    Bumrah.style.transform = "scale(1.1)";
    Bumrah.style.boxShadow = "2px 3px 35px orange";
    Bumrah.style.transition = "all 0.3s ease-in-out";
});
Bumrah.addEventListener('mouseout', function () {
    Bumrah.style.transform = "scale(1)";
    Bumrah.style.boxShadow = "2px 3px 7px black";
})
let Bumrahbutton = document.getElementById('Bumrahbutton');
let playcard5 = document.querySelector('#playcard5');
Bumrahbutton.addEventListener('click', function () {
    playcard5.style.position = "relative";
    playcard5.style.width = "100%";
    playcard5.style.height = "auto";
    playcard5.style.zIndex = "10";
    Bumrahbutton.innerText = "Minimize";
});

Bumrahbutton.addEventListener('dblclick', function () {
    playcard5.style.width = "400px";
    playcard5.style.height = "400px";
    playcard5.style.position = "static";
    playcard5.style.zIndex = "1";
    Bumrahbutton.innerText = "read more";
});

// ! shami

let Shami = document.querySelector('.playcard img#Shami');
Shami.addEventListener('mouseover', function () {
    Shami.style.transform = "scale(1.1)";
    Shami.style.boxShadow = "2px 3px 35px orange";
    Shami.style.transition = "all 0.3s ease-in-out";
});
Shami.addEventListener('mouseout', function () {
    Shami.style.transform = "scale(1)";
    Shami.style.boxShadow = "2px 3px 7px black";
})

let Shamibutton = document.getElementById('Shamibutton');
let playcard6 = document.querySelector('#playcard6');
Shamibutton.addEventListener('click', function () {
    playcard6.style.position = "relative";
    playcard6.style.width = "100%";
    playcard6.style.height = "auto";
    playcard6.style.zIndex = "10";
    Shamibutton.innerText = "Minimize";
});

Shamibutton.addEventListener('dblclick', function () {
    playcard6.style.width = "400px";
    playcard6.style.height = "400px";
    playcard6.style.position = "static";
    playcard6.style.zIndex = "1";
    Shamibutton.innerText = "read more";
});

// ! Ruturaaj

let Ruturaj = document.querySelector('.playcard img#Rutu');
Ruturaj.addEventListener('mouseover', function () {
    Ruturaj.style.transform = "scale(1.1)";
    Ruturaj.style.boxShadow = "2px 3px 35px orange";
    Ruturaj.style.transition = "all 0.3s ease-in-out";
});
Ruturaj.addEventListener('mouseout', function () {
    Ruturaj.style.transform = "scale(1)";
    Ruturaj.style.boxShadow = "2px 3px 7px black";
})
let Rutubutton = document.getElementById('Rutubutton');
let playcard7 = document.querySelector('#playcard7');
Rutubutton.addEventListener('click', function () {
    playcard7.style.position = "relative";
    playcard7.style.width = "100%";
    playcard7.style.height = "auto";
    playcard7.style.zIndex = "10";
    Rutubutton.innerText = "Minimize";
});

Rutubutton.addEventListener('dblclick', function () {
    playcard7.style.width = "400px";
    playcard7.style.height = "400px";
    playcard7.style.position = "static";
    playcard7.style.zIndex = "1";
    Rutubutton.innerText = "read more";
});

// ! Suryakumar

let Suryakumar = document.querySelector('.playcard img#Suryakumar');
Suryakumar.addEventListener('mouseover', function () {
    Suryakumar.style.transform = "scale(1.1)";
    Suryakumar.style.boxShadow = "2px 3px 35px orange";
    Suryakumar.style.transition = "all 0.3s ease-in-out";
});
Suryakumar.addEventListener('mouseout', function () {
    Suryakumar.style.transform = "scale(1)";
    Suryakumar.style.boxShadow = "2px 3px 7px black";
})

let Suryabutton = document.getElementById('Suryakumarbutton');
let playcard8 = document.querySelector('#playcard8');
Suryabutton.addEventListener('click', function () {
    playcard8.style.position = "relative";
    playcard8.style.width = "100%";
    playcard8.style.height = "auto";
    playcard8.style.zIndex = "10";
    Suryabutton.innerText = "Minimize";
});

Suryabutton.addEventListener('dblclick', function () {
    playcard8.style.width = "400px";
    playcard8.style.height = "400px";
    playcard8.style.position = "static";
    playcard8.style.zIndex = "1";
    Suryabutton.innerText = "read more";
});

// ! hardik
let Hardik = document.querySelector('.playcard img#Hardik');
Hardik.addEventListener('mouseover', function () {
    Hardik.style.transform = "scale(1.1)";
    Hardik.style.boxShadow = "2px 3px 35px orange";
    Hardik.style.transition = "all 0.3s ease-in-out";
});
Hardik.addEventListener('mouseout', function () {
    Hardik.style.transform = "scale(1)";
    Hardik.style.boxShadow = "2px 3px 7px black";
})
let Hardikbutton = document.getElementById('Hardikbutton');
let playcard9 = document.querySelector('#playcard9');
Hardikbutton.addEventListener('click', function () {
    playcard9.style.position = "relative";
    playcard9.style.width = "100%";
    playcard9.style.height = "auto";
    playcard9.style.zIndex = "10";
    Hardikbutton.innerText = "Minimize";
});

Hardikbutton.addEventListener('dblclick', function () {
    playcard9.style.width = "400px";
    playcard9.style.height = "400px";
    playcard9.style.position = "static";
    playcard9.style.zIndex = "1";
    Hardikbutton.innerText = "read more";
});

// ! chahal
let Chahal = document.querySelector('.playcard img#Chahal');
Chahal.addEventListener('mouseover', function () {
    Chahal.style.transform = "scale(1.1)";
    Chahal.style.boxShadow = "2px 3px 35px orange";
    Chahal.style.transition = "all 0.3s ease-in-out";
});
Chahal.addEventListener('mouseout', function () {
    Chahal.style.transform = "scale(1)";
    Chahal.style.boxShadow = "2px 3px 7px black";
})
let Chahalbutton = document.getElementById('Chahalbutton');
let playcard10 = document.querySelector('#playcard10');
Chahalbutton.addEventListener('click', function () {
    playcard10.style.position = "relative";
    playcard10.style.width = "100%";
    playcard10.style.height = "auto";
    playcard10.style.zIndex = "10";
    Chahalbutton.innerText = "Minimize";
});

Chahalbutton.addEventListener('dblclick', function () {
    playcard10.style.width = "400px";
    playcard10.style.height = "400px";
    playcard10.style.position = "static";
    playcard10.style.zIndex = "1";
    Chahalbutton.innerText = "read more";
});

// ! shubman
let Shubman = document.querySelector('.playcard img#Gill');
Shubman.addEventListener('mouseover', function () {
    Shubman.style.transform = "scale(1.1)";
    Shubman.style.boxShadow = "2px 3px 35px orange";
    Shubman.style.transition = "all 0.3s ease-in-out";
});
Shubman.addEventListener('mouseout', function () {
    Shubman.style.transform = "scale(1)";
    Shubman.style.boxShadow = "2px 3px 7px black";
})
let shubmanbutton = document.getElementById('Gillbutton');
let playcard11 = document.querySelector('#playcard11');
shubmanbutton.addEventListener('click', function () {
    playcard11.style.position = "relative";
    playcard11.style.width = "100%";
    playcard11.style.height = "auto";
    playcard11.style.zIndex = "10";
    shubmanbutton.innerText = "Minimize";
});

shubmanbutton.addEventListener('dblclick', function () {
    playcard11.style.width = "400px";
    playcard11.style.height = "400px";
    playcard11.style.position = "static";
    playcard11.style.zIndex = "1";
    shubmanbutton.innerText = "read more";
});

// ! Player Details Injection

// ! Player Details Injection

const playersData = [
    {
        targetId: "details-virat",
        name: "Virat Kohli",
        fullName: "Virat Prem Kohli",
        born: "5 November 1988",
        role: "Top-order Batter",
        history: "Virat Kohli is a legendary Indian cricketer widely regarded as one of the greatest batsmen in the history of the sport. He captained India to victory in the 2008 ICC Under-19 World Cup and led the senior team to numerous victories, including the 2011 World Cup and 2013 Champions Trophy.",
        stats: {
            odi: { matches: 307, runs: 14492, average: 58.20 },
            t20i: { matches: 125, runs: 4188, average: 48.69 },
            ipl: { matches: 267, runs: 8661, average: 39.55 }
        }
    },
    {
        targetId: "details-rohit",
        name: "Rohit Sharma",
        fullName: "Rohit Gurunath Sharma",
        born: "30 April 1987",
        role: "Top-order Batter",
        history: "Rohit Sharma is known for his explosive batting and leadership. He is the only player to score three double centuries in ODIs. He captained India to victory in the 2024 T20 World Cup and led Mumbai Indians to five IPL titles.",
        stats: {
            odi: { matches: 277, runs: 11427, average: 49.00 },
            t20i: { matches: 159, runs: 4231, average: 32.00 },
            ipl: { matches: 272, runs: 7046, average: 29.73 }
        }
    },
    {
        targetId: "details-dhoni",
        name: "MS Dhoni",
        fullName: "Mahendra Singh Dhoni",
        born: "7 July 1981",
        role: "Wicketkeeper Batter",
        history: "Mahendra Singh Dhoni is one of the most successful captains in cricket history. He is the only captain to win all three major ICC trophies: the 2007 T20 World Cup, 2011 ODI World Cup, and 2013 Champions Trophy.",
        stats: {
            odi: { matches: 350, runs: 10773, average: 50.58 },
            t20i: { matches: 98, runs: 1617, average: 37.60 },
            ipl: { matches: 278, runs: 5439, average: 38.30 }
        }
    },
    {
        targetId: "details-jadeja",
        name: "Ravindra Jadeja",
        fullName: "Ravindrasinh Anirudhsinh Jadeja",
        born: "6 December 1988",
        role: "All-rounder",
        history: "Ravindra Jadeja is a premier all-rounder known for his accurate left-arm spin, aggressive batting, and exceptional fielding. He was part of the 2008 U-19 World Cup winning team and has been a key player for India across all formats.",
        stats: {
            odi: { matches: 205, runs: 2838, wickets: 231 },
            t20i: { matches: 74, runs: 515, wickets: 54 },
            ipl: { matches: 254, runs: 3260, wickets: 170 }
        }
    },
    {
        targetId: "details-bumrah",
        name: "Jasprit Bumrah",
        fullName: "Jasprit Jasbirsingh Bumrah",
        born: "6 December 1993",
        role: "Bowler",
        history: "Jasprit Bumrah is considered one of the best fast bowlers in the world, famous for his lethal yorkers and unorthodox action. He played a pivotal role in India's 2024 T20 World Cup victory.",
        stats: {
            odi: { matches: 89, wickets: 149, average: 23.55 },
            t20i: { matches: 79, wickets: 99, average: 18.11 },
            ipl: { matches: 145, wickets: 183, average: 22.02 }
        }
    },
    {
        targetId: "details-shami",
        name: "Mohammed Shami",
        fullName: "Mohammed Shami Ahmed",
        born: "3 September 1990",
        role: "Bowler",
        history: "Mohammed Shami is a right-arm fast bowler known for his mastery over seam and swing. He was the leading wicket-taker in the 2023 Cricket World Cup and a key member of the Indian pace attack.",
        stats: {
            odi: { matches: 108, wickets: 206, average: 24.05 },
            t20i: { matches: 25, wickets: 27, average: 28.19 },
            ipl: { matches: 119, wickets: 133, average: 28.19 }
        }
    },
    {
        targetId: "details-ruturaj",
        name: "Ruturaj Gaikwad",
        fullName: "Ruturaj Dashrat Gaikwad",
        born: "31 January 1997",
        role: "Batter",
        history: "Ruturaj Gaikwad is a stylish top-order batsman who captained India to gold in the 2022 Asian Games. He won the Orange Cap in IPL 2021 and is a key player for Chennai Super Kings.",
        stats: {
            odi: { matches: 7, runs: 123, average: 17.57 },
            t20i: { matches: 23, runs: 633, average: 39.56 },
            ipl: { matches: 71, runs: 2502, average: 40.35 }
        }
    },
    {
        targetId: "details-suryakumar",
        name: "Suryakumar Yadav",
        fullName: "Suryakumar Ashok Yadav",
        born: "14 September 1990",
        role: "Batter",
        history: "Suryakumar Yadav is known for his innovative 360-degree batting style. He was a key part of India's 2024 T20 World Cup winning team and is one of the top-ranked T20I batters in the world.",
        stats: {
            odi: { matches: 37, runs: 773, average: 25.76 },
            t20i: { matches: 84, runs: 2605, average: 38.30 },
            ipl: { matches: 166, runs: 4311, average: 35.05 }
        }
    },
    {
        targetId: "details-hardik",
        name: "Hardik Pandya",
        fullName: "Hardik Himanshu Pandya",
        born: "11 October 1993",
        role: "All-rounder",
        history: "Hardik Pandya is a dynamic all-rounder known for his finishing abilities and effective medium-pace bowling. He captained Gujarat Titans to an IPL title in their debut season.",
        stats: {
            odi: { matches: 94, runs: 1904, wickets: 91 },
            t20i: { matches: 120, runs: 1860, wickets: 98 },
            ipl: { matches: 152, runs: 2749, wickets: 78 }
        }
    },
    {
        targetId: "details-chahal",
        name: "Yuzvendra Chahal",
        fullName: "Yuzvendra Singh Chahal",
        born: "23 July 1990",
        role: "Bowler",
        history: "Yuzvendra Chahal is a crafty leg-spinner and the first Indian bowler to take 200 IPL wickets. He is a former chess player who has represented India in junior championships.",
        stats: {
            odi: { matches: 72, wickets: 121, average: 27.13 },
            t20i: { matches: 80, wickets: 96, average: 25.09 },
            ipl: { matches: 174, wickets: 221, average: 22.77 }
        }
    },
    {
        targetId: "details-shubman",
        name: "Shubman Gill",
        fullName: "Shubman Gill",
        born: "8 September 1999",
        role: "Batter",
        history: "Shubman Gill is a prodigious talent who starred in India's 2018 U-19 World Cup win. He is the youngest cricketer to score a double century in ODIs and won the IPL Orange Cap in 2023.",
        stats: {
            odi: { matches: 58, runs: 2818, average: 56.36 },
            t20i: { matches: 33, runs: 837, average: 29.89 },
            ipl: { matches: 118, runs: 3866, average: 39.45 }
        }
    }
];

playersData.forEach(player => {
    const detailsElement = document.getElementById(player.targetId);
    if (detailsElement) {
        // Clear existing content if any, or append to it. 
        // Based on user request "add inside playcard", and looking at HTML structure, 
        // the details tag already has h1 and figcaption. 
        // We will append the extra info.

        const div = document.createElement("div");

        let statsHTML = `<p><strong>Stats:</strong><br>`;
        if (player.stats) {
            if (player.stats.odi) statsHTML += `ODI: ${player.stats.odi.matches} M, ${player.stats.odi.runs ? player.stats.odi.runs + ' Runs' : ''} ${player.stats.odi.wickets ? player.stats.odi.wickets + ' Wkts' : ''}<br>`;
            if (player.stats.t20i) statsHTML += `T20I: ${player.stats.t20i.matches} M, ${player.stats.t20i.runs ? player.stats.t20i.runs + ' Runs' : ''} ${player.stats.t20i.wickets ? player.stats.t20i.wickets + ' Wkts' : ''}<br>`;
            if (player.stats.ipl) statsHTML += `IPL: ${player.stats.ipl.matches} M, ${player.stats.ipl.runs ? player.stats.ipl.runs + ' Runs' : ''} ${player.stats.ipl.wickets ? player.stats.ipl.wickets + ' Wkts' : ''}`;
        }
        statsHTML += `</p>`;

        div.innerHTML = `
            <p><strong>Full Name:</strong> ${player.fullName}</p>
            <p><strong>Born:</strong> ${player.born}</p>
            <p><strong>Role:</strong> ${player.role}</p>
            <p><strong>History:</strong> ${player.history}</p>
            ${statsHTML}
        `;
        detailsElement.appendChild(div);
    }
});

// ! Search Functionality
const searchInput = document.getElementById('player-search');
if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const playerCards = document.querySelectorAll('.playcard');

        playerCards.forEach(card => {
            // Find the player name within the card. 
            // Based on HTML, it's in the h1 tag inside details, or the img title/alt.
            // Let's look for the h1 inside details as it's the most reliable text source we added/modified.
            const details = card.querySelector('details');
            let playerName = "";
            if (details) {
                const h1 = details.querySelector('h1');
                if (h1) playerName = h1.innerText.toLowerCase();
            }

            // Fallback to image title if h1 not found (though it should be there)
            if (!playerName) {
                const img = card.querySelector('img');
                if (img && img.title) playerName = img.title.toLowerCase();
            }

            if (playerName.includes(searchTerm)) {
                card.style.display = ""; // Show
            } else {
                card.style.display = "none"; // Hide
            }
        });
    });
}

// scrolling animation

const cards = document.querySelectorAll('.playcard');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

cards.forEach(card => observer.observe(card));
