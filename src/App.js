import React, { Component } from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import VistaConductor from './Component/VistaConductor/VistaConductor';
import VistaAdmin from './Component/VistaAdmin/VistaAdmin';
import VistaEscuela from './Component/VistaEscuela/VistaEscuela';
import VistaPadre from './Component/VistaPadre/VistaPadre';
import VistaPerfiles from './Component/VistaPerfiles/VistaPerfiles';


class App extends Component {
  render() {
    return (
      <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            component={VistaPerfiles}
                            />
                        <Route
                            path="/VistaConductor"
                            exact
                            component={VistaConductor}
                            />
                        <Route
                            path="/VistaAdmin"
                            exact
                            component={VistaAdmin}
                            />
                        <Route
                            path="/VistaEscuela"
                            exact
                            component={VistaEscuela}
                            />
                        <Route
                            path="/VistaPadre"
                            exact
                            component={VistaPadre}
                            />
                      </Switch>
                  </div>
              </BrowserRouter>
          </div>
    );
  }
}
export default App;
