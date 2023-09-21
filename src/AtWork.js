// in a regular project this is going to include the react imports 


const App = () => {
    return <h1>Hello, this is a react test</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));

// this will override the code above
const App1 = () => {
    return <h2>This is another header</h2>;
}

ReactDOM.render(<App1 />, document.getElementById("root"));


// lists 
let todos = ["Eggs", "Milk", "Bread"];

const TodoList = () => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
};

ReactDOM.render(<TodoList />, document.getElementById("li"));

// 08/02/2023
// can also be stored as a variable 
import React from "react";
import ReactDOM from "react-dom";

const nav = (
    <nav>
        <h1>Logo</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
);

ReactDOM.render(nav, document.getElementById("root"));

// 08/03/2023
import React from "react";
import ReactDOM from "react-dom";

// functions can be done in two different ways, regular function and arrow functions, 
// although arrow functions is the prefered way of doing this on react
const heroText = () => {
    return <div>
        <h3>hello header</h3>
        <p>this is a paragraph</p>
    </div>;
};

// regular functions is 
function heroText() {
    return <div>
        <h3>hello header</h3>
        <p>this is a paragraph</p>
    </div>;
};

ReactDOM.render(<heroText />, document.getElementById("root"));

// adding classes to jsx elements
// its not class anymore now it is className 
const heroText = () => {
    return <div className="container">
        <h3>hello header</h3>
        <p>this is a paragraph</p>
    </div>
};

// 08/03/2023 PT 2
// functions must be pascalcase or uppercase in the first letter
MyList = () => {
    return (
    <div>
        <h1>This is my header</h1>
        <ul>
            <li>list item</li>
            <li>list item</li>
            <li>list item</li>
        </ul>
    </div>
    );
};

ReactDOM.render(<MyList />, document.getElementById("root"));

// 08/04/2023

import React from "react";
import ReactDOM from "react-dom"; 

const MyList = () => {
    return (
        <ul>
            <li><a>List item</a></li>
            <li><a>List item</a></li>
            <li><a>List item</a></li>
            <li><a>List item</a></li>
        </ul>
    );
}

const Header = () => {
    return (
        <div>
            <h3>this is a header</h3>
            <p>this is a paragraph</p>
        </div>
    );
}

