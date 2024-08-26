// const head = React.createElement(
//   "h1",
//   { id: "head", class: "heading_class" },
//   "hello from palak"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(head);
// root.render(head);

//create a template that includes 2 divs and in that type hello and bye in h1 tag
//steps
//1-> create element and in children parameter create another element(children parameter can have content as well as element also)
//second div will be treated as children of another div
//to print two html tag we will use *Array*
let greetings = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Hello"),
    React.createElement("h1", { id: "heading2" }, "Bye"),
  ])
);
//this is not a good way to create a lot of elements like this.. for this we have jsx in react with built tools
//working with cdn is not that good bcoz its not good for large apps
//to work with full fledged projects we need some built tools in react.. build tools are....
/*1> CRA - create React App,- this will create a whole boiler plate code for us so that we can write our react code very comfortably
(always write foler in small letters) to create react app with cra we have to write "npx create-react-app . <foldername>" in terminal
exploring my_app folder
-> src folder- contains app.js ,app.cs which contains already written code in react.
app.js file in src folder is the main js file,where we will write our react code
2>Vite 3> parcel*/
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(greetings);
//npx- node package executer and we always need node js to use built tools of react. cra is a node package

