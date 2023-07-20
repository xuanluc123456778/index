function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    
    if (fullName === "") {
        alert("Họ và tên không được bỏ trống.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Email không đúng định dạng.");
        return false;
    }

    if (phone === "") {
        alert("Số điện thoại không được bỏ trống.");
        return false;
    }

    if (!gender) {
        alert("Vui lòng chọn giới tính.");
        return false;
    }

    // Display user information
    document.getElementById("fullNameDisplay").textContent = "Họ và tên: " + fullName;
    document.getElementById("emailDisplay").textContent = "Email: " + email;
    document.getElementById("phoneDisplay").textContent = "Phone: " + phone;
    document.getElementById("genderDisplay").textContent = "Giới tính: " + gender.value;
    document.getElementById("hobbiesDisplay").textContent = "Sở thích: " + getSelectedHobbies(hobbies);
    document.getElementById("introDisplay").textContent = "Giới thiệu bản thân: " + document.getElementById("intro").value;

    document.getElementById("userInfo").classList.remove("hidden");
    document.getElementById("registrationForm").classList.add("hidden");

    return false;
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function getSelectedHobbies(hobbies) {
    var selectedHobbies = [];
    for (var i = 0; i < hobbies.length; i++) {
        selectedHobbies.push(hobbies[i].value);
    }
    return selectedHobbies.join(", ");
}
