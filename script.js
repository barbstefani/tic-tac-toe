// let = fechado
// var = global
// const = constante

const elementoPontosX = document.getElementById("pontosX").querySelector("h3");

const elementoEmpates = document.getElementById("empates").querySelector("h3");

const elementoPontosO = document.getElementById("pontosO").querySelector("h3");

const turnoElemento = document.getElementById("turno");

const iconO = ` <svg class="icon-jogador-o" viewBox="0 0 24 24" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path
    d="M12 20.5C10.4583 20.5 9.03646 20.1198 7.73438 19.3594C6.43229 18.599 5.40104 17.5677 4.64062 16.2656C3.88021 14.9635 3.5 13.5417 3.5 12C3.5 10.4583 3.88021 9.03646 4.64062 7.73438C5.40104 6.43229 6.43229 5.40104 7.73438 4.64062C9.03646 3.88021 10.4583 3.5 12 3.5C13.5417 3.5 14.9635 3.88021 16.2656 4.64062C17.5677 5.40104 18.599 6.43229 19.3594 7.73438C20.1198 9.03646 20.5 10.4583 20.5 12C20.5 13.5417 20.1198 14.9635 19.3594 16.2656C18.599 17.5677 17.5677 18.599 16.2656 19.3594C14.9635 20.1198 13.5417 20.5 12 20.5ZM24 12C24 9.82292 23.4635 7.8151 22.3906 5.97656C21.3177 4.13802 19.862 2.68229 18.0234 1.60938C16.1849 0.536458 14.1771 0 12 0C9.82292 0 7.8151 0.536458 5.97656 1.60938C4.13802 2.68229 2.68229 4.13802 1.60938 5.97656C0.536458 7.8151 0 9.82292 0 12C0 14.1771 0.536458 16.1849 1.60938 18.0234C2.68229 19.862 4.13802 21.3177 5.97656 22.3906C7.8151 23.4635 9.82292 24 12 24C14.1771 24 16.1849 23.4635 18.0234 22.3906C19.862 21.3177 21.3177 19.862 22.3906 18.0234C23.4635 16.1849 24 14.1771 24 12Z" />
<path
    d="M12.0007 18.3473C10.8499 18.3473 9.78849 18.0635 8.81652 17.4958C7.84454 16.9282 7.07473 16.1584 6.5071 15.1864C5.93946 14.2144 5.65564 13.153 5.65564 12.0022C5.65564 10.8514 5.93946 9.78999 6.5071 8.81802C7.07473 7.84604 7.84454 7.07623 8.81652 6.5086C9.78849 5.94096 10.8499 5.65714 12.0007 5.65714C13.1515 5.65714 14.2129 5.94096 15.1849 6.5086C16.1569 7.07623 16.9267 7.84604 17.4943 8.81802C18.062 9.78999 18.3458 10.8514 18.3458 12.0022C18.3458 13.153 18.062 14.2144 17.4943 15.1864C16.9267 16.1584 16.1569 16.9282 15.1849 17.4958C14.2129 18.0635 13.1515 18.3473 12.0007 18.3473ZM20.9585 12.0022C20.9585 10.3771 20.558 8.87828 19.7571 7.50585C18.9562 6.13341 17.8695 5.04674 16.4971 4.24583C15.1247 3.44492 13.6259 3.04447 12.0007 3.04447C10.3756 3.04447 8.87678 3.44492 7.50435 4.24583C6.13191 5.04674 5.04524 6.13341 4.24433 7.50585C3.44342 8.87828 3.04297 10.3771 3.04297 12.0022C3.04297 13.6274 3.44342 15.1262 4.24433 16.4986C5.04524 17.871 6.13191 18.9577 7.50435 19.7586C8.87678 20.5595 10.3756 20.96 12.0007 20.96C13.6259 20.96 15.1247 20.5595 16.4971 19.7586C17.8695 18.9577 18.9562 17.871 19.7571 16.4986C20.558 15.1262 20.9585 13.6274 20.9585 12.0022Z" />
<path
    d="M11.9985 17.8662C10.9345 17.8662 9.95323 17.6038 9.0546 17.0791C8.15598 16.5543 7.44428 15.8426 6.91948 14.9439C6.39469 14.0453 6.13229 13.064 6.13229 12C6.13229 10.9361 6.39469 9.95479 6.91948 9.05617C7.44428 8.15755 8.15598 7.44584 9.0546 6.92104C9.95323 6.39625 10.9345 6.13385 11.9985 6.13385C13.0625 6.13385 14.0437 6.39625 14.9424 6.92104C15.841 7.44584 16.5527 8.15755 17.0775 9.05617C17.6023 9.95479 17.8647 10.9361 17.8647 12C17.8647 13.064 17.6023 14.0453 17.0775 14.9439C16.5527 15.8426 15.841 16.5543 14.9424 17.0791C14.0437 17.6038 13.0625 17.8662 11.9985 17.8662ZM20.2802 12C20.2802 10.4976 19.9099 9.11188 19.1695 7.84303C18.429 6.57418 17.4244 5.56952 16.1555 4.82905C14.8867 4.08859 13.501 3.71836 11.9985 3.71836C10.496 3.71836 9.11032 4.08859 7.84147 4.82905C6.57261 5.56952 5.56796 6.57418 4.82749 7.84303C4.08703 9.11188 3.7168 10.4976 3.7168 12C3.7168 13.5025 4.08703 14.8882 4.82749 16.1571C5.56796 17.4259 6.57261 18.4306 7.84147 19.171C9.11032 19.9115 10.496 20.2817 11.9985 20.2817C13.501 20.2817 14.8867 19.9115 16.1555 19.171C17.4244 18.4306 18.429 17.4259 19.1695 16.1571C19.9099 14.8882 20.2802 13.5025 20.2802 12Z" />
</svg> `;

