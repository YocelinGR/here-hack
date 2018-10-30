import React, { Component } from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import VistaConductor from './Component/VistaConductor/VistaConductor';
import VistaAdmin from './Component/VistaAdmin/VistaAdmin';
import VistaEscuela from './Component/VistaEscuela/VistaEscuela';
import VistaPadre from './Component/VistaPadre/VistaPadre';
import VistaPerfiles from './Component/VistaPerfiles/VistaPerfiles';
import LoginTelefono from './Component/LoginTelefono/LoginTelefono';
import LoginPassword from './Component/LoginPassword/LoginPassword';
import Lector from './Component/Lector/LectorQR';
import DatePicker from './Component/Calendario/index';
import SplashScreen from './Component/SplashScreen/SplashScreen';
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
                        <Route
                            path="/LoginTelefono"
                            exact
                            component={LoginTelefono}
                            />
                         <Route
                            path="/LoginPassword"
                            exact
                            component={LoginPassword}
                            />
                        <Route
                            path="/Lector"
                            exact
                            component={Lector}
                            />
                        <Route
                            path="/DatePicker"
                            exact
                            component={DatePicker}
                            />
                        <Route
                            path="/SplashScreen"
                            exact
                            component={SplashScreen}
                            />
                      </Switch>
                  </div>
              </BrowserRouter>
          </div>
    );
  }
}
export default App;
