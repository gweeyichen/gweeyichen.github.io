# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/6e78887d-f72f-4174-9327-60179a2e6eef

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6e78887d-f72f-4174-9327-60179a2e6eef) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Memory Folder

This project includes a `memory` folder that serves as a knowledge base for the project. It contains important documentation about the project architecture, key decisions, and requirements.

### Important Files

- **architect.md**: Technical architecture documentation
- **memory.md**: Record of key decisions and requirements
- **ai-assistant-rules.md**: Guidelines for AI assistants working on the project

### When to Read

The memory folder should be read:
- Before starting work on a new feature
- When making significant changes to existing components
- When onboarding new team members
- When planning future development

### When to Update

The memory documents should be updated:
- When new architectural decisions are made
- When significant changes are implemented
- When new requirements are established
- When important bugs are fixed

### Memory Reminder

The project includes a memory reminder script that runs automatically when starting the development server or building the project. You can also run it manually:

```sh
npm run memory-reminder
```

This script checks if the memory documents are up to date and reminds you to read them before working on the project.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6e78887d-f72f-4174-9327-60179a2e6eef) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
