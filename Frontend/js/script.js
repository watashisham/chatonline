//LOGIN ELEMENTS
const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")

//CORES ALEATÓRIAS PARA O NIC
const colors = [
    "blueviolet",
    "blue",
    "green",
    "orangered",
    "crimson",
]

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

//DADOS DO USUARIO
const user = { id: "", name: "", color: "", avatar: "" }

//FUNÇÃO DE LOGIN AO CLICAR ENTER OU ENTRAR
const handleSubmit = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    console.log(user)

}

loginForm.addEventListener("submit", handleSubmit)