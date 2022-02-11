<h1 style="font-weight: bold" align="center">React Holidays</h1>

<br />
<div align="center">
  	<a href="#">
  		<img src="https://img.shields.io/badge/React%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
	</a>
  	<a href="#">
  		<img src="https://img.shields.io/badge/WebPack%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=61DAFB" alt="WebPack"/>
	</a>
  	<a href="#">
  		<img src="https://img.shields.io/badge/Babel%20-%2320232a.svg?&style=for-the-badge&logo=webpack&logoColor=FFCA28" alt="Babel"/>
	</a>
  	<a href="#">
  		<img src="https://img.shields.io/badge/ESLint%20-%2320232a.svg?&style=for-the-badge&logo=eslint&logoColor=4B32C3" alt="ESLint"/>
	</a>
    <a href="#">
  		<img src="https://img.shields.io/badge/TypeScript%20-%2320232a.svg?&style=for-the-badge&logo=TypeScript&logoColor=61DAFB" alt="TypeScript"/>
	</a>
	<a href="#">
		<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code" />
	</a>
</div>

<br />
<br />

<h2 style="font-weight:300">How to fix <strong>Husky</strong> to run hooks:</h2>

In `package.json` add on scripts (verify if already exists):

```json
"postinstall": "husky install",
```

After that run on your terminal:

- **Using YARN:**
  -   ` npx husky set .husky/pre-commit "yarn lint-staged"`
- **Using NPM:**
  -   ` npx husky set .husky/pre-commit "npm lint-staged"`
