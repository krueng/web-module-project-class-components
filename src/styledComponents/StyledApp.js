import styled from "styled-components";

const StyledApp = styled.div`
@import url('https://fonts.googleapis.com/css?family=Roboto');
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background-color: #2d2d37;
}

h1,
h2,
h3,
h4,
h5,
h6,
div,
p,
span {
  color: white;
  font-family: 'Roboto', sans-serif;
}

.App {
  font-family: sans-serif;
  text-align: center;
  padding: 0 36px;
  max-width: 665px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  text-align: left;
}

.todo-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}
.task {
  background-color: #364943;
  width: 45%;
  text-align: left;
  margin: 4px 0;
  padding-left: 8px;
  cursor: pointer;
}

.task.completed {
  background-color: #317d7c;
  text-decoration: line-through;
}
form {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
form > input {
  background-color: #3d2d37;
  border: 0;
  padding: 6px 0;
  font-size: 1rem;
  width: 240px;
  outline: 0;
  color: white;
  border-bottom: 1px solid #364944;
  margin-right: 8px;
}

button {
  background-color: #364944;
  border: 1px solid #364944;
  color: white;
  font-size: 16px;
  padding: 6px 14px;
}

input::placeholder {
  color: #e64944;
  opacity: 1;
}

.clear-btn {
  margin-top: 16px;
}

`

export default StyledApp;