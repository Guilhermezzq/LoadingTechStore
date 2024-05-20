# Loading Tech Store 

### O projeto "Loading Tech Store" é uma loja virtual que oferece uma variedade de produtos de tecnologia. Ele consiste em duas partes principais: o front-end, que é a interface com o usuário onde os produtos são exibidos e os usuários podem interagir para fazer compras, e o back-end, que é responsável por fornecer os dados dos produtos e gerenciar as operações de CRUD (Create, Read, Update, Delete) por meio de uma API REST.

#### No front-end, os usuários podem navegar pelos produtos que são Modelos 3D e você pode inspecionar e dar um zoom, visualizar detalhes de cada produto, como título, descrição e preço, e adicionar produtos ao carrinho de compras. A interface do usuário é projetada para ser intuitiva e responsiva, oferecendo uma experiência de compra agradável em diferentes dispositivos e tamanhos de tela.

Por trás da interface do usuário, o back-end é alimentado por uma API REST implementada com JSON Server. Esta API fornece endpoints para acessar os dados dos produtos, permitindo que o front-end recupere informações sobre os produtos disponíveis na loja. Além disso, a API também suporta operações de criação, atualização e exclusão de produtos, garantindo que a loja possa ser gerenciada de forma eficiente.

A integração entre o front-end e o back-end permite que a loja virtual Loading Tech Store oferece uma experiência de loja funcional aos usuários. Os produtos são gerenciados de forma eficiente no back-end por meio da API REST, enquanto o front-end fornece uma interface de usuário atraente e intuitiva para os clientes explorarem e fazerem compras na loja. Essa abordagem de desenvolvimento modular e orientada a APIs facilita a escalabilidade e a manutenção do projeto, permitindo que a loja virtual se adapte facilmente às necessidades e cresça ao longo do tempo.


## Setup / Settings


### 3D models - [https://sketchfab.com/feed]

Airpods Pro - (https://sketchfab.com/3d-models/airpods-pro-with-magsafe-charging-case-ios15-52e5f28b37f94f05b6c0768773137689)

LG UltraWide - (https://sketchfab.com/3d-models/ultrawide-monitor-f84d24b6df3648d884fd9be9c8007dd4)

CPU - Full White - (https://sketchfab.com/3d-models/computer-a5bfbebc47ca494c8c18f29153ec4e15)

iPhone 12 Pro - (https://sketchfab.com/3d-models/iphone-12-pro-05dfc991665e45c68c8b7062136c0c6e)

Ergonomic Office Chair - (https://sketchfab.com/3d-models/muskonge-n24t6n23s2001-d6d369b2d38e4275a1b4c3b16bda067b)

Gaming Chair - (https://sketchfab.com/3d-models/gaming-chair-84910a0b8c8d48c7b07773fa1d6950ad)

iPhone 13 Pro - (https://sketchfab.com/3d-models/iphone-13-pro-concept-43bddf623d24406aae61c8f3ba516e3d)

iPhone 14 Pro Max (Gold) - (https://sketchfab.com/3d-models/iphone-14-pro-max-gold-704dff49176e482cb3c243b3e754b753)

Apple iPhone 15 Pro - (https://sketchfab.com/3d-models/apple-iphone-15-pro-max-black-df17520841214c1792fb8a44c6783ee7)

MackBook M3 PRO - (https://sketchfab.com/3d-models/macbook-pro-16-2021-30536ba858054f8489d16253acfc9cf2)

### 3D models - [pmndrs.market] 

Mechanical Keyboard Tenkeyless - (https://market.pmnd.rs/model/mechanical-keyboard-tenkeyless)

Headphones - (https://market.pmnd.rs/model/headphones)

Apple iPhone X - (https://market.pmnd.rs/model/iphone-x)

Nintendo Entertainment System - (https://market.pmnd.rs/model/nes)

NES Controller - (https://market.pmnd.rs/model/nes-controller)


# Vite - Create the Project Folder (only the first time).

Vite [Getting Started](https://vitejs.dev/guide/).

"Using (./) to search for the folder name instead of creating a new one"
"Utilizar (./) para busca o nome da pasta ao inves de criar um novo"

```
npm create vite@latest ./
```

After Choose / Depois escolher

```
React
TypeScript
```

Now Run: 

```
npm install
npm run dev
```


# React Router - Add a Router with Vite.

React Router [Tutorial](https://reactrouter.com/en/main/start/tutorial).

```
npm install react-router-dom localforage match-sorter sort-by
```


# Tailwind CSS - Install Tailwind CSS with Vite.

Tailwind CSS [Setting up Tailwind CSS](https://tailwindcss.com/docs/guides/vite).

```
npm install -D tailwindcss postcss autoprefixe
npx tailwindcss init -p
```

tailwind.config.js / Add in File

```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

index.css // Add in File

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

App.jsx / Testing Libary

```
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```


# React Icons - Include popular icons in your React project.

React Icons [ES6 imports that allows you to include Icons](https://react-icons.github.io/react-icons/).

```
npm install react-icons --save
```


# React Hot Toast - The Best Toast in Town.

React Hot Toast [Smoking hot React notifications.](https://react-hot-toast.com/).

```
npm install react-hot-toast
```


# React Three Fiber - Renderer for three.js.

React Three Fiber - [React-three-fiber is a React renderer for three.js.](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction).

```
npm install three @types/three @react-three/fiber
```


# React Drei - Useful Helpers .

React Drei [useful helpers for react-three-fiber.](https://github.com/pmndrs/drei#readme).

```
npm install @react-three/drei
```

