const App = () => {
    return (
        <div className="page-wrap">
            <MyList />
            <Header />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// 08/08/2023

const sum = (x, y) => {
    let result = a + b;
    return result;
}

//props
import React from "react";

//everything in between the curly brackets are going to be valid js code, 
// so you can add variables 

const Greeting = () => {
    let firstName = "Joe";
    let lastName = "Garcia";

    return (
        <div>
            <h3>Welcome! {firstName} {lastName}</h3>
            <p>your sum is {sum(2, 4)}</p>
        </div>
    );
};


// 08/09/2023
// app.js
import React from "react";
import ReactDOm from "react-dom"

//can be done this way instead of props.name, props.lastName etc.
// but it is not recommended, so use props as parameter 
const App = ({name, lastName, age, rating}) => {
    return (
        <div>
            <h3>{name && <p>{name}</p>} {lastName}</h3>
            <p>your age is {age}</p>
            <p>{rating}</p>
        </div>
    );
}

export default App;

//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <App 
        name="john"
        lastName="dow"
        age={30}
        rating="5 stars"
        />
        <App 
        //in this case there is no name so it will return nothing
        lastName="dow"
        age={30}
        rating="5 stars"
        />
    </div>
);


// && operator, 
// template     condition && content
//instead of using if statements, you write a boolean statement then some content
// so if the ondition is trye it will do the content, if not, it wont


// 08/11/2023
// map 

const obj = {
    "name": "lewis", 
    "last": "hamilton"
}

const sup = obj.map((name) => {
    return ${name} + "hello there";
});

// 08/14/2023
// when there's too many props there is a shortcut hwen building the app 
// you used to do it like this 

// App.js
const App = () => {
    const drivers = DriversData.map((driver) => {
      return <F1Driver 
        pic={driver.pic}
        driverName={driver.name}
        country={driver.country}
        rate={driver.rate}
        team={driver.team}
        badge={driver.badge}
      />
    });
  
    return (
      <div className="body-wrap">
        <Header />
        <Nav />
        <MainPage />
        <Cards />
        <Subscribe />
  
        {/* drivers data component */}
        <div className="f1-wrap">
          {drivers}
          
        </div>
  
        <Footer />
      </div>
    );
}

// F1Driver.js
const F1Driver = (props) => {
    let badge;
    const addBadge = () => {
        if (props.badge === true) {
            badge = "World Champion";
        } else {
            // else do nothing
        }
    }
    addBadge();

    return (
        <div className="driver-container">
            <div className="img-wrap">
                <img src={props.pic}></img>
                {badge && <p className="badge">{badge}</p>}
                {/* this this dinamivcally but is not working as of now */}
                {/* <img src={`./img/${props.pic}`}></img> */}
            </div>
            <div className="f1-details">
                <h3 className={props.team}>{props.driverName}</h3>
                <p>Country: {props.country}</p>
                {/* this checks for a condition and deletes it from the dom if there is nothings */}
                {props.rate && <p>Rating: {props.rate}</p>}
            </div>
        </div>
    );
}

export default F1Driver;

// but when we pass our props, there's a item key passed to all of the objects, 
// so you can do item.driverName, but it has to be exact name as you have it on the data file
// instead of item.driverName it wil be props.item.name because you are not calling any porps on 
// the component to link it to whatever you have here
// then on the component only call <F1Driver item={item} />
//so using one or the other depends on the complecity of the props 
// either way it is fine to use 

// 08/15/2023
// functions and event listeners 

import React from "react";
import ReactDOM from "react-dom";

import memeData from "./memedata.js"

const Component = () => {
    const greeting = () => {
        console.log("hello there");
    }

    const randoMeme = () => {
        let memesArray = memeData.data.memes;
        let random = Math.floor(Math.random() * memesArray.length);
        let result = memesArray[random].url;
        console.log(result);
    }

    return (
        <div className="body-wrap">
            <h3>This button will trigger a function</h3>
            <button onClick={greeting}>Click Me</button>
        </div>
    );
}

export default Component;



// pure practice

import React from "react";
import img from "./img/sea.png";

const Block = (props) => {
    let text;
    const checkWinner = () => {
        if (props.item.winner === true) {
            text = "winner";
        } else {
            text = "you are not a winner";
        }
    }

    checkWinner();

    return (
        <section>
            <div className="img-wrap"><img src={"./img/" + props.item.imgs}></img></div>
            <h3>{props.item.name}</h3>
            <p>{props.item.lastName}</p>
            {/* check if there's any props with name, if there is it gets displayed */}
            {props.item.age && <p>age: {props.item.age}</p>}
            {/* this displays the text if it is a winner or not */}
            <div>{text}</div>
        </section>
    );
}

export default Block;

// data file 
const personData = [
    {
        "id": 1,
        "name": "lewis", 
        "lastName": "hamilton",
        "winner": true
    },
    {
        "id": 2,
        "name": "lewis", 
        "lastName": "hamilton",
        "age": 23,
        "winner": true
    },
    {
        "id": 3,
        "name": "lewis", 
        "lastName": "hamilton",
        "winner": false
    }
];

export default personData;


// App.js
import React from "react";
import ReactDOM from "react-dom";
import personData from "./person.js"
import Block from "./Block";

const App = () => {
    const individual = personData.map((item) => {
        return (
            <Block 
                key={item.id}
                item={item}
            />
        );
    });

    return (
        <div>
            {individual}
        </div>
    )
}

export default App;



// 08/17/2023
// practicing useState 


// color changer using state
import React, {useState} from "react";

const Body = () => {
    const [color, setColor] = useState("");

    const [text, setText] = useState("im red");

    const changeColor = () => {
        if (text === "im red") {
            setColor("red");
            setText("im blue");
        } else if (text === "im blue") {
            setColor("blue");
            setText("im red");
        } else {
            // do nothing
        }
    }

    return (
        <div>
            <button onClick={changeColor}>Click me</button>
            <div
            style = {{
                padding: "10px",
                backgroundColor: color,
            }}
            >{text}</div>
        </div>
    );
}

export default Body;




// 08/21/2023

// changing a modal visibility using display 
//Modal.js
import React from "react";

const Modal = (props) => {

    
    return (
        <div className="modal-wrap" style={props.display}>
            <h3>this is my modal</h3>
            <p>this is my paragraph</p>
            <button onClick={props.closeModal}>click to exit</button>
        </div>
    );
}

import default Modal;


//App.js
import React from "react";
import Modal from  "./components/Modal";

const App = () => {
    const [display, setDisplay] = useState({display: "none"});

    const openModal = () => {
        setDisplay({display: "block"})
    }

    const closeModal = () => {
        setDisplay({display: "none"})
    }

    return (
        <div>
            <Modal 
            // these are the props you called on the modal.js file
            //display will be the current state of display
            display={display}
            // the close modal prop calls the function
            closeModal={closeModal}
            />
            <button onClick={openModal}></button>
        </div>
    );

}

export default App;


//index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Index = () => {
    return (
        <App />
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Index />
);




// changing a modal visibility using css classes so it's animated



// 08/23/2023

// when passing objects and arrays in state, you need to add the
//...prev parameter and function like this 

import React from "react";
import Card from "./Card";

const App = () => {
    const [person, setPerson] = useState({
        "name": "john", 
        "lastName": "doe", 
        "age": 34
    });


    const changeAge = () => {
        setPerson(prev => ({
            ...prev,   // Corrected the syntax here
            "age": 20
        }))
    }

    
    return (
        <div>
            <Card 
            function={changeAge}
            info={person}
            />
        </div>
    );
}

export default App;





// 08/24/2023
// modal changes with styling 

// Modal.js

import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    return (
        <div className={`modal ${props.display ? "active" : ""}`}>
            <h3>my modal</h3>
            <button onClick={props.function}>click me</button>
        </div>
    );
}

