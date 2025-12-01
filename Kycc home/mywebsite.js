
// ! virat

let virat=document.querySelector('.playcard img');
virat.addEventListener('mouseover',function(){
    virat.style.transform="scale(1.1)";
    virat.style.transition="all 0.3s ease-in-out";
});
virat.addEventListener('mouseout',function(){
    virat.style.transform="scale(1)";
});

let kohli=document.querySelector('.playcard');

let Viratbutton=document.getElementById('Viratbutton');
Viratbutton.addEventListener('click',function(){
    kohli.style.position="relative";
    kohli.style.width="100%";
    kohli.style.height="auto";
    kohli.style.zIndex="10";
    Viratbutton.innerText="Minimize";

})

Viratbutton.addEventListener('dblclick',function(){
    kohli.style.width="400px";
    kohli.style.height="400px";
    kohli.style.position="static";
    kohli.style.zIndex="1";
    Viratbutton.innerText = "read more";

})

// ! rohit

let Rohit = document.querySelector('.playcard img#Rohit');
Rohit.addEventListener('mouseover', function() {
    Rohit.style.transform = "scale(1.1)";
    Rohit.style.transition = "all 0.3s ease-in-out";
});
Rohit.addEventListener('mouseout', function() {
    Rohit.style.transform = "scale(1)";
})

let Rohitbutton = document.getElementById('Rohitbutton');
let playcard2 = document.querySelector('#playcard2');
Rohitbutton.addEventListener('click', function() {
   playcard2.style.position = "relative";
   playcard2.style.width = "100%";
   playcard2.style.height = "auto";
   playcard2.style.zIndex = "10";
   Rohitbutton.innerText = "Minimize";
});

Rohitbutton.addEventListener('dblclick', function() {
   playcard2.style.width = "400px";
   playcard2.style.height = "400px";
   playcard2.style.position = "static";
   playcard2.style.zIndex = "1";
   Rohitbutton.innerText = "read more";
});

// ! dhoni

let Dhoni = document.querySelector('.playcard img#Dhoni');
Dhoni.addEventListener('mouseover', function() {
    Dhoni.style.transform = "scale(1.1)";
    Dhoni.style.transition = "all 0.3s ease-in-out";
});
Dhoni.addEventListener('mouseout', function() {
    Dhoni.style.transform = "scale(1)";
})




let Dhonibutton = document.getElementById('Dhonibutton');
let playcard3 = document.querySelector('#playcard3');

Dhonibutton.addEventListener('click', function() {
    playcard3.style.position = "relative";
    playcard3.style.width = "100%";
    playcard3.style.height = "auto";
    playcard3.style.zIndex = "10";
    Dhonibutton.innerText = "Minimize";
});

Dhonibutton.addEventListener('dblclick', function() {
    playcard3.style.width = "400px";
    playcard3.style.height = "400px";
    playcard3.style.position = "static";
    playcard3.style.zIndex = "1";
    Dhonibutton.innerText = "read more";
});

// ! jadeja

let Jadeja = document.querySelector('.playcard img#Jadeja');
Jadeja.addEventListener('mouseover', function() {
    Jadeja.style.transform = "scale(1.1)";
    Jadeja.style.transition = "all 0.3s ease-in-out";
});
Jadeja.addEventListener('mouseout', function() {
    Jadeja.style.transform = "scale(1)";
})
let Jadejabutton = document.getElementById('Jadejabutton');
let playcard4 = document.querySelector('#playcard4');
Jadejabutton.addEventListener('click', function() {
    playcard4.style.position = "relative";
    playcard4.style.width = "100%";
    playcard4.style.height = "auto";
    playcard4.style.zIndex = "10";
    Jadejabutton.innerText = "Minimize";
});

Jadejabutton.addEventListener('dblclick', function() {
    playcard4.style.width = "400px";
    playcard4.style.height = "400px";
    playcard4.style.position = "static";
    playcard4.style.zIndex = "1";
    Jadejabutton.innerText = "read more";
});

// ! bumrah

