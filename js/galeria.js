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
                title: "Troféu de carne",
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
        stats: { group: "-", age: 3, growth: "17 min", price: "N/A", skin1: "5.500", skin2: 40 },
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
        stats: { group: "-", age: 19, growth: "x min", price: "N/A", skin1: "6.500", skin2: 50 },
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
        stats: { group: "-", age: 3, growth: "28 min", price: "8.000", skin1: "6.000", skin2: 80 },
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
        stats: { group: "-", age: 5, growth: "x min", price: "180", skin1: "8.000", skin2: 50 },
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
        stats: { group: "-", age: 9, growth: "42 min", price: "600", skin1: "20.000", skin2: 200 },
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
        stats: { group: "-", age: 14, growth: "20 min", price: "5.000", skin1: "-", skin2: "-" },
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
    },
    "Quetzalcoatlus": {
        fullName: "QUETZALCOATLUS<br>NORTHROPI",
        image: "img/pict/quetzalperfil.png",
        diet: "🥩🦈",
        stats: { group: "-", age: 10, growth: "41 min", price: "125.000", skin1: "-", skin2: "-" },
        passives: [
            {
                title: "O poder do bando",
                desc: "Quando os membros da matilha estão perto de você, seu dano é aumentado.",
                icon: "img/skill/rebanhoC.png"
            },
            {
                title: "Surto de poder",    
                desc: "Quando seu dinossauro está com pouco HP, seu consumo de stamina diminui e sua velocidade aumenta.",
                icon: "img/skill/baixohp.png"
            }
        ],
        actives: [
            {
                title: "Capturar",
                desc: "Seu dinossauro agarra uma presa com o bico, podendo levá-lo consigo. Funciona apenas com animais menores.",
                icon: "img/skill/capturar.png"
            },  
        ]
    },  
    "Austroraptor": {
        fullName: "AUSTRORAPTOR<br>CABAZAI",
        image: "img/pict/austroperfil.png",
        diet: "🥩🦈", 
        stats: { group: "-", age: 20, growth: "-", price: "28.000", skin1: "15.000", skin2: "195g" 
        },
        passives: [
            {
                title: "Vampirismo",
                desc: "Ao atacar, seu dinossauro pode restaurar parte de sua saúde com o dano causado.",
                icon: "img/skill/vamp.png"
            },
            {
                title: "Juntos somos fortes!",    
                desc: "Quando os membros da matilha estão perto de você, o gasto de resistência é reduzido.",
                icon: "img/skill/rebanhoC.png"
            }
        ],
        actives: [
            {
                title: "Ataque do céu",
                desc: "Salta rapidamente, atacando o inimigo, há chances de reduzir sua defesa.",
                icon: "img/skill/ataqueceu.png"
            },  
            {
                title: "Disparada",
                desc: "Salte para alcançar o inimigo ou escapar velozmente.",
                icon: "img/skill/dash.png"
            }
        ]
    },    
    "Dilophosaurus": {
        fullName: "DILOPHOSAURUS<br>WETHERILLI",
        image: "img/pict/diloperfil.png",
        diet: "🥩🦈",
        stats: { 
            group: "-", 
            age: 18, 
            growth: "-", 
            price: "32.000", 
            skin1: "18.000", 
            skin2: "180g" 
        },
        passives: [
            {
                title: "Sede de Sangue",
                desc: "Se você atacar um inimigo dentro de um curto período de tempo após seu ataque anterior, seu dinossauro ganhará um aumento temporário na chance de causar sangramento e velocidade de movimento.", 
                icon: "img/skill/sedesangue.png"
            },
            {
                title: "O poder do bando",    
                desc: "Quando os membros da matilha estão perto de você, a recuperação de stamina acelera.",
                icon: "img/skill/rebanhoC.png"
            }
        ],
        actives: [
            {
                title: "Arranhão",
                desc: "Ataque com as garras, tem maior chance de causar sangramento, mas causando menos dano.",
                icon: "img/skill/garras.png"
            },  
            {
                title: "Chuva de Golpes",
                desc: "O dinossauro desfere múltiplas mordidas com maior chance de causar sangramento. Ataques causam menos dano",
                icon: "img/skill/chuvagolpes.png"
            }
        ]
    },
    "Concavenator": {
        fullName: "CONCAVENATOR<br>CORCOVATUS",
        image: "img/pict/concaperfil.png",
        diet: "🥩🦈",
        stats: { 
            group: "Tier 2", 
            age: 12, 
            growth: "-", 
            price: "280g", 
            skin1: "-", 
            skin2: "-" 
        },
        passives: [
            {
                title: "O poder do bando",
                desc: "Quando os membros da matilha estão próximos, você recupera HP mais rápido.",
                icon: "img/skill/rebanhoC.png"
            },
            {
                title: "Surto de poder",    
                desc: "Quando seu dinossauro está com pouco HP, seu dano aumenta e o consumo de stamina é reduzido.",
                icon: "img/skill/poucohp.png"
            }
        ],
        actives: [
            {
                title: "Golpe Esmagador",
                desc: "O dinossauro causa um golpe devastador com dano aumentado.",
                icon: "img/skill/ataqueceu.png"
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

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    fecharModal();
  }
});

function fecharModal() {
  modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1); 
    if (!hash) return;

    const targetElement = document.getElementById(hash);
    if (targetElement) {
        const parentTier = targetElement.closest('.tier-indicator');

        if (parentTier) {
            const tierId = parentTier.id;
            const tierBtn = document.querySelector(`.tier-btn[data-target="${tierId}"]`);

            if (tierBtn) {
                document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tier-indicator').forEach(content => content.classList.remove('active-content'));
                tierBtn.classList.add('active');
                parentTier.classList.add('active-content');
            }
        }
        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const btn = targetElement.querySelector('.btn-verificar');
            if (btn) {
                btn.click();
            }
        }, 150);
    }
});

const imgModal = document.getElementById("imgModal");
const imgModalContent = document.getElementById("imgModalContent");

document.querySelectorAll(".img-dino").forEach(img => {
  img.addEventListener("click", () => {
    imgModal.style.display = "flex";
    imgModalContent.src = img.src;
  });
});

imgModal.addEventListener("click", () => {
  imgModal.style.display = "none";
});

const tabButtons = document.querySelectorAll(".tier-btn");
const tierContents = document.querySelectorAll(".tier-indicator");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        tierContents.forEach(content => content.classList.remove("active-content"));

        const targetId = btn.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        
        if (targetContent) {
            targetContent.classList.add("active-content");
        }
    });
});

closeBtn.onclick = function() { modal.style.display = "none"; }