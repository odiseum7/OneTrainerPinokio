module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "git clone https://github.com/Nerogar/OneTrainer app",
      ]
    }
  },  {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "install.bat"
      ]
    }
  }, {
    method: "fs.link",
    params: {
      venv: "app/env"
    }
  }, {
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
