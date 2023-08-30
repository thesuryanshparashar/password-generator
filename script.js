const passwordDisplay = document.querySelector("#password")
function generatePassword() {
  const passwordLength = 16
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  let generatedPassword = ""
  
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    generatedPassword += charset[randomIndex]
  }

  passwordDisplay.textContent = generatedPassword
}

function copyToClipboard() {
  navigator.clipboard.writeText(passwordDisplay.textContent).then(() => alert("Password copied to clipboard")).catch(err => console.error(err))
}

function clearPasswordDisplay() {
  passwordDisplay.textContent = ""
}

function savePassword() {
  const password = document.getElementById("password").textContent
  const currentDate = new Date().toLocaleString()
  const passwordObject = {
    password: password,
    date: currentDate
  }

  let savedPasswords = JSON.parse(localStorage.getItem("passwords")) || []
  savedPasswords.push(passwordObject)
  localStorage.setItem("passwords", JSON.stringify(savedPasswords))

  alert("Password saved successfully!")
}

function showSavedPasswords() {
  const savedPasswords = JSON.parse(localStorage.getItem("passwords")) || []

  if (savedPasswords.length === 0) {
    alert("No saved passwords found.")
    return
  }

  let passwordList = "Saved Passwords:\n"
  savedPasswords.forEach((item) => {
    passwordList += `Password: ${item.password}\nDate: ${item.date}\n\n`
  })

  alert(passwordList)
}

function clearSavedPasswords() {
  const confirmClear = confirm("Are you sure you want to clear all saved passwords?")
  if (confirmClear) {
    localStorage.removeItem("passwords")
    alert("Saved passwords cleared successfully!")
  }
}