const iconX = ` <svg class="icon-jogador-x" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.9775 18.3769L17.5995 11.9994L23.9754 5.6225C24.0382 5.55969 24.0881 5.48512 24.1221 5.40305C24.156 5.32099 24.1735 5.23303 24.1735 5.1442C24.1735 5.05537 24.156 4.96741 24.1221 4.88534C24.0881 4.80328 24.0382 4.72871 23.9754 4.6659L19.5089 0.19816C19.3819 0.0712787 19.2098 0 19.0304 0C18.8509 0 18.6788 0.0712787 18.5519 0.19816L12.175 6.57501L5.79902 0.19816C5.54535 -0.0558672 5.09614 -0.0558672 4.84212 0.19816L0.374533 4.66522C0.247823 4.79222 0.176661 4.96429 0.176661 5.14369C0.176661 5.32309 0.247823 5.49516 0.374533 5.62216L6.7515 11.9994L0.373512 18.3772C0.246885 18.5043 0.175781 18.6763 0.175781 18.8557C0.175781 19.0351 0.246885 19.2071 0.373512 19.3342L4.84042 23.8016C4.90321 23.8645 4.97779 23.9144 5.05989 23.9484C5.14198 23.9825 5.22999 24 5.31887 24C5.40775 24 5.49576 23.9825 5.57786 23.9484C5.65995 23.9144 5.73453 23.8645 5.79732 23.8016L12.175 17.4237L18.553 23.8012C18.6852 23.9332 18.8577 23.9995 19.0314 23.9995C19.2052 23.9995 19.3779 23.9332 19.5102 23.8012L23.9778 19.3338C24.1046 19.2069 24.1758 19.0347 24.1758 18.8553C24.1757 18.6758 24.1044 18.5037 23.9775 18.3769Z" />
    </svg>
`;

var turno = "x";
var pontosX = 0;
var empates = 0;
var pontosO = 0;

var espelhoJogo = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function jogar(element) {
  let svgElement = element.querySelector("svg");

  if (svgElement) {
    console.log("Campo ja preenchido");
  } else {
    switch (turno) {
      case "x":
        element.innerHTML = iconX;
        break;

      case "o":
        element.innerHTML = iconO;
        break;
    }

    atualizarEspelho(element.getAttribute("data-posicao"));

    let vencedor = verificarVencedor();

    if (vencedor != false) {
      atualizarPlacar(vencedor);
      acaoModal(vencedor);
    } else {
      atualizarTurno();
    }
  }
}

function atualizarEspelho(posicao) {
  let index = posicao.split(",").map(Number);
  espelhoJogo[index[0]][index[1]] = turno;
}

