const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-dino-name");
const modalDiet = document.getElementById("modal-diet-icon");

const statGroup = document.getElementById("stat-group");
const statAge = document.getElementById("stat-age");
const statGrowth = document.getElementById("stat-growth");
const statPrice = document.getElementById("stat-price");
const statSkin1 = document.getElementById("stat-skin1");
const statSkin2 = document.getElementById("stat-skin2");

const passivesContainer = document.getElementById("passives-container");
const activesContainer = document.getElementById("actives-container");

const dinoDatabase = {
    "Coelophysis": {
        fullName: "COELOPHYSIS<br>BAURI",
        image: "img/pict/coeloperfil.png",
        diet: "🥩",
        stats: { group: 10, age: 5, growth: "15 min", price: "N/A", skin1: "4.000", skin2: 40 },
        passives: [
            {
                title: "Juntos somos fortes!",
                desc: "Recupera stamina mais rápido perto da matilha.",
                icon: "img/skill/rebanhoC.png"
            },
            {
                title: "Apetite louco",
                desc: "Reduz gasto de stamina em 20% com cansaço alto.",
                icon: "img/skill/bomsono.png"
            },
            {
                title: "Surto de poder",
                desc: "Quando com baixo HP, seu dinossauro corre mais rápido e gasta menos stamina.",
                icon: "img/skill/instintoprimordial.png"
            }
        ],
        actives: [
            {
                title: "Trodéu de carne",
                desc: "O dinossauro usa um golpe forte, retirando um pedaço de carne caso atinja outro.",
                icon: "img/skill/carregada.png"
            },
            {
                title: "Grito de guerra",
                desc: "O dinossauro grita, aumentando o seu dano em 20%.",
                icon: "img/skill/carregada.png"
            }
        ]
    },
    "Ornithomimus": {
        fullName: "ORNITHOMIMUS<br>VELOX",
        image: "img/pict/orniperfil.png",
        diet: "🌿",
        stats: { group: 5, age: 3, growth: "17 min", price: "N/A", skin1: "5.500", skin2: 40 },
        passives: [
            {
                title: "Instinto materno",
                desc: "Quando perto de seu ninho, seu dano aumenta para cada ovo nele.",
                icon: "img/skill/ninho.png"
            },
            {
                title: "Corredor de maratona",
                desc: "Quando há membros da matilha perto de você, sua recuperação de stamina se torna mais rápida.",
                icon: "img/skill/rebanhoH.png"
            },
            {
                title: "Surto de poder",
                desc: "Quando seu dinossauro está com pouca saúde, sua defesa aumenta.",
                icon: "img/skill/baixohp.png"
            }
        ],
        actives: [
            {
                title: "Incentivo",
                desc: "Emite um grito alto, reduzindo o consumo de vigor dos membros da matilha.",
                icon: "img/skill/buffS.png"
            },
            {
                title: "Chute",
                desc: "Ataca com as patas traseiras, causando dano adicional, com chance de atordoar e repelir alguns dinossauros.",
                icon: "img/skill/chute.png"
            }
        ]

    },
    "Deinonychus": {
        fullName: "DEINONYCHUS<br>ANTIRHOPUS",
        image: "img/pict/deinoperfil.png",
        diet: "🥩🦈",
        stats: { group: 5, age: 19, growth: "x min", price: "N/A", skin1: "6.500", skin2: 50 },
        passives: [
            {
                title: "O poder do bando",
                desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada.",
                icon: "img/skill/rebanhoC.png"
            },
            {
                title: "Surto de poder",
                desc: "Quando seu dinossauro está com pouco HP, o dano e chance de sangramento aumentam.",
                icon: "img/skill/baixohp.png"
            }
        ],

        actives: [
            {
                title: "Grito de Guerra.",
                desc: "O dinossauro ruge, elevando seu moral e o da matilha, diminuindo seu consumo de vigor por um tempo.",
                icon: "img/skill/buffS.png"
            },
            {
                title: "Lâminas Afiadas",
                desc: "Desfere um golpe penetrantes com as garras, causando mais dano e podendo atordoar.",
                icon: "img/skill/jump.png"
            }
        ]

    },
    "Pachycephalosaurus": {
        fullName: "PACHYCEPHALO<br>SAURUS WYOMINGENSIS",
        image: "img/pict/pachyperfil.png",
        diet: "🌿",
        stats: { group: 5, age: 3, growth: "28 min", price: "8.000", skin1: "6.000", skin2: 80 },
        passives: [
            {
                title: "O poder do bando",
                desc: "Quando os membros da matilha estão perto de você, sua defesa é aumentada.",
                icon: "img/skill/rebanhoH.png"
            },
            {
                title: "Surto de poder",
                desc: "Quando seu dinossauro está com pouco HP, a velociade e chance de quebrar aumentam.",
                icon: "img/skill/poucohppachy.png"
            }
        ],

        actives: [
            {
                title: "Bater",
                desc: "O dinossauro avança, aumentando sua velocidade a cada segundo, ao atingir um inimigo causa dano aumentado, aumenta chance de fratura e pode atordoar, o dano aumenta de acordo com a distância e velocidade. ",
                icon: "img/skill/investida.png"
            },
            {
                title: "Ataque Carregado",
                desc: "Desfere um golpe penetrantes com as garras, causando mais dano e podendo atordoar.",
                icon: "img/skill/carregada.png"
            }
        ]

    },
    "Guanlong": {
        fullName: "GUANLONG<br>WUCAII",
        image: "img/pict/guanperfil.png",
        diet: "🥩",
        stats: { group: 5, age: 5, growth: "x min", price: "180", skin1: "8.000", skin2: 50 },
        passives: [
            {
                title: "Surto de poder",
                desc: "Quando seu dinossauro está com pouca saúde, sua defesa aumenta.",
                icon: "img/skill/baixohp.png"
            },
            {
                title: "Força das Trevas",
                desc: "Seu dinossauro gasta menos stamina à noite.",
                icon: "img/skill/noite.png"
            }
        ],
        actives: [
            {
                title: "Grito de Guerra",
                desc: "Seu dinossauro ruge, aumentando a chance de infligir sangramento por um tempo.",
                icon: "img/skill/buffG.png"
            },  
            {   
                title: "Ataque Carregado",
                desc: "O dinossauro prepara um ataque poderoso, aumentando a chance de infligir sangramento.",
                icon: "img/skill/carregada.png"
            },
        ]
    },
    "Barbaridactylus": {
        fullName: "BARBARIDACTYLUS<br>GRANDIS",
        image: "img/pict/barbaperfil.png",
        diet: "🥩🦈",
        stats: { group: 5, age: 9, growth: "42 min", price: "600", skin1: "20.000", skin2: 200 },
        passives: [
            {
                title: "O poder do bando",
                desc: "Quando os membros da matilha estão perto de você, seu gasto de stamina é reduzido.",
                icon: "img/skill/rebanhoC.png"
            },
            {
                title: "Presente das Profundezas",
                desc: "Seu dinossauro gasta menos stamina após se alimentar de um peixe.",
                icon: "img/skill/aquatico.png"
            }
        ],
        actives: [
            {
                title: "Enxame Barulhento",
                desc: "O pterossauro emite um grito estridente, aumentando a sua capacidade de infligir sangramento, e a de aliados próximos, por um curto período.",
                icon: "skill/buffG.png"
            },  
        ]
    },
    "Psittacosaurus": {
        fullName: "PSITTACOSAURUS<br>MONGOLIENSIS",
        image: "img/pict/psittaperfil.png",
        diet: "🌿",
        stats: { group: 5, age: 14, growth: "20 min", price: "5.000", skin1: "-", skin2: "-" },
        passives: [
            {
                title: "Surto de poder",
                desc: "Quando seu dinossauro está com pouca saúde, ele gasta menos stamina e sua velocidade aumenta.",
                icon: "img/skill/baixohp.png"
            },
            {
                title: "Instinto materno",
                desc: "Quando perto de seu ninho, seu dano aumenta para cada ovo nele.",
                icon: "img/skill/ninho.png"
            },
        ],
        actives: [
            {
                title: "Grito de Cura",
                desc: "O dinossauro emite um grito que acelera a própria regeneração de HP e dos membros da matilha próximos.",
                icon: "img/skill/buffR.png"
            }
        ]
    }
};

