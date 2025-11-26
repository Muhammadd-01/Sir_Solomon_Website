# Complete Setup Guide - Running Sir Solomon's School Website on Your PC

## Step-by-Step Installation Guide

### Phase 1: System Prerequisites (5 minutes)

#### For Windows Users:
1. Download Node.js from [nodejs.org](https://nodejs.org)
   - Click "Download LTS" (Long Term Support)
   - Run the installer
   - Click "Next" through all steps
   - Make sure "Add to PATH" is checked
   - Click "Install"

2. Verify installation:
   - Open Command Prompt (Press Windows + R, type `cmd`)
   - Type: `node --version`
   - Should show a version number like `v20.x.x`

#### For Mac Users:
1. Install Homebrew (if not already installed):
   \`\`\`bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   \`\`\`

2. Install Node.js:
   \`\`\`bash
   brew install node
   \`\`\`

3. Verify installation:
   \`\`\`bash
   node --version
   \`\`\`

#### For Linux Users:
\`\`\`bash
sudo apt update
sudo apt install nodejs npm
node --version
\`\`\`

### Phase 2: Download & Extract Project (5 minutes)

1. **Download the project**:
   - Click "Download ZIP" in the Code Project interface
   - Save the file to your desktop or preferred location

2. **Extract the ZIP file**:
   - **Windows**: Right-click → "Extract All" → Choose destination
   - **Mac/Linux**: Double-click or use: `unzip project-name.zip`

3. **Open the project folder**:
   - You should see folders like: `app/`, `components/`, `lib/`, `public/`, etc.

### Phase 3: Install Dependencies (3-5 minutes)

This downloads all the libraries the project needs to run.

#### Using NPM (Included with Node.js):

1. **Open Terminal/Command Prompt in project folder**:
   - **Windows**: 
     - Hold Shift + Right-click in project folder
     - Select "Open PowerShell window here"
   - **Mac/Linux**: 
     - Open Terminal
     - Type: `cd /path/to/project` (drag folder into terminal)

2. **Run installation**:
   \`\`\`bash
   npm install
   \`\`\`
   - This will take 2-5 minutes
   - You'll see text scrolling by (this is normal)
   - Wait until you see the command prompt again

3. **What just happened?**:
   - Created a `node_modules/` folder with all dependencies
   - Created a `package-lock.json` file (don't modify)

### Phase 4: Start Development Server (2 minutes)

1. **In the same terminal, run**:
   \`\`\`bash
   npm run dev
   \`\`\`

2. **You should see**:
   \`\`\`
   ▲ Next.js 16.x
   
   ✓ Ready in xxxx ms
   ► Local:    http://localhost:3000
   ► Networks: use `--host` to expose
   \`\`\`

3. **Open website**:
   - Click on `http://localhost:3000` (Ctrl+Click on Windows)
   - Or copy-paste into browser address bar
   - The Sir Solomon's website should load!

### Phase 5: Stop & Restart Server (Important to Know)

**To stop the server**:
- Press `Ctrl + C` in the terminal

**To restart**:
- Run: `npm run dev` again

## 🎨 Making Your First Changes

### Changing School Name

1. Open `lib/constants.ts` in any text editor
2. Find this line:
   \`\`\`typescript
   name: "Sir Solomon's",
   \`\`\`
3. Change to:
   \`\`\`typescript
   name: "Your School Name",
   \`\`\`
4. Save the file
5. Browser automatically refreshes (check browser window)

### Changing Colors

1. Open `app/globals.css`
2. Find this section:
   \`\`\`css
   --color-primary: #a6ff57;
   \`\`\`
3. Change `#a6ff57` to your color code:
   - Use [colorpicker.com](https://colorpicker.com) to get color codes
4. Save file
5. Browser updates automatically

### Uploading to Your PC (Permanent)

To keep this working on your PC permanently:

1. **Choose a permanent location** (not Downloads):
   \`\`\`
   C:\Users\YourName\Documents\School-Website (Windows)
   ~/Documents/School-Website (Mac/Linux)
   \`\`\`

2. **Move the extracted folder** to that location

3. **Run setup again** in that location:
   \`\`\`bash
   npm install
   npm run dev
   \`\`\`

## 🚀 Deployment (Putting Online)

### Option 1: Deploy to Vercel (Easiest)

1. **Create GitHub account** at [github.com](https://github.com)
2. **Upload project** to GitHub (you can learn this from GitHub docs)
3. **Go to** [vercel.com](https://vercel.com)
4. **Click** "New Project"
5. **Connect your GitHub** repository
6. **Click** "Deploy"
7. Your website is live! (Vercel provides a URL)

### Option 2: Use Netlify

1. **Build the project**:
   \`\`\`bash
   npm run build
   \`\`\`

2. **Go to** [netlify.com](https://netlify.com)
3. **Drag the `out/` folder** into Netlify
4. Your website is live!

## 🔧 Useful Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check code for errors
npm run lint

# Update all packages
npm update
\`\`\`

## ❓ Troubleshooting

### Error: "npm is not recognized"
- **Solution**: Node.js not properly installed. Reinstall from nodejs.org and restart computer.

### Error: "EACCES: permission denied"
- **Solution** (Mac/Linux): 
  \`\`\`bash
  sudo chown -R $USER:$USER .
  \`\`\`

### Website not loading at localhost:3000
- Check terminal for errors
- Try: `npm run dev` again
- Make sure port 3000 is not in use by another program

### Changes not showing in browser
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Restart server: Ctrl+C then `npm run dev`

### "Module not found" errors
- Run: `npm install` again
- Delete `node_modules` folder and `.next` folder
- Run: `npm install` and `npm run dev`

## 📚 Learning Resources

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **React Basics**: [react.dev](https://react.dev)
- **TypeScript**: [typescriptlang.org](https://typescriptlang.org)

## ✅ You're All Set!

Congratulations! Your Sir Solomon's School website is running on your PC.

**Next Steps**:
1. Customize content in `lib/constants.ts`
2. Update colors in `app/globals.css`
3. Replace placeholder images
4. Deploy to production when ready

**Need Help?**
- Check the main `README.md`
- Review code comments
- Check Next.js documentation
