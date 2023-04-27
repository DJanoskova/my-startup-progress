## Tech stack

- Library and environment

  - I chose `React` and `TypeScript` per requirements and also because it's my common stack. I chose `Vite` to get the project set up quickly, followed by `Vitest` for unit tests.

- State management

  - I thought it would be a funny and a non-tranditional way to showcase same of my passions and use my own state management library called `rgstate`, which usage very much resembles React's useState and useContext combined and also supports `localstorage` integration, so it helped me fill the requirements of the task.

  - Some of the state is also local - the random fact. I felt like that didn't need to be stored globally.

- Simple, custom CSS

  - Because of the time pressure of the assignment, I opted in for a very simple look with custom CSS classes

- JSON data

  - To resemble what data we could get from a Rest API or how the data would be stored in a database table, I created two JSON files - one with tasks and one with phases. Then I'm formatting the data and joining the phases and tasks together. I'm also using `fetch()` to retrieve the data to simulate a real Rest API data fetching behavior.

- Copilot

  - I am paying for a personal copilot, so I believe it helped me be faster in delivering this solution. I hope that doesn't count as hacking!

- VSCode editor settings
  - There's no prettier file, which is a potential future improvement, but there is a .vscode folter with settings to format the code nicely.

## App's behaviors

The task was pretty vague, so I decided to implement some of the behaviors such as locking a phase if any of the previous phases are left uncompleted and displaying a lock icon next to it. This behavior allowed me to implement the option to undo a task, which automatically disables all future phases and they don't count as completed unless all the phases before them are completed as well. This behavior is intentional.

Each time you complete all the tasks, undo a task and then complete it again, a new random fact is fetched. This behavior is intentional.

There's no visual feedback for the user in form of errors or toast messages, which for sure could be a future improvement - for example letting them know why they cannot check a task in a disabled phase.

## Timebox

As I am writing this file being pretty happy with my solution, I'd spent 100 minutes on this task. I'll use the remaining time to push the project to GitHub and set up a Netlify preview website.

Thank you!
