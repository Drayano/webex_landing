const params = new URLSearchParams(document.location.search);
const code = params.get("code");
const state = params.get("state");
console.log(code);
console.log(state);

function sendCode() {
    if (code != null) {
        fetch(`https://webex-integration.onrender.com/code/${code}`, {
            method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
}

sendCode();