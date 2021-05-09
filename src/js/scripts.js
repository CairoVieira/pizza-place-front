import * as $ from "jquery";

export function loginScripts() {
	const signUpButton = document.getElementById("signUp");
	const signInButton = document.getElementById("signIn");
	const container = document.getElementById("container-login");

	signUpButton.addEventListener("click", () => {
		container.classList.add("right-panel-active");
	});

	signInButton.addEventListener("click", () => {
		container.classList.remove("right-panel-active");
	});
}

export function usuarioAutenticado() {
	const usuario = sessionStorage.getItem("user");

	if (!usuario) return false;

	return true;
}

export function sideBar() {
	$(document).ready(function () {
		$(".side-bar-logo").on("click", function () {
			$(".side-bar").toggleClass("clicked");
			$(".dashboard-background").toggleClass("clicked");
			$(".side-bar-expanded").toggleClass("display");
			$(".side-bar-collapsed").toggleClass("display");
			$(".side-bar-logo").toggleClass("display");
			$(".side-bar-btn-collapsed").toggleClass("display");
		});

		$(".side-bar-btn-collapsed  button").on("click", function () {
			$(".side-bar").toggleClass("clicked");
			$(".dashboard-background").toggleClass("clicked");
			$(".side-bar-expanded").toggleClass("display");
			$(".side-bar-collapsed").toggleClass("display");
			$(".side-bar-logo").toggleClass("display");
			$(".side-bar-btn-collapsed").toggleClass("display");
		});
	});
}
