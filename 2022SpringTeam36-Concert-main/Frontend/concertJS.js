function openMenu() {
    document.getElementById("menu-button").setAttribute("onclick", "closeMenu()");
    document.getElementById("menu-arrow").className="fa fa-chevron-right";
    document.getElementById("menu").style.display="block";
}
function closeMenu() {
    document.getElementById("menu-button").setAttribute("onclick", "openMenu()");
    document.getElementById("menu-arrow").className="fa fa-chevron-down";
    document.getElementById("menu").style.display="none";
}

function openCourses() {
    document.getElementById("courses-link").setAttribute("onclick", "closeCourses()");
    id="courses-down"
    document.getElementById("courses-arrow").className="fa fa-chevron-right";
    document.getElementById("courses").style.display="block";
}
function closeCourses() {
    document.getElementById("courses-link").setAttribute("onclick", "openCourses()");
    document.getElementById("courses-arrow").className="fa fa-chevron-down";
    document.getElementById("courses").style.display="none";
}

function openAnalysis() {
    document.getElementById("analysis-link").setAttribute("onclick", "closeAnalysis()");
    document.getElementById("analysis-arrow").className="fa fa-chevron-right";
    document.getElementById("analysis").style.display="block";
}
function closeAnalysis() {
    document.getElementById("analysis-link").setAttribute("onclick", "openAnalysis()");
    document.getElementById("analysis-arrow").className="fa fa-chevron-down";
    document.getElementById("analysis").style.display="none";
}

function openHelpAndFeedback() {
    document.getElementById("help-and-feedback-link").setAttribute("onclick", "closeHelpAndFeedback()");
    document.getElementById("help-and-feedback-arrow").className="fa fa-chevron-right";
    document.getElementById("help-and-feedback").style.display="block";
}
function closeHelpAndFeedback() {
    document.getElementById("help-and-feedback-link").setAttribute("onclick", "openHelpAndFeedback()");
    document.getElementById("help-and-feedback-arrow").className="fa fa-chevron-down";
    document.getElementById("help-and-feedback").style.display="none";
}

function openProfile() {
    document.getElementById("profile-button").setAttribute("onclick", "closeProfile()");
    document.getElementById("profile-arrow").className="fa fa-chevron-right";
    document.getElementById("profile").style.display="block";
}
function closeProfile() {
    document.getElementById("profile-button").setAttribute("onclick", "openProfile()");
    document.getElementById("profile-arrow").className="fa fa-chevron-down";
    document.getElementById("profile").style.display="none";
}

function openAddACourseForm() {
    document.getElementById("add-a-course").style.display="block";
}
function closeAddACourseForm() {
    document.getElementById("add-a-course").style.display="none";
}

function openEditForm() {
    document.getElementById("edit").style.display="block";
}
function closeEditForm() {
    document.getElementById("edit").style.display="none";
}

function openDeleteForm() {
    document.getElementById("delete").style.display="block";
}
function closeDeleteForm() {
    document.getElementById("delete").style.display="none";
}

function openEnrollAStudentForm() {
    document.getElementById("enroll-a-student").style.display="block";
}
function closeEnrollAStudentForm() {
    document.getElementById("enroll-a-student").style.display="none";
}

function openUnenrollAStudentForm() {
    document.getElementById("unenroll-a-student").style.display="block";
}
function closeUnenrollAStudentForm() {
    document.getElementById("unenroll-a-student").style.display="none";
}

function openAddAModuleForm() {
    document.getElementById("add-a-module").style.display="block";
}
function closeAddAModuleForm() {
    document.getElementById("add-a-module").style.display="none";
}

function openEditAModuleForm() {
    document.getElementById("edit-a-module").style.display="block";
}
function closeEditAModuleForm() {
    document.getElementById("edit-a-module").style.display="none";
}

function openDeleteAModuleForm() {
    document.getElementById("delete-a-module").style.display="block";
}
function closeDeleteAModuleForm() {
    document.getElementById("delete-a-module").style.display="none";
}