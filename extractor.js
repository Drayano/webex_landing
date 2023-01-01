const params = new URLSearchParams(document.location.search);
const code = params.get("code");
console.log(code);