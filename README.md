
README.md mejorado (ejemplo para tu repo)

markdown
Calculadora Científica

Calculadora de escritorio moderna creada con **React**, **Vite** y **Electron**.  
Ofrece una experiencia precisa, accesible y visualmente clara para cálculos científicos avanzados, con una interfaz modular que permite operar de forma intuitiva, rápida y sin distracciones.

Instalación y ejecución

Clona el repositorio:

bash
git clone https://github.com/priscilo/Calculadora-Cient-fica.git
cd Calculadora-Cient-fica
npm install

Ejecuta en desarrollo:

bash
npm start

Genera la versión de producción:

bash
npm run build

Scripts disponibles

- `npm run dev` → Ejecuta Vite en navegador.  
- `npm start` → Ejecuta Vite + Electron en paralelo.  
- `npm run build` → Genera versión de producción en `dist/`.  
- `npm run electron` → Abre solo la app de escritorio.  

Tecnologías

- React 18  
- Vite 7  
- Electron 29  
- MathJS (para cálculos científicos)  
- Concurrently (para correr procesos en paralelo)  

Estructura del proyecto

electron/
src/
  ├─ App.jsx
  ├─ App.css
  ├─ main.jsx
public/
  ├─ favicon.png
.gitignore
LICENSE
README.md
vite.config.js
package.json

Roadmap

- [ ] Añadir funciones científicas (sin, cos, tan, log, sqrt) con **mathjs**.  
- [ ] Mejorar interfaz con más botones y diseño responsivo.  
- [ ] Empaquetar con **electron-builder** para generar instaladores `.exe` y `.dmg`.  
- [ ] Añadir tests unitarios con Jest/React Testing Library.  

Capturas

*(Aquí puedes añadir imágenes o GIFs mostrando la calculadora en acción)*

Licencia

Este proyecto está bajo la licencia MIT.  


Con este README tu repositorio quedará mucho más atractivo y claro para colaboradores o usuarios.  
