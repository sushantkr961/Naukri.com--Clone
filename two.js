import { Navbar, Footer, partner, reserved} from "./common/footer.js";

document.querySelector("#footer").innerHTML = Footer();
document.querySelector(".navbar").innerHTML = Navbar();
document.querySelector("#imageSlider2").innerHTML = partner();
document.querySelector("#reserve").innerHTML = reserved();