import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Admin from "./admin";
import Projects from "./projects";
import Progetto from "./project";
import Welcome from "./welcome";
import About from "./about";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/Projects" component={Projects} />
            <Route
                path="/project/:id"
                render={(props) => (
                    <Progetto
                        key={props.match.url}
                        match={props.match}
                        history={props.history}
                    />
                )}
            />
        </BrowserRouter>
    );
}
