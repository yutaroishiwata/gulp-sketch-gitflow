# Gulp Sketch Gitflow
The tool for helping your version control Sketch files with Git. <br>
Rename the `.sketch` file to `.zip` and extract it to the same directory.

# Usage
### Step 1: Installation 
Clone the repo to your project folder.
```bash
$ git clone https://github.com/yutaroishiwata/gulp-sketch-gitflow .
$ npm install
```

### Step 2: Folder Structure
Move your `.sketch` file to the `sketch` folder. Also, you can use a sub-folder.
```bash
Project folder
├── gulpfile.js
├── node_modules
├── package-lock.json
├── package.json
└── sketch # Here's folder name must be 'sketch'
    └── design.sketch
or
.
└── sketch # Here's folder name must be 'sketch'
    ├── design # You can create as many sub-folders as you need
    .   └── design.sketch
```
### Step 3: Let's Start
Run with the command line tool.
```
$ gulp
```

# Results
```
sketch
├── design.sketch
├── design.zip
├── document.json
├── images
│   ├── 593e7559501dc8fa20fd7a831365183b33f1183d.png
|   .
├── meta.json
├── pages
│   ├── 28847D28-AF80-4065-9C97-921276501230.json
|   .
├── previews
│   ├── library-preview.png
│   └── preview.png
├── text-previews
│   ├── text-previews-metadata.json
│   └── text-previews.pdf
└── user.json
```