export default 

// App.js

import { React, useState } from "react";
import ReactDOM from "react-dom"

import Modal from "../src/components/Modal";

const App = () => {
    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div className="app-wrap">
            <Modal 
            display={isOpen}
            function={closeModal}
            />

            <div>
                <h3>click on the button to open modal</h3>
                <button onClick={openModal}>click me</button>
            </div>
        </div>


    );
};


export default App


//Index.js

import React from "react";
import ReactDOM from "react-dom"; 

import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="root-wrap">
        <App />
    </div>
);















// 08/24/2023
// counter

// Counter.js
import React from "react";
import ReactDOM from "react-dom";

const Counter = (props) => {
    return (
        <div>
            <button onClick={props.minus}>Minus</button>
            <div>{props.value}</div>
            <button onClick={props.plus}>Plus</button>
        </div>
    );
};

export default Counter;


// App.js
import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";

const App = () => {
    const [number, setNumber] = useState(0);
    let result;

    // create a main function that holds both functions with conditions 
    const add = () => {
        if (number > 0) {
            result = number + 1;
            setNumber(result)
        } else {

        } 
    }

    const substract = () => {
        if (number > 0) {
            result = number - 1;
            setNumber(result);
        } else {
            
        }
    }

    return (
        <Counter 
        minus={substract}
        value={number}
        plus={add}
        />

    );
}


// index.js

import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
);











// passing objects as state

// card.js
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const App = () => {
    const initialSate = {
        "name": "lewis",
        "lastName": "hamilton", 
        "team": "mercedes",
        "age": 43,
        "isWorldChampion": true
    }

    const [profile, setProfile] = useState(initialSate);



    changeAge = () => {
        let isOld = profile.age < 30 ? "you are not old" : "you are old";
        let newTeam = profile.team === "mercedes" ? "williams" : "mclaren";
        setProfile(prev => ({
            ...prev,
            "team": newTeam,
            "isOld" :isOld 
        }))

    }

    return (
        <div>
            <h3>{profile}</h3>
            <button onClick={changeAge}></button>

        </div>
    );
}

export default App;



















import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const initialState = ["thing 1", "thing 2"];
    const [things, setThing] = useState(initialState);

    const addThing = () => {
        setThing(prev => {
            return [...prev, `thing ${prev.length + 1}`]
        })
    }

    const thingsArray = things.map(thing => {
        return <li>{thing}</li>
    });

    
    return (
        <div>
            <h3>this will add something on click</h3>
            <button onClick={addThing}>click me to add</button>
            <ul>
                {thingsArray}
            </ul>
        </div>
    );
}

export default App;







//hambmenu 

// hamburger menu that moves with animation
// in this case it is just hidden on the left, and it goes back and forth

// Hamburger.js
import React from "react";
import ReactDOM from "react-dom";

import hambIcon from "./img/hamburger.png";
import closeIcon from "./img/close.png";

import logo from "./img/logo.png";

const Hamburger = (props) => {
  return (
    <div className="hamb-wrap">
      <div className="top">
        <div>
          <img className="logo" src={logo}></img>
        </div>
        <div className="controls">
          <img
            onClick={props.toggleNav}
            src={props.display ? closeIcon : hambIcon}
          ></img>
        </div>
      </div>
      <div className={`botttom ${props.display ? "show" : "hide"}`}>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;

// App.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Hamburger from "./Hamburger";

const App = () => {
  // states for icons and
  const [icon, setIcon] = useState(false);
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setIcon(!icon);
    setNav(!nav);
  };

  return (
    <div>
      <Hamburger toggleNav={toggleNav} display={nav} />
    </div>
  );
};

export default App;




// index.js
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App />
);



// 09/21/2023
// forms 
// App.js
import React, { useState } from "react"

const App = () => {
    const [firstName, setFirstName] = useState("");;

    const changeName = (event) => {
        setFirstName(event.target.value);
    }

    return (
        <div className="app-wrap">
            <form>
                <input
                type="input"
                placeholder="enter first name"
                onChange={changeName}
                >
                </input>
            </form>
            <p>{firstName}</p>
        </div>
    )
}

export default App;


// index.js
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <App />
);
