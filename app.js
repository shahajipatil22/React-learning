
const Heading = React.createElement('h1',{id:"title"},"Welcome geeks");
const Heading1 = React.createElement('h1',{id:"title"},"Welcome geeks header 1");
console.log(Heading);
const container = React.createElement('div',{id:"container"},[Heading, Heading1]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);