function verificarVencedor() {
  //horizontais
  for (let i = 0; i < espelhoJogo[0].length; i++) {
    if (
      espelhoJogo[i][0] === espelhoJogo[i][1] &&
      espelhoJogo[i][1] === espelhoJogo[i][2] &&
      espelhoJogo[i][0] != null
    ) {
      return turno;
    }
  }

  //verticais
  for (let i = 0; i < espelhoJogo[0].length; i++) {
    if (
      espelhoJogo[0][i] === espelhoJogo[1][i] &&
      espelhoJogo[1][i] === espelhoJogo[2][i] &&
      espelhoJogo[0][i] != null
    ) {
      return turno;
    }
  }

  //diagonal
  if (
    espelhoJogo[0][0] === espelhoJogo[1][1] &&
    espelhoJogo[1][1] === espelhoJogo[2][2] &&
    espelhoJogo[0][0] != null
  ) {
    return turno;
  }

  //diagonal
  if (
    espelhoJogo[0][2] === espelhoJogo[1][1] &&
    espelhoJogo[1][1] === espelhoJogo[2][0] &&
    espelhoJogo[0][2] != null
  ) {
    return turno;
  }

  //empate ?
  let empate = "empate";
  espelhoJogo.forEach((element) => {
    element.forEach((element) => {
      if (element == null) {
        empate = false;
      }
    });
  });

  if (empate === "empate") {
    return empate;
  }

  return false;
}

function atualizarTurno() {
  if (turno === "x") {
    turno = "o";
    turnoElemento.innerHTML = iconO + "<h3>TURNO</h3>";
  } else {
    turno = "x";
    turnoElemento.innerHTML = iconX + "<h3>TURNO</h3>";
  }
}

function limparJogo() {
  let botoes = document.querySelectorAll(".button-game-area");

  espelhoJogo = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  if (turno == "o") {
    atualizarTurno();
  }

  botoes.forEach((botao) => {
    let svg = botao.querySelector("svg");

    if (svg) {
      svg.style.animation =
        "sumir 300ms cubic-bezier(.51,-0.56,.41,.96) forwards";
    }

    setTimeout(() => {
      botao.innerHTML = "";
    }, 300);
  });
}

function atualizarPlacar(resultado) {
  switch (resultado) {
    case "x":
      pontosX++;
      elementoPontosX.innerHTML = pontosX;
      elementoPontosX.style.animation =
        "surgir 300ms cubic-bezier(.29,-0.41,.1,1.54) alternate";

      setTimeout(() => {
        elementoPontosX.style.animation = "";
      }, 300);

      break;

    case "o":
      pontosO++;
      elementoPontosO.innerHTML = pontosO;
      elementoPontosO.style.animation =
        "surgir 300ms cubic-bezier(.29,-0.41,.1,1.54) alternate";

      setTimeout(() => {
        elementoPontosO.style.animation = "";
      }, 300);

      break;

    case "empate":
      empates++;
      elementoEmpates.innerHTML = empates;
      elementoEmpates.style.animation =
        "surgir 300ms cubic-bezier(.29,-0.41,.1,1.54) alternate";

      setTimeout(() => {
        elementoEmpates.style.animation = "";
      }, 300);

      break;

    default:
      console.log("Sem nenhum resultado");
  }
}

function acaoModal(vencedor) {
  const modal = document.getElementById("modalVencedor");
  const modalConteudo = modal.querySelector(".modal-conteudo");

  if (modal.open) {
    modal.close();
    limparJogo();


    
  } else {
    switch (vencedor) {
      case "x":
        modalConteudo.innerHTML = iconX + "<h2>VITÓRIA</h2>"
        break;
      case "o":
        modalConteudo.innerHTML = iconO + "<h2>VITÓRIA</h2>"
        break;
      case "empate":
        modalConteudo.innerHTML = "<h2>EMPATE</h2>"
        break;
      default:
        console.log("Não foi possivel abrir a modal! :c ")
        break;
    }

    modal.show();
  }
}

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "TIC-TAC TOE";
  } else {
    document.title = `Cadê você? (≖_≖)`;
  }
});


// document.addEventListener("keypress", function(e){
//   if(e.key == "A"){
//     console.log("a");
//   }
// })