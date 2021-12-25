import { Button, MultiSelect } from '@mantine/core';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
const { ipcRenderer } = window.require('electron');

let version: string;

ipcRenderer.send('app-version');
ipcRenderer.on('app-version-reply', (_, arg: any) => {
  console.log(arg);
  version = 'Version ' + arg.version;
});

const Hello = () => (
  <div>
    <div>Hello {version}</div>
    <Button variant="light" size="md" uppercase>
      Settings
    </Button>
  </div>
);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
