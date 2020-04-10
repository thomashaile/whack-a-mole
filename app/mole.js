class Mole {

  timeoutId = null
  isVisible = false
  isWhacked = false

  static hideDelay() {
    return Math.floor(Math.random() * 3000) + 500;
  }

  static showDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }

  handleClick(view) {
  }

  timeoutCallback(view) {
  }

  render() {
  }

}
