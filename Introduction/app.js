// Custom React
const React = {
    createElement(type, props, children) {
        return {
            type: type,
            props: {
                ...props,
                children: children
            }
        };
    }
};

// Custom ReactDOM
const ReactDOM = {
    render(reactElement, root) {
        const element = document.createElement(reactElement.type);

        const { props } = reactElement;

        for (const key in props) {
            if (key === "style") {
                Object.assign(element.style, props.style);
            } else if (key === "children") {
                element.textContent = props.children;
            } else {
                element[key] = props[key];
            }
        }

        root.appendChild(element);
    }
};

// Create first element
const element1 = React.createElement(
    "h1",
    {
        className: "element",
        id: "first",
        style: {
            fontSize: "30px",
            backgroundColor: "orange",
            color: "white",
            padding: "10px",
            borderRadius: "5px"
        }
    },
    "Hello Coder Army"
);

// Create second element
const element2 = React.createElement(
    "h2",
    {
        className: "element",
        id: "second",
        style: {
            fontSize: "20px",
            backgroundColor: "pink",
            color: "green",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px"
        }
    },
    "Strike is Launched"
);

// Select root element
const root = document.getElementById("root");

// Clear previous content
root.innerHTML = "";

// Render elements
ReactDOM.render(element1, root);
ReactDOM.render(element2, root);