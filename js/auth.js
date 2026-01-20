if (localStorage.getItem("isAdmin") !== "true") {
  document.body.innerHTML = "<h2>Access Denied</h2>";
}
