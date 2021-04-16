class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const except = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const result = []
    const words = string.split(" ")
    
    words.map((word) => {
      if (except.includes(word)) {
        if (result.length === 0) {
          result.push(this.capitalize(word))
        } else {
          result.push(word)
        }
      } else {
        result.push(this.capitalize(word))
      }
    })
    return result.join(" ")
  }
}