let Bumrah = document.querySelector('.playcard img#Bumrah');
Bumrah.addEventListener('mouseover', function() {
    Bumrah.style.transform = "scale(1.1)";
    Bumrah.style.transition = "all 0.3s ease-in-out";
});
Bumrah.addEventListener('mouseout', function() {
    Bumrah.style.transform = "scale(1)";
})
let Bumrahbutton = document.getElementById('Bumrahbutton');
let playcard5 = document.querySelector('#playcard5');
Bumrahbutton.addEventListener('click', function() {
    playcard5.style.position = "relative";
    playcard5.style.width = "100%";
    playcard5.style.height = "auto";
    playcard5.style.zIndex = "10";
    Bumrahbutton.innerText = "Minimize";
});

Bumrahbutton.addEventListener('dblclick', function() {
    playcard5.style.width = "400px";
    playcard5.style.height = "400px";
    playcard5.style.position = "static";
    playcard5.style.zIndex = "1";
    Bumrahbutton.innerText = "read more";
});

// ! shami

let Shami = document.querySelector('.playcard img#Shami');
Shami.addEventListener('mouseover', function() {
    Shami.style.transform = "scale(1.1)";
    Shami.style.transition = "all 0.3s ease-in-out";
});
Shami.addEventListener('mouseout', function() {
    Shami.style.transform = "scale(1)";
})

let Shamibutton = document.getElementById('Shamibutton');
let playcard6 = document.querySelector('#playcard6');
Shamibutton.addEventListener('click', function() {
    playcard6.style.position = "relative";
    playcard6.style.width = "100%";
    playcard6.style.height = "auto";
    playcard6.style.zIndex = "10";
    Shamibutton.innerText = "Minimize";
});

Shamibutton.addEventListener('dblclick', function() {
    playcard6.style.width = "400px";
    playcard6.style.height = "400px";
    playcard6.style.position = "static";
    playcard6.style.zIndex = "1";
    Shamibutton.innerText = "read more";
});

// ! Ruturaaj

let Ruturaj = document.querySelector('.playcard img#Rutu');
Ruturaj.addEventListener('mouseover', function() {
    Ruturaj.style.transform = "scale(1.1)";
    Ruturaj.style.transition = "all 0.3s ease-in-out";
});
Ruturaj.addEventListener('mouseout', function() {
    Ruturaj.style.transform = "scale(1)";
})
let Rutubutton = document.getElementById('Rutubutton');
let playcard7 = document.querySelector('#playcard7');
Rutubutton.addEventListener('click', function() {
    playcard7.style.position = "relative";
    playcard7.style.width = "100%";
    playcard7.style.height = "auto";
    playcard7.style.zIndex = "10";
    Rutubutton.innerText = "Minimize";
});

Rutubutton.addEventListener('dblclick', function() {
    playcard7.style.width = "400px";
    playcard7.style.height = "400px";
    playcard7.style.position = "static";
    playcard7.style.zIndex = "1";
    Rutubutton.innerText = "read more";
});

// ! Suryakumar

let Suryakumar = document.querySelector('.playcard img#Suryakumar');    
Suryakumar.addEventListener('mouseover', function() {
    Suryakumar.style.transform = "scale(1.1)";
    Suryakumar.style.transition = "all 0.3s ease-in-out";
});
Suryakumar.addEventListener('mouseout', function() {
    Suryakumar.style.transform = "scale(1)";
})

let Suryabutton = document.getElementById('Suryakumarbutton');
let playcard8 = document.querySelector('#playcard8');
Suryabutton.addEventListener('click', function() {
    playcard8.style.position = "relative";
    playcard8.style.width = "100%";
    playcard8.style.height = "auto";
    playcard8.style.zIndex = "10";
    Suryabutton.innerText = "Minimize";
});

Suryabutton.addEventListener('dblclick', function() {
    playcard8.style.width = "400px";
    playcard8.style.height = "400px";
    playcard8.style.position = "static";
    playcard8.style.zIndex = "1";
    Suryabutton.innerText = "read more";
});