function createSkillHTML(skill) {
    const iconSrc = skill.icon ? skill.icon : 'img/logo.png';

    return `
        <div class="skill-item">
            <img src="${iconSrc}" class="skill-icon" alt="${skill.title}">
            <div class="skill-text">
                <h5>${skill.title}</h5>
                <p>${skill.desc}</p>
            </div>
        </div>`;
}

const btns = document.querySelectorAll(".btn-verificar");

btns.forEach(btn => {
    btn.addEventListener("click", function() {
        const dinoKey = this.getAttribute("data-dino");
        const data = dinoDatabase[dinoKey];

        if (data) {
            modalName.innerHTML = data.fullName;
            modalImg.src = data.image;
            modalDiet.innerText = data.diet;

            statGroup.innerText = data.stats.group;
            statAge.innerText = data.stats.age;
            statGrowth.innerText = data.stats.growth;
            statPrice.innerText = data.stats.price;
            statSkin1.innerText = data.stats.skin1;
            statSkin2.innerText = data.stats.skin2;

            passivesContainer.innerHTML = "";
            data.passives.forEach(skill => {
                passivesContainer.innerHTML += createSkillHTML(skill);
            });

            activesContainer.innerHTML = "";
            data.actives.forEach(skill => {
                activesContainer.innerHTML += createSkillHTML(skill);
            });

            modal.style.display = "block";
        }
    });
});

closeBtn.onclick = function() { modal.style.display = "none"; }