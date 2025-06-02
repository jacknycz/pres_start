# pres-start-core

A React component library built with TypeScript and Tailwind CSS.  
This design system provides accessible, customizable UI components designed to integrate seamlessly with Tailwind.

---

## Installation
bash
```
npm install pres-start-core
```
yarn
```
yarn add pres-start-core
```
## Note

This package requires Tailwind CSS to be installed and configured in your project separately. It does **not** bundle Tailwind CSS.

## Peer Dependencies

- React 18.x  
- ReactDOM 18.x  
- Tailwind CSS (must be installed and configured in your project)  

## Usage

Import components from the package and use them in your React app:

```
import React from 'react';
import { Button, Accordion } from 'pres-start-core';

function App() {
  return (
    <div className="p-6">
      <Button variant="primary">Click Me</Button>
      <Accordion title="Section 1">
        <p>This is the content of section 1.</p>
      </Accordion>
    </div>
  );
}

export default App;
```

## Documentation
Visit the documentation site: https://presstart.netlify.app

## Contributing
Contributions are welcome! Please open issues or pull requests on [GitHub](https://github.com/jacknycz/pres_start/tree/main/packages/pres-start-core).

## License
ISC License © Jack Nycz

## Contact
For questions or support, please open an issue or contact Jack Nycz.