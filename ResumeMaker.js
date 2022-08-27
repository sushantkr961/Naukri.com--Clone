
import { NAVBAR, FOOTER, partner, reserved} from "./common/common.js";

document.querySelector("#footer").innerHTML = FOOTER();
document.querySelector("#main_one").innerHTML = NAVBAR();
document.querySelector("#imageSlider2").innerHTML = partner();
document.querySelector("#reserve").innerHTML = reserved();


