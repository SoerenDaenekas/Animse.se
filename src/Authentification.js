import Cookies from "js-cookie";

const ApiUrl = "http://api.animse.se:8055"

  /**
   * @return {boolean} determening if the refresh was successful
   */
async function refreshToken() {
    const refresh_token = Cookies.get("refresh_token")

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token })
    }

    var res = await fetch(ApiUrl + "/auth/refresh", requestOptions)

    //todo return false

    var json = await res.json()
    var expire = new Date(new Date().getTime() + json.data.expires);

    Cookies.set("access_token", json.data.access_token, {expires: expire})
    Cookies.set("refresh_token", json.data.refresh_token)

    return true
}

  /**
   * @return {boolean} whether the user is logged in or not
   */
export async function isLoggedIn() {
    const access_token = Cookies.get("access_token")

    if (access_token !== undefined) return true
    
    const refresh_token = Cookies.get("refresh_token")

    if (refresh_token === undefined) return false
    
    return await refreshToken()
}

export async function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    var res = await fetch(ApiUrl + "/auth/login", requestOptions)

    if (res.status === 401) return {status: "failed", message: "incorrect credentials"}

    var json = await res.json()

    //todo handle error messages

    var expire = new Date(new Date().getTime() + json.data.expires);

    Cookies.set("access_token", json.data.access_token, {expires: expire})
    Cookies.set("refresh_token", json.data.refresh_token)

    return { status: "success" }
}

export async function register(firstName, lastName, email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password })
    };

    var res = await fetch(ApiUrl + "/register/createAccount", requestOptions)

    
    return await res.json()



}

export async function sendConfirmationEmail() {
    //todo
}

function getBearerHeader() {
    // todo refresh if expired
    return "Bearer " + Cookies.get("access_token")
}


  /**
   * @return {boolean} whether creating the event was successful or not
   */
export async function createEvent(eventName, eventDate, eventLocation, description) {
    // todo not logged in
  
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': getBearerHeader() },
        body: JSON.stringify({ title: eventName, startdate: eventDate, location: eventLocation, description: description })
    };

    console.log(requestOptions)
    var owo = await fetch(ApiUrl + "/items/animeevents", requestOptions)
    
    console.log(await owo.json())

    //todo 

    return true
}

export async function getEvents() {
    var res = await fetch(ApiUrl + "/items/animeevents/")
    return await res.json()
}

export async function getLoggedInUserInfo() {

    if (!await isLoggedIn()){
        return false;
    }

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': getBearerHeader() },
    };
    var res = await fetch(ApiUrl + "/users/me", requestOptions) 

    return await res.json()

    
}