// ! hardik
let Hardik = document.querySelector('.playcard img#Hardik');
Hardik.addEventListener('mouseover', function() {
    Hardik.style.transform = "scale(1.1)";
    Hardik.style.transition = "all 0.3s ease-in-out";
});
Hardik.addEventListener('mouseout', function() {
    Hardik.style.transform = "scale(1)";
})
let Hardikbutton = document.getElementById('Hardikbutton');
let playcard9 = document.querySelector('#playcard9');
Hardikbutton.addEventListener('click', function() {
    playcard9.style.position = "relative";
    playcard9.style.width = "100%";
    playcard9.style.height = "auto";
    playcard9.style.zIndex = "10";
    Hardikbutton.innerText = "Minimize";
});

Hardikbutton.addEventListener('dblclick', function() {
    playcard9.style.width = "400px";
    playcard9.style.height = "400px";
    playcard9.style.position = "static";
    playcard9.style.zIndex = "1";
    Hardikbutton.innerText = "read more";
});

// ! chahal
let Chahal = document.querySelector('.playcard img#Chahal');
Chahal.addEventListener('mouseover', function() {
    Chahal.style.transform = "scale(1.1)";
    Chahal.style.transition = "all 0.3s ease-in-out";
});
Chahal.addEventListener('mouseout', function() {
    Chahal.style.transform = "scale(1)";
})
let Chahalbutton = document.getElementById('Chahalbutton');
let playcard10 = document.querySelector('#playcard10');
Chahalbutton.addEventListener('click', function() {
    playcard10.style.position = "relative";
    playcard10.style.width = "100%";
    playcard10.style.height = "auto";
    playcard10.style.zIndex = "10";
    Chahalbutton.innerText = "Minimize";
});

Chahalbutton.addEventListener('dblclick', function() {
    playcard10.style.width = "400px";
    playcard10.style.height = "400px";
    playcard10.style.position = "static";
    playcard10.style.zIndex = "1";
    Chahalbutton.innerText = "read more";
});

// ! shubman
let Shubman = document.querySelector('.playcard img#Gill');
Shubman.addEventListener('mouseover', function() {
    Shubman.style.transform = "scale(1.1)";
    Shubman.style.transition = "all 0.3s ease-in-out";
});
Shubman.addEventListener('mouseout', function() {
    Shubman.style.transform = "scale(1)";
})
let shubmanbutton = document.getElementById('Gillbutton');
let playcard11 = document.querySelector('#playcard11');
shubmanbutton.addEventListener('click', function() {
    playcard11.style.position = "relative";
    playcard11.style.width = "100%";
    playcard11.style.height = "auto";
    playcard11.style.zIndex = "10";
    shubmanbutton.innerText = "Minimize";
});

shubmanbutton.addEventListener('dblclick', function() {
    playcard11.style.width = "400px";
    playcard11.style.height = "400px";
    playcard11.style.position = "static";
    playcard11.style.zIndex = "1";
    shubmanbutton.innerText = "read more";
});

// ! MATCH UPDATES SECTION AND TEAM FIXTURES

let teams = [];

// team registration handling
document.getElementById("teamForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let teamName = document.getElementById("teamName").value;
    let captainName = document.getElementById("captainName").value;
    let phone = document.getElementById("phone").value;

    let teamData = {
        team: teamName,
        captain: captainName,
        phone: phone
    };

    teams.push(teamData);
    showTeams();
    generateMatches();

    // Reset Form
    document.getElementById("teamForm").reset();
});


// Show Registered Teams
function showTeams() {
    let list = document.getElementById("teamList");
    list.innerHTML = "";

    teams.forEach((t, index) => {
        let li = document.createElement("li");
        li.innerText = `${index + 1}. ${t.team} (Captain: ${t.captain})`;
        list.appendChild(li);
    });
}


// Generate Match Fixtures Automatically
function generateMatches() {
    let matchList = document.getElementById("matchList");
    matchList.innerHTML = "";

    if (teams.length < 2) {
        matchList.innerHTML = "<li>Need at least 2 teams to schedule a match.</li>";
        return;
    }

    for (let i = 0; i < teams.length; i += 2) {
        if (teams[i + 1]) {
            let match = document.createElement("li");
            match.innerText = `${teams[i].team} VS ${teams[i + 1].team}`;
            matchList.appendChild(match);
        }
    }
}
// Initial call to display any existing teams
showTeams();
generateMatches();