@import url("https://fonts.googleapis.com/css2?family=Fira+Sans&family=Silkscreen&family=Source+Code+Pro&family=Ubuntu:wght@400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "fira-sans", sans-serif;
}
h2 {
  text-align: center;
  margin-bottom: 7%;
  font-family: "ubuntu", sans-serif;
  font-weight: 500;
}
h4 {
  text-align: center;
}
main {
  box-sizing: border-box;
  display: block;
}
table {
  text-align: center;
  margin: auto;
}
td,
th {
  padding: 60px;
  border: 1px solid black;
}

.wrapper-container {
  max-width: 1540px;
  overflow: hidden;
  position: relative;
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  margin: auto;
}
.container-fluid {
  padding: 0;
}
/* Intro section */
.intro {
  padding: 20%;
}
.navbar {
  background-color: #e9ff5e;
}
.navbar .navbar-brand {
  font-family: "ubuntu", sans-serif;
  font-weight: 500;
  padding-left: 10px;
}
.hello {
  font-size: 3rem;
  font-family: "source code pro", monospace;
}

.myName {
  font-size: 2rem;
  font-family: "ubuntu", sans-serif;
  font-weight: 500;
}
#feature-text,
.name {
  font-size: 3rem;
  font-family: "ubuntu", sans-serif;
  font-weight: 500;
}
.input-cursor {
  display: inline-block;
  width: 2px;
  height: 3rem;
  background-color: black;
  animation: blink 0.5s linear infinite alternate;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.buttons {
  border-radius: 2rem;
  padding: 4px 15px;
  font-size: 16px;
  margin: 35px 0;
  background-color: #e9ff5e;
}
.col-lg-6 .myImg {
  max-width: 100%;
  padding: 0 5%;
}

/* section projects */

#ProjectsBody {
  padding: 7% 15%;
  background-color: #e9ff5e;
}
.card {
  margin: 15px;
  height: 24rem;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
}

/* section cp */

#myCP {
  padding: 7% 15%;
}

/* section contactMe */

#contactMe {
  padding: 7% 15%;
  background-color: #e9ff5e;
}
.contactMeForm {
  padding: 45px;
  border: 1px solid black;
}
label {
  padding-left: 0;
  padding-top: 12px;
  padding-bottom: 12px;
}
.sndmsg {
  position: relative;
  top: 12px;
}

/* section footer */

#footer {
  padding: 7% 15%;
}
.aboutMe {
  text-align: center;
  padding-top: 30px;
}
.links {
  text-align: center;
}
.logos {
  width: 22px;
}

/* media breakpoints */
@media only screen and (max-width: 991px) {
  .intro {
    text-align: center;
  }
}
@media only screen and (max-width: 426px) {
  .navbar .navbar-brand {
    padding-left: 10px;
  }
  .navbar-nav .nav-link {
    padding-left: 10px;
  }
  .name,
  #feature-text,
  .hello {
    font-size: 25px;
  }
  .input-cursor {
    display: inline-block;
    width: 2px;
    height: 25px;
    background-color: black;
    animation: blink 0.6s linear infinite alternate;
  }
}
